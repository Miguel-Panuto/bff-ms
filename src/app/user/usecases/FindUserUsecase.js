const fileName = 'FindUserUsecase';

module.exports = ({ logger, userRepository }) => ({
  find: async (id) => {
    const callName = `${fileName}.find()`;
    logger.info(`${callName} - entered with id: ${id}`);
    return userRepository.findUser(id);
  }
})