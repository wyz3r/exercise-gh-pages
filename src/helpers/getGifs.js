export const getGifs = async (input) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=2RbPOWPpjCEuHHX6nu3vMH57e0emJDUF&q=${input}&limit=10`;

    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((gif) => ({
      id: gif.id,
      title: gif.title,
      url: gif.images.downsized_medium.url
    }));
    return gifs
  };