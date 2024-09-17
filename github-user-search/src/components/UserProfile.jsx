const UserProfile = ({ userData }) => {
    return (
      userData && (
        <div>
          <h2>{userData.login}</h2>
          <img src={userData.avatar_url} alt="avatar" width="100" />
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )
    );
  };
  
  export default UserProfile;
  