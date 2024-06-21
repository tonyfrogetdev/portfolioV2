import React from "react";

interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
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
        onClick={onClick}
      >
        Ma Présentation
      </button>
    </div>
  );
};

export default Button;
