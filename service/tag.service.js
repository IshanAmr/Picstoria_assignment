const { tag, photo } = require("../models");

const addTagsToPhoto = async (photoId, tags) => {
  const photoInstance = await photo.findByPk(photoId);

  if (!photoInstance) {
    throw new Error('Photo not found');
  }

  const existingTags = await tag.findAll({ where: { photoId } });

  if (existingTags.length + tags.length > 5) {
    throw new Error('Each photo can have a maximum of 5 tags');
  }

  await Promise.all(tags.map((tag) => tag.create({ name: tag, photoId })));
};

module.exports = { addTagsToPhoto };
