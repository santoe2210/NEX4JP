/** @format */

import React from "react";
import aws from "../../assets/aws1.jpg";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const RelatedPartner = () => {
	return (
		<motion.div
			variants={fadeIn("down", 0.2)}
			initial="hidden"
			whileInView={"show"}
			viewport={{ once: false, amount: 0.7 }}
			className="section-margin max-w-[1240px] mx-auto"
		>
			<h2 className="text-center text-2xl font-bold">
				Meet our related partner platform to power your business
			</h2>
			<div className=" flex flex-col md:flex-row items-center">
				<Link className="block mr-4 w-60  md:w-96 shrink-0" to="/aws">
					<img
						className="cursor-pointer w-full aspect-square object-center object-cover hover:text-blue-500"
						src={aws}
					/>
				</Link>
				<div>
					<a href="/aws">
						<h2 className="text-5xl font-bold cursor-pointer hover:text-blue-500">
							AWS{" "}
						</h2>
					</a>
					<br />
					<a href="/aws">
						<p className="text-xl font-bold cursor-pointer hover:text-blue-500">
							Find out more &#62;
						</p>
					</a>
					<hr className="my-4 border-t-1 border-blue-400" />
					<p className="mt-4">
						A pioneer partner of public cloud , multi cloud, hybrid cloud
						infrastructure, it offers your business mature technology, complete
						services , golbal availability and a well-developed cloud ecosystem
						with an abunded of online resources{" "}
					</p>
				</div>
			</div>
		</motion.div>
	);
};

export default RelatedPartner;
