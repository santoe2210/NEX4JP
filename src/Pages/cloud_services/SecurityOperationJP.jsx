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


import { MdSecurity } from "react-icons/md";
import { LuDatabase } from "react-icons/lu";
import {IoAlert} from "react-icons/io5";
import {MdBugReport} from "react-icons/md";

import aws from "../../assets/aws1.jpg";
import WhySecurity from "../../assets/cloudMigration.jpg";
import { Link, useNavigate } from "react-router-dom";
import WhyChoose from "../../components/cloud_services/WhyChoose";

const SecurityOperation = () => {
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
					セキュリティ・オペレーション・サービス
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
					セキュリティ・オペレーションでクラウド環境を保護する
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
					包括的なセキュリティ運用サービスでクラウドインフラを保護し、 
					リアルタイムで脅威を検知、対応、緩和するように設計されています。
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
						セキュリティ・オペレーション・サービス
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
						icon={<MdBugReport className=" size-full text-cyan-400" />}
						title="継続的な監視と脅威の検出 "
						desc="クラウド環境のリアルタイム監視を導入し、潜在的な脅威を即座に検知して対応します。当社の高度なツールと技術により、お客様のインフラは常に安全です。"
					/>
					<KeyCard
						img=""
						icon={<IoAlert className=" size-[80%] text-cyan-400" />}
						title="事故対応と管理 "
						desc="効果的な事故対応手順の策定と管理 お客様と協力してセキュリティ・事故を迅速かつ効率的に処理し、影響とダウンタイムを最小限に抑えます。"
					/>
					<KeyCard
						img=""
						icon={<LuDatabase className=" size-[80%] text-cyan-400" />}
						title="脆弱性の管理 "
						desc="定期的な脆弱性評価を実施し、パッチ管理戦略を実施します。当社のプロアクティブなアプローチは、セキュリティの弱点が悪用される前に特定し、修正するのに役立ちます。"
					/>
					<KeyCard
						img=""
						icon={
							<MdSecurity className=" size-[90%] text-cyan-400" />
						}
						title="セキュリティ情報とイベント管理  "
						desc="セキュリティ情報とイベント管理ツールを活用して、クラウドインフラ全体のセキュリティイベントを相関分析します。当社の専門家が継続的な監視を行い、異常を検出して対応します。"
					/>
				</div>

				{/* Why Choose Section */}
				<WhyChoose
					img={WhySecurity}
					title="なぜセキュリティ・オペレーションが重要なのか"
					desc="進化し続けるクラウドコンピューティングの世界では、お客様のデータとアプリケーションを保護するために堅牢なセキュリティ運用が不可欠です。
						当社のセキュリティ運用サービスは、継続的な保護と安心を提供します。"
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
						メリット
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
								title="積極的なセキュリティ対策"
								desc="積極的なセキュリティ戦略でデータとインフラを保護します。"
							/>
							<BenifitCard
								title="リスクとダウンタイムの削減"
								desc="セキュリティ・インシデントの影響を最小限に抑え、ビジネスの継続性を確保する。"
							/>
							<BenifitCard
								title="安心"
								desc="お客様のクラウド環境は安全で、業界標準に準拠していますのでご安心ください。"
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
							成功事例
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
									desc="セキュリティ運用サービスと提携することで、脅威の検知と対応時間が大幅に改善され、クラウドのセキュリティに対する信頼が高まりました。"
									img=""
								/>
								<TestiCard
									name="Client"
									desc="継続的な監視と自動化されたポリシーのおかげで、リスク・エクスポージャーが減り、チームはコア・ビジネス活動に集中できるようになった。"
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
						クラウドセキュリティを <span className="text-bold text-cyan-400">強化する準備 </span>
					</motion.h2>
					<motion.p
						variants={fadeIn("up", 0.2)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="text-bluehover max-w-[1080px] mx-auto leading-loose tracking-wide"
					>
						セキュアなクラウド環境への第一歩を踏み出しましょう。進化する脅威からビジネスを守るセキュリティ運用サービスについて、
						今すぐお問い合わせください。
					</motion.p>
					<motion.button
						variants={fadeIn(".", 0.2)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="px-4 btn-outline-primary"
						onClick={() => navigate("/faq")}
					>
						お問い合わせ
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
					お客様のビジネスを強力にサポートする関連パートナー・プラットフォームのご紹介
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
								詳細を見る &#62;
								</p>
							</a>
							<hr className="my-4 border-t-1 border-blue-400" />
							<p className="mt-4">
							パブリッククラウド、マルチクラウド、ハイブリッドクラウドのパイオニアパートナーです。
							インフラストラクチャのパイオニアであり、お客様のビジネスに成熟したテクノロジーを提供します、
							完全なサービス、グローバルな可用性、そして豊富なオンラインリソースを備えた
							クラウドエコシステムを提供します。{" "}
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default SecurityOperation;
