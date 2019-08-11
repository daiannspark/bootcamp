import AppError from '../errors/AppError';

import makeQuery from '../service/MysqlConnection';

const orderAction = async (req, res, next) => {
  try {
    const sql = 'select * from orders';
    const data = await makeQuery(sql);

    res.json(data);
  } catch (err) {
    next(new AppError(err.message, 400));
  }
};

const getOrderById = async (req, res, next) => {
  const { orderId } = req.params;

  try {
    const sql = 'select * from orders where id = ?';
    const data = await makeQuery(sql, orderId);

    res.json(data);
  } catch (err) {
    next(new AppError(err.message, 400));
  }
};

const addNewOrder = async (req, res, next) => {
  const { body } = req;
  const {
    sum,
    user_id,
  } = body;

  const sql = `insert into orders set ?`;

  try {
    const data = await makeQuery(sql, {
      sum,
      user_id,
    });

    res.status(201).send(data);
  } catch (error) {
    next(new AppError(error.message, 400));
  }
};

export { orderAction, getOrderById, addNewOrder };
