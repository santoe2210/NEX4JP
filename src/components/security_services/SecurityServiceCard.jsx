/* eslint-disable react/prop-types */
/** @format */

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const SecurityServiceCard = ({ title, photo, desc }) => {
	return (
		<article className="space-y-6 border-b last:border-b-0 pb-6 md:space-y-0 md:flex md:items-center md:justify-center md:gap-8">
			<motion.img
				variants={fadeIn("right", 0.2)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: true, amount: 0.7 }}
				className="block w-60 mx-auto md:mx-0 object-fit"
				src={photo}
				alt={title}
			/>
			<motion.div
				variants={fadeIn("left", 0.2)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: true, amount: 0.7 }}
			>
				<h2 className="text-2xl font-bold text-bluehover">{title}</h2>
				<div className="h-[.1rem] w-36 md:w-auto my-3 md:my-6 bg-bluehover"></div>
				<p className="font-medium">{desc}</p>
			</motion.div>
		</article>
	);
};

export default SecurityServiceCard;
