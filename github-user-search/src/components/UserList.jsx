import React from 'react';

function UserList({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <img src={user.avatar_url} alt={user.login} />
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            {user.login}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default UserList;