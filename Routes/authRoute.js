const express = require("express");
const router = express.Router();
const controller = require("../Controller/usercontroller");

router.post("/signup", controller.signup);
router.post("/login", controller.login);
router.put("/update", controller.update);
router.get("/get", controller.getUser);

module.exports = router;
