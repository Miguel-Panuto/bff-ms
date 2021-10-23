const fileName = 'WalletController';

module.exports = ({
  logger,
  findUserWalletUsecase,
}) => ({
  findUserWallet: async (req, res) => {
    const callName = `${fileName}.findUserWallet()`;
    try {
      const { id, token } = req;
      logger.info(`${callName} - entered with id: ${id}`);
      const wallet = await findUserWalletUsecase.find(id);
      return res.status(200).json({ wallet, token });
    } catch (err) {
      logger.error(`${callName} - ${err.message}`);
      return res.status(403).json({ error: 'a error has been ocoured' });
    }
  },
});
