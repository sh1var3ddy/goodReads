const mongoose = require('mongoose');

const { DB_URL } = require('./server-config');

const connect = async () => {
  if (!DB_URL) {
    throw new Error('DB_URL is not defined. Check your .env and server-config.js');
  }

  await mongoose.connect(DB_URL);
};

module.exports = {
  connect,
};