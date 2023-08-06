const express = require("express");
const LandingController = require("../controllers/landing.controller");

const router = express.Router();

router.get("/hero", LandingController.getHeros);
router.post("/hero", LandingController.createHero);

module.exports = router;