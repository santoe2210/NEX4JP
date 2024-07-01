/** @format */

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const WhyChoose = ({ img, title, desc }) => {
	return (
		<div className="section-margin rounded-3xl rounded-br-none drop-shadow-xl overflow-hidden flex flex-col lg:flex-row lg:gap-8 bg-[#000103] items-center max-w-[1240px] mx-auto px-12 lg:px-0  text-center space-y-4">
			<motion.img
				variants={fadeIn("right", 0.2)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: false, amount: 0.7 }}
				className="block h-48 lg:h-auto lg:w-1/2 object-cover"
				src={img}
				alt={title}
			/>
			<motion.div
				variants={fadeIn("left", 0.2)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: false, amount: 0.7 }}
				className="lg:w-1/2 space-y-4 py-5 lg:pr-3"
			>
				<h2
					variants={fadeIn("down", 0.2)}
					initial="hidden"
					whileInView={"show"}
					viewport={{ once: false, amount: 0.7 }}
					className="text-2xl font-semibold text-[#e9fffd]"
				>
					{title}
				</h2>
				<motion.div
					variants={fadeIn(".", 0.25)}
					initial="hidden"
					whileInView={"show"}
					viewport={{ once: false, amount: 0.7 }}
					className="mt-3 w-32 max-w-full mx-auto h-[.1rem] bg-bluehover "
				/>

				<motion.p className="container mx-auto text-white">{desc}</motion.p>
			</motion.div>
		</div>
	);
};

export default WhyChoose;
