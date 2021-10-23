const { Router } = require('express');

module.exports = () => ({
  register: (routes) => {
    const router = Router();
    routes.forEach(({ method, path, middlewares, handler }) => {
      router[method](path, middlewares, handler);
    });

    return router;
  },
});
