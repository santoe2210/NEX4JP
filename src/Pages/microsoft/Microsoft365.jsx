/** @format */

import React from "react";

import PageHeader from "../../components/_common/PageHeader";
import bg from "../../assets/icons/bg1.jpg";
import microsoft from "../../assets/microsoft_key_services.svg";
import microsoft_bg from "../../assets/microsoftbg.jpeg";
import SectionBreak from "../../components/_common/SectionBreak";
import WhyChoose from "../../components/cloud_services/WhyChoose";
import AdvancedSecurityFeatures from "../../components/security_services/AdvancedSecurityFeatures";
import AdvancedSecurityCard from "../../components/security_services/AdvancedSecurityCard";
import TestiCard from "../../components/cloud_services/TestiCard";
import MultipleCarousel from "../../components/MultipleCarousel";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import BenifitCard from "../../components/cloud_services/BenifitCard";
import RelatedPartner from "../../components/_common/RelatedPartner";
import MicrosoftCTA from "../../components/microsoft/MicrosoftCTA";
import MicrosoftKeyServices from "../../components/microsoft/MicrosoftKeyServices";
import MicrosoftServiceCard from "../../components/microsoft/MicrosoftServiceCard";

const Microsoft365 = () => {
	return (
		<div className="max-w-full overflow-x-hidden">
			<PageHeader bg={bg} title="Microsoft 365" />

			<div className="outer-padding">
				<MicrosoftCTA
					title="Secure Your Cloud Environment with Proactive Security Operations"
					desc="Protect your cloud infrastructure with our comprehensive security operation services, designed to detect, respond to, and mitigate threats in real-time."
				/>

				<SectionBreak />

				<MicrosoftKeyServices title={"Key Services"}>
					<div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 divide-y  md:divide-y-0 md:gap-8 lg:gap-12">
						<MicrosoftServiceCard
							photo={microsoft}
							title="Migration and Deployment"
							desc="Seamlessly transition to Microsoft 365 with our expert migration and deployment services. We ensure a smooth setup, minimizing disruption and maximizing productivity from day one."
						/>

						<MicrosoftServiceCard
							photo={microsoft}
							title="Productivity Tools "
							desc="Access the latest versions of Word, Excel, PowerPoint, and Outlook. Microsoft 365 enables your team to create, collaborate, and communicate more effectively."
						/>

						<MicrosoftServiceCard
							photo={microsoft}
							title="Collaboration Solutions "
							desc="Facilitate teamwork with Microsoft Teams and SharePoint. Enable real-time collaboration through chat, video conferencing, file sharing, and project management tools."
						/>

						<MicrosoftServiceCard
							photo={microsoft}
							title="Security and Compliance "
							desc="Protect your data with advanced security features and compliance tools. Microsoft 365 offers data encryption, threat protection, and regulatory compliance to safeguard your organization."
						/>

						<MicrosoftServiceCard
							photo={microsoft}
							title="Cloud Storage "
							desc="Store, access, and share your files securely with OneDrive for Business. Ensure your data is protected and easily accessible from any device."
						/>
					</div>
				</MicrosoftKeyServices>

				<WhyChoose
					img={microsoft_bg}
					title="Why Choose Microsoft 365?"
					desc="Microsoft 365 offers a robust suite of cloud-based tools and services that empower organizations to work efficiently and securely from anywhere. With applications like Word, Excel, Teams, and OneDrive, your team can stay connected and productive, whether in the office or on the go."
				/>

				<AdvancedSecurityFeatures
					title={"Benifits of Microsoft 365"}
					headingleft
				>
					<AdvancedSecurityCard
						title="Enhanced Productivity"
						desc="Equip your team with powerful tools to increase efficiency and collaboration."
					/>
					<AdvancedSecurityCard
						title="Flexibility and Mobility"
						desc="Access your applications and data from anywhere, on any device."
					/>
					<AdvancedSecurityCard
						title="Robust Security"
						desc="Protect your data with advanced security measures and compliance features."
					/>
					<AdvancedSecurityCard
						title="Cost Efficiency"
						desc="Streamline IT management and reduce costs with a single integrated solution."
					/>
					<AdvancedSecurityCard
						title="Scalability"
						desc="Scale your services as your business grows, ensuring you always have the tools you need."
					/>
				</AdvancedSecurityFeatures>

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
						Ready to <span className="text-bold text-cyan-400">enhance </span>{" "}
						your organizatoin with {" "}
						<span className="text-cyan-400 font-bold">MICROSOFT 365 ?</span>
					</motion.h2>
					<motion.p
						variants={fadeIn("up", 0.2)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="text-bluehover max-w-[1080px] mx-auto leading-loose tracking-wide"
					>
						Reach out to our experts to learn more about our services. Transform
						Your Workplace with Microsoft 365 Take the first step towards a more
						productive and secure workplace. Contact us now to discover how our
						Microsoft 365 services can benefit your organization.
					</motion.p>
					<motion.button
						variants={fadeIn(".", 0.2)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="px-4 btn-outline-primary"
						// onClick={() => navigate("/faq")}
					>
						Contact Us
					</motion.button>
				</div>

				<SectionBreak />

				<RelatedPartner />
			</div>
		</div>
	);
};

export default Microsoft365;
