const { photo } = require('../models');

const savePhoto = async (data) => {
  console.log(data);
  return await photo.create(data);
};

module.exports = { savePhoto };
