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

import { MdDesignServices } from "react-icons/md";
import { MdOutlineCloudUpload } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { SiMicrostrategy } from "react-icons/si";
import { MdOutlineCloudSync } from "react-icons/md";



import aws from "../../assets/aws1.jpg";
import WhyProfessional from "../../assets/WhyProfessional.jpg";
import { Link, useNavigate } from "react-router-dom";
import WhyChoose from "../../components/cloud_services/WhyChoose";

const Professional = () => {
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
					Professional Cloud Services
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
					Maximize Your Cloud Potential with Expert Professional Services
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
					Leverage our expert professional services to optimize your cloud infrastructure, enhance performance, and 
					ensure seamless operations. Our team of experienced cloud professionals is dedicated 
					to helping you achieve your business goals through tailored solutions and strategic guidance.
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
						Our Key Professional Services
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
						icon={<SiMicrostrategy className=" size-[80%] text-cyan-400" />}
						title="Cloud Strategy and Consulting  "
						desc="Develop a comprehensive cloud strategy aligned with your business objectives. Our consultants work with you to assess your needs, plan your cloud journey, and implement best practices."
					/>
					<KeyCard
						img=""
						icon={<MdDesignServices className=" size-[80%] text-cyan-400" />}
						title="Cloud Architecture Design "
						desc="Design robust and scalable cloud architectures tailored to your specific requirements. Our architects ensure your infrastructure is optimized for performance, security, and cost-efficiency."
					/>
					<KeyCard
						img=""
						icon={<MdOutlineCloudSync className=" size-[80%] text-cyan-400" />}
						title="Migration Services "
						desc="Seamlessly migrate your applications, data, and workloads to the cloud with minimal disruption. Our migration experts handle the entire process, ensuring a smooth transition and immediate benefits."
					/>
					<KeyCard
						img=""
						icon={
							<MdOutlineCloudUpload className=" size-[90%] text-cyan-400" />
						}
						title=" Cloud Management and Optimization "
						desc="Manage and optimize your cloud environment for peak performance and cost-effectiveness. Our ongoing support and optimization services ensure your cloud infrastructure evolves with your business needs."
					/>
					<KeyCard
						img=""
						icon={<MdOutlineSecurity className=" size-[85%] text-cyan-400" />}
						title="Security and Compliance  "
						desc="Implement comprehensive security measures and ensure compliance with industry standards. Our security professionals help protect your cloud environment against threats and vulnerabilities."
					/>
				</div>

				{/* Why Choose Section */}
				<WhyChoose
					img={WhyProfessional}
					title="Why Choose Our Professional Services?"
					desc="In the ever-evolving landscape of cloud technology, having a trusted partner can make all the difference. Our professional services provide the expertise and support needed to navigate the complexities of cloud adoption, 
					management, and optimization, ensuring your organization remains competitive and agile."
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
								title="Expert Guidance"
								desc="Gain insights from industry experts to enhance your cloud strategy and operations."
							/>
							<BenifitCard
								title="Optimized Performance"
								desc="Ensure your cloud infrastructure is running at its best, with tailored optimizations."
							/>
							<BenifitCard
								title="Cost Efficiency"
								desc="Reduce costs through efficient cloud management and resource optimization."
							/>
							<BenifitCard
								title="Enhanced Security"
								desc="Protect your data and applications with robust security and compliance solutions."
							/>
							<BenifitCard
								title="Seamless Migration"
								desc="Transition to the cloud smoothly with minimal disruption and maximum benefits."
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
									name="Client"
									desc="Partnering with NEX4 for our cloud migration was the best decision we made. Their expertise and seamless execution transformed our IT infrastructure."
									img=""
								/>
								<TestiCard
									name="Client"
									desc="The strategic guidance and ongoing support from NEX4 have been invaluable. Our cloud environment is now more secure, efficient, and aligned with our business goals."
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
						Ready to <span className="text-bold text-cyan-400">elevate your cloud strategy with </span> our professional services?
					</motion.h2>
					<motion.p
						variants={fadeIn("up", 0.2)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="text-bluehover max-w-[1080px] mx-auto leading-loose tracking-wide"
					>
						Reach out our experts to learn more about our professional service and
						how we can help you. Take the first step towards a more efficient and secure cloud environment. 
						Contact us now to explore how our professional services can benefit your organization.
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

export default Professional;
