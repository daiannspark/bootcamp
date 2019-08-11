const saveFile = async (req, res, next) => {
  const { images } = req.files;
  const { entity, entityId } = req.body;

  const now = new Date();

  const dateTime = `${now.getFullYear()}_${now.getMonth()}_${now.getDate()}_${now.getHours()}_${now.getMinutes()}_${now.getSeconds()}`;
  images.mv(`public/${entity}/${entityId}_${dateTime}_${images.name}`);
  res.sendStatus(201);
};

export { saveFile };