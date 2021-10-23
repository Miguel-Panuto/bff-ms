const fileName = 'SetKeyUsecase';

module.exports = ({ logger, transactionsRepository }) => ({
  set: async (id, body) => {
    const callName = `${fileName}.set()`;
    logger.info(`${callName} - entered with body: ${body}`);
    return transactionsRepository.setKey(id, body);
  }
})