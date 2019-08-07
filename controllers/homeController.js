import AppError from '../errors/AppError';
import mysql from "mysql";

const logger = require('../utils/logger')('homeController');

const indexAction = async (req, res, next) => {
  logger.log('info', `healthCheck: ${JSON.stringify(req.params)}`);
  try {
    const connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });

    connection.connect();

    connection.query('SELECT * from user', null, (error, results) => {
    if (error) {
      console.log(error);
    }
    if (results) {
      res.json(results);
    }
  });
  } catch (err) {
    next(new AppError(err.message, 400));
  }
};

export default indexAction;
