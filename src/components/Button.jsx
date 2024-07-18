import React from "react";
import { IoIosReturnRight } from "react-icons/io";

function Button({title='Get Started'}) {
  return (
    <div className="w-40 px-4 py-2 text-sm flex text-zinc-800 items-center justify-between gap-2 font-medium bg-zinc-100 rounded-full">
      <span>{title}</span>
      <IoIosReturnRight/>
    </div>
  );
}

export default Button;
