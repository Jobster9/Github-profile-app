function SearchBar({ username, onUsernameChange, onSearch, loading }) {
  return (
    <form onSubmit={onSearch} className="mb-8">
      <div className="flex gap-3">
        <input
          className="flex-1 rounded-lg border bg-card px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          type="text"
          value={username}
          onChange={(e) => onUsernameChange(e.target.value)}
          placeholder="Enter Github username"
          disabled={loading}
        />
        <button
          className="rounded-lg px-8 py-3 border bg-card hover:bg-blue-200 hover:text-black"
          type="submit"
          disabled={loading || !username.trim()}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
