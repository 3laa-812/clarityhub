export const fetchArticles = async (keyword) => {
  // Try Dev.to
  try {
    const devRes = await fetch("https://dev.to/api/articles?per_page=20");
    const devData = await devRes.json();

    const devFiltered = devData.filter((a) =>
      a.title.toLowerCase().includes(keyword.toLowerCase())
    );

    const devResults = devFiltered.slice(0, 3).map((a) => ({
      type: "article",
      title: a.title,
      source: "Dev.to",
      link: a.url,
    }));

    if (devResults.length >= 3) return devResults;

    // If not enough results from Dev.to, get more from Hacker News
    const hnRes = await fetch(
      `https://hn.algolia.com/api/v1/search?query=${encodeURIComponent(
        keyword
      )}`
    );
    const hnData = await hnRes.json();

    const hnResults = hnData.hits
      .filter((hit) => hit.title && hit.url)
      .slice(0, 3 - devResults.length)
      .map((hit) => ({
        type: "article",
        title: hit.title,
        source: "HN",
        link: hit.url,
      }));

    return [...devResults, ...hnResults];
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
};
