const express = require("express");

const taoController = require("../controllers/tao.controller");

const taoRouter = express.Router();

taoRouter.use((req, res, next) => {
  console.log("ip address:", req.ip);
  next();
});

taoRouter.get("/", taoController.getTao);
taoRouter.post("/:id", taoController.getOneTao);
taoRouter.post("/", taoController.postTao);

module.exports = taoRouter;
