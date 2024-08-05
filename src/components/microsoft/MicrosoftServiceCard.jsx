/* eslint-disable react/prop-types */
/** @format */

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const MicrosoftServiceCard = ({ photo, title, desc }) => {
	return (
		<article className="space-y-4 pt-6 md:pt-0 md:space-y-6 text-center">
			<motion.img
				variants={fadeIn("down", 0.2)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: true, amount: 0.7 }}
				className="block size-[141px] mx-auto"
				src={photo}
				alt={`nex4 microsoft ${title}`}
			/>
			<motion.h2
				variants={fadeIn("up", 0.2)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: true, amount: 0.7 }}
				className="text-xl font-bold "
			>
				{title}
			</motion.h2>
			<motion.p
				variants={fadeIn("up", 0.2)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: true, amount: 0.7 }}
				className="font-medium text-justify"
			>
				{desc}
			</motion.p>
		</article>
	);
};

export default MicrosoftServiceCard;
