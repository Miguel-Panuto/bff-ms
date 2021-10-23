const axios = require('axios');

const fileName = 'WalletClient';

module.exports = class WalletClient {
  constructor({
    logger,
    config: {
      clients: { wallet },
    },
  }) {
    this.logger = logger;
    this.client = axios.create({ baseURL: wallet });
  }

  async getCall(path) {
    const callName = `${fileName}.getCall()`;
    this.logger.info(`${callName} - ${path}`);
    const response = await this.client.get(path);
    return response.data;
  }
};
