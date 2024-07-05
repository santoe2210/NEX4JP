/** @format */

import React from "react";
import aboutUsPhoto from "../assets/photo3.jpg";
import MissionCard from "../components/about/MissionCard";

import { BsFillShieldLockFill, BsShieldLockFill } from "react-icons/bs";
import { MdRocketLaunch } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdRecommend } from "react-icons/md";
import { motion } from "framer-motion";

import avatar from "../assets/avatar.jpeg";
import worldmap from "../assets/WorldMap.jpg";
import myanmar from "../assets/Myanmar.jpg";
import japan from "../assets/Japan.jpg";
import thailand from "../assets/Thailand.jpg";
import cambodia from "../assets/Cambodia.jpg";
import LocationCard from "../components/about/LocationCard";
import ServiceCard from "../components/about/ServiceCard";
import MultipleCarousel from "../components/MultipleCarousel";
import AwardCard from "../components/about/AwardCard";
import MemberCard from "../components/about/MemberCard";
import TestiCard from "../components/cloud_services/TestiCard";
import { fadeIn } from "../variants";

const AboutUs = () => {
	return (
		<section>
			<h2 className="text-3xl md:text-4xl font-semibold text-center">
				About Us
			</h2>
			<div className="w-24 h-1 gradient-1 mt-2 mx-auto"></div>

			{/* About Us Section */}
			<section className="section-margin outer-padding">
				<motion.img
					variants={fadeIn(".", 0.2)}
					initial="hidden"
					whileInView={"show"}
					viewport={{ once: false, amount: 0.7 }}
					className="w-full h-60 md:h-96 object-cover rounded-md drop-shadow-xl"
					src={aboutUsPhoto}
					alt="NEX3 Team"
				/>
				<motion.p
					variants={fadeIn("up", 0.2)}
					initial="hidden"
					whileInView={"show"}
					viewport={{ once: false, amount: 0.7 }}
					className="leading-loose font-medium text-lg text-justify md:text-center mt-4 md:mt-6 max-w-[1240px] mx-auto"
				>
					At NEX4 ICT Solutions, we are committed to delivering cutting-edge
					information and communication technology services. Based in Myanmar,
					we specialize in enterprise security, data center and network
					infrastructure, cloud solutions, and modern workspace solutions like
					Office 365. Our mission is to ensure security, speed, and reliability,
					making us a trusted partner for many leading banks. With a strong
					focus on customer satisfaction, we provide tailored consultation and
					technical support to meet the unique needs of our clients.
				</motion.p>
			</section>

			<hr className="w-[90%] mx-auto section-margin" />

			{/* Mission */}
			<section className="section-margin outer-padding">
				<h2 className="text-3xl font-semibold text-center">Our Mission</h2>
				<div className="w-24 h-1 gradient-1 mt-2 rounded-lg mx-auto"></div>

				<div className="mt-6 divide-y sm:divide-y-0 md:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
					<MissionCard
						icon={
							<BsShieldLockFill className="size-20 text-gray-700 text-center" />
						}
						titleBg=" bg-green-400"
						title={"Security"}
						list={[
							"Network",
							"Infrastructure",
							"Web Application",
							"Enterprise access Security",
						]}
					/>
					<MissionCard
						icon={
							<MdRocketLaunch className="size-20 text-gray-700  text-center" />
						}
						titleBg=" bg-yellow-400"
						title={"Speed"}
						list={[
							"Network",
							"Infrastructure",
							"Web Application",
							"Enterprise access Security",
						]}
					/>
					<MissionCard
						icon={
							<VscWorkspaceTrusted className="size-20 text-gray-700  text-center" />
						}
						titleBg=" bg-red-400"
						title={"Reliability"}
						list={[
							"Network",
							"Infrastructure",
							"Web Application",
							"Enterprise access Security",
						]}
					/>
					<MissionCard
						icon={
							<MdRecommend className="size-20 text-gray-700  text-center" />
						}
						titleBg=" bg-blue-400"
						title={"Satisfication"}
						list={[
							"Network",
							"Infrastructure",
							"Web Application",
							"Enterprise access Security",
						]}
					/>
				</div>
			</section>

			{/* NEX4 ICT SOLUTIONS */}
			<motion.section
				variants={fadeIn(".", 0.1)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: false, amount: 0.7 }}
				style={{
					backgroundImage: "url(src/assets/photo3.jpg)",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center center",
				}}
				className="section-margin"
			>
				<div className="w-full h-full section-bgImg-padding bg-gray-100/25 backdrop-blur-md">
					<motion.p
						variants={fadeIn("up", 0.2)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="text-md md:text-lg max-w-[1024px]  bg-gray-300/50 p-4 rounded-md tracking-wider text-center leading-relaxed mx-auto text-black font-semibold"
					>
						“At NEX4 ICT Solutions, we are dedicated to providing advanced ICT
						services, focusing on enterprise security, data center and network
						infrastructure, and cloud solutions. Our commitment to security,
						speed, and reliability ensures we meet the highest standards of
						customer satisfaction. Trusted by leading banks, we offer tailored
						consultation and technical support to address the unique needs of
						each client.”
					</motion.p>
					<motion.h2
						variants={fadeIn("up", 0.2)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="px-12 w-fit mx-auto text-xl md:text-2xl font-medium mt-6 pt-2 pb-1 bg-violet-400 text-white"
					>
						NEX4 ICT SOLUTIONS
					</motion.h2>
				</div>
			</motion.section>

			{/* Location */}
			<section className="section-margin max-w-[1300px] mx-auto outer-padding flex items-center flex-col md:flex-row justify-between gap-6">
				<div className="md:w-1/2 w-full">
					<h2 className="text-3xl font-semibold">Location</h2>
					<div className="w-24 h-1 gradient-1 mt-2 rounded-lg"></div>
					<motion.img
						variants={fadeIn("right", 0.2)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="mt-6 border rounded-md w-full aspect-square object-cover"
						src={worldmap}
						alt="World Map"
					/>
				</div>
				<div className="md:w-1/2 grid grid-cols-2 gap-2 md:gap-6">
					<LocationCard img={myanmar} name="Myanmar" />
					<LocationCard img={japan} name="Japan" />
					<LocationCard img={thailand} name="Thailand" />
					<LocationCard img={cambodia} name="Cambodia" />
				</div>
			</section>

			<hr className="w-[90%] mx-auto section-margin" />
			{/* Our Services */}
			<section className="section-margin outer-padding">
				<h2 className="text-3xl font-semibold text-center">Our Services</h2>
				<div className="w-24 h-1 gradient-1 mt-2 rounded-lg mx-auto"></div>

				<div className="mt-6 max-w-[1300px] mx-auto md:mt-12 divide-y sm:divide-y-0 grid grid-cols-1 sm:grid-cols-2 gap-2 gap-y-6 md:gap-x-6 md:gap-y-12 lg:grid-cols-3 place-content-center">
					<ServiceCard logo={avatar} name="AWS" bgName="bg-orange-300" />
					<ServiceCard
						logo={avatar}
						name="Netword Related Services"
						bgName="bg-green-300"
					/>
					<ServiceCard
						logo={avatar}
						name="System Related Services"
						bgName="bg-blue-300"
					/>
					<ServiceCard
						logo={avatar}
						name="Security Solution Services"
						bgName="bg-red-300"
					/>
					<ServiceCard
						logo={avatar}
						name="Microsoft Services"
						bgName="bg-yellow-200"
					/>
				</div>
			</section>

			{/* Text Only Section */}
			<section className="section-margin outer-padding">
				<div className="section-bgImg-padding gradient-1">
					<motion.h2
						variants={fadeIn("up", 0.2)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="text-xl md:text-2xl font-medium  max-w-[1080px] mx-auto text-center"
					>
						Delivering advanced security, infrastructure, and cloud services
						with a commitment to excellence and customer satisfaction.
					</motion.h2>
				</div>
			</section>

			{/* Partner Platform */}
			<section className="section-margin outer-padding">
				<h2 className="text-3xl font-semibold text-center">Partner Platform</h2>
				<div className="w-24 h-1 gradient-1 mt-2 rounded-lg mx-auto"></div>

				<div className="mt-6 max-w-[1300px] divide-y sm:divide-y-0 mx-auto md:mt-12 grid sm:grid-cols-2 gap-2 gap-y-6 md:gap-x-6 md:gap-y-12 md:grid-cols-4 place-content-center">
					<ServiceCard logo={avatar} name="AWS Partner Since 2019" />
					<ServiceCard logo={avatar} name="Cisco Gold Partner since 2017" />
					<ServiceCard logo={avatar} name="VMWARE Partner since 2016 " />
					<ServiceCard logo={avatar} name="PaloAlto Networks since 2015" />
					<ServiceCard
						logo={avatar}
						name="DellEMC Platinum Partner since 2017"
					/>
					<ServiceCard
						logo={avatar}
						name="Microsoft Cloud Service Provider and Solutions Partner, since 2017"
					/>
					<ServiceCard logo={avatar} name="Fortinet since 2018" />
					<ServiceCard logo={avatar} name="F5 since 2014" />
				</div>
			</section>

			{/* Our Team Member */}
			<section className="section-margin outer-padding">
				<div className="gradient-2">
					<div className="section-bgImg-padding max-w-[1280px] mx-auto gap-6 flex items-center md:justify-center flex-col md:flex-row">
						<div>
							<motion.h2
								variants={fadeIn("right", 0.2)}
								initial="hidden"
								whileInView={"show"}
								viewport={{ once: false, amount: 0.7 }}
								className="text-2xl text-center md:text-left md:text-4xl lg:text-6xl md:leading-snug"
							>
								<span className="text-white">Our</span>{" "}
								<br className="hidden md:block" /> Team{" "}
								<br className="hidden md:block" /> Member
							</motion.h2>
							<div className="w-24 md:hidden h-1 bg-gradient-to-tl from-cyan-300 to-white mt-2 rounded-lg mx-auto"></div>
						</div>

						<div className="mx-auto">
							<div className="grid grid-cols-1 sm:grid-cols-2 mx-auto gap-6 md:gap-12 w-fit">
								<MemberCard
									img=""
									name="Aung Thurein"
									roles={["Founder", "Managing Director"]}
								/>
								<MemberCard
									img=""
									name="Min Myat Soe"
									roles={["Co-Founder", "Director"]}
								/>
							</div>
							<div className="grid mt-6 grid-cols-1 sm:grid-cols-3 mx-auto gap-6 md:gap-12 w-fit">
								<MemberCard
									img=""
									name="Thant Zin Soe"
									roles={["Chief Architect"]}
								/>
								<MemberCard
									img=""
									name="Yan Naing Oo"
									roles={["Chief Technical Officer"]}
								/>
								<MemberCard
									img=""
									name="Kaung Htet Zae"
									roles={["Director", "Business Development"]}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Awards */}
			<section className="section-margin outer-padding">
				<h2 className="text-3xl font-semibold text-center">Awards</h2>
				<div className="w-24 h-1 gradient-1 mt-2 rounded-lg mx-auto"></div>

				<div className="mt-6 max-w-[1280px] mx-auto">
					<MultipleCarousel
						slides={3}
						breakpoints={{ mobile: 1, sm: 2, md: 2 }}
					>
						<AwardCard
							img=""
							awards={[
								"Enterprise Solution Provider in Myanmar",
								"Networking and Security Partner of the Year 2017",
							]}
						/>
						<AwardCard
							img=""
							awards={[
								"Premier Partner Advanced Data Center",
								"Architecture Specialization Premier Partner of the Year Indochina (2016) (2017)",
								"Premier Certified Partner (2017)",
							]}
						/>
						<AwardCard
							img=""
							awards={[
								"Unity Gold Partner in Myanmar",
								"F5 Networks High Five Award of the Year (2014,2015)",
								"Extra – Mile Effort Award",
								"Top Partner of the Year ROSEAN (2016)",
								"Outstanding Dedication Commitment (2019)",
							]}
						/>
					</MultipleCarousel>
				</div>
			</section>

			<hr className="w-[90%] mx-auto section-margin" />

			{/* Our Clients */}
			<section className="section-margin outer-padding">
				<h2 className="text-3xl font-semibold text-center">Our Clients</h2>
				<div className="w-24 h-1 gradient-1 mt-2 rounded-lg mx-auto"></div>

				<div className="mt-6 max-w-[1300px] mx-auto md:mt-12 divide-y sm:divide-y-0 grid grid-cols-1 sm:grid-cols-2 gap-2 gap-y-6 md:gap-x-6 md:gap-y-12 lg:grid-cols-4 place-content-center">
					<ServiceCard logo={avatar} name="MNCS" bgName="bg-orange-300" />
					<ServiceCard
						logo={avatar}
						name="SME  and Large Enterprise"
						bgName="bg-green-300"
					/>
					<ServiceCard
						logo={avatar}
						name="System Related Services"
						bgName="bg-blue-300"
					/>
					<ServiceCard logo={avatar} name="Oil and Gas" bgName="bg-green-300" />
					<ServiceCard
						logo={avatar}
						name="Telecommunication Service Providers"
						bgName="bg-blue-300"
					/>
					<ServiceCard logo={avatar} icon="" name="Healthcare" bgName="bg-green-300" />
				</div>
			</section>

			{/* Testimonials */}
			<motion.section className="section-margin outer-padding">
				<div className="gradient-2">
					<div className="max-w-[1280px] mx-auto section-padding  text-white text-center">
						<h2
							variants={fadeIn("down", 0.2)}
							initial="hidden"
							whileInView={"show"}
							viewport={{ once: false, amount: 0.7 }}
							className="text-2xl font-semibold text-white"
						>
							Testimonials
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
				</div>
			</motion.section>
		</section>
	);
};

export default AboutUs;
