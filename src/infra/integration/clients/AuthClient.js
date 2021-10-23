const axios = require('axios');
const { response } = require('express');

module.exports = class AuthClient {
  constructor({
    logger,
    config: {
      clients: { auth },
    },
  }) {
    this.logger = logger;
    this.client = axios.create({ baseURL: auth });
  }

  async postCall(path, body) {
    const response = await this.client.post(path, body);
    return response.data;
  }

  async putCall(path, body) {
    const response = await this.client.put(path, body);
    return response.data;
  }
};
