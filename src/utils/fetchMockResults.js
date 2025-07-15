
export async function fetchMockResults(keyword) {
  await new Promise((r) => setTimeout(r, 500)); // simulate delay

  return [
    {
      type: "article",
      title: `React 19 – What's New and Improved`,
      link: "https://medium.com",
      source: "medium.com",
    },
    {
      type: "video",
      title: `Understanding the New Features of ${keyword}`,
      link: "https://youtube.com",
      source: "YouTube",
    },
    {
      type: "repo",
      title: `${keyword}-tour`,
      link: "https://github.com",
      source: "GitHub",
    },
  ];
}
