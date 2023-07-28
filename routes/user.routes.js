const routes = require("express").Router();
const controller=require("../controllers/user.controller")


routes.post("/",controller.createuser )
routes.post("/login",controller.login )
routes.get("/",controller.findAll )

module.exports = routes;