export async function fetchUsers(query) {
  const response = await fetch(`https://api.github.com/search/users?${query}`);
  const data = await response.json();
  return data.items;
}