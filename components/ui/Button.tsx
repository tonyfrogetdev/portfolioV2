import React from "react";

const Button = () => {
  return (
    <div>
      <button
        className="
    bg-transparent border-4
    py-3 px-6
    border-orange-600 
    text-black
    rounded-full 
    transform 
    transition-transform duration-500
    translate-y-1
    text-xl
    font-semibold
    hover:bg-green-600
    hover:border-green-300
    hover:text-white
    hover:-translate-y-1
  "
      >
        Ma Présentation
      </button>
    </div>
  );
};

export default Button;
