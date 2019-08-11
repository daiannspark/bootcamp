import AppError from '../errors/AppError';
import makeQuery from '../service/MysqlConnection';

const getOrderFromDB = orderId => {
  const sql = 'select * from orders where id = ?';
  return makeQuery(sql, orderId);
};

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
    const data = await getOrderFromDB(orderId);

    if (data.length === 0) {
      res.status(404).send('Page not found');
      return;
    }
    res.json(data);
  } catch (err) {
    next(new AppError(err.message, 400));
  }
};

const modifyOrder = async (req, res, next) => {
  const { orderId } = req.params;

  if (orderId) {
    const data = await getOrderFromDB(orderId);

    if (data.length === 0) {
      res.status(404).send('Page not found');
      return;
    }
  }

  const { body } = req;

  const sql = `${!orderId ? 'insert into' : 'update'} orders set ? ${
      !orderId ? '' : ' where id = ?'
  }`;

  try {
    const data = await makeQuery(sql, [body, orderId]);
    res.status(201).send(data);
  } catch (error) {
    next(new AppError(error.message, 400));
  }
};

const deleteOrder = async (req, res, next) => {
  const { orderId } = req.params;

  if (orderId) {
    const data = await getOrderFromDB(orderId);

    if (data.length === 0) {
      res.status(404).send('Order not found');
      return;
    }
  }

  const sql = `delete from orders where id = ?`;
  try {
    const data = await makeQuery(sql, orderId);
    res.status(202).send(data);
  } catch (error) {
    next(new AppError(error.message, 400));
  }
};

export { orderAction, getOrderById, modifyOrder, deleteOrder };
