import axios from 'axios';

// Create an axios instance for GitHub API with optional authentication using the API key
const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
  },
});

// Fetch GitHub user details by username
export const fetchUser = async (username) => {
  try {
    const response = await githubApi.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
