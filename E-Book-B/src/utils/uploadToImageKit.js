// src/utils/uploadToImageKit.js
const fs = require('fs');
const imagekit = require('../config/imagekit');

const uploadToImageKit = async (filePath, fileName = 'upload') => {
  const fileBuffer = fs.readFileSync(filePath);

  try {
    const result = await imagekit.upload({
      file: fileBuffer,
      fileName,
      folder: 'website-media',
    });

    return {
      url: result.url,
      fileId: result.fileId,
    };
  } catch (err) {
    throw new Error('ImageKit upload failed: ' + err.message);
  }
};

module.exports = uploadToImageKit;
