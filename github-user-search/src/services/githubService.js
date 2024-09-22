import axios from 'axios';

export async function fetchUserData(username) {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching user data: ' + error.message);
  }
}

export async function fetchUsers(query) {
  try {
    const response = await axios.get(`https://api.github.com/search/users?${query}`);
    return response.data.items;
  } catch (error) {
    throw new Error('Error fetching users: ' + error.message);
  }
}