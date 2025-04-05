import React from "react";

export default function Awards() {
  return (
    <div className="mx-auto pb-40">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <img src="assets/largestBroker.svg" alt="Largest Broker" />
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-semibold">
            Largest stock broker in the world
          </h2>
          <p className="text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id nam
            pariatur similique blanditiis vitae sequi? Soluta alias ad ducimus
            dignissimos.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <ul className="list-disc ml-4 space-y-1">
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
            </ul>
            <ul className="list-disc ml-4 space-y-1">
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
            </ul>
          </div>

          <div>
            <img src="assets/pressLogos.png" alt="Press Logos" className="w-4/5" />
          </div>
        </div>
      </div>
    </div>
  );
}
