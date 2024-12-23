const { validateRequestBody, validateEmailFormat } = require('../validators/user.validator');
const { doesUserExist, createUser, retrieveSearchHistory } = require('../service/user.service');

const createNewUser = async (req, res) => {
  try {
    const { username, email } = req.body;

    validateRequestBody(req.body);
    validateEmailFormat(email);

    const userExists = await doesUserExist(email);
    if (userExists) {
      return res.status(400).json({ message : 'Email already exists.' });
    }

    const newUser = await createUser(username, email);
    res.status(201).json({
      message: 'User created successfully',
      user: newUser,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getSearchHistory = async (req, res) => {
   try {
    const { userId } = req.query;
    if(!userId) return res.status(400).json({ message : "Invalid user id" });

    const searchHistory = await retrieveSearchHistory(userId);
    res.status(201).json(searchHistory);
   } catch (error) {
    res.status(500).json({ error: error.message });
   }
}

module.exports = { createNewUser, getSearchHistory };
