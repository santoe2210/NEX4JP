/* eslint-disable react/prop-types */
/** @format */

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const KeyCard = ({ img = "", title = "", desc = "", icon = "" }) => {
	//  border-b last:border-b-0 rounded-b-md   border-white
	return (
		<div className="flex p-6 max-w-[1240px] px-8 flex-col md:flex-row md:px-16 lg:px-24 bg-gradient-to-bl from-cyan-200 to-cyan-400 mx-auto items-center even:rounded-tl-3xl even:rounded-br-3xl odd:rounded-tr-3xl odd:rounded-bl-3xl md:even:flex-row-reverse gap-10">
			<motion.div
				variants={fadeIn("right", 0.2)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: true, amount: 0.7 }}
				className="w-36 md:w-48 md:h-auto shrink-0 text-white"
			>
				{img ? (
					<img
						src={img}
						className="w-full aspect-square object-cove"
						alt={title}
					/>
				) : (
					<div className="p-3 flex items-center justify-center aspect-square rounded-full bg-gray-100">
						{ icon }
					</div>
				)}
			</motion.div>
			<motion.div
				variants={fadeIn("left", 0.2)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: true, amount: 0.7 }}
				className="space-y-2 text-center  md:text-left text-white"
			>
				<h3 className="text-xl font-semibold">{title || "Title"}</h3>
				<p className="text-justify">
					{desc ||
						"Lorem ipsum dolor, sit amet consectetur adipisicing elit. At vel modi facilis non illo atque maiores. Voluptate ea iste consectetur."}
				</p>
			</motion.div>
		</div>
	);
};

export default KeyCard;
