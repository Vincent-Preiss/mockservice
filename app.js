const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const config = require('./config/config');

const objectRouter = require('./routes/objectRoutes');

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

// 3) ROUTES

console.log(config);
for (const { objectName, databaseSettings } of config['config']) {
  const objectRouterInstance = objectRouter.createRouter({
    objectName,
    databaseSettings
  });
  app.use(`/api/v1/${objectName}`, objectRouterInstance);
}

module.exports = app;
