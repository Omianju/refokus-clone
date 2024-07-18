import React, { useState } from "react";
import Button from "./Button";

function Product({
  title,
  description,
  live,
  caseS,
  index,
  mover,
  background,
}) {
  const [backgrounds, setBground] = useState("");
  function enter() {
    setBground(background);
  }

  function leave() {
    setBground("");
  }

  return (
    <div
      onMouseEnter={enter}
      onMouseLeave={leave}
      style={{ backgroundImage: `url(${backgrounds})` }}
      className={`w-full  h-[23rem] text-white py-20 `}
    >
      <div
        onMouseEnter={() => mover(index)}
        className="max-w-screen-xl mx-auto flex items-center justify-between"
      >
        <h1 className="text-5xl capitalize font-regular">{title}</h1>
        <div className="detls w-1/3 text-zinc-900  ">
          <p className="text-white mb-10">{description}</p>
          <div className="flex gap-5 items-center">
            {live && <Button />}
            {caseS && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
