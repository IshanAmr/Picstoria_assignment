const { photo } = require('../models');
const { validatePhotoData } = require('../validators/photo.validator'); 

const savePhoto = async (photoData) => {
  try {
    validatePhotoData(photoData);
  } catch (error) {
    throw new Error(error.message); 
  }

  const newPhoto = await photo.create({
    imageUrl: photoData.imageUrl,
    description: photoData.description,
    altDescription: photoData.altDescription,
    tags: photoData.tags,
    userId: photoData.userId,
  });

  return newPhoto;
};

module.exports = { savePhoto };
