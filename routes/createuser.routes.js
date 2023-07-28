const routes = require("express").Router();
const controller=require("../controllers/createuser.controller")


routes.post("/",controller.createuser )
routes.get("/",controller.findAll )

module.exports = routes;