const BASE_URL = "https://api.github.com";

//enum equivalent
const STATUS_CODES = Object.freeze({
  SUCCESS: 200,
  NOT_FOUND: 404,
});

export const fetchGithubUser = async (username) => {
  const response = await fetch(`${BASE_URL}/users/${username}`);

  if (!response.ok) {
    if (response.status === STATUS_CODES.NOT_FOUND) {
      throw new Error("404: User not found.");
    }
    throw new Error("Unknown: Failed to fetch user");
  }
  console.log(response);
  return response.json();
};

export const fetchGithubUserRepos = async (username) => {
  const response = await fetch(`${BASE_URL}/users/${username}/repos`);

  if (!response.ok) {
    if (response.status === STATUS_CODES.NOT_FOUND) {
      throw new Error("404: Repositories not found.");
    }
    throw new Error("Unknown: Failed to fetch repositories");
  }
  return response.json();
};
