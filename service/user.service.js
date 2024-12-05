const { user, searchHistory } = require("../models");

const doesUserExist = async (email) => {
  const existingUser = await user.findOne({ where: { email } });
  return !!existingUser;
};

const createUser = async (username, email) => {
  return await user.create({ username, email });
};

const retrieveSearchHistory = async (userId) => {
    return await searchHistory.findAll({ where : { userId } });
}

module.exports = { doesUserExist, createUser, retrieveSearchHistory };
