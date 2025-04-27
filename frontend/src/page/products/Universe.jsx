import React from "react";
import { Link } from "react-router-dom";

export default function Universe() {
  const partner = [
    {
      image: "/assets/zerodhaFundhouse.png", 
      content:
        "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
    },
    {
      image: "/assets/sensibullLogo.svg", 
      content:
        "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
    },
    {
      image: "/assets/tijori.svg", 
      content:
        "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
    },
    {
      image: "/assets/streakLogo.png", 
      content:
        "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
    },
    {
      image: "/assets/smallcaseLogo.png", 
      content:
        "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
    },
    {
      image: "/assets/dittoLogo.png", 
      content:
        "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="my-20 text-[1.25rem] text-gray-500">
        Want to know more about our technology stack? Check out the{" "}
        <Link to="/home" className="text-blue-600">
          Zerodha.tech
        </Link>{" "}
        blog.
      </div>
      <div className="text-[2rem] text-gray-700 font-[500]">
        The Zerodha Universe
      </div>
      <div className="m-4 text-gray-600">
        Extend your trading and investment experience even further with our
        partner platforms
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
      {partner.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center px-6 py-4 cursor-pointer"
          >
            <img
              src={item.image}
              alt="partner"
              className="w-[70%] h-[70%] object-contain mb-4 hover:opacity-70"
            />
            <p className="text-gray-500 text-sm">{item.content}</p>
          </div>
        ))}
      </div>
      <button className="signup-btn">Sign up for free</button>
    </div>
  );
}
