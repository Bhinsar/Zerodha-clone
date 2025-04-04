import React from "react";

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
    <div className="m-auto p-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="text-4xl text-gray-700 font-semibold mb-20">
            Trust with confidence
          </div>
          {trustData.map((items) => (
            <>
              <div className="text-2xl text-gray-600">{items.title}</div>
              <div className="text-gray-500">{items.content}</div>
            </>
          ))}
        </div>
        <div>
          <img src="assets/ecosystem.png"  className="w-3xl"/>
        </div>
      </div>
    </div>
  );
}
