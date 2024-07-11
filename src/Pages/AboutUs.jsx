/* eslint-disable react/no-unknown-property */
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
import AWS from "../assets/aws.png";
import Network from "../assets/icons/Op12.png";
import Security from "../assets/icons/Op13.png";
import Microsoft from "../assets/icons/microsoft.png";
import System from "../assets/icons/Op10.png";
import F5 from "../assets/F5.png";
import Cisco from "../assets/icons/cisco.jpg";
import vmware from "../assets/icons/vm1.jpg";
import p3 from "../assets/icons/partner3.png";
import p4 from "../assets/icons/p4.jpg";
import p5 from "../assets/icons/p5.png";
import c1 from "../assets/icons/c1.jpg";
import c2 from "../assets/icons/c2.jpg";
import c3 from "../assets/icons/c3.jpg";
import c4 from "../assets/icons/c4.jpg";
import c5 from "../assets/icons/c5.jpg";
import c6 from "../assets/icons/c6.jpg";
import p1 from "../assets/icons/p1.png";
import p2 from "../assets/icons/p2.png";
import profile3 from "../assets/icons/p3.png";
import profile4 from "../assets/icons/profile4.png";
import profile5 from "../assets/icons/profile5.png";

const AboutUs = () => {
	return (
		<section>
			<h2 className="text-3xl md:text-4xl font-semibold text-center">
				NEX4について
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
					NEX4 ICT
					Solutionsでは、最先端の情報通信技術サービスを提供することをお約束します。ミャンマーを拠点とし、
					企業向けセキュリティ、データセンター、ネットワーク・インフラ、クラウド・ソリューション、
					Office
					365などの最新ワークスペース・ソリューションを専門としています。当社のミッションは、
					セキュリティ、スピード、信頼性を確保することであり、多くの大手銀行から信頼されるパートナーとなっています。
					顧客満足度を重視し、お客様固有の要件に合わせたコンサルティングと技術サポートを提供しています。
				</motion.p>
			</section>

			<hr className="w-[90%] mx-auto section-margin" />

			{/* Mission */}
			<section className="section-margin outer-padding">
				<h2 className="text-3xl font-semibold text-center">ミッション</h2>
				<div className="w-24 h-1 gradient-1 mt-2 rounded-lg mx-auto"></div>

				<div className="mt-6 divide-y sm:divide-y-0 md:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
					<MissionCard
						icon={
							<BsShieldLockFill className="size-20 text-gray-700 text-center" />
						}
						titleBg=" bg-green-400"
						title={"セキュリティ"}
						list={[
							"ネットワーク",
							"インフラストラクチャ",
							"ウェブアプリケーション",
							"企業アクセスセキュリティ",
						]}
					/>
					<MissionCard
						icon={
							<MdRocketLaunch className="size-20 text-gray-700  text-center" />
						}
						titleBg=" bg-yellow-400"
						title={"スピード"}
						list={[
							"ネットワークの制御",
							"パフォーマンス",
							"高速化",
							"管理可能な ネットワークインフラ",
						]}
					/>
					<MissionCard
						icon={
							<VscWorkspaceTrusted className="size-20 text-gray-700  text-center" />
						}
						titleBg=" bg-red-400"
						title={"信頼性"}
						list={[
							"管理しやすい",
							"スケーラブル",
							"柔軟な冗長性",
							"俊敏なネットワークインフラ",
						]}
					/>
					<MissionCard
						icon={
							<MdRecommend className="size-20 text-gray-700  text-center" />
						}
						titleBg=" bg-blue-400"
						title={"満足"}
						list={["ビジネスとITマネジメント"]}
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
					backgroundImage: `url(${aboutUsPhoto})`,
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
						“NEX4 ICT
						ソリューションでは、企業向けセキュリティ、データセンター、ネットワークインフラ、クラウドソリューションを中心に、
						高度なICTサービスの提供に努めています。セキュリティ、スピード、信頼性へのこだわりにより、最高水準の顧客満足をお約束します。
						大手銀行からの信頼も厚く、お客様それぞれの要件に合わせたコンサルティングと技術サポートを提供しています”
					</motion.p>
					<motion.h2
						variants={fadeIn("up", 0.2)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="px-12 w-fit mx-auto text-xl md:text-2xl font-medium mt-6 pt-2 pb-1 bg-violet-400 text-white"
					>
						NEX4 ICT ソリューション
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
					<LocationCard img={myanmar} name="ミャンマー " />
					<LocationCard img={japan} name="日本" />
					<LocationCard img={thailand} name="タイ" />
					<LocationCard img={cambodia} name="カンボジア" />
				</div>
			</section>

			<hr className="w-[90%] mx-auto section-margin" />
			{/* Our Services */}
			<section className="section-margin outer-padding">
				<h2 className="text-3xl font-semibold text-center">サービス</h2>
				<div className="w-24 h-1 gradient-1 mt-2 rounded-lg mx-auto"></div>

				<div className="mt-6 max-w-[1300px] mx-auto md:mt-12 divide-y sm:divide-y-0 grid grid-cols-1 sm:grid-cols-2 gap-2 gap-y-6 md:gap-x-6 md:gap-y-12 lg:grid-cols-3 place-content-center">
					<ServiceCard
						logo={AWS}
						name="クラウドサービス"
						bgName="bg-orange-300"
					/>
					<ServiceCard
						logo={Network}
						name="ネットワークサービス"
						bgName="bg-green-300"
					/>
					<ServiceCard
						logo={System}
						name="システム関連サービス"
						bgName="bg-blue-300"
					/>
					<ServiceCard
						logo={Security}
						name="セキュリティ・ソリューション・サービス"
						bgName="bg-red-300"
					/>
					<ServiceCard
						logo={Microsoft}
						name="モダン・ワークスペース・サービス"
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
						高度なセキュリティ、インフラ、クラウドサービスを、卓越性と顧客満足度にこだわって提供する。
					</motion.h2>
				</div>
			</section>

			{/* Partner Platform */}
			<section className="section-margin outer-padding">
				<h2 className="text-3xl font-semibold text-center">
					パートナー・プラットフォーム
				</h2>
				<div className="w-24 h-1 gradient-1 mt-2 rounded-lg mx-auto"></div>

				<div className="mt-6 max-w-[1300px] divide-y sm:divide-y-0 mx-auto md:mt-12 grid sm:grid-cols-2 gap-2 gap-y-6 md:gap-x-6 md:gap-y-12 md:grid-cols-4 place-content-center">
					<ServiceCard logo={AWS} name="AWS Partner Since 2019" />
					<ServiceCard logo={Cisco} name="Cisco Gold Partner since 2017" />
					<ServiceCard logo={vmware} name="VMWARE Partner since 2016 " />
					<ServiceCard logo={p3} name="PaloAlto Networks since 2015" />
					<ServiceCard logo={p4} name="DellEMC Platinum Partner since 2017" />
					<ServiceCard
						logo={Microsoft}
						name="Microsoft Cloud Service Provider and Solutions Partner, since 2017"
					/>
					<ServiceCard logo={p5} name="Fortinet since 2018" />
					<ServiceCard logo={F5} name="F5 since 2014" />
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
								<span className="text-white">チーム</span>{" "}
								<br className="hidden md:block" /> メンバー{" "}
							</motion.h2>
							<div className="w-24 md:hidden h-1 bg-gradient-to-tl from-cyan-300 to-white mt-2 rounded-lg mx-auto"></div>
						</div>

						<div className="mx-auto">
							<div className="grid grid-cols-1 sm:grid-cols-2 mx-auto gap-6 md:gap-12 w-fit">
								<MemberCard
									img={p1}
									name="Aung Thurein"
									roles={["Founder", "Managing Director"]}
								/>
								<MemberCard
									img={p2}
									name="Min Myat Soe"
									roles={["Co-Founder", "Director"]}
								/>
							</div>
							<div className="grid mt-6 grid-cols-1 sm:grid-cols-3 mx-auto gap-6 md:gap-12 w-fit">
								<MemberCard
									img={profile3}
									name="Thant Zin Soe"
									roles={["Chief Architect"]}
								/>
								<MemberCard
									img={profile4}
									name="Yan Naing Oo"
									roles={["Chief Technical Officer"]}
								/>
								<MemberCard
									img={profile5}
									name="Kaung Htet Zaw"
									roles={["Director", "Business Development"]}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Awards */}
			<section className="section-margin outer-padding">
				<h2 className="text-3xl font-semibold text-center">アワード</h2>
				<div className="w-24 h-1 gradient-1 mt-2 rounded-lg mx-auto"></div>

				<div className="mt-6 max-w-[1280px] mx-auto">
					<MultipleCarousel
						slides={3}
						breakpoints={{ mobile: 1, sm: 2, md: 2 }}
					>
						<AwardCard
							img={AWS}
							awards={[
								"AWS アドバンスド ティア パートナー",
								"AWS ウェルアーキテクトパートナープログラム",
							]}
						/>
						<AwardCard
							img={Cisco}
							awards={[
								"プレミアパートナー アドバンスドデータセンター",
								"アーキテクチャ専門",
								"インドシナの年間最優秀プレミアパートナー（2016年,2017年）",
								"プレミア認定パートナー（2017年）",
							]}
						/>
						<AwardCard
							img={F5}
							awards={[
								"ミャンマーのUnityゴールドパートナー",
								"F5ネットワークス年間ハイファイブ賞 (2014, 2015年)",
								"エクストラマイル努力賞ROSEANの年間トップパートナー (2016年)",
								"優れた献身とコミットメント (2019)",
							]}
						/>
					</MultipleCarousel>
				</div>
			</section>

			<hr className="w-[90%] mx-auto section-margin" />

			{/* Our Clients */}
			<section className="section-margin outer-padding">
				<h2 className="text-3xl font-semibold text-center">お客様</h2>
				<div className="w-24 h-1 gradient-1 mt-2 rounded-lg mx-auto"></div>

				<div className="mt-6 max-w-[1300px] mx-auto md:mt-12 divide-y sm:divide-y-0 grid grid-cols-1 sm:grid-cols-2 gap-2 gap-y-6 md:gap-x-6 md:gap-y-12 lg:grid-cols-4 place-content-center">
					<ServiceCard logo={c1} name="MNCS" bgName="bg-orange-300" />
					<ServiceCard
						logo={c2}
						name="中小企業と大企業"
						bgName="bg-green-300"
					/>
					<ServiceCard logo={c3} name="金融機関" bgName="bg-blue-300" />
					<ServiceCard logo={c4} name="石油とガス" bgName="bg-green-300" />
					<ServiceCard logo={c5} name="通信事業者" bgName="bg-blue-300" />
					<ServiceCard logo={c6} icon="" name="医療" bgName="bg-green-300" />
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
									desc="NEX4は技術チームとプロジェクト管理チームにおいて強力であり、またNEX4への対応も非常に柔軟です。私たちAYA銀行は、常に信頼を第一に考えており、NEX4は信頼できるパートナーの一つです。"
									img=""
								/>
								<TestiCard
									name="Client"
									desc="NEX4は、いくつかの問題が発見された場合、すぐに解決するための短期的な解決策をアドバイスすることができる。"
									img=""
								/>
								<TestiCard
									name="Client"
									desc="NEX4は、技術面で私たちの銀行の要件とこの要件を満たすことができる唯一のSI企業です。"
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
