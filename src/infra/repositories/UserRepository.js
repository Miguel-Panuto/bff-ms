const fileName = 'UserRepository';

module.exports = class UserRepository {
  constructor({ logger, userClient }) {
    this.logger = logger;
    this.userClient = userClient;
  }

  createUser(user) {
    const callName = `${fileName}.createUser()`;
    this.logger.info(`${callName} entered with email: ${user.email}`);
    return this.userClient.postCall('/api/v1/user', user);
  }

  async findUser(id) {
    const callName = `${fileName}.findUser()`;
    this.logger.info(`${callName} entered with id: ${id}`);
    const user = await this.userClient.getCall(`/api/v1/user/${id}`);
    this.logger.info(`${callName} user returned: ${JSON.stringify(user)}`);
    return user;
  }

  async updateUser(id, body) {
    const callName = `${fileName}.updateUser()`;
    this.logger.info(`${callName} entered with id: ${id}`);
    const user = await this.userClient.putCall(`/api/v1/user/${id}`, body);
    this.logger.info(`${callName} user returned: ${JSON.stringify(user)}`);
    return user;
  }
};
