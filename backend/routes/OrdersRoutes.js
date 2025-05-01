const express = require("express");
const router = express.Router();
const { addOrder } = require("../controller/OrdersController");

router.post("/add-order", addOrder);

module.exports = router;
