/** @format */

import { transform } from "framer-motion";

export const fadeIn = (direction, delay) => {
	return {
		hidden: {
			y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
			x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
			opacity: 0,
		},
		show: {
			y: 0,
			x: 0,
			opacity: 1,
			transition: {
				type: "tween",
				duration: 0.5,
				delay: delay,
				ease: [0.25, 0.25, 0.25, 0.25],
			},
		},
		hover: {
			y: -5,
			transition: {
				type: "tween",
				duration: 0.25,
				delay: 0,
			},
		},
	};
};

export const growOut = () => {
	return {
		open: {
			width: "100%",
			height: "100%",
			opacity: 1,
			transition: {
				type: "tween",
				duration: 0.5,
				ease: [0.25, 0.25, 0.25, 0.25],
			},
		},
		closed: {
			width: 0,
			height: 0,
			opacity: 0,

			transition: {
				delay: 0.5,
				type: "spring",
				stiffness: 400,
				damping: 40,
			},
		},
	};
};
