const { photo, tag } = require('../models'); 
const { validateTags } = require('../validators/tag.validator'); 

const addTagsToPhoto = async (photoId, newTags) => {
  const associatedPhoto = await photo.findByPk(photoId);

  if (!associatedPhoto) {
    throw new Error('Photo not found');
  }

  const existingTagsCount = associatedPhoto.tags.length;

  validateTags(newTags, existingTagsCount);

  const tagsToAdd = newTags.map(tag => ({ name: tag, photoId: photoId }));
  
  await tag.bulkCreate(tagsToAdd);

  return photo;
};

module.exports = { addTagsToPhoto };
