const express = require("express");
const router = express.Router();
const HoldingController = require("../controller/HoldingController");

router.post("/add", HoldingController.AddHoldings);

module.exports = router;