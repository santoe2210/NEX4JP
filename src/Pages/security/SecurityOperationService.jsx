/* eslint-disable react/no-unknown-property */
/** @format */

import React from "react";

import PageHeader from "../../components/_common/PageHeader";
import bg from "../../assets/icons/bg1.jpg";
import security from "../../assets/bg/security.png";
import WhatIsSecurity from "../../components/security_services/WhatIsSecurity";
import SectionBreak from "../../components/_common/SectionBreak";
import WhyChoose from "../../components/cloud_services/WhyChoose";
import SecurityKeyServices from "../../components/security_services/SecurityKeyServices";
import SecurityServiceCard from "../../components/security_services/SecurityServiceCard";
import AdvancedSecurityFeatures from "../../components/security_services/AdvancedSecurityFeatures";
import AdvancedSecurityCard from "../../components/security_services/AdvancedSecurityCard";
import TestiCard from "../../components/cloud_services/TestiCard";
import MultipleCarousel from "../../components/MultipleCarousel";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import BenifitCard from "../../components/cloud_services/BenifitCard";
import RelatedPartner from "../../components/_common/RelatedPartner";

const SecurityOperationService = () => {
	return (
		<div>
			<PageHeader bg={bg} title="Security Operation Service" />

			<div className="outer-padding">
				<WhatIsSecurity
					title="Secure Your Cloud Environment with Proactive Security Operations"
					desc="Protect your cloud infrastructure with our comprehensive security operation services, designed to detect, respond to, and mitigate threats in real-time."
				/>

				<SectionBreak />

				<SecurityKeyServices title={"Our Key Services"}>
					<SecurityServiceCard
						title="Continuous Monitoring and Threat Detection"
						photo={security}
						desc="Implement real-time monitoring of your cloud environment to detect and respond to potential threats instantly. Our advanced tools and techniques ensure your infrastructure is always secure."
					/>

					<SecurityServiceCard
						title="Incident Response and Management"
						photo={security}
						desc="Develop and manage effective incident response procedures. We work with you to handle security incidents swiftly and efficiently, minimizing impact and downtime."
					/>

					<SecurityServiceCard
						title="Vulnerability Management"
						photo={security}
						desc="Conduct regular vulnerability assessments and implement patch management strategies. Our proactive approach helps identify and remediate security weaknesses before they can be exploited."
					/>

					<SecurityServiceCard
						title="Security Information and Event Management (SIEM)"
						photo={security}
						desc="Leverage SIEM tools to correlate and analyze security events across your cloud infrastructure. Our experts provide continuous oversight to detect and respond to anomalies."
					/>
				</SecurityKeyServices>

				<WhyChoose
					img={bg}
					title="Why Security Operations Matter"
					desc="In the evolving landscape of cloud computing, robust security operations are essential to safeguard your data and applications. Our security operation services provide continuous protection and peace of mind."
				/>

				<AdvancedSecurityFeatures title={"Advanced Security Features"}>
					<AdvancedSecurityCard
						title="Automated Security Policies"
						desc="Enforce security policies automatically to ensure compliance and reduce manual effort. Our automation solutions respond to security events in real-time to mitigate risks."
					/>
					<AdvancedSecurityCard
						title="Threat Intelligence Integration"
						desc="Integrate threat intelligence to enhance your security posture. We provide actionable insights and share threat intelligence to keep you ahead of potential threats."
					/>
					<AdvancedSecurityCard
						title="Cloud Security Posture Management (CSPM)"
						desc="Continuously assess and improve your cloud security posture. We provide recommendations and implement changes to ensure your cloud environment is always secure."
					/>
				</AdvancedSecurityFeatures>

				<SectionBreak />

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
							breakpoints={{ mobile: 1, sm: 2, md: 3, lg: 3 }}
							slides={3}
						>
							<BenifitCard
								title="Proactive Security Measures"
								desc="Protect your data and infrastructure with proactive security strategies."
							/>
							<BenifitCard
								title="Reduced Risk and Downtime"
								desc="Minimize the impact of security incidents and ensure business continuity."
							/>
							<BenifitCard
								title="Peace of Mind"
								desc="Rest assured that your cloud environment is secure and compliant with industry standards."
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
						Ready to <span className="text-bold text-cyan-400">enhance </span>{" "}
						your{" "}
						<span className="text-cyan-400 font-bold">CLOUD SECURITY ?</span>
					</motion.h2>
					<motion.p
						variants={fadeIn("up", 0.2)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="text-bluehover max-w-[1080px] mx-auto leading-loose tracking-wide"
					>
						Get in touch with our experts to learn more about our security
						operation services. Secure Your Cloud Today Take the first step
						towards a more secure cloud environment. Contact us now to discover
						how our security operation services can protect your business from
						evolving threats.
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

export default SecurityOperationService;
