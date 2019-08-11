import AppError from '../errors/AppError';

import makeQuery from '../service/MysqlConnection';

const catAction = async (req, res, next) => {
  try {
    const sql = 'select * from category';
    const data = await makeQuery(sql);

    res.json(data);
  } catch (err) {
    next(new AppError(err.message, 400));
  }
};

const getCategoryById = async (req, res, next) => {
  const { categoryId } = req.params;

  try {
    const sql = 'select * from category where id = ?';
    const data = await makeQuery(sql, categoryId);

    res.json(data);
  } catch (err) {
    next(new AppError(err.message, 400));
  }
};

const addNewCategory = async (req, res, next) => {
  const { body } = req;
  const {
    title,
    description,
    category_id,
  } = body;

  const sql = `insert into category set ?`;

  try {
    const data = await makeQuery(sql, {
      title,
      description,
      category_id,
    });

    res.status(201).send(data);
  } catch (error) {
    next(new AppError(error.message, 400));
  }
};

export { catAction, getCategoryById, addNewCategory };
