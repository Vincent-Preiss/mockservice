const express = require('express');
const ObjectController = require('./../controllers/objectController');

module.exports.createRouter = config => {
    const objectControllerInstance = new ObjectController(config);
  const router = express.Router();

router
  .route('/')
  .get(objectControllerInstance.getAllObjects)
  .post(objectControllerInstance.createObject);

router
  .route('/:id')
  .get(objectControllerInstance.getObject)
  .patch(objectControllerInstance.updateObject)
  .delete(objectControllerInstance.deleteObject);
  return router;
};
