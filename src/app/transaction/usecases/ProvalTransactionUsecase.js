const fileName = 'ProvalTransactionUsecase';

module.exports = ({ logger, transactionsRepository }) => ({
  proval: async (id, body) => {
    const callName = `${fileName}.proval()`;
    logger.info(`${callName} - entered with body: ${body}`);
    return transactionsRepository.provalTransaction(id, body);
  }
})