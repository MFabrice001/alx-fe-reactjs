
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`, // Include your GitHub token if available
  },
});

export const fetchUserData = async ({ searchTerm, location, minRepos, page = 1 }) => {
  try {
    let query = '';

    if (searchTerm) {
      query += `${searchTerm} in:login `;
    }
    if (location) {
      query += `location:${location} `;
    }
    if (minRepos) {
      query += `repos:>=${minRepos} `;
    }

    const response = await axiosInstance.get(
      `/search/users?q=${encodeURIComponent(query)}&page=${page}&per_page=30`
    );

    return response.data; // Contains items array with user data
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

export const fetchUserDetails = async (username) => {
  try {
    const response = await axiosInstance.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
};
