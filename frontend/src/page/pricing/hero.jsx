import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="m-auto pb-40 ">
      <div className="flex flex-col justify-center items-center mt-12">
        <div className="flex flex-col justify-center items-center gap-2 text-center">
          <div className="text-[2.75rem] mt-11 text-gray-700 font-[500]">
            Charges
          </div>
          <p className="text-[1.25rem] text-gray-600 ">
            List of all charges and taxes
          </p>
        </div>
      </div>
      <div className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 items-start content-stretch">
          <div className="flex flex-col items-center w-full h-full">
            <img src="/assets/pricing-eq.svg" className="w-[250px]" />
            <div className="text-[1.75rem] mt-11 text-gray-700 font-[500] text-center">
              Free equity delivery
            </div>
            <p className="text-gray-600 text-center">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="flex flex-col items-center w-full h-full">
            <img src="/assets/other-trades.svg" className="w-[250px]" />
            <div className="text-[1.75rem] mt-11 text-gray-700 font-[500] text-center">
              Intraday and F&O trades
            </div>
            <p className="text-gray-600 text-center">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="flex flex-col items-center w-full h-full">
            <img src="/assets/pricing-eq.svg" className="w-[250px]" />
            <div className="text-[1.75rem] mt-11 text-gray-700 font-[500] text-center">
              Free direct MF
            </div>
            <p className=" text-gray-600 text-center">
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
