/** @format */

import { list } from "postcss";
import React from "react";

import { GiAchievement } from "react-icons/gi";

const KeyCard = ({ logo, achievements = [] }) => {
	return (
		<article className="p-6 bg-gray-100/80 drop-shadow-md hover:drop-shadow-none hover:shadow-md hover:shadow-cyan-300/40 transition duration-300 rounded-lg space-y-5 max-w-">
			<img className="block size-24 mx-auto rounded-md" src={logo} alt="NEX4 Key Achievements" />
			{achievements.length > 0 && (
				<ul className="space-y-3">
					{achievements.map((achievement) => (
						<li className="flex gap-2 items-center" key={achievement}>
							<GiAchievement className="text-3xl shrink-0 text-yellow-300" />{" "}
							<p className="text-justify">{achievement}</p>
						</li>
					))}
				</ul>
			)}
		</article>
	);
};

export default KeyCard;
