import React, { useState } from "react";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";

function Work() {
  const [images, setImages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "66%",
      left: "47%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "60%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "66%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "54%",
      left: "42%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "56%",
      left: "55%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "80%",
      left: "48%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (data) => {
    function ShowImages(arr) {
      setImages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }

    switch (Math.floor(data * 100)) {
      case 0:
        ShowImages([]); // here we are sending indexes of image data so that function when to show which image.
        break;
      case 1:
        ShowImages([0]);
        break;
      case 3:
        ShowImages([0, 1]);
        break;
      case 5:
        ShowImages([0, 1, 2]);
        break;
      case 7:
        ShowImages([0, 1, 2, 3]);
        break;
      case 9:
        ShowImages([0, 1, 2, 3, 4]);
        break;
      case 11:
        ShowImages([0, 1, 2, 3, 4, 5]);
        break;
      default:
        break;
    }
  });

  return (
    <div className="w-full mt-2">
      <div className="relative max-w-screen-xl mx-auto text-center text-zinc-100 leading-none">
        <h1 className="text-[40vw] font-medium select-none">work</h1>
        <div className="absolute top-0 w-full h-full ">
          {images.map((items, index) => {
            return (
              items.isActive && (
                <img
                  key={index}
                  className="absolute -translate-x-[50%] -translate-y-[50%] w-60 rounded-md"
                  style={{ top: items.top, left: items.left }}
                  src={items.url}
                />
              )
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Work;
