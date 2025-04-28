import React from "react";
import { Link } from "react-router-dom";

export default function CreateTIcket() {
  return (
    <div className="mt-20">
      <div className="my-4 text-gray-600 text-[1.5rem]">
        To create a ticket, select a relevant topic
      </div>
      <div className="grid lg:grid-cols-3 gap-4 lg:gird-row-2 grid-cols-1">
        <div className="flex flex-col gap-5">
          <Link to={'/home'} className="hover:text-blue-500 text-xl my-4 text-gray-600"><i className="fa-solid fa-circle-plus"></i> <span>Account Opening</span></Link>
          <Link to={'/home'} className=" text-[1rem] px-5 hover:text-gray-600 text-blue-500">Resident individual</Link>
          <Link to={'/home'} className=" text-[1rem] px-5 hover:text-gray-600 text-blue-500">Minor</Link>
          <Link to={'/home'} className=" text-[1rem] px-5 hover:text-gray-600 text-blue-500">Non Resident Indian (NRI)</Link>
          <Link to={'/home'} className=" text-[1rem] px-5 hover:text-gray-600 text-blue-500">Company, Partnership, HUF and LLP</Link>
          <Link to={'/home'} className=" text-[1rem] px-5 hover:text-gray-600 text-blue-500">Glossary</Link>
        </div>
        <div className="flex flex-col gap-5">
          <Link to={'/home'} className="hover:text-blue-500 text-xl my-4 text-gray-600"><i className="fa-regular fa-user "></i> <span>Your Zerodha Account</span></Link>
          <Link to={'/home'} className=" text-[1rem] px-5 hover:text-gray-600 text-blue-500">Your Profile</Link>
          <Link to={'/home'} className=" text-[1rem] px-5 hover:text-gray-600 text-blue-500">Account modification</Link>
          <Link to={'/home'} className=" text-[1rem] px-5 hover:text-gray-600 text-blue-500">Client Master Report (CMR) and Depository Participant (DP)</Link>
          <Link to={'/home'} className=" text-[1rem] px-5 hover:text-gray-600 text-blue-500">Nomination</Link>
          <Link to={'/home'} className=" text-[1rem] px-5 hover:text-gray-600 text-blue-500">Transfer and conversion of securities</Link>
        </div>
        <div className="flex flex-col gap-5">
          <Link to={'/home'} className="hover:text-blue-500 text-xl my-4 text-gray-600"><i class="fa-solid fa-chart-simple"></i> <span>Kite</span></Link>
          <Link to={'/home'} className=" text-[1rem] px-5 hover:text-gray-600 text-blue-500">IPO</Link>
          <Link to={'/home'} className=" text-[1rem] px-5 hover:text-gray-600 text-blue-500">Trading FAQs</Link>
          <Link to={'/home'} className=" text-[1rem] px-5 hover:text-gray-600 text-blue-500">Margin Trading Facility (MTF) and Margins</Link>
          <Link to={'/home'} className=" text-[1rem] px-5 hover:text-gray-600 text-blue-500">Chart and orders</Link>
          <Link to={'/home'} className=" text-[1rem] px-5 hover:text-gray-600 text-blue-500">Alerts and Nudges</Link>
          <Link to={'/home'} className=" text-[1rem] px-5 hover:text-gray-600 text-blue-500">General</Link>
        </div>
        <div className="flex flex-col gap-5">
          <Link to={'/home'} className="hover:text-blue-500 text-xl my-4 text-gray-600"><i class="fa-regular fa-credit-card"></i> <span>Funds</span></Link>
          <Link to={'/home'} className=" text-[1rem] px-5 hover:text-gray-600 text-blue-500">Add money</Link>
          <Link to={'/home'} className=" text-[1rem] px-5 hover:text-gray-600 text-blue-500">Withdraw money</Link>
          <Link to={'/home'} className=" text-[1rem] px-5 hover:text-gray-600 text-blue-500">Add bank accounts</Link>
          <Link to={'/home'} className=" text-[1rem] px-5 hover:text-gray-600 text-blue-500">eMandates</Link>
        </div>
        <div className="flex flex-col gap-5">
          <Link to={'/home'} className="hover:text-blue-500 text-xl my-4 text-gray-600"><i class="fa-solid fa-terminal"></i> <span>Console</span></Link>
          <Link to={'/home'} className=" text-[1rem] px-5 hover:text-gray-600 text-blue-500">Portfolio</Link>
          <Link to={'/home'} className=" text-[1rem] px-5 hover:text-gray-600 text-blue-500">Corporate actions</Link>
          <Link to={'/home'} className=" text-[1rem] px-5 hover:text-gray-600 text-blue-500">Funds statement</Link>
          <Link to={'/home'} className=" text-[1rem] px-5 hover:text-gray-600 text-blue-500">Reports</Link>
          <Link to={'/home'} className=" text-[1rem] px-5 hover:text-gray-600 text-blue-500">Profile</Link>
          <Link to={'/home'} className=" text-[1rem] px-5 hover:text-gray-600 text-blue-500">Segments</Link>
        </div>
        <div className="flex flex-col gap-5">
          <Link to={'/home'} className="hover:text-blue-500 text-xl my-4 text-gray-600"><i class="fa-regular fa-circle"></i> <span>Coin</span></Link>
          <Link to={'/home'} className=" text-[1rem] px-5 hover:text-gray-600 text-blue-500">Understanding mutual funds and Coin</Link>
          <Link to={'/home'} className=" text-[1rem] px-5 hover:text-gray-600 text-blue-500">Coin app</Link>
          <Link to={'/home'} className=" text-[1rem] px-5 hover:text-gray-600 text-blue-500">Coin web</Link>
          <Link to={'/home'} className=" text-[1rem] px-5 hover:text-gray-600 text-blue-500">Transactions and reports</Link>
          <Link to={'/home'} className=" text-[1rem] px-5 hover:text-gray-600 text-blue-500">National Pension Scheme (NPS)</Link>
        </div>
      </div>
    </div>
  );
}
