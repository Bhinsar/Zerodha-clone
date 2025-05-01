const express = require("express");
const router = express.Router();
const { getAllPositions, AddPositions } = require("../controller/PositionsController");

// router.get("/add", AddPositions);
router.get("/get-all-positions", getAllPositions);

module.exports = router;
