/* eslint-disable react/no-unknown-property */
/** @format */

import React from "react";

import bg from "../../assets/icons/bg1.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import KeyCard from "../../components/cloud_services/KeyCard";
import BenifitCard from "../../components/cloud_services/BenifitCard";
import MultipleCarousel from "../../components/MultipleCarousel";
import TestiCard from "../../components/cloud_services/TestiCard";

import { MdOutlineAssessment } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { MdMoveDown } from "react-icons/md";
import { GrDeploy } from "react-icons/gr";
import { MdFormatIndentIncrease} from "react-icons/md";

import aws from "../../assets/aws1.jpg";
import WhyDesign from "../../assets/WhyDesign.jpg";
import { Link, useNavigate } from "react-router-dom";
import WhyChoose from "../../components/cloud_services/WhyChoose";

const DesignAndImplementation = () => {
	const navigate = useNavigate();

	return (
		<div className="">
			{/* Header */}
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
					Design and Implementation Services
				</motion.h1>
			</div>

			{/* Sub Title */}
			<div className="px-12 section-margin text-center space-y-4">
				<h2
					variants={fadeIn("down", 0.2)}
					initial="hidden"
					whileInView={"show"}
					viewport={{ once: false, amount: 0.7 }}
					className="text-2xl font-semibold text-bluehover"
				>
					Transform Your IT Infrastructure with Expert Cloud Design and Implementation
				</h2>
				<motion.div
					variants={fadeIn(".", 0.25)}
					initial="hidden"
					whileInView={"show"}
					viewport={{ once: false, amount: 0.7 }}
					className="mt-3 w-32 max-w-full mx-auto h-[.1rem] bg-bluehover "
				/>

				<motion.p
					variants={fadeIn("up", 0.2)}
					initial="hidden"
					whileInView={"show"}
					viewport={{ once: false, amount: 0.7 }}
					className="container mx-auto"
				>
					Leverage our expertise to design and implement a cloud environment that meets your business needs. Our comprehensive services ensure a smooth transition and optimal performance of your cloud infrastructure.
				</motion.p>
			</div>

			<hr className="section-margin w-[90%] block mx-auto" />

			<div className="outer-padding customscreen:px-0">
				{/* Key Services */}
				<div className="text-center  section-margin rounded-tl-2xl space-y-6 rounded-br-2xl">
					<h2
						variants={fadeIn("down", 0.2)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="text-2xl font-semibold text-bluehover"
					>
						Our Key Design and Implementation Services
					</h2>
					<motion.div
						variants={fadeIn(".", 0.25)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="mt-3 w-32 max-w-full mx-auto h-[.1rem] bg-bluehover "
					/>

					<KeyCard
						img=""
						icon={<MdOutlineAssessment className=" size-full text-cyan-400" />}
						title="Cloud Architecture Design  "
						desc="Develop a robust and scalable cloud architecture that aligns with your business goals. We design custom solutions to optimize performance, cost, and security."
					/>
					<KeyCard
						img=""
						icon={<MdMoveDown className=" size-[80%] text-cyan-400" />}
						title="Migration Planning and Strategy "
						desc="Create a detailed migration plan, ensuring a smooth transition with minimal disruption. Our strategies are designed to meet your specific business needs and technical requirements."
					/>
					<KeyCard
						img=""
						icon={<GrDeploy className=" size-[60%] text-cyan-400" />}
						title="Implementation and Deployment "
						desc="Deploy your cloud infrastructure with precision and expertise. Our team handles the entire implementation process, from initial setup to final deployment, ensuring everything runs smoothly."
					/>
					<KeyCard
						img=""
						icon={
							<MdOutlineSecurity className=" size-[90%] text-cyan-400" />
						}
						title=" Security and Compliance "
						desc="Implement advanced security measures to protect your cloud environment. We ensure compliance with industry standards and regulations, safeguarding your data and applications."
					/>
					<KeyCard
						img=""
						icon={<MdFormatIndentIncrease className=" size-[85%] text-cyan-400" />}
						title="Performance Optimization  "
						desc="Optimize your cloud infrastructure for peak performance. We continuously monitor and fine-tune your environment to ensure optimal efficiency and cost-effectiveness."
					/>
				</div>

				{/* Why Choose Section */}
				<WhyChoose
					img={WhyDesign}
					title="Why Choose Our Design and Implementation Services?"
					desc="Creating an efficient and scalable cloud environment requires expert planning and execution. 
						Our team provides end-to-end design and implementation services, tailored to your unique 
						requirements, ensuring a seamless and successful cloud adoption."
				/>

				{/* <hr className="section-margin w-[90%] block mx-auto" /> */}

				{/* Benifits */}
				<div className="section-margin text-center">
					<h2
						variants={fadeIn("down", 0.2)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="text-2xl font-semibold text-bluehover"
					>
						Our Benifits
					</h2>
					<motion.div
						variants={fadeIn(".", 0.25)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="mt-3 w-32 max-w-full mx-auto h-[.1rem] bg-bluehover "
					/>
					<div className="mt-6 slide-container max-w-[1240px] mx-auto gap-6">
						<MultipleCarousel
							breakpoints={{ mobile: 1, sm: 2, md: 3, lg: 4 }}
							slides={4}
						>
							<BenifitCard
								title="Customized Solutions"
								desc="Tailor-made cloud architectures designed to meet your specific needs."
							/>
							<BenifitCard
								title="Expert Execution"
								desc="Professional implementation ensures a seamless transition to the cloud."
							/>
							<BenifitCard
								title="Enhanced Security"
								desc="Robust security measures to protect your data and ensure compliance."
							/>
							<BenifitCard
								title="Optimized Performance"
								desc="Continuous monitoring and optimization for peak efficiency."
							/>
							<BenifitCard
								title="Scalable Infrastructure"
								desc="Flexible solutions that grow with your business."
							/>
						</MultipleCarousel>
					</div>
				</div>

				{/* Testimonials */}
				<motion.div className="max-w-[1240px] mx-auto">
					<div className="section-margin section-padding gradient-1 text-white text-center">
						<h2
							variants={fadeIn("down", 0.2)}
							initial="hidden"
							whileInView={"show"}
							viewport={{ once: false, amount: 0.7 }}
							className="text-2xl font-semibold text-white"
						>
							Success Stories
						</h2>
						<motion.div
							variants={fadeIn(".", 0.25)}
							initial="hidden"
							whileInView={"show"}
							viewport={{ once: false, amount: 0.7 }}
							className="mt-3 w-32 max-w-full mx-auto h-[.1rem] bg-white "
						/>
						<div className="mt-6 slide-container dot-white">
							<MultipleCarousel
								breakpoints={{ mobile: 1, sm: 1, md: 2, lg: 3 }}
								slides={3}
							>
								<TestiCard
									name="clientX"
									desc="The design and implementation services from [Your Company] transformed our IT infrastructure. We now have a scalable and efficient cloud environment that meets all our needs."
									img=""
								/>
								<TestiCard
									name="clientX"
									desc="Thanks to NEX4,our transition to the cloud was smooth and hassle-free. Their expertise and support were invaluable throughout the process."
									img=""
								/>
								<TestiCard
									name="clientX"
									desc="With NEX4's monitoring services, we have significantly improved our cloud infrastructure's performance and security. Their proactive approach keeps us ahead of potential issues."
									img=""
								/>
							</MultipleCarousel>
						</div>
					</div>
				</motion.div>

				{/* <hr className="section-margin opacity-0 w-[90%] block mx-auto" /> */}

				{/* Get Started Today */}
				<div className="section-margin max-w-[1240px] drop-shadow-lg rounded-b-lg px-6 bg-white pb-8 space-y-8 text-center mx-auto">
					<p className="text-cyan-300 text-xs font-semibold uppercase">
						get started today
					</p>
					<motion.h2
						variants={fadeIn("up", 0.2)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="text-2xl  text-bluehover font-semibold"
					>	
						Ready to <span className="text-bold text-cyan-400">design and implement</span>
						a cloud solution <span className="text-cyan-400 font-bold"> tailored to your business</span>
					</motion.h2>
					<motion.p
						variants={fadeIn("up", 0.2)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="text-bluehover max-w-[1080px] mx-auto leading-loose tracking-wide"
					>
						Reach out to our experts to learn more about our design and implementation service and
						how we can help you.Take the first step towards a more reliable and 
						efficient cloud environment. Contact us now to discover how our monitoring services can benefit your organization.
					</motion.p>
					<motion.button
						variants={fadeIn(".", 0.2)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="px-4 btn-outline-primary"
						onClick={() => navigate("/faq")}
					>
						Contact Us
					</motion.button>
				</div>

				<hr className="section-margin w-[90%] mx-auto block" />

				{/* Related Partner */}
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
								infrastructure, it offers your business mature technology,
								complete services , golbal availability and a well-developed
								cloud ecosystem with an abunded of online resources{" "}
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default DesignAndImplementation;
