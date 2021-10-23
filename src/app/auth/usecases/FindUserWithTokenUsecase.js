const fileName = 'FindUserWithTokenUsecase';

module.exports = ({ logger, authRepository }) => ({
  find: async (token) => {
    const callName = `${fileName}.find()`;
    logger.info(`${callName} - enter with token ${token}`);
    const [, tokenFromAuth] = token.split(' ');
    return authRepository.findUserWithToken(tokenFromAuth);
  },
});
