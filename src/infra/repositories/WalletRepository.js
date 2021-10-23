const fileName = 'WalletRepository';

module.exports = class WalletClient {
  constructor({ logger, walletClient }) {
    this.logger = logger;
    this.walletClient = walletClient;
  }

  find(id) {
    const callName = `${fileName}.find()`;
    this.logger.info(`${callName} - entered with id: ${id}`);
    return this.walletClient.getCall(`/api/v1/wallet/${id}`);
  }
};
