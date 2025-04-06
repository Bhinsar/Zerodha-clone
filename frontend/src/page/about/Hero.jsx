import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <div className="flex justify-center items-center px-4 py-10 md:px-20 md:py-20 lg:px-28 lg:py-28 text-center text-xl md:text-3xl text-gray-800/90 font-[500]">
        <div>
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[1rem] text-gray-500">
        {/* Left Column */}
        <div className="space-y-12">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>

        {/* Right Column */}
        <div className="space-y-12">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <span className="text-blue-500 font-medium">Rainmatter</span>, our
            fintech fund and incubator, has invested in several fintech startups
            with the goal of growing the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our
            <Link to="/home" className="text-blue-500 underline">
              blog
            </Link>
            or see what the media is
            <Link to="/home" className="text-blue-500 underline">
              saying about us
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}
