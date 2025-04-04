import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <img className="w-4xl" src="/assets/landing.png" />
      </div>
      <div className="flex flex-col justify-center items-center gap-5 text-center">
        <div className="text-5xl mt-14 text-gray-700 font-semibold">
          Invest in everything
        </div>
        <p className="text-xl font-normal">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button className="signup-btn">
          Sign up for free
        </button>
      </div>
    </div>
  );
}
