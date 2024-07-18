import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import videog from "../assets/Cula_promo_new_4_3.mp4";
import lastVideo from "../assets/showcase_4_3.mp4";
function Products() {
  const data = [
    {
      title: "arqitel",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore impedit in velit fuga doloribus ipsa consequuntur?",
      background:
        "https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c621a3aa0ee3ae147d692_arqitel-bg-p-1600.webp",
      live: true,
      caseS: false,
    },
    {
      title: "cula",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore impedit in velit fuga doloribus ipsa consequuntur?",
      background:
        "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b41319bda140bccae204ae_bg%202.png",
      live: true,
      caseS: false,
    },
    {
      title: "layout land",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore impedit in velit fuga doloribus ipsa consequuntur?",
      background:
        "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65f11502e2fa59425089e2e6_Work%20Background-p-1600.png",
      live: true,
      caseS: true,
    },
    {
      title: "Showcase",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore impedit in velit fuga doloribus ipsa consequuntur?",
      background:
        "https://assets-global.website-files.com/6334198f239547f2fccd84c1/6352999803e7fe5651137f1e_Showcase%20Website%20bg-p-1600.png",
      live: true,
      caseS: true,
    },
  ];
  const [pos, setPos] = useState(0);
  const mover = (index) => {
    setPos(index * 23);
  };

  return (
    <div className="mt-20 relative">
      {data.map((items, index) => (
        <Product
          index={index}
          key={index}
          title={items.title}
          description={items.description}
          live={items.live}
          caseS={items.caseS}
          mover={mover}
          background={items.background}
        />
      ))}

      <div className="absolute top-0 w-full h-full pointer-events-none ">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className="h-[23rem] w-[28rem] absolute left-[44%] bg-zinc-300 rounded-xl overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full bg-sky-300"
          >
            <img
              className="h-full w-full object-cover"
              src="https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c5f12d26da475b2fd6b88_15.webp"
              alt=""
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full bg-sky-500"
          >
            <img
              className="h-full w-full object-cover"
              src="https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b413200259aa2289224594_Frame%204.png"
              alt=""
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full bg-sky-700"
          >
            <img
              className="h-full w-full object-cover"
              src="https://assets-global.website-files.com/6334198f239547f2fccd84c1/65f112dec7a59534cca51a3d_portfolioCard_cc-01.webp"
              alt=""
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full bg-sky-800"
          >
            <video
              className="h-full w-full object-cover "
              src={lastVideo}
              loop
              autoPlay
              muted
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
