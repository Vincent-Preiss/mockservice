const mongoose = require('mongoose');

exports.createObjectModel = ({ objectName, databaseSettings }) => {
  const objectSchema = new mongoose.Schema(databaseSettings);
  return mongoose.model(objectName, objectSchema);
};
