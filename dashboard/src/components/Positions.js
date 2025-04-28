import React from "react";
import { positions } from "../data/data";

const Positions = () => {

  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
          {positions.map((positions, index) => {

            const currentValue = positions.qty * positions.price;
            const isProfit = currentValue- positions.avg * positions.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";  
            const dayClass = positions.isLoss ? "loss" : "profit";

            return (
              <tr key={index} >
                <td>{positions.product}</td>
                <td>{positions.name}</td>
                <td>{positions.qty.toFixed(2)}</td>
                <td>{positions.avg.toFixed(2)}</td>
                <td>{positions.price.toFixed(2)}</td>
                <td className={profClass}>{(currentValue - positions.avg * positions.qty).toFixed(2)}</td>
                <td className={dayClass}>{positions.day}</td>
              </tr>

            )

          })}
        </table>
      </div>
    </>
  );
};

export default Positions;
