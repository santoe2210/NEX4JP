/* eslint-disable react/prop-types */
import React from 'react'
import {motion} from "framer-motion"
import { fadeIn } from '../../variants';

const LocationCard = ({img, name}) => {
  return (
		<motion.article
			variants={fadeIn("up", 0.2)}
			initial="hidden"
			whileInView={"show"}
			viewport={{ once: true, amount: 0.7 }}
			className="relative rounded-md overflow-hidden bg-white drop-shadow-lg"
		>
			<img className="aspect-square object-cover" src={img} alt={name} />
			<h2 className="absolute bottom-0 w-full left-0 text-center pt-2 pb-1 bg-gray-100/10 backdrop-blur-sm text-white text-lg">
				{name}
			</h2>
		</motion.article>
	);
}

export default LocationCard