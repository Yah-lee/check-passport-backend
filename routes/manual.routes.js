const routes = require("express").Router();
const controller=require("../controllers/manual.controller")

routes.post("/",controller.createmanual)
routes.get("/",controller.findAll)

module.exports = routes;