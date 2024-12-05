const { savePhoto } = require('../service/collection.service');

const savePhotoToCollection = async (req, res) => {
  try {
    const { imageUrl, description, altDescription, tags, userId } = req.body;

    if (!imageUrl.startsWith('https://images.unsplash.com/')) {
      return res.status(400).json({ message: 'Invalid image URL' });
    }

    if (tags.length > 5 || tags.some((tag) => tag.length > 20)) {
      return res.status(400).json({ message: 'Tags must be up to 5 and each tag must be less than 20 characters' });
    }

    await savePhoto({ imageUrl, description, altDescription, tags, userId });

    res.status(201).json({ message: 'Photo saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to save photo' });
  }
};

module.exports = { savePhotoToCollection };
