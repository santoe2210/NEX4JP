/** @format */

import React from "react";

const WhyChooseCard = ({ icon, title, desc }) => {
	return (
		<article className="flex gradient-1 text-white items-center justify-stretch gap-y-3 flex-col p-6 rounded-md">
			{icon}
			<h2 className="text-2xl font-semibold">{title}</h2>
			<p>{desc}</p>
		</article>
	);
};

export default WhyChooseCard;
