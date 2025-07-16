export const fetchYouTube = async (keyword) => {
  const apiKey = "AIzaSyAVOdlu-n36UTIBuPU30njo406sXDk_LPI";
  const maxResults = 3;

  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
    keyword
  )}&type=video&maxResults=${maxResults}&key=${apiKey}`;

  const res = await fetch(url);
  const data = await res.json();

  return data.items.map((item) => ({
    type: "video",
    title: item.snippet.title,
    source: "YouTube",
    link: `https://www.youtube.com/watch?v=${item.id.videoId}`,
  }));
};
