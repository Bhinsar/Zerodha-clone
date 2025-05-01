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
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center lg:gap-8 mt-10 px-4">
      <div>
        <Link to="/home">
          <img src={image} alt={`${title} product image`} className="w-full" />
        </Link>
      </div>
      <div className="flex flex-col justify-end">
        <div className="text-[2.75rem] mt-11 text-gray-700 font-[500]">
          {title}
        </div>
        <p className="text-[1.25rem] text-gray-600">{content}</p>
        <div className="flex gap-4 py-3">
          <Link to={tryDemo} className="text-blue-600">
            Try Demo <i className="fa-solid fa-arrow-right"></i>
          </Link>
          <Link to={learnMore} className="text-blue-600">
            Learn More <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
        <div className="flex gap-4 py-3">
          <Link to={playStore}>
            <img
              src="/assets/googlePlayBadge.svg"
              alt="Get it on Google Play"
            />
          </Link>
          <Link to={appleStore}>
            <img
              src="/assets/appstoreBadge.svg"
              alt="Download on the App Store"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
