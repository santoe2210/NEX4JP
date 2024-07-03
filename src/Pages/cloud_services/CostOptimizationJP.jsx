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
import { LuDatabase } from "react-icons/lu";
import { GrResources } from "react-icons/gr";
import { RiInstanceFill } from "react-icons/ri";
import { IoPricetagsOutline } from "react-icons/io5";
import { FaTools } from "react-icons/fa";

import aws from "../../assets/aws1.jpg";
import WhyCost from "../../assets/WhyCost.jpg";
import { Link, useNavigate } from "react-router-dom";
import WhyChoose from "../../components/cloud_services/WhyChoose";

const CostOptimization = () => {
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
					コスト最適化サービス
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
					専門家によるコスト最適化でクラウドのROIを最大化する
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
					お客様の要件に合わせたコスト最適化サービスにより、大幅なコスト削減とクラウドリソースの効率化を実現します。
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
						主なコスト最適化サービス
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
						title="コスト分析と評価 "
						desc="お客様の現在のクラウド費用を徹底的に分析し、節約できる分野を特定します。詳細な評価により、パフォーマンスを損なうことなくコストを最適化するための実用的な洞察を提供します。"
					/>
					<KeyCard
						img=""
						icon={<GrResources className=" size-[80%] text-cyan-400" />}
						title="リソース管理 "
						desc="リソースの割り当てを最適化することで、無駄を省き、必要な分だけを確実に支払います。ワークロードの要件に合わせてリソースの適切なサイズ設定を支援します。"
					/>
					<KeyCard
						img=""
						icon={<LuDatabase className=" size-[80%] text-cyan-400" />}
						title="価格モデルの最適化 "
						desc="最も費用対効果の高い料金プランを評価し、移行します。お客様の利用パターンを分析し、予約インスタンスやセービングプランなど、最適な料金モデルをご提案します。"
					/>
					<KeyCard
						img=""
						icon={
							<MdOutlineCloudUpload className=" size-[90%] text-cyan-400" />
						}
						title=" 自動スケーリングとロードバランシング "
						desc="自動スケーリングとロードバランシング戦略を導入し、リソースを効率的かつコスト効率よく使用します。ピーク時にはスケールアップし、需要が低いときにはスケールダウンしてコストを削減します。"
					/>
				</div>
				{/* Advanced Strategies */}
				<div className="text-center  section-margin rounded-tl-2xl space-y-6 rounded-br-2xl">
					<h2
						variants={fadeIn("down", 0.2)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="text-2xl font-semibold text-bluehover"
					>
						貯蓄のための高度な戦略
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
						icon={<RiInstanceFill className=" size-full text-cyan-400" />}
						title="スポット・インスタンスの利用率 "
						desc="スポットインスタンスを活用することで、中断に柔軟に対応できるワークロードを大幅に節約できます。当社の戦略により、運用効率を維持しながら可能な限り低料金を実現します。"
					/>
					<KeyCard
						img=""
						icon={<IoPricetagsOutline className=" size-[80%] text-cyan-400" />}
						title="コスト配分とタグ付け "
						desc="コスト配分とタグ付けのベストプラクティスを導入して、クラウド経費を効果的に追跡・管理。支出の可視性を高め、十分な情報に基づいた意思決定を行うことができます。"
					/>
					<KeyCard
						img=""
						icon={<FaTools className=" size-[80%] text-cyan-400" />}
						title="クラウドコスト管理ツール "
						desc="高度なクラウドコスト管理ツールを活用して、経費をリアルタイムで監視・管理。カスタムダッシュボードと自動アラートにより、常に情報を入手し、管理することができます。"
					/>
				</div>

				{/* Why Choose Section */}
				<WhyChoose
					img={WhyCost}
					title="なぜコストの最適化が重要なのか"
					desc="クラウドサービスは驚くほどの柔軟性とスケーラビリティを提供しますが、適切なコスト管理を行わないと、あっという間に費用が膨れ上がってしまいます。
						当社のコスト最適化サービスにより、クラウドへの投資から最大限の価値を得ることができます。"
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
								title="クラウド費用の削減"
								desc="実証可能なコスト削減を実現し、収益を改善します。"
							/>
							<BenifitCard
								title="セキュリティの強化"
								desc="資源の利用を最適化し、無駄を省く。"
							/>
							<BenifitCard
								title="財務の透明性"
								desc="詳細なレポートとダッシュボードにより、クラウド支出に関する明確な洞察を得ることができます。"
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
									desc="チームが実施したコスト最適化戦略のおかげで、高いパフォーマンスと信頼性を維持しながら、クラウドへの支出を30％削減することができました。"
									img=""
								/>
								<TestiCard
									name="Client"
									desc="同サービスが提供する包括的なコスト分析によって、リソースの使用におけるいくつかの非効率性が明らかになり、私たちはすぐに対処して大幅な節約を達成しました。"
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
						クラウドコストの節約を <span className="text-bold text-cyan-400">始める準備</span>
					</motion.h2>
					<motion.p
						variants={fadeIn("up", 0.2)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="text-bluehover max-w-[1080px] mx-auto leading-loose tracking-wide"
					>
						当社の専門家にご相談ください。クラウドのROIを最大化するための第一歩を踏み出しましょう。
						コスト最適化サービスの詳細と、お客様の財務目標達成を支援する方法については、今すぐお問い合わせください。
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

export default CostOptimization;
