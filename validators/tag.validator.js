const validateTags = (tags, existingTagsCount) => {
    if (tags.length + existingTagsCount > 5) {
      throw new Error('No more than 5 tags are allowed for a photo');
    }
  
    if (tags.some(tag => typeof tag !== 'string' || tag.trim() === '')) {
      throw new Error('Tags must be non-empty strings');
    }
  };
  
  module.exports = { validateTags };
  