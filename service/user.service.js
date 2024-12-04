const { user } = require("../models");

const doesUserExist = async (email) => {
  const existingUser = await user.findOne({ where: { email } });
  return !!existingUser;
};

const createUser = async (username, email) => {
  return await user.create({ username, email });
};

module.exports = { doesUserExist, createUser };
