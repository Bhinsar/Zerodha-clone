import React from "react";
import { useNavigate } from "react-router-dom";

export default function PageNoFound() {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col justify-center items-center  gap-5 text-center p-4">
      <h1 className="text-5xl font-bold text-gray-800">404</h1>
      <h2 className="text-xl text-gray-600">Page Not Found</h2>
      <button 
        onClick={() => navigate('/home')} 
        className="signup-btn"
      >
        Go to Home
      </button>
    </div>
  );
}
