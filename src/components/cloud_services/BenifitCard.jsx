/** @format */

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// eslint-disable-next-line react/prop-types
const BenifitCard = ({ title = "", desc = "" }) => {
	return (
		<motion.article
			variants={fadeIn(".", 0.15)}
			initial="hidden"
			whileInView={"show"}
			viewport={{ once: true, amount: 0.7 }}
			className="card-padding cursor-pointer h-full bg-white transform hover:-translate-y-10 drop-shadow-lg hover:drop-shadow-xl transition-all duration-300 rounded-tl-lg rounded-br-lg space-y-4"
		>
			<motion.h2
				variants={fadeIn("down", 0.3)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: true, amount: 0.7 }}
				className="text-center text-bluehover text-2xl"
			>
				{title}
			</motion.h2>
			<motion.p
				variants={fadeIn("up", 0.3)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: true, amount: 0.7 }}
				className="text-justify"
			>
				{desc}
			</motion.p>
		</motion.article>
	);
};

export default BenifitCard;
