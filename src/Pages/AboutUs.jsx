/* eslint-disable react/no-unknown-property */
/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import MissionCard from "../components/about/MissionCard";
import LocationCard from "../components/about/LocationCard";
import ServiceCard from "../components/about/ServiceCard";
import MultipleCarousel from "../components/MultipleCarousel";
import AwardCard from "../components/about/AwardCard";
import MemberCard from "../components/about/MemberCard";
import TestiCard from "../components/cloud_services/TestiCard";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { BsFillShieldLockFill, BsShieldLockFill } from "react-icons/bs";
import { MdRocketLaunch, MdRecommend } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { STRAPI_KEY, URL } from "../utils/api_endpoints";

import aboutUsPhoto from "../assets/photo3.jpg";

const AboutUs = () => {
    const [data, setData] = useState(null);
    const ApiName = "about";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `${URL}/api/${ApiName}?populate[main_title]=*&populate[titel_photo]=*&populate[about_detail]=*&populate[missions][populate]=icon,title,detail&populate[our_solution]=*&populate[locations][populate]=title,photo&populate[services][populate]=title,photo&populate[service_detail]=*&populate[partners][populate]=title,photo&populate[members][populate]=icon,title,detail&populate[awards][populate]=icon,title,detail&populate[our_customers][populate]=title,photo`,
                    {
                        headers: {
                            Authorization: `Bearer ${STRAPI_KEY}`,
                        },
                    }
                );
                setData(response.data.data.attributes);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
        fetchData();
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    const getImageUrl = (path) => (path ? `${URL}${path}` : "");

    return (
        <section>
            <h2 className="text-3xl md:text-4xl font-semibold text-center">
                {data.main_title}
            </h2>
            <div className="w-24 h-1 gradient-1 mt-2 mx-auto"></div>

            {/* About Us Section */}
            <section className="section-margin outer-padding">
                <motion.img
                    variants={fadeIn(".", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="w-full h-60 md:h-96 object-cover rounded-md drop-shadow-xl"
                    src={getImageUrl(data.titel_photo?.data?.attributes?.url)}
                    alt="NEX4 Team"
                />
                <motion.p
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="leading-loose font-medium text-lg text-justify md:text-center mt-4 md:mt-6 max-w-[1240px] mx-auto"
                    dangerouslySetInnerHTML={{ __html: data.aboud_detail }}
                />
            </section>

            <hr className="w-[90%] mx-auto section-margin" />

            {/* Mission */}
            <section className="section-margin outer-padding">
                <h2 className="text-3xl font-semibold text-center">ミッション</h2>
                <div className="w-24 h-1 gradient-1 mt-2 rounded-lg mx-auto"></div>

                <div className="mt-6 divide-y sm:divide-y-0 md:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
                    {data.missions.map((mission, index) => (
                        <MissionCard
                            key={index}
                            icon={
                                index === 0 ? (
                                    <BsShieldLockFill className="size-20 text-gray-700 text-center" />
                                ) : index === 1 ? (
                                    <MdRocketLaunch className="size-20 text-gray-700 text-center" />
                                ) : index === 2 ? (
                                    <VscWorkspaceTrusted className="size-20 text-gray-700 text-center" />
                                ) : (
                                    <MdRecommend className="size-20 text-gray-700 text-center" />
                                )
                            }
                            titleBg={
                                index === 0
                                    ? "bg-green-400"
                                    : index === 1
                                        ? "bg-yellow-400"
                                        : index === 2
                                            ? "bg-red-400"
                                            : "bg-blue-400"
                            }
                            title={mission.title}
                            detail={mission.detail}
                        />
                    ))}
                </div>
            </section>

            {/* NEX4 ICT SOLUTIONS */}
            <motion.section
                variants={fadeIn(".", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                style={{
                    backgroundImage: `url(${getImageUrl(data.titel_photo?.data?.attributes?.url)})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                }}
                className="section-margin"
            >
                <div className="w-full h-full section-bgImg-padding bg-gray-100/25 backdrop-blur-md">
                    <motion.p
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="text-md md:text-lg max-w-[1024px] bg-gray-300/50 p-4 rounded-md tracking-wider text-center leading-relaxed mx-auto text-black font-semibold"
                        dangerouslySetInnerHTML={{ __html: data.our_solution }}
                    />
                    <motion.h2
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="px-12 w-fit mx-auto text-xl md:text-2xl font-medium mt-6 pt-2 pb-1 bg-violet-400 text-white"
                    >
                        NEX4 ICT ソリューション
                    </motion.h2>
                </div>
            </motion.section>

            {/* Location */}
            <section className="section-margin max-w-[1300px] mx-auto outer-padding flex items-center flex-col md:flex-row justify-between gap-6">
                <div className="md:w-1/2 w-full">
                    <h2 className="text-3xl font-semibold">Location</h2>
                    <div className="w-24 h-1 gradient-1 mt-2 rounded-lg"></div>
                    <motion.img
                        variants={fadeIn("right", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="mt-6 border rounded-md w-full aspect-square object-cover"
                        src={getImageUrl(data.locations[0]?.photo?.data?.attributes?.url)}
                        alt="World Map"
                    />
                </div>
                <div className="md:w-1/2 grid grid-cols-2 gap-2 md:gap-6">
                    {data.locations.slice(1).map((location, index) => (
                        <LocationCard key={index} img={getImageUrl(location.photo.data.attributes.url)} name={location.title} />
                    ))}
                </div>
            </section>

            <hr className="w-[90%] mx-auto section-margin" />
            {/* Our Services */}
            <section className="section-margin outer-padding">
                <h2 className="text-3xl font-semibold text-center">サービス</h2>
                <div className="w-24 h-1 gradient-1 mt-2 rounded-lg mx-auto"></div>

                <div className="mt-6 max-w-[1300px] mx-auto md:mt-12 divide-y sm:divide-y-0 grid grid-cols-1 sm:grid-cols-2 gap-2 gap-y-6 md:gap-x-6 md:gap-y-12 lg:grid-cols-3 place-content-center">
                    {data.services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            logo={getImageUrl(service.photo.data.attributes.url)}
                            name={service.title}
                            bgName="bg-orange-300" // Change background dynamically if needed
                        />
                    ))}
                </div>
            </section>

            {/* Text Only Section */}
            <section className="section-margin outer-padding">
                <div className="section-bgImg-padding gradient-1">
                    <motion.h2
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="text-xl md:text-2xl font-medium max-w-[1080px] mx-auto text-center"
                        dangerouslySetInnerHTML={{ __html: data.service_detail }}
                    />
                </div>
            </section>

            {/* Partner Platform */}
            <section className="section-margin outer-padding">
                <h2 className="text-3xl font-semibold text-center">パートナー・プラットフォーム</h2>
                <div className="w-24 h-1 gradient-1 mt-2 rounded-lg mx-auto"></div>

                <div className="mt-6 max-w-[1300px] divide-y sm:divide-y-0 mx-auto md:mt-12 grid sm:grid-cols-2 gap-2 gap-y-6 md:gap-x-6 md:gap-y-12 md:grid-cols-4 place-content-center">
                    {data.partners.map((partner, index) => (
                        <ServiceCard
                            key={index}
                            logo={getImageUrl(partner.photo.data.attributes.url)}
                            name={partner.title}
                        />
                    ))}
                </div>
            </section>

            {/* Our Team Member */}
            <section className="section-margin outer-padding">
                <div className="gradient-2">
                    <div className="section-bgImg-padding max-w-[1280px] mx-auto gap-6 flex items-center md:justify-center flex-col md:flex-row">
                        <div>
                            <motion.h2
                                variants={fadeIn("right", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.7 }}
                                className="text-2xl text-center md:text-left md:text-4xl lg:text-6xl md:leading-snug"
                            >
                                <span className="text-white">チーム</span>{" "}
                                <br className="hidden md:block" /> メンバー{" "}
                            </motion.h2>
                            <div className="w-24 md:hidden h-1 bg-gradient-to-tl from-cyan-300 to-white mt-2 rounded-lg mx-auto"></div>
                        </div>

                        <div className="mx-auto">
                            <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto gap-6 md:gap-12 w-fit">
                                {data.members.map((member, index) => (
                                    <MemberCard
                                        key={index}
                                        img={getImageUrl(member.icon.data.attributes.url)}
                                        name={member.title}
                                        roles={member.detail.replace(/<\/?[^>]+(>|$)/g, "").split("<br>")}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Awards */}
            <section className="section-margin outer-padding">
                <h2 className="text-3xl font-semibold text-center">アワード</h2>
                <div className="w-24 h-1 gradient-1 mt-2 rounded-lg mx-auto"></div>

                <div className="mt-6 max-w-[1280px] mx-auto">
                    <MultipleCarousel slides={3} breakpoints={{ mobile: 1, sm: 2, md: 2 }}>
                        {data.awards.map((award, index) => (
                            <AwardCard
                                key={index}
                                img={getImageUrl(award.icon.data.attributes.url)}
                                awards={award.detail}
                            />
                        ))}
                    </MultipleCarousel>
                </div>
            </section>

            <hr className="w-[90%] mx-auto section-margin" />

            {/* Our Clients */}
            <section className="section-margin outer-padding">
                <h2 className="text-3xl font-semibold text-center">お客様</h2>
                <div className="w-24 h-1 gradient-1 mt-2 rounded-lg mx-auto"></div>

                <div className="mt-6 max-w-[1300px] mx-auto md:mt-12 divide-y sm:divide-y-0 grid grid-cols-1 sm:grid-cols-2 gap-2 gap-y-6 md:gap-x-6 md:gap-y-12 lg:grid-cols-4 place-content-center">
                    {data.our_customers.map((customer, index) => (
                        <ServiceCard
                            key={index}
                            logo={getImageUrl(customer.photo.data.attributes.url)}
                            name={customer.title}
                            bgName="bg-orange-300" // Change background dynamically if needed
                        />
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <motion.section className="section-margin outer-padding">
                <div className="gradient-2">
                    <div className="max-w-[1280px] mx-auto section-padding text-white text-center">
                        <motion.h2
                            variants={fadeIn("down", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="text-2xl font-semibold text-white"
                        >
                            Testimonials
                        </motion.h2>
                        <motion.div
                            variants={fadeIn(".", 0.25)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="mt-3 w-32 max-w-full mx-auto h-[.1rem] bg-white"
                        />
                        <div className="mt-6 slide-container dot-white">
                            <MultipleCarousel breakpoints={{ mobile: 1, sm: 1, md: 2, lg: 3 }} slides={3}>
                                <TestiCard
                                    name="Client"
                                    desc="NEX4は技術チームとプロジェクト管理チームにおいて強力であり、またNEX4への対応も非常に柔軟です。私たちAYA銀行は、常に信頼を第一に考えており、NEX4は信頼できるパートナーの一つです。"
                                    img=""
                                />
                                <TestiCard
                                    name="Client"
                                    desc="NEX4は、いくつかの問題が発見された場合、すぐに解決するための短期的な解決策をアドバイスすることができる。"
                                    img=""
                                />
                                <TestiCard
                                    name="Client"
                                    desc="NEX4は、技術面で私たちの銀行の要件とこの要件を満たすことができる唯一のSI企業です。"
                                    img=""
                                />
                            </MultipleCarousel>
                        </div>
                    </div>
                </div>
            </motion.section>
        </section>
    );
};

export default AboutUs;
