const { Schema } = require("mongoose");

const orderSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
});

module.exports = mongoose.model("Orders", orderSchema);