import React from 'react';

function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 rounded-lg shadow-lg hover:shadow-xl mx-auto my-20 sm:p-4 md:p-8 max-w-xs md:max-w-sm transition-shadow duration-300 ease-in-out">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"
      />
      <h1 className="text-blue-800 text-lg sm:text-lg md:text-xl my-4 hover:text-blue-500 transition-colors duration-300 ease-in-out">
        John Doe
      </h1>
      <p className="text-gray-600 text-sm sm:text-sm md:text-base">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
