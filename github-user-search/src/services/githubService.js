// src/services/githubService.js

const GITHUB_API_BASE_URL = 'https://api.github.com';

export const fetchUserData = async (username, location = '', minRepos = '') => {
  try {
    // Constructing the query string with username, location, and minimum repositories
    let query = `q=${username}`;

    if (location) {
      query += `+location:${location}`;
    }

    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    const response = await fetch(`${GITHUB_API_BASE_URL}/search/users?${query}`);

    if (!response.ok) {
      throw new Error('Failed to fetch data from GitHub API');
    }

    const data = await response.json();
    return data.items; // GitHub Search API returns results in 'items'
  } catch (error) {
    throw new Error(`An error occurred: ${error.message}`);
  }
};
