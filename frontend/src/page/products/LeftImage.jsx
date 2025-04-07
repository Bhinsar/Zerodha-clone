import React from "react";
import { Link } from "react-router-dom";

export default function LeftImage({
  image,
  title,
  content,
  tryDemo,
  learnMore,
  playStore,
  appleStore,
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 justify-between items-center lg:gap-8 py-20 px-4">
      <div className="col-span-2">
        <Link to="/home">
          <img src={image} />
        </Link>
      </div>
      <div>
        <div className="text-[2rem] mt-11 text-gray-700 font-[500]">
          {title}
        </div>
        <p className="text-[1rem] text-gray-600 ">{content}</p>
      </div>
    </div>
  );
}
