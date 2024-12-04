const { savePhoto } = require('../service/photo.service'); 

const savePhotoController = async (req, res) => {
  const { imageUrl, description, altDescription, tags, userId } = req.body;

  try {
    const newPhoto = await savePhoto({ imageUrl, description, altDescription, tags, userId });

    return res.status(201).json({
      message: 'Photo saved successfully',
      photo: newPhoto,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { savePhotoController };
