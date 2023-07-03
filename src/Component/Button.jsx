import React from "react";
import ArrowRight from "../Assets/Image/getstart.svg";

const Button = ({ type, children, onClick }) => {
  switch (type.toLowerCase()) {
    case "default":
      return (
        <button
          className="border border-1 border-[#e0e0e0] rounded-3xl px-6 "
          onClick={onClick}
        >
          {children}
        </button>
      );

    case "primary":
      return (
        <button
          className="border border-1 border-[#e0e0e0] bg-black py-2 text-white px-6 rounded-3xl flex items-center gap-3"
          onClick={onClick}
        >
          {children} <img src={ArrowRight} alt="" />{" "}
        </button>
      );

    default:
      return;
  }
};

export default Button;
