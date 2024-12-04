const validateRequestBody = (body) => {
    if (!body.username || !body.email) {
      throw new Error('Both username and email are required.');
    }
  };
  
  const validateEmailFormat = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Invalid email format.');
    }
  };
  
  module.exports = { validateRequestBody, validateEmailFormat };
  