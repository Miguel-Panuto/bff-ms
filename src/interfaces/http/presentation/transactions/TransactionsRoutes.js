module.exports = ({ transactionsController, authMiddleware }) => [
  {
    method: 'get',
    path: '/transaction/',
    middlewares: [authMiddleware.findUserWithToken],
    handler: transactionsController.resumeTransactions,
  },
  {
    method: 'post',
    path: '/transaction-send/',
    middlewares: [authMiddleware.findUserWithToken],
    handler: transactionsController.sendTransaction,
  },
  {
    method: 'post',
    path: '/transaction-request/',
    middlewares: [authMiddleware.findUserWithToken],
    handler: transactionsController.requestTransaction,
  },
  {
    method: 'put',
    path: '/transaction-request/',
    middlewares: [authMiddleware.findUserWithToken],
    handler: transactionsController.acceptRequest,
  },
  {
    method: 'put',
    path: '/transaction-key/',
    middlewares: [authMiddleware.findUserWithToken],
    handler: transactionsController.setKey,
  },
];
