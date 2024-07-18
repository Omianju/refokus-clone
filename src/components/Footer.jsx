import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto flex gap-24 ">
        <div className="basis-1/2  ">
          <h1 className="text-[11.5rem] font-semibold text-zinc-100 tracking-tight">
            Refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex">
          <div className="basis-1/3">
            <h3 className="text-white text-md font-medium mb-8">Socials</h3>
            {["instagram", "twitter", "LinkedIn"].map((items, index) => (
              <a
                key={index}
                className="capitalize mb-1 text-zinc-600 block"
                href="#"
              >
                {items}
              </a>
            ))}
          </div>
          <div className="basis-1/3">
            <h3 className="text-white text-md font-medium mb-8">Links</h3>
            {["home", "work", "careers", "contact"].map((item, index) => (
              <a
                key={index}
                className="capitalize mb-1 text-zinc-600 block"
                href=""
              >
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/3">
            <p className="text-zinc-100">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <img
              className="mt-10 px-8 py-3 border border-zinc-600"
              src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
