const fileName = 'FindUserUsecase';

module.exports = ({ logger, authRepository }) => ({
  login: async (credentials) => {
    const callName = `${fileName}.login()`;
    logger.info(
      `${callName} - entered with id: ${{ ...credentials, password: '****' }}`
    );
    return authRepository.login(credentials);
  },
});
