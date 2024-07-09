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
import { MdOutlineSecurity } from "react-icons/md";
import { MdMoveDown } from "react-icons/md";
import { GrDeploy } from "react-icons/gr";
import { MdFormatIndentIncrease} from "react-icons/md";

import aws from "../../assets/aws1.jpg";
import WhyDesign from "../../assets/WhyDesign.jpg";
import { Link, useNavigate } from "react-router-dom";
import WhyChoose from "../../components/cloud_services/WhyChoose";

const DesignAndImplementation = () => {
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
					設計と実装サービス
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
					専門家によるクラウド設計と実装でITインフラを変革
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
					当社の専門知識を活用し、お客様のビジネス要件に合ったクラウド環境を設計・導入します。当社の包括的なサービスは、お客様のクラウドインフラストラクチャのスムーズな移行と最適な<br/>パフォーマンスを保証します。
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
						主な設計と実装サービス
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
						title="クラウド・アーキテクチャ設計  "
						desc="お客様のビジネス目標に沿った、堅牢でスケーラブルなクラウドアーキテクチャを開発します。パフォーマンス、コスト、セキュリティを最適化するカスタムソリューションを設計します。"
					/>
					<KeyCard
						img=""
						icon={<MdMoveDown className=" size-[80%] text-cyan-400" />}
						title="移行計画と戦略 "
						desc="最小限の混乱でスムーズな移行を保証する、詳細な移行計画を作成します。当社の戦略は、お客様固有のビジネス要件と技術要件を満たすように設計されています。"
					/>
					<KeyCard
						img=""
						icon={<GrDeploy className=" size-[60%] text-cyan-400" />}
						title="実施と展開 "
						desc="クラウドインフラストラクチャを正確かつ専門的に展開します。私たちのチームは、初期設定から最終的な導入まで、導入プロセス全体を担当し、すべてがスムーズに進むようにします。"
					/>
					<KeyCard
						img=""
						icon={
							<MdOutlineSecurity className=" size-[90%] text-cyan-400" />
						}
						title=" セキュリティとコンプライアンス "
						desc="高度なセキュリティ対策を導入し、クラウド環境を保護します。業界標準と規制への準拠を保証し、お客様のデータとアプリケーションを保護します。"
					/>
					<KeyCard
						img=""
						icon={<MdFormatIndentIncrease className=" size-[85%] text-cyan-400" />}
						title="パフォーマンスの最適化  "
						desc="クラウドインフラストラクチャを最適化し、最高のパフォーマンスを実現します。お客様の環境を継続的に監視し、微調整することで、最適な効率性と費用対効果を実現します。"
					/>
				</div>

				{/* Why Choose Section */}
				<WhyChoose
					img={WhyDesign}
					title="当社の設計と実装サービスを選ぶ理由"
					desc="効率的でスケーラブルなクラウド環境を構築するには、専門家による計画と実行が必要です。私たちのチームは、
					お客様独自の要件に合わせたエンドツーエンドの設計と実装サービスを提供し、
					クラウド導入を成功に導きます。"
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
								title="個別ソリューション"
								desc="お客様の要件に合わせたクラウドアーキテクチャ。"
							/>
							<BenifitCard
								title="専門家による実行"
								desc="プロフェッショナルな導入により、クラウドへのシームレスな移行を実現します。"
							/>
							<BenifitCard
								title="セキュリティ強化"
								desc="お客様のデータを保護し、コンプライアンスを確保するための強固なセキュリティ対策。"
							/>
							<BenifitCard
								title="最適化されたパフォーマンス"
								desc="継続的なモニタリングと最適化により、最高の効率を実現します。"
							/>
							<BenifitCard
								title="スケーラブルなインフラストラクチャー"
								desc="ビジネスとともに成長する柔軟なソリューション"
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
							事例
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
									desc="T御社]の設計と導入サービスにより、当社のITインフラは一変しました。今では、すべてのニーズを満たすスケーラブルで効率的なクラウド環境を手に入れることができました。"
									img=""
								/>
								<TestiCard
									name="Client"
									desc="NEX4のおかげで、クラウドへの移行はスムーズで手間がかかりませんでした。NEX4の専門知識とサポートは、プロセス全体を通して非常に貴重なものでした。"
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
						お客様のビジネスに <span className="text-bold text-cyan-400">合わせたクラウド・ソリューションの</span>
						設計と導入
					</motion.h2>
					<motion.p
						variants={fadeIn("up", 0.2)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="text-bluehover max-w-[1080px] mx-auto leading-loose tracking-wide"
					>
						設計・導入サービスの詳細と、どのようなお手伝いができるかについては、当社のエキスパートにお問い合わせください。
						の第一歩を踏み出しましょう。今すぐお問い合わせいただき、
						当社の監視サービスがお客様の組織にどのようなメリットをもたらすかをお問い合わせください。
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

export default DesignAndImplementation;
