const fileName = 'RequestTransactionUsecase';

module.exports = ({ logger, transactionsRepository }) => ({
  request: async (id, body) => {
    const callName = `${fileName}.request()`;
    logger.info(`${callName} - entered with body: ${body}`);
    return transactionsRepository.requestTransaction(id, body);
  }
})