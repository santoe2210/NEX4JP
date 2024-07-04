/** @format */

import React from "react";
import Counter from "../_common/Counter";

const ApprovementCard = ({ icon, title, count = "", prize }) => {
	return (
		<article className="gap-y-3 p-4 hover:shadow-lg hover:shadow-cyan-300/50 transition duration-300 bg-gray-100/60 rounded-md text-center flex flex-col items-center justify-center">
			{icon}
			{count && <Counter targetCount={count} />}
			{prize && <h2 className="text-3xl font-semibold">{prize}</h2>}
			<h2 className="text-2xl">{title}</h2>
		</article>
	);
};

export default ApprovementCard;
