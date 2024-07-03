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

import {MdAddAlert} from "react-icons/md";
import { LuDatabase } from "react-icons/lu";
import { PiSecurityCamera } from "react-icons/pi";
import {MdDashboard} from "react-icons/md";
import { IoIosTime } from "react-icons/io";

import aws from "../../assets/aws1.jpg";
import WhyMonitor from "../../assets/WhyMonitor.jpg";
import { Link, useNavigate } from "react-router-dom";
import WhyChoose from "../../components/cloud_services/WhyChoose";

const OperationAndMonitoring = () => {
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
					クラウド運用・監視サービス
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
					包括的なクラウド監視で最適なパフォーマンスとセキュリティを確保する
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
					当社の高度な監視サービスにより、クラウドインフラストラクチャの安全性とスムーズな稼働を維持します。
					リアルタイムの洞察とプロアクティブな管理により、最高のパフォーマンスを維持し、
					ビジネスに影響を与える前に問題に対処します。お客様のビジネスに影響を与える前に問題に対処します。
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
						監視サービス
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
						icon={<IoIosTime className=" size-full text-cyan-400" />}
						title="実時間パフォーマンス監視 "
						desc="クラウドインフラストラクチャのパフォーマンスをリアルタイムで追跡します。主要な指標とシステムの健全性を監視し、アプリケーションとサービスがスムーズに稼働するようにします。"
					/>
					<KeyCard
						img=""
						icon={<PiSecurityCamera className=" size-[80%] text-cyan-400" />}
						title="セキュリティ監視 "
						desc="継続的なセキュリティ監視でクラウド環境を保護します。潜在的な脅威を検出して対応し、お客様のデータが業界標準に準拠した安全な状態を維持できるようにします。"
					/>
					<KeyCard
						img=""
						icon={<LuDatabase className=" size-[80%] text-cyan-400" />}
						title="リソース利用追跡  "
						desc="利用パターンをモニタリングすることで、クラウドリソースを最適化します。キャパシティを管理し、過剰なプロビジョニングを回避し、コストを削減します。"
					/>
					<KeyCard
						img=""
						icon={
							<MdAddAlert className=" size-[90%] text-cyan-400" />
						}
						title=" 自動化されたアラートと通知 "
						desc="異常なアクティビティやパフォーマンスの低下について、即座にアラートと通知を受け取ります。自動化されたシステムにより、お客様は常に情報を得ることができ、問題を解決するために迅速に行動することができます。"
					/>
					<KeyCard
						img=""
						icon={<MdDashboard className=" size-[85%] text-cyan-400" />}
						title="カスタマイズ可能なダッシュボードとレポート  "
						desc="要件に合わせた詳細なダッシュボードとレポートにアクセスできます。クラウド環境のパフォーマンス、セキュリティ、リソースの利用状況を把握できます。"
					/>
				</div>

				{/* Why Choose Section */}
				<WhyChoose
					img={WhyMonitor}
					title="監視サービスを選ぶ理由"
					desc="ダイナミックなクラウド環境では、信頼性、セキュリティ、パフォーマンスを確保するために継続的な監視が不可欠です。
					当社のクラウド・モニタリング・サービスは、24時間365日体制で監視を行い、リソースの利用率を最適化しながら、
					問題を迅速に検出して解決できるよう支援します。リソースの活用を最適化します。"
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
								title="セキュリティの強化"
								desc="継続的な監視でデータとインフラを保護します。"
							/>
							<BenifitCard
								title="パフォーマンスの向上"
								desc="クラウドサービスの最適なパフォーマンスを確保するためのリアルタイムな洞察。"
							/>
							<BenifitCard
								title="コスト効率"
								desc="リソースの利用を最適化し、不要な経費を削減する。"
							/>
							<BenifitCard
								title="積極的な問題解決"
								desc="業務に影響が出る前に問題を発見し、対処する。"
							/>
							<BenifitCard
								title="実用的な洞察"
								desc="情報に基づいた意思決定のためのカスタマイズ可能なダッシュボードとレポート。"
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
									desc="リアルタイムのモニタリングと自動化されたアラートは非常に貴重です。今では問題に即座に対処し、シームレスなオペレーションを維持することができます。"
									img=""
								/>
								<TestiCard
									name="Client"
									desc="NEX4の監視サービスにより、クラウドインフラのパフォーマンスとセキュリティが大幅に向上しました。NEX4の積極的なアプローチにより、潜在的な問題を未然に防ぐことができます。"
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
						監視サービスで <span className="text-bold text-cyan-400">クラウドインフラを強化する準備  </span> 
					</motion.h2>
					<motion.p
						variants={fadeIn("up", 0.2)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="text-bluehover max-w-[1080px] mx-auto leading-loose tracking-wide"
					>
						マイグレーションサービスの詳細と、どのようなサポートが可能かについては、当社のエキスパートにお問い合わせください。
						より信頼性が高く、効率的なクラウド環境への第一歩を踏み出しましょう。今すぐお問い合わせいただき、当社の監視サービスがお客様の組織にどのようなメリットをもたらすかをご確認ください。
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

export default OperationAndMonitoring;
