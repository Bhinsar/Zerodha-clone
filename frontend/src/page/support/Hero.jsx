import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="bg-blue-600/90 p-10 -m-6 sm:-mx-8 md:-mx-10 lg:-mx-30">
      <div className="max-w-7xl mx-auto">
        <div className="lg:p-10">
          <div className="flex justify-between items-center lg:pb-10">
            <Link to={"/support"} className="text-white text-2xl font-bold">
              Support Portal
            </Link>
            <Link to={"/support"} className="text-white underline">
              Track tickets
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="text-white flex flex-col gap-4">
              <div className="text-2xl font-bold">
                Search for an answer or browse help topics to create a ticket
              </div>
              <div className="relative flex items-center ">
                <input
                  type="text"
                  placeholder="Search..."
                  className="p-2 rounded-md bg-white text-black w-full p-5"
                />
                <i class="fa-solid fa-magnifying-glass absolute right-5 text-2xl text-gray-500"></i>
              </div>
              <div className="flex flex-wrap gap-4 text-white underline text-xl">
                <Link to={"/support"}>Track account opening</Link>
                <Link to={"/support"}>Track segment activation</Link>
                <Link to={"/support"}>Intraday margins</Link>
                <Link to={"/support"}>Kite user manual</Link>
              </div>
            </div>
            <div className="text-white flex flex-col gap-4">
              <div className="text-2xl font-bold">Features</div>
              <ol className="list-decimal list-inside text-xl flex flex-col gap-8">
                <li>
                  <Link to={"/support"} className="underline">
                    Latest Intraday leverages and Square-off timings
                  </Link>
                </li>
                <li>
                  <Link to={"/support"} className="underline">
                    Rights Entitlements listing in April 2025
                  </Link>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
