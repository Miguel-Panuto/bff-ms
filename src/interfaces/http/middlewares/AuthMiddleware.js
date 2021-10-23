const fileName = 'AuthMiddleware';

module.exports = ({ logger, findUserWithTokenUsecase }) => ({
  findUserWithToken: async (req, res, next) => {
    const callName = `${fileName}.fundUserWithToken()`;
    const authToken = req.headers.authorization;
    logger.info(`${callName} - Entered with token: ${authToken}`);
    try {
      const user = await findUserWithTokenUsecase.find(authToken);
      logger.info(`${callName} - Returned with: ${JSON.stringify(user)}`);
      req.id = user.id;
      req.token = user.token;
      next();
    } catch (err) {
      logger.error(`${callName} error ocoured: ${err.message}`);
      return res.status(403).json({ error: err.message });
    }
  },
});
