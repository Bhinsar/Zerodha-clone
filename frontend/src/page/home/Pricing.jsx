import React from "react";
import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <div className="m-auto pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <div className="text-4xl text-gray-800 font-semibold mb-8">
            Unbeatable pricing
          </div>
          <div className="text-gray-500 mb-6">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </div>
          <Link to="/home" className="text-blue-600">
            See pricing <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-1 items-center">
          <div className="relative col-span-1 w-40 items-center">
            <img src="/assets/pricing-eq.svg" className="w-[80%]" />
            <p className="absolute top-10 left-[100px] text-[10px] text-gray-500/90">
              Free account opening
            </p>
          </div>
          <div className="col-span-2 items-center relative">
            <img src="/assets/pricing-eq.svg" className="w-32" />
            <p className="absolute top-10 left-[110px] text-[10px] text-gray-500/90">
              Free equity delivery and direct mutual funds
            </p>
          </div>
          <div className="relative col-span-1 w-44 items-center">
            <img src="/assets/other-trades.svg" className="w-[80%]" />
            <p className="absolute top-10 left-[120px] text-[10px] text-gray-500/90">
              Intraday and F&O
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
