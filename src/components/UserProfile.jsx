import { FaBuilding, FaMapMarkerAlt, FaLink, FaTwitter } from "react-icons/fa";

function UserProfile({ user }) {
  return (
    <div className="bg-card border border-gray-700 rounded-xl p-6">
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        <img
          src={user.avatar_url}
          alt={`${user.login}'s avatar`}
          className="w-32 h-32 rounded-full border-2 border-accent shadow-lg"
        />
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl text-white font-bold">{user.name || user.login}</h2>
          <p className="text-white text-lg mb-1">{user.login}</p>
          <div className="space-y-2 mb-6 text-gray-300 text-sm">
            {user.company && (
              <p className="flex items-center gap-2 justify-center md:justify-start">
                <FaBuilding className="text-accent flex-shrink-0" />
                <span>{user.company}</span>
              </p>
            )}

            {user.location && (
              <p className="flex items-center gap-2 justify-center md:justify-start">
                <FaMapMarkerAlt className="text-accent flex-shrink-0" />
                <span>{user.location}</span>
              </p>
            )}

            {user.twitter_username && (
              <p className="flex items-center gap-2  md:justify-start">
                <FaTwitter className="text-accent flex-shrink-0" />
                <a
                  href={`https://x.com/${user.twitter_username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  {user.twitter_username}
                </a>
              </p>
            )}
            {user.blog && (
              <p className="flex items-center gap-2 justify-center md:justify-start">
                <FaLink className="text-accent flex-shrink-0" />
                <a
                  href={user.blog.startsWith("http") ? user.blog : `https://${user.blog}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  {user.blog}
                </a>
              </p>
            )}
          </div>
          <div className="text-gray-300 mt-4">
            <p>{user.bio || "No bio available."}</p>
            <p>
              Followers: {user.followers} | Following: {user.following}
            </p>
            <p>Public Repos: {user.public_repos}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
