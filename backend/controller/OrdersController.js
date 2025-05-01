const Orders = require("../model/Orders");

//add order
exports.addOrder = async (req, res) => {
    try {
        const order  = req.body;
        const newOrder = new Orders(order);
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


