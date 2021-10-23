const fileName = 'ResumeTransactionUsecase';

module.exports = ({ logger, transactionsRepository }) => ({
  resume: async (id, query) => {
    const callName = `${fileName}.resume()`;
    logger.info(`${callName} - entered with email: ${id}`);
    return transactionsRepository.resume(id, query);
  }
})