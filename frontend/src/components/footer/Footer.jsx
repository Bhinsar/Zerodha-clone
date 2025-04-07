import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-full bg-gray-100/70 px-4 sm:px-8 md:px-10 lg:px-52 py-6 text-gray-500">
      <div className="grid grid-cols-1 lg:grid-cols-4 p-3.5 ">
        {/* Logo */}
        <div>
          <div className="w-32 mb-6 py-3">
            <img src="/assets/logo.svg" alt="Logo" className="w-full" />
          </div>
          <div className="text-[.8rem]">
            &copy; 2010 - 2025, Zerodha Broking Ltd.
            <br />
            All rights reserved.
          </div>
          <div className="flex border-b-1 mb-6 py-6 w-[14rem] gap-4 text-[20px]">
            <i className="fa-brands fa-x-twitter cursor-pointer"></i>
            <i className="fa-brands fa-square-facebook cursor-pointer"></i>
            <i className="fa-brands fa-instagram cursor-pointer"></i>
            <i className="fa-brands fa-linkedin-in cursor-pointer"></i>
          </div>
          <div className="flex gap-4 text-[20px]">
            <i className="fa-brands fa-youtube cursor-pointer"></i>
            <i className="fa-brands fa-whatsapp cursor-pointer"></i>
            <i className="fa-brands fa-telegram cursor-pointer"></i>
          </div>
        </div>
        <div>
          <div className="mb-6 text-gray-700 text-[1.2rem]">Company</div>
          <div className="flex flex-col gap-2 font-[500] text-gray-700/90 text-[1.1rem]">
            <Link to='/home' className="hover:text-blue-500">About</Link>
            <Link to='/home' className="hover:text-blue-500">Products</Link>
            <Link to='/home' className="hover:text-blue-500">Pricing</Link>
            <Link to='/home' className="hover:text-blue-500">Referral programme</Link>
            <Link to='/home' className="hover:text-blue-500">Careers</Link>
            <Link to='/home' className="hover:text-blue-500">Zerodha.tech</Link>
            <Link to='/home' className="hover:text-blue-500">Open source</Link>
            <Link to='/home' className="hover:text-blue-500">Press & media</Link>
            <Link to='/home' className="hover:text-blue-500">Zerodha Cares (CSR)</Link>
          </div>
        </div>
        <div>
          <div className="mb-6 text-gray-700 text-[1.2rem]">Support</div>
          <div className="flex flex-col gap-2 font-[500] text-gray-700/90 text-[1.1rem]">
            <Link to='/home' className="hover:text-blue-500">Contact us</Link>
            <Link to='/home' className="hover:text-blue-500">Support portal</Link>
            <Link to='/home' className="hover:text-blue-500">Z-Connect blog</Link>
            <Link to='/home' className="hover:text-blue-500">List of charges</Link>
            <Link to='/home' className="hover:text-blue-500">Downloads & resources</Link>
            <Link to='/home' className="hover:text-blue-500">Videos</Link>
            <Link to='/home' className="hover:text-blue-500">Market overview</Link>
            <Link to='/home' className="hover:text-blue-500">How to file a complaint?</Link>
            <Link to='/home' className="hover:text-blue-500">Status of your complaints</Link>
          </div>
        </div>
        <div>
          <div className="mb-6 text-gray-700 text-[1.2rem]">Account</div>
          <div className="flex flex-col gap-2 font-[500] text-gray-700/90 text-[1.1rem]">
            <Link to="/home" className="hover:text-blue-500">Open an account</Link>
            <Link to="/home" className="hover:text-blue-500">Fund transfer</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
