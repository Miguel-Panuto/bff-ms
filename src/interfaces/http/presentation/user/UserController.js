const fileName = 'UserController';

module.exports = ({
  logger,
  createUserUsecase,
  findUserUsecase,
  loginUsecase,
  updateUserUsecase,
}) => ({
  createUser: async (req, res) => {
    const callName = `${fileName}.createUser()`;
    try {
      const { body } = req;
      logger.info(`${callName} entered with email: ${body.email}`);
      const user = await createUserUsecase.create(body);
      return res.status(201).json(user);
    } catch (err) {
      logger.error(`${callName} - ${err.message}`);
      return res.status(403).json({ error: 'a error has been ocoured' });
    }
  },

  findUser: async (req, res) => {
    const callName = `${fileName}.findUser()`;
    try {
      const { id, token } = req;
      logger.info(`${callName} - entered with id: ${id}`);
      const user = await findUserUsecase.find(id);
      return res.status(200).json({ user, token });
    } catch (err) {
      logger.error(`${callName} - ${err.message}`);
      return res.status(403).json({ error: 'a error has been ocoured' });
    }
  },

  login: async (req, res) => {
    const callName = `${fileName}.login()`;
    logger.info(`${callName} entered`);
    try {
      const user = await loginUsecase.login(req.body);
      const status = user ? 200 : 204;
      return res.status(status).json(user);
    } catch (err) {
      logger.error(`${callName} - ${err.message}`);
      return res.status(403).json({ error: 'a error has been ocoured' });
    }
  },

  updateUser: async (req, res) => {
    const callName = `${fileName}.updateUser()`;
    logger.info(`${callName} entered`);
    try {
      const user = await updateUserUsecase.update(req.id, req.body);
      const status = user ? 200 : 204;
      return res.status(status).json(user);
    } catch (err) {
      logger.error(`${callName} - ${err.message}`);
      return res.status(403).json({ error: 'a error has been ocoured' });
    }
  },
});
