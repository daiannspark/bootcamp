import AppError from '../errors/AppError';
import makeQuery from '../service/MysqlConnection';

const getCommentFromDB = commentId => {
  const sql = 'select * from comments where id = ?';
  return makeQuery(sql, commentId);
};

const commentAction = async (req, res, next) => {
  try {
    const sql = 'select * from comments';
    const data = await makeQuery(sql);
    
    res.json(data);
  } catch (err) {
    next(new AppError(err.message, 400));
  }
};

const getCommentById = async (req, res, next) => {
  const { commentId } = req.params;

  try {
    const data = await getCommentFromDB(commentId);

    if (data.length === 0) {
      res.status(404).send('Page not found');
      return;
    }
    res.json(data);
  } catch (err) {
    next(new AppError(err.message, 400));
  }
};

const modifyComment = async (req, res, next) => {
  const { commentId } = req.params;

  if (commentId) {
    const data = await getCommentFromDB(commentId);

    if (data.length === 0) {
      res.status(404).send('Page not found');
      return;
    }
  }

  const { body } = req;

  const sql = `${!commentId ? 'insert into' : 'update'} comments set ? ${
      !commentId ? '' : ' where id = ?'
  }`;

  try {
    const data = await makeQuery(sql, [body, commentId]);
    res.status(201).send(data);
  } catch (error) {
    next(new AppError(error.message, 400));
  }
};

const deleteComment = async (req, res, next) => {
  const { commentId } = req.params;

  if (commentId) {
    const data = await getCommentFromDB(commentId);

    if (data.length === 0) {
      res.status(404).send('Comment not found');
      return;
    }
  }

  const sql = `delete from comments where id = ?`;
  try {
    const data = await makeQuery(sql, commentId);
    res.status(202).send(data);
  } catch (error) {
    next(new AppError(error.message, 400));
  }
};

export { commentAction, getCommentById, modifyComment, deleteComment };
