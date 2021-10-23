const fileName = 'FindUserUsecase';

module.exports = ({ logger, userRepository }) => ({
  update: async (id, body) => {
    const callName = `${fileName}.login()`;
    logger.info(`${callName} - entered with id: ${id}`);
    return userRepository.updateUser(id, body);
  },
});
