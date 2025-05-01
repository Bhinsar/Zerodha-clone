const express = require("express");
const router = express.Router();
const { AddHoldings, getAllHoldings } = require("../controller/HoldingController");

// router.get("/add", AddHoldings)
router.get("/get-all-holdings", getAllHoldings);

module.exports = router;