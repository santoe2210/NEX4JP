/* eslint-disable react/prop-types */
/** @format */

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const WhyChooseCard = ({ icon, title, desc }) => {
	return (
		<motion.article
			variants={fadeIn("down", 0.25)}
			initial="hidden"
			whileInView={"show"}
			viewport={{ once: true, amount: 0.7 }}
			className="flex gradient-1 text-white items-center justify-stretch gap-y-3 flex-col p-6 rounded-md"
		>
			{icon}
			<motion.h2
				variants={fadeIn("up", 0.35)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: true, amount: 0.7 }}
				className="text-2xl font-semibold"
			>
				{title}
			</motion.h2>
			<motion.p
				variants={fadeIn("up", 0.35)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: true, amount: 0.7 }}
			>
				{desc}
			</motion.p>
		</motion.article>
	);
};

export default WhyChooseCard;
