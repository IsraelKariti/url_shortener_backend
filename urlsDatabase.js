const mongoose = require('mongoose');

require('dotenv').config();

// create connection to db
const uri = process.env.MONGO_URI; 

const connection = new Promise((resolve, reject) => {
  mongoose.connect(uri);
  const db = mongoose.connection;
  db.on('error', (error) => {
    console.log('HOLY GUAKAMOLY');
    console.error(error);
    reject(error);
  });
  db.once('open', () => {
    console.log('Connected to database');
    resolve(db);
  });
});

module.exports = connection;
