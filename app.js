const express = require('express');
const morgan = require('morgan');
const fs = require('fs');

const objectRouter = require('./routes/objectRoutes');

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

// 3) ROUTES
const config = JSON.parse(fs.readFileSync(`./Routes/routes.json`));

for (const { objectName, databaseSettings } of config) {
  const objectRouterInstance = objectRouter.createRouter(
    { objectName, databaseSettings }
  );
  app.use(`/api/v1/${objectName}`, objectRouterInstance);
}


module.exports = app;
