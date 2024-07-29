/** @format */

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const AdvancedSecurityCard = ({ title, desc }) => {
	return (
		<article className="space-y-4 pb-6 border-b last:border-0">
			<motion.div
				variants={fadeIn("left", 0.2)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: false, amount: 0.7 }}
				className="flex items-center gap-4"
			>
				<h2 className="text-2xl font-bold text-bluehover">{title}</h2>
				<div className="h-[.15rem] bg-bluehover w-24"></div>
			</motion.div>
			<motion.p
				variants={fadeIn("left", 0.2)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: false, amount: 0.7 }}
				className="font-medium"
			>
				{desc}
			</motion.p>
		</article>
	);
};

export default AdvancedSecurityCard;
