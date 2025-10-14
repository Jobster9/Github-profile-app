import { useState } from "react";
import { useGithubUser } from "../hooks/useGithubUser.js";
import SearchBar from "./SearchBar.jsx";
import UserProfile from "./UserProfile.jsx";
import RepoList from "./RepoList.jsx";

function Dashboard() {
  const [username, setUsername] = useState("");
  const { userData, repos, loading, error, searchUser } = useGithubUser();

  const handleSearch = (e) => {
    e.preventDefault();
    searchUser(username);
  };
  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-8">GitHub User Profile</h1>
        <SearchBar username={username} onUsernameChange={setUsername} onSearch={handleSearch} loading={loading} />
        {error && <p className="text-center text-red-400">{error}</p>}

        <div className="space-y-8">
          {userData && <UserProfile user={userData} />}
          {repos.length > 0 && <RepoList repos={repos} />}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
