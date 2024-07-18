import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="max-w-screen-xl mx-auto py-3 flex justify-between pt-5 border-b-[1px] border-zinc-700">
      <div className="flex items-center">
        <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" />
        <div className="flex gap-14 ml-20">
          {["Home", "Work", "", "News"].map((items, index) =>
            items.length == 0 ? (
              <span
                key={index}
                className="w-[1.5px] h-5 inline-block bg-zinc-500"
              ></span>
            ) : (
              <a
                key={index}
                className="text-white flex items-center gap-1 text-sm font-regular "
              >
                {index == 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.45em #00FF19" }}
                    className="w-1.5 h-1.5 inline-block rounded-full  bg-[#00FF19]"
                  ></span>
                )}{" "}
                {items}
              </a>
            )
          )}
        </div>
      </div>

      <Button />
    </div>
  );
}

export default Navbar;
