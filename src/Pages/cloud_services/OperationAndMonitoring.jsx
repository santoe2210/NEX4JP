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

import {MdAddAlert} from "react-icons/md";
import { LuDatabase } from "react-icons/lu";
import { PiSecurityCamera } from "react-icons/pi";
import {MdDashboard} from "react-icons/md";
import { IoIosTime } from "react-icons/io";

import aws from "../../assets/aws1.jpg";
import WhyMonitor from "../../assets/WhyMonitor.jpg";
import { Link, useNavigate } from "react-router-dom";
import WhyChoose from "../../components/cloud_services/WhyChoose";

const OperationAndMonitoring = () => {
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
					Cloud Operation and Monitoring Services
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
					Ensure Optimal Performance and Security with Comprehensive Cloud Monitoring
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
					Keep your cloud infrastructure secure and running smoothly with our advanced monitoring services. 
					We provide real-time insights and proactive management to maintain peak performance and 
					address issues before they impact your business.
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
						Our Key Monitoring Services
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
						icon={<IoIosTime className=" size-full text-cyan-400" />}
						title="Real-Time Performance Monitoring "
						desc="Track the performance of your cloud infrastructure in real-time. We monitor key metrics and system health to ensure your applications and services run smoothly."
					/>
					<KeyCard
						img=""
						icon={<PiSecurityCamera className=" size-[80%] text-cyan-400" />}
						title="Security Monitoring "
						desc="Protect your cloud environment with continuous security monitoring. We detect and respond to potential threats, ensuring your data remains secure and compliant with industry standards."
					/>
					<KeyCard
						img=""
						icon={<LuDatabase className=" size-[80%] text-cyan-400" />}
						title="Resource Utilization Tracking  "
						desc="Optimize your cloud resources by monitoring usage patterns. Our services help you manage capacity, avoid over-provisioning, and reduce costs."
					/>
					<KeyCard
						img=""
						icon={
							<MdAddAlert className=" size-[90%] text-cyan-400" />
						}
						title=" Automated Alerts and Notifications "
						desc="Receive instant alerts and notifications for any unusual activity or performance degradation. Our automated system ensures you are always informed and can act quickly to resolve issues."
					/>
					<KeyCard
						img=""
						icon={<MdDashboard className=" size-[85%] text-cyan-400" />}
						title="Customizable Dashboards and Reports  "
						desc="Access detailed dashboards and reports tailored to your specific needs. Gain insights into your cloud environment's performance, security, and resource utilization."
					/>
				</div>

				{/* Why Choose Section */}
				<WhyChoose
					img={WhyMonitor}
					title="Why Choose Our Monitoring Services?"
					desc="In the dynamic cloud environment, continuous monitoring is crucial to ensure reliability, security, and performance. 
					Our cloud monitoring services offer 24/7 oversight, helping you detect and resolve issues swiftly 
					while optimizing resource utilization."
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
								title="Enhanced Security"
								desc="Continuous monitoring to protect your data and infrastructure."
							/>
							<BenifitCard
								title="Improved Performance"
								desc="Real-time insights to ensure optimal performance of your cloud services."
							/>
							<BenifitCard
								title="Cost Efficiency"
								desc="Optimize resource utilization and reduce unnecessary expenses."
							/>
							<BenifitCard
								title="Proactive Issue Resolution"
								desc="Detect and address issues before they impact your operations."
							/>
							<BenifitCard
								title="Actionable Insights"
								desc="Customizable dashboards and reports for informed decision-making."
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
									desc="With NEX4's monitoring services, we have significantly improved our cloud infrastructure's performance and security. Their proactive approach keeps us ahead of potential issues."
									img=""
								/>
								<TestiCard
									name="clientX"
									desc="The real-time monitoring and automated alerts provided have been invaluable. We can now address issues immediately and maintain seamless operations."
									img=""
								/>
								<TestiCard
									name="clientX"
									desc="With [Your Company]'s monitoring services, we have significantly improved our cloud infrastructure's performance and security. Their proactive approach keeps us ahead of potential issues."
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
						Ready to <span className="text-bold text-cyan-400">enhance your  </span> cloud infrastructure 
						<span className="text-cyan-400 font-bold"> with our monitoring services</span>
					</motion.h2>
					<motion.p
						variants={fadeIn("up", 0.2)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="text-bluehover max-w-[1080px] mx-auto leading-loose tracking-wide"
					>
						Reach out our experts to learn more about our migration service and
						how we can help you. Take the first step towards a more reliable and efficient cloud environment. 
						Contact us now to discover how our monitoring services can benefit your organization.
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

export default OperationAndMonitoring;
