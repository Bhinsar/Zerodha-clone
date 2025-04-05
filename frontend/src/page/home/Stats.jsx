import React from "react";
import {Link} from "react-router-dom"

export default function Stats() {
  const trustData = [
    {
      title: "Customer-first always",
      content:
        "That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.",
    },
    {
      title: "No spam or gimmicks",
      content:
        "No gimmicks, spam, &quot;gamification&quot;, or annoying push notifications. High quality apps that you use at your pace, the way you like.",
    },
    {
      title: "The Zerodha universe",
      content:
        "Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.",
    },
    {
      title: "Do better with money",
      content:
        "With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.",
    },
  ];

  return (
    <div className="m-auto pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">
        <div>
          <div className="text-4xl text-gray-800 font-semibold mb-10">
            Trust with confidence
          </div>
          {trustData.map((items) => (
            <>
              <div className="text-2xl text-gray-700 mb-2.5">{items.title}</div>
              <div className="text-gray-500 mb-9">{items.content}</div>
            </>
          ))}
        </div>
        <div>
          <img src="assets/ecosystem.png"  className="w-3xl"/>
          <div className="text-blue-600 visited:text-purple-600 flex gap-10 items-center justify-center mt-10">
            <Link to='/home'>Explore our products <i className="fa-solid fa-arrow-right"></i></Link>
            <Link to='/home'>Try Kite demo <i className="fa-solid fa-arrow-right"></i></Link>
          </div>

        </div>
      </div>
    </div>
  );
}
