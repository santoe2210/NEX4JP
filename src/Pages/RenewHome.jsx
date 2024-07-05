/** @format */

import { Button, Card, Carousel } from "flowbite-react";
import React from "react";
import SlideCard from "../components/home/SlideCard";

import bgImg1 from "../assets/bg/carouselBg1.jpg";
import sliderPhoto1 from "../assets/photo3.jpg";
import avatar from "../assets/avatar.jpeg";

import MultipleCarousel from "../components/MultipleCarousel";
import WhyChooseCard from "../components/home/WhyChooseCard";
import ApprovementCard from "../components/home/ApprovementCard";
import KeyCard from "../components/home/KeyCard";
import { HomeBlog } from "../components/Blog";

import { GiAchievement } from "react-icons/gi";
import { FaTasks, FaServer } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import {
	MdOutlineSecurity,
	MdOutlineMiscellaneousServices,
	MdOutlineSpeed,
	MdSupportAgent,
} from "react-icons/md";
import { TiGroupOutline } from "react-icons/ti";

import imp from "../assets/icons/implementation.png";
import AI from "../assets/icons/AI.jpg";
import ms1 from "../assets/icons/ms1.jpg";
import net from "../assets/icons/network.jpg";
import security from "../assets/icons/security.jpg";
import partners from "../assets/partners.jpg"
import engineeringTeam from "../assets/engineeringTeam.jpg"


const RenewHome = () => {
	return (
		<div>
			{/* Carousel */}
			<div>
				<Carousel>
					<SlideCard
						bgImg={bgImg1}
						title="Delivering advanced security, infrastructure, and cloud services with
					a commitment to excellence and customer satisfaction.​"
						to="/about"
						img={sliderPhoto1}
					/>
					<SlideCard
						bgImg={bgImg1}
						title="Empower your business with our cloud services, designed to boost efficiency, scalability, and security. Experience the freedom of seamless integration and unparalleled support tailored to your unique needs.​"
						to="/about"
					/>
					<SlideCard
						bgImg={bgImg1}
						title="Our mission is to deliver innovative ICT solutions that enhance security, efficiency, and reliability. We strive to exceed customer expectations through personalized support and cutting-edge technology, ensuring your business stays ahead in a rapidly evolving digital landscape.​"
						to="/about"
					/>
				</Carousel>
			</div>

			{/* Approvement Section */}
			<section className="section-margin outer-padding grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
				<ApprovementCard
					icon={<GiAchievement className=" size-36 text-cyan-300" />}
					title="AWS Advanced Tier Partner in Myanmar"
					prize="1 st"
				/>
				<ApprovementCard
					icon={<FaTasks className=" size-28 text-cyan-300" />}
					title="Project Done"
					count="110"
				/>
				<ApprovementCard
					icon={<FaServer className=" size-28 text-cyan-300" />}
					title="Servers"
					count="180"
				/>
				<ApprovementCard
					icon={<PiCertificateFill className=" size-36 text-cyan-300" />}
					title="Certifiaction Awarded"
					count="80"
				/>
			</section>

			{/* Our Journey Section */}
			<section className="section-margin flex items-center gap-6 lg:gap-12 section-padding gradient-2">
				<div className="w-1/2 text-gray-800">
					<h2 className="text-4xl tracking-wider">
						<span className="text-xl tracking-wide">A Brief History Of</span>
						<br /> Our Journey
					</h2>

					<div className="w-24 h-1 rounded-lg gradient-1 mt-2"></div>
					<p className="mt-3 text-lg leading-relaxed text-justify">
						NEX4 was founded in 2013 with a mission to revolutionize network
						solutions through innovative technology and exceptional service.
						Starting as a small startup, NEX4 quickly grew by prioritizing
						customer satisfaction and adopting cutting-edge technologies. Over
						the years, the company expanded its offerings to include advanced
						network solutions, managed services, cloud computing, and robust
						cybersecurity measures. Today, NEX4 is a leader in the network
						services industry, known for its reliable, sustainable, and
						customer-centric approach
					</p>
				</div>
				<img
					className="w-1/2 object-cover rounded-md"
					src={sliderPhoto1}
					alt=""
				/>
			</section>

			{/* Why Choose NEX4 */}
			<section className="section-margin outer-padding text-center">
				<h2 className="text-3xl font-semibold">Why Choose NEX4</h2>
				<div className="w-24 h-1 gradient-1 mt-2 mx-auto"></div>
				<div className="mt-6">
					<MultipleCarousel
						breakpoints={{ mobile: 1, sm: 2, md: 3, lg: 4 }}
						slides={4}
					>
						<WhyChooseCard
							icon={<MdOutlineSecurity className=" size-32 text-white" />}
							title="Advanced Security"
							desc="NEX4 specializes in enterprise security, ensuring your data and systems are protected against threats."
						/>
						<WhyChooseCard
							icon={
								<MdOutlineMiscellaneousServices className=" size-32 text-white" />
							}
							title="Comprehensive Service"
							desc="From data center and network infrastructure to cloud solutions and modern workspace technologies, NEX4 offers a full suite of ICT services."
						/>
						<WhyChooseCard
							icon={<MdOutlineSpeed className=" size-36 text-white" />}
							title="Reliability and Speed"
							desc="NEX4 is committed to delivering reliable and fast solutions, enhancing your business operations."
						/>
						<WhyChooseCard
							icon={<MdSupportAgent className=" size-36 text-white" />}
							title="Tailored Support"
							desc="We provide personalized consultation and technical support to meet the unique needs of each client."
						/>
						<WhyChooseCard
							icon={<TiGroupOutline className=" size-36 text-white" />}
							title="Trusted Expertise"
							desc="Our expertise is trusted by leading banks and enterprises, reflecting our commitment to excellence and customer satisfaction."
						/>
					</MultipleCarousel>
				</div>
			</section>

			{/* <hr className="w-[90%] mx-auto section-margin" /> */}

			{/* Key Achievements */}
			{/* <section className="section-margin outer-padding text-center">
				<h2 className="text-3xl font-semibold">Key Achievements</h2>
				<div className="w-24 h-1 gradient-1 mt-2 mx-auto"></div>
				<div className="mt-6 max-w-7xl mx-auto md:mt-12 grid grid-cols-1 justify-items-stretch md:grid-cols-2 gap-6 md-gap-12">
					<KeyCard
						logo={avatar}
						achievements={[
							"First and only F5 Gold Partner in Myanmar",
							"Founders with extensive experience at F5",
							"Serving top banks and telecoms with ADCs and WAF solutions",
						]}
					/>
					<KeyCard
						logo={avatar}
						achievements={[
							"First and only F5 Gold Partner in Myanmar",
							"Founders with extensive experience at F5",
							"Serving top banks and telecoms with ADCs and WAF solutions",
						]}
					/>
				</div>
			</section> */}

			<hr className="w-[90%] mx-auto section-margin" />

			{/* Service List */}
			<section className="section-margin outer-padding text-center">
				<h2 className="text-3xl font-semibold">Service List</h2>
				<div className="w-24 h-1 gradient-1 mt-2 mx-auto"></div>
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-6 items-center justify-center">
					<Card
						className="max-w-xs hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300"
						imgAlt="Meaningful alt text for an image that is not purely decorative"
						imgSrc={imp}
					>
						<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							Cloud Related Service
						</h5>
						<p className="font-normal text-gray-700 dark:text-gray-400"></p>
						<Button href="/service4">
							Read more
							<svg
								className="-mr-1 ml-2 h-4 w-4"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
							</svg>
						</Button>
					</Card>
					<Card
						className="max-w-xs hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300"
						imgAlt="Meaningful alt text for an image that is not purely decorative"
						imgSrc={AI}
					>
						<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							Security Solution Service
						</h5>
						<p className="font-normal text-gray-700 dark:text-gray-400"></p>
						<Button href="/developing">
							Read more
							<svg
								className="-mr-1 ml-2 h-4 w-4"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
							</svg>
						</Button>
					</Card>
					<Card
						className="max-w-xs hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300"
						imgAlt="Meaningful alt text for an image that is not purely decorative"
						imgSrc={ms1}
					>
						<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							Microsoft Solution Service
						</h5>
						<p className="font-normal text-gray-700 dark:text-gray-400"></p>
						<Button href="/developing">
							Read more
							<svg
								className="-mr-1 ml-2 h-4 w-4"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
							</svg>
						</Button>
					</Card>
					<Card
						className="max-w-xs hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300"
						imgAlt="Meaningful alt text for an image that is not purely decorative"
						imgSrc={net}
					>
						<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							Network Related Service
						</h5>
						<p className="font-normal text-gray-700 dark:text-gray-400"></p>
						<Button href="/developing">
							Read more
							<svg
								className="-mr-1 ml-2 h-4 w-4"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
							</svg>
						</Button>
					</Card>
				</div>
				<div className="flex items-center justify-center mb-10 my-12 px-10">
					<Button
						className="items-center justify-center rounded-md"
						href="/service"
					>
						View All Services
						<svg
							className="-mr-1 ml-2 h-4 w-4 ite"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</Button>
				</div>
			</section>

			<hr className="w-[90%] mx-auto section-margin" />

			{/* Partners And Alliances */}
			<section className=" section-margin outer-padding text-center">
				<h2 className="text-3xl font-semibold">Partners And Alliances</h2>
				<div className="w-24 h-1 gradient-1 mt-2 mx-auto"></div>
				<img
					className="w-full mt-6 object-cover"
					src={partners}
					alt="NEX$ Partners And Alliances"
				/>
			</section>

			<hr className="w-[90%] mx-auto section-margin" />

			{/* Our Strong Engineering Team */}
			<section className=" section-margin outer-padding text-center">
				<h2 className="text-3xl font-semibold">Our Strong Engineering Team</h2>
				<div className="w-24 h-1 gradient-1 mt-2 mx-auto"></div>
				<img
					className="w-full mt-6 object-cover"
					src={engineeringTeam}
					alt="NEX$ Our Strong Engineering Team"
				/>
			</section>

			<hr className="w-[90%] mx-auto section-margin" />

			{/* Blogs */}
			<section className=" section-margin outer-padding text-center">
				<h2 className="text-3xl font-semibold">Blogs</h2>
				<div className="w-24 h-1 gradient-1 mt-2 mx-auto"></div>
				<div className="mt-6">
					<HomeBlog />
				</div>
			</section>
		</div>
	);
};

export default RenewHome;
