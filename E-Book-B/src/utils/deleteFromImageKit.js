// src/utils/deleteFromImageKit.js
const imagekit = require('../config/imagekit');

const deleteFromImageKit = async (fileId) => {
  try {
    await imagekit.deleteFile(fileId);
  } catch (err) {
    throw new Error('ImageKit delete failed: ' + err.message);
  }
};

module.exports = deleteFromImageKit;
