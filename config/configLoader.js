const config = require('./config.json');

module.exports = {
  ...config,
  amqp: {
    uri: process.env.AMQP_URI || config.amqp.uri,
  },
  clients: {
    user: process.env.USER_CLIENT_URL || config.clients.user,
    wallet: process.env.WALLET_CLIENT_URL || config.clients.wallet,
    transactions:
      process.env.USER_TRANSACTIONS_URL || config.clients.transactions,
    auth: process.env.AUTH_CLIENT_URL || config.clients.auth,
  },
};
