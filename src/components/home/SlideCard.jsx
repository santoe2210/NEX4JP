/** @format */

import React from "react";
import { Link } from "react-router-dom";

const SlideCard = ({ bgImg, title, to, img = "" }) => {
	return (
		<div className="relative section-padding flex items-center min-h-fit h-96 sm:h-96 xl:h-96 2xl:h-96">
			<img
				className="absolute w-full h-full top-0 left-0 object-cover"
				src={bgImg}
				alt="carousel bg img"
			/>

			<div className={`flex items-center h-full ${img && "justify-between gap-6"}`}>
				<div
					className={`${
						!img && "mx-auto"
					} bg-gray-100/40 w-1/2 p-6 rounded-r-lg z-10`}
				>
					<h2 className="text-2xl">{title}</h2>
					<Link
						to={to}
						className={`mt-4 ${
							!img && "mx-auto"
						} block w-fit px-4 py-2 shadow-lg shadow-cyan-300 text-sm font-semibold bg-gray-200/60 rounded-md hover:bg-cyan-300 hover:text-white transition`}
					>
						Discover More
					</Link>
				</div>
				{img && <img className="w-1/2 h-[90%] object-cover rounded-3xl z-10" src={img} alt="Slider Photo" />}
			</div>
		</div>
	);
};

export default SlideCard;
