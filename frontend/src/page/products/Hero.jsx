import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="m-auto pb-40 border-b-2 border-gray-200">
      <div className="flex flex-col justify-center items-center mt-12">
        <div className="flex flex-col justify-center items-center gap-2 text-center">
          <div className="text-[2.75rem] mt-11 text-gray-700 font-[500]">
            Zerodha Products
          </div>
          <p className="text-[1.25rem] text-gray-600 ">
            Sleek, modern, and intuitive trading platforms
          </p>
          <p className="text-[1rem] text-gray-600 ">
          Check out our <Link to={'/home'} className="text-blue-600">investment offerings  <i className="fa-solid fa-arrow-right"></i></Link>
          </p>
        </div>
      </div>
    </div>
  );
}
