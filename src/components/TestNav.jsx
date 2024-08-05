/** @format */

"use client";
import React, { useEffect, useState } from "react";
import logo from "../assets/lgr1.png";
import { Button, MegaMenu, Navbar } from "flowbite-react";
import Search from "./_common/Search";
// add hover underline

const TestNav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [showdropdown, setshowdropdown] = useState(false);
	const [isSticky, setIsSticky] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};


	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0 p-0">

			<MegaMenu className="relative">
				<div className="py-4  lg:px-14 px-4 font-bold mx-auto flex w-full max-w-screen-2xl flex-wrap items-center justify-between md:space-x-8 hover:text-bluehover">
					<Navbar.Brand href="/">
						<img alt="" src={logo} className="w-50 inline-block items-center" />

					</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse>
						<Navbar.Link
							href="/"

							className="font-bold hover:underline shrink-0"
						>
							<p className="w-fit">ホームページ</p>

						</Navbar.Link>
						{/* <Navbar.Link> */}
						{/* use comment closed classname and ul under this comment*/}
						<li>
							{" "}
							<MegaMenu.Dropdown
								className="border-b"
								toggle={
									<p className=" flex items-center w-full border-b md:border-b-0 pl-3 py-2 md:pl-0 md:py-0 hover:text-bluehover font-bold text-gray-700 text-left hover:underline">
										サービス
									</p>
								}
							>
								{" "}
								{/* className="grid grid-cols-1 w-full h-[50vh] md:h-fit overflow-y-auto sm:grid-cols-2 md:grid-cols-3 sm:gap-1 gap-0.5 sm:mt-4" */}
								<ul className="w-full h-[50vh] text-center md:h-fit overflow-y-auto">
									{/* <ul> */}
									<div className="space-y-4 p-4">
										<li className="hover:text-bluehover">
											<a
												href="/service"
												className="hover:text-primary-600 dark:hover:text-primary-500 text-1xl  font-bold"
											>
												すべてのサービス
											</a>
										</li>
										<li>
											<h2 className=" text-1xl font-bold">
												クラウドサービス
												</h2>
											</li>
											<li className="hover:text-bluehover">
												<a
													href="/cloud/migration"
													className="hover:text-primary-600 dark:hover:text-primary-500"
												>
													移動
												</a>
											</li>
											<li className="hover:text-bluehover">
												<a
													href="/cloud/operation-and-monitoring"
													className="hover:text-primary-600 dark:hover:text-primary-500"
												>
													運用・監視サービス
												</a>
											</li>
											<li className="hover:text-bluehover">
												<a
													href="/cloud/professional"
													className="hover:text-primary-600 dark:hover:text-primary-500"
												>
													プロフェッショナル・サービス
												</a>
											</li>
											<li className="hover:text-bluehover">
												<a
													href="/cloud/design-and-implementation"
													className="hover:text-primary-600 dark:hover:text-primary-500"
												>
													設計と実装
												</a>
											</li>
											<li className="hover:text-bluehover">
												<a
													href="/cloud/security-operation"
													className="hover:text-primary-600 dark:hover:text-primary-500"
												>
													セキュリティー・オペレーション
												</a>
											</li>
											<li className="hover:text-bluehover">
												<a
													href="/cloud/cost-optimization"
													className="hover:text-primary-600 dark:hover:text-primary-500"
												>
													コスト最適化サービス
												</a>
											</li>
										</div>
										{/* for cloud */}
										{/* <div className="space-y-4 p-4">
											<li>
												<h2 className=" text-1xl  font-bold">
												ネットワーク関連サービス 
												</h2>
											</li>
											<li className="hover:text-bluehover">
												<a
													href="/microsoft/microsoft-365"
													className="hover:text-primary-600 dark:hover:text-primary-500"
												>
													データセンター・ネットワーク || Microsoft 365
												</a>
											</li>
											<li className="hover:text-bluehover">
												<a
													href="/developing"
													className="hover:text-primary-600 dark:hover:text-primary-500"
												>
													企業ネットワーク
												</a>
											</li>
											<li className="hover:text-bluehover">
												<a
													href="/developing"
													className="hover:text-primary-600 dark:hover:text-primary-500"
												>
													SD-WANネットワーク
												</a>
											</li>
										</div> */}
										{/* open this comment for more services*/}
										{/* <div className="space-y-4 p-4">
											<li>
												<h2 className=" text-1xl  font-bold">
												システム関連サービス

												</h2>
											</li>
											<li className="hover:text-bluehover">
												<a
													href="/security/operation-service"
													className="hover:text-primary-600 dark:hover:text-primary-500"
												>
													security
												</a>
											</li>
											<li className="hover:text-bluehover">
												<a
													href="/developing"
													className="hover:text-primary-600 dark:hover:text-primary-500"
												>
													HCI & VM
												</a>
											</li>
											<li className="hover:text-bluehover">
												<a
													href="/developing"
													className="hover:text-primary-600 dark:hover:text-primary-500"
												>
													コンテナ
												</a>
											</li>
											<li className="hover:text-bluehover">
												<a
													href="/developing"
													className="hover:text-primary-600 dark:hover:text-primary-500"
												>
													Kubernetes バックアップ
												</a>
											</li>
											<li className="hover:text-bluehover">
												<a
													href="/developing"
													className="hover:text-primary-600 dark:hover:text-primary-500"
												>
													災害復興
												</a>
											</li>
											<li className="hover:text-bluehover">
												<a
													href="/developing"
													className="hover:text-primary-600 dark:hover:text-primary-500"
												>
													データ保護
												</a>
											</li>
										</div>
										<div className="space-y-4 p-4">
											<li>
												<h2 className=" text-1xl  font-bold">
												セキュリティ・ソリューション・サービス
											</h2>
										</li>
										<li className="hover:text-bluehover">
											<a
												href="/developing"
												className="hover:text-primary-600 dark:hover:text-primary-500"
											>
												Next Gen ファイアウォール
											</a>
										</li>
										<li className="hover:text-bluehover">
											<a
												href="/developing"
												className="hover:text-primary-600 dark:hover:text-primary-500"
											>
												ウェブアプリケーションファイアウォール
											</a>
										</li>
										<li className="hover:text-bluehover">
											<a
												href="/developing"
												className="hover:text-primary-600 dark:hover:text-primary-500"
											>
												API セキュリティー
											</a>
										</li>
										<li className="hover:text-bluehover">
											<a
												href="/developing"
												className="hover:text-primary-600 dark:hover:text-primary-500"
											>
												DNS セキュリティー
											</a>
										</li>
										<li className="hover:text-bluehover">
											<a
												href="/developing"
												className="hover:text-primary-600 dark:hover:text-primary-500"
											>
												リモートアクセス
											</a>
										</li>
									</div>
									<div className="space-y-4 p-4">
										<li>
											<h2 className=" text-1xl  font-bold">

												モダン・ワークスペース・サービス

											</h2>
										</li>
										<li className="hover:text-bluehover">
											<a
												href="/developing"
												className="hover:text-primary-600 dark:hover:text-primary-500"
											>
												Office 365
											</a>
										</li>
										<li className="hover:text-bluehover">
											<a
												href="/developing"
												className="hover:text-primary-600 dark:hover:text-primary-500"
											>
												Power BI
											</a>
										</li>
										<li className="hover:text-bluehover">
											<a
												href="/developing"
												className="hover:text-primary-600 dark:hover:text-primary-500"
											>
												Dynamic 365
											</a>
										</li>
										<li className="hover:text-bluehover">
											<a
												href="/developing"
												className="hover:text-primary-600 dark:hover:text-primary-500"
											>
												Power App
											</a>
										</li>
										<li className="hover:text-bluehover">
											<a
												href="/developing"
												className="hover:text-primary-600 dark:hover:text-primary-500"
											>
												Power Platform
											</a>
										</li>
									</div> */}
								</ul>
							</MegaMenu.Dropdown>
						</li>
						{/* </Navbar.Link> */}

						<Navbar.Link href="/about" className=" font-bold hover:underline">
							NEX4について
						</Navbar.Link>
						<Navbar.Link href="/aws" className=" font-bold hover:underline">
							AWS
						</Navbar.Link>
						{/* <Navbar.Link href="team" className=" font-bold hover:underline">チーム</Navbar.Link> */}
						<Navbar.Link href="/blog" className=" font-bold hover:underline">
							ブログ
						</Navbar.Link>
						<Navbar.Link href="/faq" className=" font-bold hover:underline">
							お問い合わせ
						</Navbar.Link>
						<Search />
					</Navbar.Collapse>
				</div>
			</MegaMenu>
		</header>
	);
};

export default TestNav;
