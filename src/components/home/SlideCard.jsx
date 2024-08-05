/* eslint-disable react/prop-types */
/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const SlideCard = ({ bgImg, title, to, img = "" }) => {
	return (
		<div className="relative section-padding flex items-center min-h-fit h-[30rem] xl:h-96 2xl:h-96">
			<img
				className="absolute w-full h-full top-0 left-0 object-cover"
				src={bgImg}
				alt="carousel bg img"
			/>

			<div
				className={`flex items-center h-full ${
					img && "justify-between sm:justify-center gap-6"
				}`}
			>
				<motion.div
					variants={fadeIn("up", 0.35)}
					initial="hidden"
					whileInView={"show"}
					viewport={{ once: true, amount: 0.7 }}
					className={`${
						!img ? "mx-auto" : "mx-auto sm:mx-0"
					} bg-gray-100/40 w-[80%] md:w-2/3 p-6 rounded-r-lg z-10`}
				>
					<h2 className="text-2xl">{title}</h2>
					<Link
						to={to}
						className={`mt-4 ${
							!img && "mx-auto"
						} block w-fit px-4 py-2 shadow-lg shadow-cyan-300 text-sm font-semibold bg-gray-200/60 rounded-md hover:bg-cyan-300 hover:text-white transition`}
					>
						もっと見る
					</Link>
				</motion.div>
				{img && (
					<img
						className="hidden md:block w-1/2 h-[90%] object-cover rounded-md z-10"
						src={img}
						alt="Slider Photo"
					/>
				)}
			</div>
		</div>
	);
};

export default SlideCard;
