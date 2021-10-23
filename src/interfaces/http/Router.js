const { Router, json } = require('express');
const cors = require('cors');

module.exports = ({
  transactionsRoutes,
  routerRegister,
  userRoutes,
  walletRoutes,
}) => {
  const router = Router();
  router
    .use(cors())
    .use(json())
    .use('/api/v1', routerRegister.register(userRoutes))
    .use('/api/v1', routerRegister.register(walletRoutes))
    .use('/api/v1', routerRegister.register(transactionsRoutes));
  return router;
};
