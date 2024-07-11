/* eslint-disable react/prop-types */
/** @format */

import React from "react";
import Counter from "../_common/Counter";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const ApprovementCard = ({ icon, title, count = "", prize }) => {
	return (
		<motion.article
			variants={fadeIn("up", 0.25)}
			initial="hidden"
			whileInView={"show"}
			viewport={{ once: false, amount: 0.7 }}
			className="gap-y-3 p-4 hover:shadow-lg hover:shadow-cyan-300/50 transition duration-300 bg-gray-100/60 rounded-md text-center flex flex-col items-center justify-center"
		>
			<motion.div
				variants={fadeIn("down", 0.25)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: false, amount: 0.7 }}
				className="flex items-center justify-center"
			>
				{icon}
			</motion.div>
			{count && <Counter targetCount={count} />}
			{prize && <h2 className="text-3xl font-semibold">{prize}</h2>}
			<h2 className="text-2xl">{title}</h2>
		</motion.article>
	);
};

export default ApprovementCard;
