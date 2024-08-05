import React from 'react'

import { fadeIn } from '../../variants';
import { motion } from 'framer-motion';


const PageHeader = ({bg = "", title}) => {
  return (
		<div className="relative flex items-center justify-center h-60 overflow-hidden">
			<img
				className="absolute left-0 right-0 w-full"
				src={bg}
				alt="Background Image"
			/>
			<motion.h1
				variants={fadeIn("down", 0.2)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: true, amount: 0.7 }}
				className="text-white text-3xl font-semibold z-10"
			>
				{title}
			</motion.h1>
		</div>
	);
}

export default PageHeader