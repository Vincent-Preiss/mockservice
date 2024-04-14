const mongoose = require('mongoose');
const DataBaseSettingParser = require('../DataBaseSettingParser/DataBaseSettingParser')

exports.createObjectModel = ({ objectName, databaseSettings }) => {
    const parsedSettings = DataBaseSettingParser.parse(databaseSettings);
  const objectSchema = new mongoose.Schema(parsedSettings);
  return mongoose.model(objectName, objectSchema);
};
