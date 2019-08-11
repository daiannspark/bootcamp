import AppError from '../errors/AppError';
import makeQuery from '../service/MysqlConnection';

const userAction = async (req, res, next) => {
  try {
    const sql = 'select * from user';
    const data = await makeQuery(sql);

    res.json(data);
  } catch (err) {
    next(new AppError(err.message, 400));
  }
};

const getUserById = async (req, res, next) => {
  const { userId } = req.params;

  try {
    const sql = 'select * from user where id = ?';
    const data = await makeQuery(sql, userId);

    res.json(data);
  } catch (err) {
    next(new AppError(err.message, 400));
  }
};

const addNewUser = async (req, res, next) => {
  const { body } = req;
  const {
    first_name,
    last_name,
    image,
    email,
    is_active,
    password,
  } = body;

  const sql = `insert into user set ?`;

  try {
    const data = await makeQuery(sql, {
      first_name,
      last_name,
      image,
      email,
      is_active,
      password,
    });

    res.status(201).send(data);
  } catch (error) {
    next(new AppError(error.message, 400));
  }
};

export { userAction, getUserById, addNewUser };
