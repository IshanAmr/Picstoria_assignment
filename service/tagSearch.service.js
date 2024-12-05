const { tag, photo, searchHistory } = require("../models");

const searchPhotosByTag = async (tagIns, sort) => {
  const tagRecord = await tag.findOne({ where: { name: tagIns } });
  if (!tagRecord) {
    return [];
  }

  const photos = await photo.findAll({
    include: [{ model: tag, as: 'tags', attributes: ['name'] }],
    where: { id: tagRecord.photoId },
    order: [['createdAt', sort]],
  });

  return photos.map((photo) => ({
    imageUrl: photo.imageUrl,
    description: photo.description,
    dateSaved: photo.createdAt,
    tags: photo.tags.map((tagInstance) => tagInstance.name),
  }));
};

const logSearchHistory = async (userId, query) => {
  await searchHistory.create({ userId, query });
};

module.exports = { searchPhotosByTag, logSearchHistory };
