import { fetchArticles } from "./fetchArticles";
import { fetchGitHub } from "./fetchGitHubResults";
import { fetchYouTube } from "./fetchYouTubeResults";

export const fetchResults = async (keyword) => {
  try {
    const [articles, videos, repos] = await Promise.all([
      fetchArticles(keyword),
      fetchYouTube(keyword),
      fetchGitHub(keyword),
    ]);

    return [...articles, ...videos, ...repos];
  } catch (error) {
    console.error("Search aggregation failed", error);
    return [];
  }
};
