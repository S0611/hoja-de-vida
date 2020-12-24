'use strict';

const express = require('express');
require('express-async-errors');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');

const { PORT } = require('./config');
const indexController = require('./controllers/index.controller');

const {NotFoundMiddleware, ErrorMiddleware} = require('./middlewares');
const app = express();
const apiRoutes = express.Router();

apiRoutes
.use(morgan('dev'))
.use(express.json())
.use(cors())
.use(helmet({
    contentSecurityPolicy: false,
  }))
.use(compression())
.use(express.static('public'))
.use('/icons', express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free/js/'))
.use('/scripts', express.static(__dirname + '/node_modules/particles.js/'));

apiRoutes.get('/', indexController.getHome);

app.use('/', apiRoutes);

apiRoutes.use(NotFoundMiddleware);
apiRoutes.use(ErrorMiddleware);
app.listen(PORT, () => {
    console.log('API corriendo en localhost:3000');
})