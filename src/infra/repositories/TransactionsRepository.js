const fileName = 'TransactionsClient';

module.exports = class TrnsactionsRepository {
  constructor({ logger, transactionsClient }) {
    this.logger = logger;
    this.transactionsClient = transactionsClient;
  }

  resume(id, query) {
    let queryParams = '';
    if (query) {
      Object.keys(query).forEach((q, index) => {
        const signature = index <= 0 ? '?' : '&';
        queryParams += `${signature}${q}=${query[q]}`;
      });
    }
    const callName = `${fileName}.resumeTransactions()`;
    this.logger.info(`${callName} - ${id}`);
    return this.transactionsClient.getCall(
      `/api/v1/transaction/${id}${queryParams}`
    );
  }

  sendTransaction(id, body) {
    const callName = `${fileName}.resumeTransactions()`;
    this.logger.info(`${callName} - ${id}`);
    return this.transactionsClient.postCall(
      `/api/v1/transaction-send/${id}`,
      body
    );
  }

  requestTransaction(id, body) {
    const callName = `${fileName}.resumeTransactions()`;
    this.logger.info(`${callName} - ${id}`);
    return this.transactionsClient.postCall(
      `/api/v1/transaction-request/${id}`,
      body
    );
  }

  provalTransaction(id, body) {
    const callName = `${fileName}.provalTransaction()`;
    this.logger.info(`${callName} - ${id}`);
    return this.transactionsClient.putCall(
      `/api/v1/transaction-request/${id}`,
      body
    );
  }

  setKey(id, body) {
    const callName = `${fileName}.setKey()`;
    this.logger.info(`${callName} - ${id}`);
    return this.transactionsClient.putCall(`/api/v1/user/${id}`, body);
  }
};
