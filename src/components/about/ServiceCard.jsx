/** @format */

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const ServiceCard = ({ logo = "", name, bgName, icon = "" }) => {
	return (
		<article>
			<motion.div
				variants={fadeIn("down", 0.2)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: false, amount: 0.7 }}
			>
				{logo && (
					<img
						className="mt-6 md:mt-0 h-24 w-auto object-cover mx-auto block"
						src={logo}
						alt={name}
					/>
				)}
				{icon && <div className="flex items-center justify-center">{icon}</div>}
			</motion.div>
			<motion.h2
				variants={fadeIn("up", 0.2)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: false, amount: 0.7 }}
				className={`text-xl capitalize font-semibold pt-2 text-center py-1 mt-4 ${
					bgName ? `${bgName} md:text-2xl` : "text-shadow"
				}`}
			>
				{name}
			</motion.h2>
		</article>
	);
};

export default ServiceCard;
