import React from "react";

export default function OpenAccount() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 text-center">
      <div className="text-3xl text-gray-700 font-semibold">
        Open a Zerodha account
      </div>
      <p className="text-gray-500/90 font-normal">
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O
        trades.
      </p>
      <button className="signup-btn">Sign up for free</button>
    </div>
  );
}
