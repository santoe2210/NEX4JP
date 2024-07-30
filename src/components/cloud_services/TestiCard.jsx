/* eslint-disable react/prop-types */
/** @format */

import React from "react";
import { motion } from "framer-motion";

import avatar from "../../assets/avatar.jpeg";
import { fadeIn } from "../../variants";

const TestiCard = ({ name, desc, img = "" }) => {
	return (
		<motion.article
			className="card text-black bg-white"
			variants={fadeIn("up", 0.2)}
			initial="hidden"
            whileHover={"hover"}
			whileInView={"show"}
			viewport={{ once: true, amount: 0.7 }}
		>
			<img
				className="block size-20 rounded-full mx-auto"
				src={img || avatar}
				alt={name}
			/>
			<h2 className="text-2xl">{name}</h2>
			<p className="text-base">{desc}</p>
		</motion.article>
	);
};

export default TestiCard;
