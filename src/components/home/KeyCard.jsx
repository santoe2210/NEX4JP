/* eslint-disable react/prop-types */
/** @format */

import { list } from "postcss";
import React from "react";

import { motion } from "framer-motion";

import { GiAchievement } from "react-icons/gi";
import { fadeIn } from "../../variants";

const KeyCard = ({ logo, achievements = [] }) => {
	return (
		<motion.article
			variants={fadeIn("up", 0.25)}
			initial="hidden"
			whileInView={"show"}
			viewport={{ once: true, amount: 0.7 }}
			className="p-6 bg-gray-50/80 drop-shadow-md hover:drop-shadow-none hover:shadow-md hover:shadow-cyan-300/40 transition duration-300 rounded-lg space-y-5 max-w-"
		>
			<img
				className="block size-24 mx-auto rounded-md"
				src={logo}
				alt="NEX4 Key Achievements"
			/>
			{achievements.length > 0 && (
				<motion.ul
					variants={fadeIn("down", 0.25)}
					initial="hidden"
					whileInView={"show"}
					viewport={{ once: true, amount: 0.7 }}
					className="space-y-3"
				>
					{achievements.map((achievement) => (
						<li className="flex gap-2 items-center" key={achievement}>
							<GiAchievement className="text-3xl shrink-0 text-yellow-300" />{" "}
							<p className="text-justify">{achievement}</p>
						</li>
					))}
				</motion.ul>
			)}
		</motion.article>
	);
};

export default KeyCard;
