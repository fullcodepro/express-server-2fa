const express = require("express");
const authController = require("../controllers/auth.controller");

const router = express.Router();

router.post("/register", authController.RegisterUser);
router.post("/login", authController.LoginUser);
router.post("/otp/generate", authController.GenerateOTP);
router.post("/otp/verify", authController.VerifyOTP);
router.post("/otp/validate", authController.ValidateOTP);
router.post("/otp/disable", authController.DisableOTP);

module.exports = router;
