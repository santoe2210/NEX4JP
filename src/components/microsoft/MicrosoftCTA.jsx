/** @format */

import React from "react";
import SectionHeader from "./SectionHeader";

const MicrosoftCTA = ({ title, desc }) => {
	return <section className="max-w-[1240px] section-margin mx-auto">
        <SectionHeader title={title}/>
        <p className="font-medium mt-6">{desc}</p>
    </section>;
};

export default MicrosoftCTA;
