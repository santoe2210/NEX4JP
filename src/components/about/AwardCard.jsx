/* eslint-disable react/prop-types */
/** @format */

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";
import { fadeIn, growOut } from "../../variants";

const AwardCard = ({ img, awards = [] }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.article
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileHover={"hover"}
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="relative aspect-square rounded-md overflow-hidden"
    >
      <div className="flex items-center justify-center">
        <img className="w-[80%] object-center object-cover" src={img} alt="awards" />
      </div>

      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={growOut()}
        className="absolute top-0 p-4 md:p-6 left-0 w-full h-full overflow-y-auto bg-slate-50"
      >
        <ul className="list-outside space-y-2 text-sm md:text-base font-medium list-disc ml-4">
          {awards.length > 0 && (
            <div dangerouslySetInnerHTML={{ __html: awards }} />
          )}
        </ul>
      </motion.div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute right-4 bottom-2"
      >
        {isOpen ? (
        <button className="text-cyan-300 bg-transparent border border-cyan-300 rounded-full px-4 py-2 cursor-pointer">
        閉じる
        </button>
      ) : (
        <button className="text-cyan-300 bg-transparent border border-cyan-300 rounded-full px-4 py-2 cursor-pointer">
        詳細
      </button>
        )}

      </button>
    </motion.article>
  );
};

export default AwardCard;
