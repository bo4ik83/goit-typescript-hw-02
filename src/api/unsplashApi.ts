export const searchImages = async (query, page = 1) => {
  const ACCESS_KEY = "XOkCJE9pP5BhzNOH8rQ4Q-m7V7K5h50bDQYafd_rTwk";
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=${ACCESS_KEY}`
  );

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  return await response.json();
};
