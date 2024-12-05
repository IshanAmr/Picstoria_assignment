const { addTagsToPhoto } = require('../service/tag.service');
const { searchPhotosByTag, logSearchHistory } = require('../service/tagSearch.service');

const addTags = async (req, res) => {
  try {
    const { tags } = req.body;
    const { photoId } = req.params;

    if (tags.some((tag) => !tag.trim())) {
      return res.status(400).json({ message: 'Tags must be non-empty strings' });
    }

    await addTagsToPhoto(photoId, tags);

    res.status(200).json({ message: 'Tags added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add tags' });
  }
};


const searchPhotosByTags = async (req, res) => {
  try {
    const { tags, sort = 'ASC', userId } = req.query;

    if (!tags) {
      return res.status(400).json({ message: 'A tag is required for searching' });
    }

    if (!['ASC', 'DESC'].includes(sort.toUpperCase())) {
      return res.status(400).json({ message: 'Invalid sort order. Use ASC or DESC' });
    }

    if (userId) {
      await logSearchHistory(userId, tags);
    }

    const photos = await searchPhotosByTag(tags, sort.toUpperCase());
    if (photos.length === 0) {
      return res.status(404).json({ message: 'No photos found for the given tag' });
    }

    res.status(200).json({ photos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { addTags, searchPhotosByTags };
