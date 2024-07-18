import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ hover = "false" }) {
  return (
    <div className="max-w-screen-xl mx-auto flex gap-[3px] my-32 text-white">
      <motion.div
        whileHover={{ backgroundColor: "#3E3E46", padding: "25px" }}
        className="w-[30%] h-[31vw] bg-[#323238] rounded-xl p-5"
      >
        <div className="flex items-center justify-between">
          <h6 className="capitalize text-[13.5px] text-[#DFDFE0]">
            up next: News
          </h6>
          <IoIosArrowRoundForward size={"1.4em"} />
        </div>
        <div className="w-[70%] h-[91%] pb-4 mt-5 flex flex-col justify-between">
          <h1 className="text-[2.1vw] font-regular mt-1">
            Insights and behind the scenes
          </h1>
          <h5 className="text-[13.5px] text-[#DFDFE0]">
            Explore what drives our team
          </h5>
        </div>
      </motion.div>
      <motion.div
        whileHover={{
          backgroundColor: hover == "true" ? "#7443FF" : "",
          padding: "25px",
        }}
        className={`w-[70%] h-[31vw] bg-[#323238] rounded-xl p-5 `}
      >
        <div className="w-[100%] flex justify-between items-center">
          <h6 className="text-[13.5px] leading-none">Get In Touch </h6>
          <IoIosArrowRoundForward size={"1.4em"} />
        </div>
        <h1 className="w-[20%] mt-6 text-[2vw] leading-none ">
          Let's get to it, together.
        </h1>
        <div className="relative mt-[7%]  ">
          <h1 className="text-[8vw] font-semibold mb-2">Start a Project</h1>
          <button className="px-6 py-3  text-md border-[1px] border-zinc-200 font-medium rounded-full">
            Contact us
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default Card;
