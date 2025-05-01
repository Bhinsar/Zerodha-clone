const Positions = require("../model/Positions");

// exports.AddPositions = async (req, res) => {
//     try{
//         const temp = [
//             {
//               product: "CNC",
//               name: "EVEREADY",
//               qty: 2,
//               avg: 316.27,
//               price: 312.35,
//               net: "+0.58%",
//               day: "-1.24%",
//               isLoss: true,
//             },
//             {
//               product: "CNC",
//               name: "JUBLFOOD",
//               qty: 1,
//               avg: 3124.75,
//               price: 3082.65,
//               net: "+10.04%",
//               day: "-1.35%",
//               isLoss: true,
//             },
//           ];

//           await Positions.insertMany(temp);
//           res.status(200).json({message: "Positions added successfully"});
//     }catch(error){
//         res.status(500).json({message: error.message});
//     }
// }


//get all positions
exports.getAllPositions = async (req, res) => {
  try {
    const positions = await Positions.find();
    if (!positions) {
      return res.status(404).json({ message: "No positions found" });
    }
    res.status(200).json(positions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

