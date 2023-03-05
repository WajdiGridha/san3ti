const { authJwt } = require("../middleware");
const controller = require("../controllers/service.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get(
    "/api/service",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.getService
  );
  app.get(
    "/api/service/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.getServiceById
  );
  app.post(
    "/api/service/",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.addService
  );
  app.put(
    "/api/service/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.putService
  );

  app.delete(
    "/api/service/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.deleteService
  );
};
