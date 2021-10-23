const fileName = 'CreateUserUsecase';

module.exports = ({ logger, userRepository }) => ({
  create: async (body) => {
    const callName = `${fileName}.create()`;
    logger.info(`${callName} - entered with email: ${body.email}`);
    return userRepository.createUser(body);
  }
})