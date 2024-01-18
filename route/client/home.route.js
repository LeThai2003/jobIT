const controller = require("../../controller/client/index.controller");
const express = require("express");
const router = express.Router();

router.get("/", controller.index);

module.exports = router;