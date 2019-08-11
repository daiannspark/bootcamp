import AppError from '../errors/AppError';

import makeQuery from '../service/MysqlConnection';

const manufAction = async (req, res, next) => {
  try {
    const sql = 'select * from manufacture';
    const data = await makeQuery(sql);

    res.json(data);
  } catch (err) {
    next(new AppError(err.message, 400));
  }
};

const getManufById = async (req, res, next) => {
  const { manufId } = req.params;

  try {
    const sql = 'select * from manufacture where id = ?';
    const data = await makeQuery(sql, manufId);

    res.json(data);
  } catch (err) {
    next(new AppError(err.message, 400));
  }
};

const addNewManufacture = async (req, res, next) => {
  const { body } = req;
  const {
    title,
    description,
    picture,
  } = body;

  const sql = `insert into manufacture set ?`;

  try {
    const data = await makeQuery(sql, {
      title,
      description,
      picture,
    });

    res.status(201).send(data);
  } catch (error) {
    next(new AppError(error.message, 400));
  }
};

export {manufAction, getManufById, addNewManufacture};
