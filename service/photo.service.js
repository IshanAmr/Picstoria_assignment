const axios = require('axios');
require('dotenv').config();

const searchImages = async (query) => {
  const UNSPLASH_ACCESS_KEY = process.env.ACCESS_KEY;
  const url = `https://api.unsplash.com/search/photos`;

  const response = await axios.get(url, {
    headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` },
    params: { query }
  });

  const photos = response.data.results.map((photo) => ({
    imageUrl: photo.urls.full,
    description: photo.description || 'No description',
    altDescription: photo.alt_description || 'No alt description'
  }));

  return photos;
};

module.exports = { searchImages };
