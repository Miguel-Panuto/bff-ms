const fileName = 'SendTransactionUsecase';

module.exports = ({ logger, transactionsRepository }) => ({
  send: async (id, body) => {
    const callName = `${fileName}.send()`;
    logger.info(`${callName} - entered with body: ${body}`);
    return transactionsRepository.sendTransaction(id, body);
  }
})