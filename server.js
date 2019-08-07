import express from 'express';
import bodyParser from 'body-parser';
import './utils/dotenv';
import healthCheck from './routes/healthCheck';
import homeRoute from './routes/homeRoute';
import manufCheck from './routes/manufCheck';
import cardCheck from './routes/cardCheck';
import catCheck from './routes/catCheck';
import commentCheck from './routes/commentCheck';
import defaultErrorHandler from './middlewares/defaultErrorHandler';

const logger = require('./utils/logger')(process.env.APP_NAME);

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(`/api/v${process.env.API_VERSION}`, healthCheck);
app.use('/', homeRoute);
app.use('/manufacture', manufCheck);
app.use('/product-card', cardCheck);
app.use('/category', catCheck);
app.use('/comments', commentCheck);

app.use(defaultErrorHandler);

app.listen(process.env.APP_PORT, 'localhost', () => {
  logger.log(
    'info',
    `App is running at http://localhost:${process.env.APP_PORT} in ${app.get('env')} mode.`,
  );
});

module.exports = app;
