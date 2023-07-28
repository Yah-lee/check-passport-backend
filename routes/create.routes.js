const routes = require("express").Router();
const controller = require("../controllers/create.controller");

routes.post("/login", controller.login);
routes.post("/", controller.create);
routes.get("/", controller.findAll);

module.exports = routes;
