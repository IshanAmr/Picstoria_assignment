const { tag, photo, searchHistory } = require("../models");

const searchPhotosByTag = async (tagIns, sort) => {
  const tagRecord = await tag.findOne({ where: { name: tagIns } });
  console.log(tagRecord.photoId);
  if (!tagRecord) {
    return [];
  }

  const photos = await photo.findAll({
    where: { id: tagRecord.photoId },
    order: [['createdAt', sort]],
  });

  console.log(photos);
  return photos.map((photo) => ({
    imageUrl: photo.imageUrl,
    description: photo.description,
    dateSaved: photo.createdAt,
    tags: tagIns,
  }));
};

const logSearchHistory = async (userId, query) => {
  await searchHistory.create({ userId, query });
};

module.exports = { searchPhotosByTag, logSearchHistory };
