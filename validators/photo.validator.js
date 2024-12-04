const validateImageUrl = (imageUrl) => {
    if (!imageUrl.startsWith('https://images.unsplash.com/')) {
      throw new Error('Invalid image URL');
    }
  };
  
  const validateTags = (tags) => {
    if (tags.length > 5) {
      throw new Error('No more than 5 tags are allowed');
    }
    if (tags.some(tag => tag.length > 20)) {
      throw new Error('Each tag must not exceed 20 characters');
    }
  };
  
  const validatePhotoData = (data) => {
    validateImageUrl(data.imageUrl);
    validateTags(data.tags);
  };
  
  module.exports = { validatePhotoData };
  