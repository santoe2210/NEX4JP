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
import { MdSupportAgent } from "react-icons/md";
import { LuDatabase } from "react-icons/lu";
import { IoApps } from "react-icons/io5";

import aws from "../../assets/aws1.jpg";
import cloudMigration from "../../assets/cloudMigration.jpg";
import { Link, useNavigate } from "react-router-dom";
import WhyChoose from "../../components/cloud_services/WhyChoose";

const CloudMigration = () => {
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
					Cloud Migration Services
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
					Seamlessly Transition to the Cloud with Our Expert Migration Services
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
					Unlock the full potential of cloud computing with our comprehensive
					migration services. We ensure a smooth, secure, and efficient
					transition of your applications and data to the cloud.
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
						Our Key Migration Services
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
						title="Assessment and Planning "
						desc="We conduct a thorough assessment of your current infrastructure and applications. Based on this analysis, we create a detailed migration plan tailored to your specific needs"
					/>
					<KeyCard
						img=""
						icon={<IoApps className=" size-[80%] text-cyan-400" />}
						title="Application Migration "
						desc="Move your applications to the cloud with minimal disruption. Our experts handle the entire process, ensuring compatibility, performance, and security."
					/>
					<KeyCard
						img=""
						icon={<LuDatabase className=" size-[80%] text-cyan-400" />}
						title="Data Migration "
						desc="Securely transfer your data to the cloud. We use advanced tools and techniques to ensure data integrity and minimize risks during the migration process."
					/>
					<KeyCard
						img=""
						icon={
							<MdOutlineCloudUpload className=" size-[90%] text-cyan-400" />
						}
						title=" Hybrid Cloud Integration "
						desc="Integrate your on-premises infrastructure with cloud services for a seamless hybrid environment. Our solutions enable you to leverage the best of both worlds."
					/>
					<KeyCard
						img=""
						icon={<MdSupportAgent className=" size-[85%] text-cyan-400" />}
						title="Post-Migration Support  "
						desc="Receive ongoing support after migration to ensure everything runs smoothly. We offer monitoring, troubleshooting, and optimization services to keep your cloud environment efficient and secure."
					/>
				</div>

				{/* Why Choose Section */}
				<WhyChoose
					img={cloudMigration}
					title="Why Choose Our Migration Services?"
					desc="Migrating to the cloud can be complex and challenging. Our
						experienced team simplifies this process, minimizing downtime and
						ensuring your business continues to operate without interruption."
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
								title="Reduced Downtime"
								desc="Minimize disruptions to your business operations during migration."
							/>
							<BenifitCard
								title="Enhanced Security"
								desc="Ensure your data and applications are securely migrated and protected."
							/>
							<BenifitCard
								title="Scalability"
								desc="Leverage the scalability of the cloud to meet your growing business needs."
							/>
							<BenifitCard
								title="Cost Efficiency"
								desc="Reduce operational costs with optimized cloud solutions."
							/>
							<BenifitCard
								title="Expert Guidance"
								desc="Benefit from our team’s expertise and experience in cloud migrations."
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
									desc="With [Your Company]'s monitoring services, we have significantly improved our cloud infrastructure's performance and security. Their proactive approach keeps us ahead of potential issues."
									img=""
								/>
								<TestiCard
									name="Client"
									desc="With [Your Company]'s monitoring services, we have significantly improved our cloud infrastructure's performance and security. Their proactive approach keeps us ahead of potential issues."
									img=""
								/>
								<TestiCard
									name="Client"
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
						Ready to <span className="text-bold text-cyan-400">migrate</span> to
						the <span className="text-cyan-400 font-bold">CLOUD ?</span>
					</motion.h2>
					<motion.p
						variants={fadeIn("up", 0.2)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="text-bluehover max-w-[1080px] mx-auto leading-loose tracking-wide"
					>
						Reach out our experts to learn more about our migration service and
						how we can help you. Take the first step forwards a more efficient
						and scalable IT infrastructure. Contact us now to discover how our
						migration services can benifit your orgainzation.
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

export default CloudMigration;
