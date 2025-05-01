import React, { useState, useEffect } from "react";
  import axios from "axios";

  const Holdings = () => {
    const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    const fetchHoldings = async () => {
      const response = await axios.get("http://localhost:8080/get-all-holdings");
      setHoldings(response.data);
    }
    fetchHoldings();
  }, []);

  return (
    <>
      <h3 className="title">Holdings ({holdings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
          {holdings.map((holding, index) => {

            const currentValue = holding.qty * holding.price;
            const isProfit = currentValue- holding.avg * holding.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";  
            const dayClass = holding.isLoss ? "loss" : "profit";

            return (
              <tr key={index} >
                <td>{holding.name}</td>
                <td>{holding.qty.toFixed(2)}</td>
                <td>{holding.avg.toFixed(2)}</td>
                <td>{holding.price.toFixed(2)}</td>
                <td>{currentValue.toFixed(2)}</td>
                <td className={profClass}>{(currentValue - holding.avg * holding.qty).toFixed(2)}</td>
                <td className={profClass}>{holding.net}</td>
                <td className={dayClass}>{holding.day}</td>
              </tr>

            )

          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
    </>
  );
};

export default Holdings;
