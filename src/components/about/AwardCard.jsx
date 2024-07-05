/** @format */

import React, { useState } from "react";
import avatar from "../../assets/avatar.jpeg";

import { motion } from "framer-motion";

import { BsFillPlusCircleFill } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";

import { fadeIn, growOut } from "../../variants";

const AwardCard = ({ img, awards = [] }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<motion.article
			variants={fadeIn("up", 0.2)}
			initial="hidden"
			whileHover={"hover"}
			whileInView={"show"}
			viewport={{ once: false, amount: 0.7 }}
			className="relative aspect-square rounded-md overflow-hidden"
		>
			<img
				className="w-full h-full object-cover"
				src={img || avatar}
				alt="awards"
			/>

			<motion.div
				animate={isOpen ? "open" : "closed"}
				variants={growOut()}
				className="absolute top-0 p-4 md:p-6 left-0 w-full h-full overflow-y-auto bg-slate-50"
			>
				<ul className=" list-outside space-y-2 text-sm md:text-base font-medium list-disc ml-4 ">
					{awards.length > 0 &&
						awards.map((award) => <li key={award}>{award}</li>)}
				</ul>
			</motion.div>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="absolute right-4 bottom-2"
			>
				{isOpen ? (
					<RxCrossCircled className="size-9" />
				) : (
					<BsFillPlusCircleFill className="size-8 text-gray-100" />
				)}
			</button>
		</motion.article>
	);
};

export default AwardCard;
