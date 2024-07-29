/** @format */

import React from "react";

const SecurityKeyServices = ({ title, children }) => {
	return (
		<section className="section-margin mx-auto max-w-[1240px]">
			<h2 className="text-2xl font-bold text-bluehover">
				{title}
			</h2>
			<div className="w-28 mt-2 h-[.15rem] bg-bluehover"></div>

			<div className="mt-8 space-y-6 md:space-y-8">{children}</div>
		</section>
	);
};

export default SecurityKeyServices;
