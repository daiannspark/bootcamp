import express from 'express';
import bodyParser from 'body-parser';
import './utils/dotenv';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import healthCheck from './routes/healthCheck';
import homeRoute from './routes/homeRoute';
import userCheck from './routes/userCheck';
import fileRoute from './routes/fileRoute';
import manufCheck from './routes/manufCheck';
import productCheck from './routes/productCheck';
import catCheck from './routes/catCheck';
import commentCheck from './routes/commentCheck';
import orderCheck from './routes/orderCheck';

import defaultErrorHandler from './middlewares/defaultErrorHandler';

const app = express();

app.use(cors());
app.use(
  fileUpload({
    limits: { filesize: 50 * 1024 * 1024 },
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/public', express.static(`${__dirname}/public`));
app.use(express.static(`${__dirname}/public`));
app.use('/files', fileRoute);

app.use(`/api/v${process.env.API_VERSION}`, healthCheck);
app.use('/', homeRoute);
app.use('/users', userCheck);
app.use('/manufacture', manufCheck);
app.use('/products', productCheck);
app.use('/category', catCheck);
app.use('/comments', commentCheck);
app.use('/orders', orderCheck);

app.use(defaultErrorHandler);

app.listen(process.env.APP_PORT, 'localhost', () => {
  console.log(
    'info',
    `App is running at http://localhost:${process.env.APP_PORT} in ${app.get('env')} mode.`,
  );
});

module.exports = app;
