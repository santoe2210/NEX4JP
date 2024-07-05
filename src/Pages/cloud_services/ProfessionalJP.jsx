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

import { MdDesignServices } from "react-icons/md";
import { MdOutlineCloudUpload } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { SiMicrostrategy } from "react-icons/si";
import { MdOutlineCloudSync } from "react-icons/md";



import aws from "../../assets/aws1.jpg";
import WhyProfessional from "../../assets/WhyProfessional.jpg";
import { Link, useNavigate } from "react-router-dom";
import WhyChoose from "../../components/cloud_services/WhyChoose";

const Professional = () => {
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
					プロフェッショナル・クラウド・サービス
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
					専門家によるプロフェッショナルサービスでクラウドの可能性を最大化
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
					クラウドインフラストラクチャの最適化、パフォーマンスの向上、シームレスな運用を実現するために、
					当社の専門家によるプロフェッショナルサービスをご活用ください。シームレスな運用を<br/>実現します。
					経験豊富なクラウドのプロフェッショナルチームが 要件に合わせたソリューションと戦略的ガイダンスを通じて、
					お客様のビジネス目標の達成を支援します。
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
						主要プロフェッショナル・サービス
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
						icon={<SiMicrostrategy className=" size-[80%] text-cyan-400" />}
						title="クラウド戦略とコンサルティング  "
						desc="お客様のビジネス目標に沿った包括的なクラウド戦略を策定します。コンサルタントは、お客様の必要性を評価し、クラウド・ジャーニーを計画し、ベスト・プラクティスを導入するためにお客様と協力します。"
					/>
					<KeyCard
						img=""
						icon={<MdDesignServices className=" size-[80%] text-cyan-400" />}
						title="クラウド・アーキテクチャ設計 "
						desc="お客様固有の要件に合わせた、堅牢でスケーラブルなクラウドアーキテクチャを設計します。当社のアーキテクトは、お客様のインフラがパフォーマンス、セキュリティ、コスト効率の面で最適化されていることを保証します。"
					/>
					<KeyCard
						img=""
						icon={<MdOutlineCloudSync className=" size-[80%] text-cyan-400" />}
						title="移行サービス "
						desc="お客様のアプリケーション、データ、ワークロードを最小限の混乱でシームレスにクラウドに移行します。当社の移行 エキスパートが全プロセスを処理し、スムーズな移行と迅速なメリットをお約束します。"
					/>
					<KeyCard
						img=""
						icon={
							<MdOutlineCloudUpload className=" size-[90%] text-cyan-400" />
						}
						title=" クラウドの管理と最適化 "
						desc="お客様のクラウド環境を管理・最適化し、最高のパフォーマンスと費用対効果を実現します。継続的なサポートと最適化サービスにより、お客様のビジネス要件に合わせてクラウドインフラを進化させます。"
					/>
					<KeyCard
						img=""
						icon={<MdOutlineSecurity className=" size-[85%] text-cyan-400" />}
						title="セキュリティとコンプライアンス  "
						desc="包括的なセキュリティ対策を導入し、業界標準へのコンプライアンスを確保します。当社のセキュリティ専門家が、お客様のクラウド環境を脅威や脆弱性から保護します。"
					/>
				</div>

				{/* Why Choose Section */}
				<WhyChoose
					img={WhyProfessional}
					title="プロフェッショナル・サービスを選ぶ理由"
					desc="進化し続けるクラウドテクノロジーの世界では、信頼できるパートナーの存在がすべてを左右します。
					当社のプロフェッショナル・サービスは、クラウド導入の複雑さを乗り越えるために必要な専門知識とサポートを提供します、 
					クラウドの導入、管理、最適化の複雑さを乗り切るために必要な専門知識とサポートを提供します。"
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
								title="専門家の指導"
								desc="クラウド戦略と運用を強化するために、業界のエキスパートから見識を深めてください。"
							/>
							<BenifitCard
								title="最適化されたパフォーマンス"
								desc="要件に合わせた最適化により、クラウドインフラが最高の状態で稼働するようにします。"
							/>
							<BenifitCard
								title="コスト効率"
								desc="効率的なクラウド管理とリソースの最適化によりコストを削減。"
							/>
							<BenifitCard
								title="セキュリティの強化"
								desc="堅牢なセキュリティとコンプライアンス・ソリューションでデータとアプリケーションを保護します。"
							/>
							<BenifitCard
								title="スムーズな移行"
								desc="クラウドへの移行をスムーズに行い、混乱を最小限に抑え、最大限の利益を得る。"
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
									desc="クラウド移行でNEX4と提携したことは、私たちにとって最良の決断でした。彼らの専門知識とシームレスな実行により、当社のITインフラは生まれ変わりました。"
									img=""
								/>
								<TestiCard
									name="Client"
									desc="NEX4 の戦略的ガイダンスと継続的なサポートは非常に貴重です。現在、当社のクラウド環境は、より安全で効率的で、ビジネス目標に沿ったものとなっています。"
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
						プロフェッショナルサービスで <span className="text-bold text-cyan-400">クラウド戦略を強化 </span> 
					</motion.h2>
					<motion.p
						variants={fadeIn("up", 0.2)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="text-bluehover max-w-[1080px] mx-auto leading-loose tracking-wide"
					>
						専門的なサービスと、私たちがどのようにお客様のお役に立てるかについて、詳しくは私たちの専門家にお問い合わせください。 
						より効率的で安全なクラウド環境への第一歩を踏み出しましょう。今すぐお問い合わせいただき、
						当社のプロフェッショナル・サービスがお客様の組織にどのようなメリットをもたらすかをご確認ください。
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

export default Professional;
