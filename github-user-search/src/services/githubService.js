import axios from 'axios';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data; // Return the data on success
  } catch (error) {
    throw new Error('User not found'); // Throw an error if the user is not found
  }
};
