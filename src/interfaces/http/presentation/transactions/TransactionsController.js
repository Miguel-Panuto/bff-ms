const fileName = 'TransactionsController';

module.exports = ({
  logger,
  resumeTransactionsUsecase,
  sendTransactionUsecase,
  requestTransactionUsecase,
  provalTransactionUsecase,
  setKeyUsecase,
}) => ({
  resumeTransactions: async (req, res) => {
    const callName = `${fileName}.resumeTransactions()`;
    try {
      const { id, token, query } = req;
      logger.info(`${callName} - entered with id: ${id}`);
      const transactions = await resumeTransactionsUsecase.resume(id, query);
      return res.status(200).json({ transactions, token });
    } catch (err) {
      logger.error(`${callName} - ${err.message}`);
    }
  },

  sendTransaction: async (req, res) => {
    const callName = `${fileName}.sendTransaction()`;
    try {
      const { id, token, body } = req;
      logger.info(`${callName} - entered with id: ${id}`);
      const transaction = await sendTransactionUsecase.send(id, body);
      return res.status(200).json({ transaction, token });
    } catch (err) {
      logger.error(`${callName} - ${err.message}`);
    }
  },

  requestTransaction: async (req, res) => {
    const callName = `${fileName}.requestTransaction()`;
    try {
      const { id, token, body } = req;
      logger.info(`${callName} - entered with id: ${id}`);
      const transaction = await requestTransactionUsecase.request(id, body);
      return res.status(200).json({ transaction, token });
    } catch (err) {
      logger.error(`${callName} - ${err.message}`);
    }
  },

  acceptRequest: async (req, res) => {
    const callName = `${fileName}.acceptRequest()`;
    try {
      const { id, token, body } = req;
      logger.info(`${callName} - entered with id: ${id}`);
      const transactions = await provalTransactionUsecase.proval(id, body);
      return res.status(200).json({ transactions, token });
    } catch (err) {
      logger.error(`${callName} - ${err.message}`);
    }
  },

  setKey: async (req, res) => {
    const callName = `${fileName}.setKey()`;
    try {
      const { id, token, body } = req;
      logger.info(`${callName} - entered with id: ${body}`);
      const key = await setKeyUsecase.set(id, body);
      return res.status(200).json({ key, token });
    } catch (err) {
      logger.error(`${callName} - ${err.message}`);
    }
  },
});
