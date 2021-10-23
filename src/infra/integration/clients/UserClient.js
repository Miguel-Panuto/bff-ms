const axios = require('axios');

const fileName = 'UserClient';

module.exports = class UserClient {
  constructor({
    logger,
    config: {
      clients: { user },
    },
  }) {
    this.logger = logger;
    this.client = axios.create({ baseURL: user });
  }

 async getCall(path) {
    const callName = `${fileName}.getCall()`;
    this.logger.info(`${callName} - entered with ${path}`);
    const response = await this.client.get(path);
    return response.data;
  }

  async postCall(path, body) {
    const callName = `${fileName}.postCall()`;
    this.logger.info(`${callName} - entered with email ${body.email}`);
    const response = await this.client.post(path, body);
    return response.data;
  }
  
  async putCall(path, body) {
    const callName = `${fileName}.putCall()`;
    this.logger.info(`${callName} - entered with email ${body.email}`);
    const response = await this.client.put(path, body);
    return response.data;
  }
  
  async deleteCall(path) {
    const callName = `${fileName}.putCall()`;
    this.logger.info(`${callName} - entered with path: ${path}`);
    const response = await this.client.delete(path);
    return response.data;
  }
};
