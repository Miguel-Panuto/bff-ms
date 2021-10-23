const fileName = 'FindUserWalletUsecase'

module.exports = ({ logger, walletRepository }) => ({
  find: (id) => {
    const callName = `${fileName}.find()`;
    logger.info(`${callName} entered with id ${id}`);
    return walletRepository.find(id);
  } 
})