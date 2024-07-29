/** @format */

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const WhatIsSecurity = ({ title, desc }) => {
	return (
		<section className="section-margin text-center max-w-[1240px] mx-auto">
			<motion.h2
				variants={fadeIn("up", 0.2)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: false, amount: 0.7 }}
				className="text-2xl font-bold text-bluehover"
			>
				{title}
			</motion.h2>
			<motion.p
				variants={fadeIn("up", 0.2)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: false, amount: 0.7 }}
				className="text-center mt-4 font-medium"
			>
				{desc}
			</motion.p>
		</section>
	);
};

export default WhatIsSecurity;
