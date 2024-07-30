/** @format */

import React from "react";
import SectionHeader from "./SectionHeader";

const MicrosoftKeyServices = ({ title, children }) => {
	return (
		<section className="section-margin max-w-[1240px] mx-auto">
			<SectionHeader title={title} />
			{children}
		</section>
	);
};

export default MicrosoftKeyServices;
