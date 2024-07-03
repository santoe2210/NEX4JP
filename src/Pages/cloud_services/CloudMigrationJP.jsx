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
					クラウド移行サービス
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
					専門家による移行サービスでクラウドへ移行
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
					当社の包括的な移行サービスで、クラウドコンピューティングの可能性を最大限に引き出しましょう。
					お客様のアプリケーションとデータのクラウドへの移行を、<br/>スムーズ、安全、かつ効率的に実現します。
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
						主要な移行サービス
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
						title="評価と計画 "
						desc="お客様の現在のインフラとアプリケーションを徹底的に評価します。この分析に基づいて、お客様固有の要件に合わせた詳細な移行プランを作成します。"
					/>
					<KeyCard
						img=""
						icon={<IoApps className=" size-[80%] text-cyan-400" />}
						title="アプリケーション移行 "
						desc="お客様のアプリケーションを最小限の混乱でクラウドに移行します。当社の専門家がプロセス全体を処理し、互換性、パフォーマンス、セキュリティを確保します。"
					/>
					<KeyCard
						img=""
						icon={<LuDatabase className=" size-[80%] text-cyan-400" />}
						title="データ移行 "
						desc="お客様のデータを安全にクラウドへ移行します。高度なツールと技術を駆使して、データの完全性を確保し、移行プロセスにおけるリスクを最小限に抑えます。"
					/>
					<KeyCard
						img=""
						icon={
							<MdOutlineCloudUpload className=" size-[90%] text-cyan-400" />
						}
						title=" ハイブリッド・クラウドの統合 "
						desc="オンプレミスのインフラとクラウドサービスを統合し、シームレスなハイブリッド環境を実現します。当社のソリューションにより、両方の長所を活用することができます。"
					/>
					<KeyCard
						img=""
						icon={<MdSupportAgent className=" size-[85%] text-cyan-400" />}
						title="移行後のサポート  "
						desc="移行後も継続的なサポートを受け、すべてが順調に進むようにします。監視、トラブルシューティング、最適化サービスを提供し、クラウド環境の効率性と安全性を維持します。."
					/>
				</div>

				{/* Why Choose Section */}
				<WhyChoose
					img={cloudMigration}
					title="移行サービスを選ぶ理由"
					desc="クラウドへの移行は複雑で難しいものです。当社の
						チームがこのプロセスを簡素化し、ダウンタイムを最小限に抑え、お客様のビジネスが中断することなく継続することを保証します。"
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
								title="ダウンタイムの削減"
								desc="移行中の業務中断を最小限に抑えます。"
							/>
							<BenifitCard
								title="セキュリティの強化"
								desc="データとアプリケーションを安全に移行し、保護します。"
							/>
							<BenifitCard
								title="スケーラビリティ"
								desc="クラウドのスケーラビリティを活用して、ビジネス要件の拡大に対応します。"
							/>
							<BenifitCard
								title="コスト効率"
								desc="最適化されたクラウドソリューションで運用コストを削減します。"
							/>
							<BenifitCard
								title="専門家の指導"
								desc="クラウド・移行における当社の専門知識と経験をご活用ください。"
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
									desc="NEX4の監視サービスにより、クラウドインフラのパフォーマンスとセキュリティが大幅に改善されました。NEX4の積極的なアプローチにより、潜在的な問題を未然に防ぐことができます。"
									img=""
								/>
								<TestiCard
									name="Client"
									desc="NEX4の監視サービスにより、クラウドインフラのパフォーマンスとセキュリティが大幅に改善されました。NEX4の積極的なアプローチにより、潜在的な問題を未然に防ぐことができます。"
									img=""
								/>
								<TestiCard
									name="Client"
									desc="NEX4の監視サービスにより、クラウドインフラのパフォーマンスとセキュリティが大幅に改善されました。NEX4の積極的なアプローチにより、潜在的な問題を未然に防ぐことができます。"
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
					今すぐ始めよう
					</p>
					<motion.h2
						variants={fadeIn("up", 0.2)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="text-2xl  text-bluehover font-semibold"
					>
						クラウドへ <span className="text-bold text-cyan-400">移行の準備</span> 
					</motion.h2>
					<motion.p
						variants={fadeIn("up", 0.2)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="text-bluehover max-w-[1080px] mx-auto leading-loose tracking-wide"
					>
						マイグレーション・サービスの詳細については、当社の専門家にお問い合わせください。
						私たちがどのようにお手伝いできるか より効率的で拡張性の高い
						スケーラブルなITインフラへの第一歩を踏み出しましょう。移行サービスがお客様の組織にどのようなメリットをもたらすか、今すぐお問い合わせください。
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

export default CloudMigration;
