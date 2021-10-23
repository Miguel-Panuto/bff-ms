module.exports = ({ walletController, authMiddleware }) => [
  {
    method: 'get',
    path: '/wallet/',
    middlewares: [authMiddleware.findUserWithToken],
    handler: walletController.findUserWallet,
  },
];
