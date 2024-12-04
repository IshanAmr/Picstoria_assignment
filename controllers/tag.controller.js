const { addTagsToPhoto } = require('../service/tag.service');

const addTagsController = async (req, res) => {
  const { photoId } = req.params; 
  const { tags } = req.body; 

  try {
    const updatedPhoto = await addTagsToPhoto(photoId, tags);

    return res.status(200).json({
      message: 'Tags added successfully',
      photo: updatedPhoto,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { addTagsController };
