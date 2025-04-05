import React from "react";
import { Link } from "react-router-dom";


export default function Eduction() {
  return (
    <div className="mx-auto pb-40">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <img src="assets/education.svg" alt="Largest Broker" />
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-semibold">
            Free and open market education
          </h2>
          <p className="text-gray-700">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <Link to="/home" className="text-blue-600">Varsity <i class="fa-solid fa-arrow-right"></i></Link>
          <p className="text-gray-700">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <Link to="/home" className="text-blue-600">TradingQ&A <i class="fa-solid fa-arrow-right"></i></Link>
        </div>
      </div>
    </div>
  );
}
