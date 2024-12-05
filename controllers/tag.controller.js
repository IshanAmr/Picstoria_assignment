const { addTagsToPhoto } = require('../services/tagService');

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

module.exports = { addTags };
