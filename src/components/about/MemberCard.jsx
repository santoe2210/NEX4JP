/** @format */

import React from "react";
import { motion } from "framer-motion";

import avatar from "../../assets/avatar.jpeg";
import { fadeIn } from "../../variants";

const MemberCard = ({ img, name, roles = [] }) => {
	return (
		<motion.article
			variants={fadeIn("up", 0.2)}
			initial="hidden"
			whileInView={"show"}
			viewport={{ once: false, amount: 0.7 }}
			className="flex shrink-0 items-center justify-center flex-col space-y-3"
		>
			<img
				className="size-24 rounded-full object-cover "
				src={avatar || img}
				alt="name"
			/>
			<div className="text-center">
				<h2 className="text-xl font-semibold">{name}</h2>
				<p className="text-sm font-medium">
					{roles.length > 0 &&
						roles.map((role) => (
							<>
								<span>{role}</span> <br />{" "}
							</>
						))}
				</p>
			</div>
		</motion.article>
	);
};

export default MemberCard;
