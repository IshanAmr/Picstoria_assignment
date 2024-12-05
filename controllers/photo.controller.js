const { searchImages } = require('../service/photo.service');

const searchPhotos = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({ message: 'Search term is required' });
    }

    const photos = await searchImages(query);

    if (photos.length === 0) {
      return res.status(404).json({ message: 'No images found for the given query' });
    }

    res.status(200).json({ photos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch images from Unsplash' });
  }
};

module.exports = { searchPhotos };
