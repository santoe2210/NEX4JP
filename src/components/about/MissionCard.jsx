
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/** @format */
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const MissionCard = ({ icon, title, detail, titleBg }) => {
  return (
    <article className="pt-5 sm:pt-0">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex items-center justify-center"
      >
        {icon}
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="div"
      >
        <h2
          className={`${titleBg} uppercase mt-4 text-xl md:text-2xl text-center pt-2 pb-1 text-white`}
        >
          {title}
        </h2>
        {detail && (
          <div
            className="space-y-1 mt-3 font-medium list-outside list-disc ml-8"
            dangerouslySetInnerHTML={{ __html: detail }}
          />
        )}
      </motion.div>
    </article>
  );
};

export default MissionCard;
