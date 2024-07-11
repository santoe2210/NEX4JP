/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-mixed-spaces-and-tabs */
/** @format */

import React, { useState } from "react";

import { RiSearch2Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";

const Search = () => {
	const [showSearch, setShowSearch] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [results, setResults] = useState("");
    const navigate = useNavigate();

	const links = [
		{
			id: 1,
			name: "クラウドサービス",
			sub_links: [
				{
					id: 1,
					name: "移動",
					path: "/cloud/migration",
				},
				{
					id: 2,
					name: "運用・監視サービス",
					path: "/cloud/operation-and-monitoring",
				},
				{
					id: 3,
					name: "プロフェッショナル・サービス",
					path: "/cloud/professional",
				},
				{
					id: 4,
					name: "設計と実装",
					path: "/cloud/design-and-implementation",
				},
				{
					id: 5,
					name: "セキュリティー・オペレーション",
					path: "/cloud/security-operation",
				},
				{
					id: 6,
					name: "コスト最適化サービス",
					path: "/cloud/cost-optimization",
				},
			],
		},
	];

	const handleSearchSubmit = (e) => {
		e.preventDefault();

		// if you want not exact keyword 
        // eg. it works "colud" for "cloud"
		// But its draw back is that it's searching for every letter so if your 
        // search term includes these letter it will show all the items. 
        // eg. search term "aim"  will show "migration"
        // its props is that if there is spelling error it will show the result.


		// [...searchTerm.toLowerCase()].every((letter) =>
		// link.name.toLowerCase().includes(letter) ||
		// [...link.name.toLowerCase()].every((letter) =>
		// searchTerm.toLowerCase().includes(letter);

		const filteredCategories = links.filter((link) => {
			const matchesCategory = searchTerm
				? link.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
				  searchTerm.toLowerCase().includes(link.name.toLowerCase())
				: [];

			const matchesSubPages = link.sub_links.some((sub_link) => {
				return searchTerm
					? sub_link.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
							searchTerm.toLowerCase().includes(sub_link.name.toLowerCase())
					: [];
			});

			return matchesCategory || matchesSubPages;
		});

		let filterPages;

		links.forEach(
			(link) =>
				(filterPages = link.sub_links.filter((sub_link) => {
					return searchTerm
						? sub_link.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
								searchTerm.toLowerCase().includes(sub_link.name.toLowerCase())
						: [];
				}))
		);

		setResults({ filteredCategories, filterPages });
	};

	return (
		<div className="w-fit">
			<button
				onClick={() => {
					setShowSearch(true);
					setSearchTerm("");
                    setResults("");
				}}
				className="size-[40px] w-fit md:size-auto flex items-center justify-center"
			>
				<RiSearch2Line className="size-5 text-gray-700 hover:text-cyan-300 transition duration-300" />
			</button>
			{showSearch && (
				<div className="absolute w-full top-0 left-0">
					<div className="h-[110px] bg-gray-100/20 backdrop-blur-sm relative flex items-center justify-center">
						<form
							onSubmit={handleSearchSubmit}
							className="flex relative items-center justify-center w-96"
						>
							<input
								className="w-full focus:ring-1 text-black font-medium text-sm rounded-full focus:ring-cyan-300"
								autoFocus
								onChange={(e) => {
									setSearchTerm(e.target.value);
									e.target.value === "" && setResults("");
								}}
								type="text"
							/>
							<RiSearch2Line className="size-5 absolute right-3 text-cyan-300" />
						</form>
						<button
							type="button"
							onClick={() => {
								setShowSearch(false);
							}}
							className="absolute top-3 right-4"
						>
							<RxCross2 className="text-gray-600 md:size-5 hover:text-cyan-300 transition duration-300" />
						</button>
					</div>

					<div
						style={{ height: "calc(100vh - 110px)" }}
						className=" bg-gray-600/90 overflow-y-auto backdrop-blur-md section-bgImg-padding"
					>
						{!results &&
							(searchTerm ? (
								<p className="text-center text-white">
									検索するにはエンターキーをクリックしてください "{searchTerm}"
								</p>
							) : (
								<p className="text-center text-white">
									サービス名を入力して検索する。
								</p>
							))}

						{results && (
							<>
								{results.filterPages.length === 0 &&
									results.filteredCategories.length === 0 && (
										<p className="text-center text-white">
											"{searchTerm}"と一致する結果はみつかりませんでした。 
										</p>
									)}

								{(results.filterPages.length > 0 ||
									results.filteredCategories.length > 0) && (
									<>
										<p className="text-center text-white">
											検索結果 "{searchTerm}"
										</p>
										{/* Page */}
										{results.filterPages.length > 0 && (
											<div className="section-margin pb-6 md:pb-8 border-b bordre-b-white ">
												<h2 className="text-xl text-white">Pages</h2>
												<div className="mt-1 w-16 max-w-full h-[.1rem] bg-white " />
												<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-2 mt-6 gap-2">
													{results.filterPages.map((page) => (
														<li key={page.id}>
															<button
																onClick={() => {
																	navigate(page.path);
																	setShowSearch(false);
																}}
																className="text-white hover:underline capitalize hover:text-cyan-300"
															>
																{page.name}
															</button>
														</li>
													))}
												</ul>
											</div>
										)}

										{/* Recommend Page */}
										{results.filteredCategories.length > 0 && (
											<div className="section-margin">
												<h2 className="text-xl text-white">Related</h2>
												<div className="mt-1 w-16 max-w-full h-[.1rem] bg-white " />
												<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6 gap-2">
													{results.filteredCategories.map((category) => (
														<div key={category.id}>
															<h3 className="text-lg capitalize text-white">
																{category.name}
															</h3>
															<div className="mt-1 w-10 max-w-full h-[.1rem] bg-white " />
															<ul className="space-y-2 mt-4">
																{category.sub_links.map((page) => (
																	<li
																		key={page.id}
																	>
																		<button
																			onClick={() => {
																				navigate(page.path);
																				setShowSearch(false);
																			}}
																			className="text-white hover:underline capitalize hover:text-cyan-300"
																		>
																			{page.name}
																		</button>
																	</li>
																))}
															</ul>
														</div>
													))}
												</div>
											</div>
										)}
									</>
								)}
							</>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default Search;
