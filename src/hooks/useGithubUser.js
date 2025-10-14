import { useState } from "react";
import { fetchGithubUser, fetchGithubUserRepos } from "../services/githubApi";

export const useGithubUser = () => {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchUser = async (username) => {
    if (!username.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const user = await fetchGithubUser(username);
      setUserData(user);

      const userRepos = await fetchGithubUserRepos(username);
      setRepos(userRepos);
    } catch (err) {
      setError(err.message);
      setUserData(null);
      setRepos([]);
    } finally {
      setLoading(false);
    }
  };
  return { userData, repos, loading, error, searchUser };
};
