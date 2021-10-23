const fileName = 'AuthRepository';
module.exports = class AuthRepository {
  constructor({ logger, authClient }) {
    this.logger = logger;
    this.authClient = authClient;
  }

  findUserWithToken(token) {
    const callName = `${fileName}.findUserWithToken()`;
    this.logger.info(`${callName} - entered with token: ${token}`);
    return this.authClient.putCall('/api/v1/user', { token });
  }

  login(credentials) {
    const callName = `${fileName}.login()`;
    this.logger.info(
      `${callName} - entered with credentials: ${{
        ...credentials,
        password: '*****',
      }}`
    );
    return this.authClient.postCall('/api/v1/user', credentials);
  }
};
