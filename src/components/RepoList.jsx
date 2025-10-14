function RepoList({ repos }) {
  if (!repos.length) {
    return <p className="text-gray-400 py-8">No repositories found.</p>;
  }
  return (
    <div>
      <h3 className="text-2xl font-bold text-white mb-6">Repositories</h3>
      <div className="grid grid-cols-1">
        {repos.map((repo) => (
          <div className="bg-card border  border-gray-700 rounded-xl p-4 mb-4 hover:border-accent">
            <p key={repo.id}>
              <a
                className="font-bold text-white hover:text-accent"
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {repo.name}
              </a>
              : {repo.description || "No description"}
            </p>
            <div className="flex gap-4 text-sm text-gray-500">
              <p className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-accent"></span>
                {repo.language}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RepoList;
