const axios = require('axios');

const fileName = 'TransactionsClient';

module.exports = class TrnsactionsClient {
  constructor({
    logger,
    config: {
      clients: { transactions },
    },
  }) {
    this.logger = logger;
    this.client = axios.create({ baseURL: transactions });
  }

  async getCall(path) {
    const callName = `${fileName}.getCall()`;
    this.logger.info(`${callName} - ${path}`)
    const response = await this.client.get(path);
    return response.data;
  }
  
  async postCall(path, body) {
    const callName = `${fileName}.postCall()`;
    this.logger.info(`${callName} - ${path}`)
    const response = await this.client.post(path, body);
    return response.data;
  }
  
  async putCall(path, body) {
    const callName = `${fileName}.putCall()`;
    this.logger.info(`${callName} - ${path}`)
    const response = await this.client.put(path, body);
    return response.data;
  }
};
