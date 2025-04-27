import React from "react";
import { Link } from "react-router-dom";

export default function RightImage({
  image,
  title,
  content,
  viewTitle,
  viewLink
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 justify-between items-center mt-10 lg:gap-8  px-4">
    <div>
        <div className="text-[2rem]  text-gray-700 font-[500]">
          {title}
        </div>
        <p className="text-[1rem] mt-8 text-gray-600 ">{content}</p>
        <div className="flex gap-4 py-3">
          <Link to={viewLink}>
            {viewTitle}
          </Link>
        </div>
      </div>
      <div className="col-span-2 flex flex-col items-end">
        <Link to="/home">
          <img src={image} />
        </Link>
      </div>
      
    </div>
  );
}
