import React from "react";
import { Link } from "react-router-dom";

export default function Team() {
  return (
    <>
      <div className="flex justify-center items-center px-28 py-20 text-3xl text-gray-800/90 font-[500]">
        People
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 text-[1rem] text-gray-500">
        {/* Left Column */}
        <div className="flex justify-center items-center flex-col gap-3.5">
          <img
            src="/assets/nithinKamath.jpg"
            className="rounded-full w-[70%]"
          />
          <div className="font-[500] text-gray-700 text-xl">Nithin Kamath</div>
          <div className="text-gray-600/90 text-[13px]">Founder, CEO</div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on
            <Link to="/home" className="text-blue-500 underline">
              Homepage
            </Link>
            / 
            <Link to="/home" className="text-blue-500 underline">
              TradingQnA
            </Link>
            /
            <Link to="/home" className="text-blue-500 underline">
              Twitter
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}
