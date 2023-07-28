const routes = require("express").Router();
const controller=require("../controllers/machine.controller")

routes.post("/",controller.createmachine )
routes.get("/",controller.findAll )
routes.get("/by-date-between",controller.findByDateBetween )
routes.get("/by-detail",controller.findByDetail )
module.exports = routes;