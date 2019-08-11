import AppError from '../errors/AppError';
import makeQuery from '../service/MysqlConnection';

const getManufFromDB = manufId => {
  const sql = 'select * from manufacture where id = ?';
  return makeQuery(sql, manufId);
};

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
    const data = await getManufFromDB(manufId);

    if (data.length === 0) {
      res.status(404).send('Page not found');
      return;
    }
    res.json(data);
  } catch (err) {
    next(new AppError(err.message, 400));
  }
};

const modifyManufacture = async (req, res, next) => {
  const { manufId } = req.params;

  if (manufId) {
    const data = await getManufFromDB(manufId);

    if (data.length === 0) {
      res.status(404).send('Page not found');
      return;
    }
  }

  const { body } = req;

  const sql = `${!manufId ? 'insert into' : 'update'} manufacture set ? ${
      !manufId ? '' : ' where id = ?'
  }`;

  try {
    const data = await makeQuery(sql, [body, manufId]);
    res.status(201).send(data);
  } catch (error) {
    next(new AppError(error.message, 400));
  }
};

const deleteManufacture = async (req, res, next) => {
  const { manufId } = req.params;

  if (manufId) {
    const data = await getManufFromDB(manufId);

    if (data.length === 0) {
      res.status(404).send('Manufacture not found');
      return;
    }
  }

  const sql = `delete from manufacture where id = ?`;
  try {
    const data = await makeQuery(sql, manufId);
    res.status(202).send(data);
  } catch (error) {
    next(new AppError(error.message, 400));
  }
};

export {manufAction, getManufById, modifyManufacture, deleteManufacture};
