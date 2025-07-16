export const fetchGitHub = async (keyword) => {
  const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(
    keyword
  )}&sort=stars&order=desc&per_page=2`;

  const res = await fetch(url);
  const data = await res.json();

  return data.items.map((repo) => ({
    type: "repo",
    title: repo.full_name,
    source: "GitHub",
    link: repo.html_url,
  }));
};
