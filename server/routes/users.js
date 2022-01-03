const express = require("express");
const { registerUsers, authUser } = require("../controllers/userControllers");
  

//const { createToken } = require("../middleware/auth");

const router = express.Router();

//router.route("/").get(createToken, allUsers);
router.route("/").post(registerUsers);
router.post("/login", authUser);
module.exports = router;
    