import mysql from 'mysql';
import AppError from '../errors/AppError';

const logger = require('../utils/logger')('homeController');

const indexAction = async (req, res, next) => {
  logger.log('info', `indexAction: ${JSON.stringify(req.params)}`);

  res.send('WELCOME!');
};

export default indexAction;
