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
import { MdOutlineCloudUpload } from "react-icons/md";
import { LuDatabase } from "react-icons/lu";
import { GrResources } from "react-icons/gr";
import { RiInstanceFill } from "react-icons/ri";
import { IoPricetagsOutline } from "react-icons/io5";
import { FaTools } from "react-icons/fa";

import aws from "../../assets/aws1.jpg";
import WhyCost from "../../assets/WhyCost.jpg";
import { Link, useNavigate } from "react-router-dom";
import WhyChoose from "../../components/cloud_services/WhyChoose";

const CostOptimization = () => {
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
					Cost Optimization Service
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
					Maximize Your Cloud ROI with Expert Cost Optimization
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
					Unlock significant savings and improve your cloud resource efficiency with our tailored cost optimization services.
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
						Our Key Cost Optimization Services
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
						title="Cost Analysis and Assessment "
						desc="We conduct a thorough analysis of your current cloud spending, identifying areas where you can save. Our detailed assessment provides actionable insights to optimize costs without compromising performance."
					/>
					<KeyCard
						img=""
						icon={<GrResources className=" size-[80%] text-cyan-400" />}
						title="Resource Management "
						desc="Optimize your resource allocation to reduce waste and ensure that you're only paying for what you need. We help you right-size your resources to match your workload requirements."
					/>
					<KeyCard
						img=""
						icon={<LuDatabase className=" size-[80%] text-cyan-400" />}
						title="Pricing Model Optimization "
						desc="Evaluate and transition to the most cost-effective pricing plans. We analyze your usage patterns to recommend the best pricing models, including Reserved Instances and Savings Plans."
					/>
					<KeyCard
						img=""
						icon={
							<MdOutlineCloudUpload className=" size-[90%] text-cyan-400" />
						}
						title=" Auto-Scaling and Load Balancing "
						desc="Implement auto-scaling and load balancing strategies to ensure your resources are used efficiently and cost-effectively. Scale up during peak times and scale down when demand is low to save on costs."
					/>
				</div>
				{/* Advanced Strategies */}
				<div className="text-center  section-margin rounded-tl-2xl space-y-6 rounded-br-2xl">
					<h2
						variants={fadeIn("down", 0.2)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="text-2xl font-semibold text-bluehover"
					>
						Advanced Strategies for Savings
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
						icon={<RiInstanceFill className=" size-full text-cyan-400" />}
						title="Spot Instances Utilization "
						desc="Leverage spot instances for significant savings on workloads that are flexible with interruption. Our strategies ensure you benefit from the lowest possible rates while maintaining operational efficiency."
					/>
					<KeyCard
						img=""
						icon={<IoPricetagsOutline className=" size-[80%] text-cyan-400" />}
						title="Cost Allocation and Tagging "
						desc="Implement best practices for cost allocation and tagging to track and manage your cloud expenses effectively. Gain better visibility into your spending and make informed decisions."
					/>
					<KeyCard
						img=""
						icon={<FaTools className=" size-[80%] text-cyan-400" />}
						title="Cloud Cost Management Tools "
						desc="Utilize advanced cloud cost management tools to monitor and control your expenses in real-time. Custom dashboards and automated alerts keep you informed and in control."
					/>
				</div>

				{/* Why Choose Section */}
				<WhyChoose
					img={WhyCost}
					title="Why Cost Optimization Matters?"
					desc="Cloud services offer incredible flexibility and scalability, but without proper cost management, expenses can quickly spiral out of control. 
					Our cost optimization service ensures you get the most value from your cloud investment."
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
								title="Reduced Cloud Spend"
								desc="Achieve demonstrable cost savings and improve your bottom line."
							/>
							<BenifitCard
								title="Enhanced Security"
								desc="Optimize resource usage and eliminate waste."
							/>
							<BenifitCard
								title="Financial Transparency"
								desc="Gain clear insights into your cloud spending with detailed reports and dashboards."
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
									desc="Thanks to the cost optimization strategies implemented by the team, we reduced our cloud spending by 30% while maintaining high performance and reliability."
									img=""
								/>
								<TestiCard
									name="Client"
									desc="The comprehensive cost analysis provided by the service revealed several inefficiencies in our resource usage, which we quickly addressed to achieve significant savings."
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
						Ready to <span className="text-bold text-cyan-400">start saving on</span> your cloud costs?
					</motion.h2>
					<motion.p
						variants={fadeIn("up", 0.2)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="text-bluehover max-w-[1080px] mx-auto leading-loose tracking-wide"
					>
						Reach out to our experts for a consultation. Take the first step towards maximizing your cloud ROI. 
						Contact us now to learn more about our cost optimization services and how we can help you achieve your financial goals.
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

export default CostOptimization;
