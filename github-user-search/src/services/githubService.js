// src/services/githubService.js

const GITHUB_API_BASE_URL = 'https://api.github.com';

/**
 * Fetch user data based on search parameters
 * @param {string} username - The GitHub username to search for.
 * @param {string} location - The location to filter users by (optional).
 * @param {string} minRepos - The minimum number of repositories to filter users by (optional).
 * @returns {Promise<Array>} - A list of users matching the search criteria.
 */
export const fetchUserData = async (username, location = '', minRepos = '') => {
  try {
    // Construct the query string with additional parameters
    let query = `q=${username}`;
    
    // Add location filter if provided
    if (location) {
      query += `+location:${location}`;
    }
    
    // Add minimum repositories filter if provided
    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }
    
    // Make API request to GitHub search users endpoint
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
