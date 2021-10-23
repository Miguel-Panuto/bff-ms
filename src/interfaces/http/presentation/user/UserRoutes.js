module.exports = ({ userController, authMiddleware }) => [
  {
    method: 'post',
    path: '/user/',
    middlewares: [],
    handler: userController.createUser,
  },
  {
    method: 'post',
    path: '/login/',
    middlewares: [],
    handler: userController.login,
  },
  {
    method: 'get',
    path: '/user/',
    middlewares: [authMiddleware.findUserWithToken],
    handler: userController.findUser,
  },
  {
    method: 'put',
    path: '/user/',
    middlewares: [authMiddleware.findUserWithToken],
    handler: userController.updateUser,
  },
];
