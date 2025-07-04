// server.js
const express = require('express');
const dotenv = require('dotenv');
const app = require('./src/app');

dotenv.config();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});