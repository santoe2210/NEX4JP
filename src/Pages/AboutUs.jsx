import React, { useState, useEffect } from "react";
import axios from 'axios';
import { STRAPI_KEY, URL } from "../utils/api_endpoints";
import MissionCard from "../components/about/MissionCard";
import { BsFillShieldLockFill, BsShieldLockFill } from "react-icons/bs";
import { MdRocketLaunch } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdRecommend } from "react-icons/md";
import { motion } from "framer-motion";
import LocationCard from "../components/about/LocationCard";
import ServiceCard from "../components/about/ServiceCard";
import MultipleCarousel from "../components/MultipleCarousel";
import AwardCard from "../components/about/AwardCard";
import MemberCard from "../components/about/MemberCard";
import TestiCard from "../components/cloud_services/TestiCard";
import { fadeIn } from "../variants";
import AWS from "../assets/aws.png";
import Network from "../assets/icons/Op12.png";
import Security from "../assets/icons/Op13.png";
import Microsoft from "../assets/icons/microsoft.png";
import System from "../assets/icons/Op10.png";
import F5 from "../assets/F5.png";
import Cisco from "../assets/icons/cisco.jpg";
import vmware from "../assets/icons/vm1.jpg";
import p3 from "../assets/icons/partner3.png";
import p4 from "../assets/icons/p4.jpg";
import p5 from "../assets/icons/p5.png";
import c1 from "../assets/icons/c1.jpg";
import c2 from "../assets/icons/c2.jpg";
import c3 from "../assets/icons/c3.jpg";
import c4 from "../assets/icons/c4.jpg";
import c5 from "../assets/icons/c5.jpg";
import c6 from "../assets/icons/c6.jpg";
import p1 from "../assets/icons/p1.png";
import p2 from "../assets/icons/p2.png";
import profile3 from "../assets/icons/p3.png";
import profile4 from "../assets/icons/profile4.png";
import profile5 from "../assets/icons/profile5.png";
import worldmap from "../assets/WorldMap.jpg";
import myanmar from "../assets/Myanmar.jpg";
import japan from "../assets/Japan.jpg";
import thailand from "../assets/Thailand.jpg";
import cambodia from "../assets/Cambodia.jpg";

const AboutUs = () => {
    const [data, setData] = useState(null);
    const ApiName = "about";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `${URL}${ApiName}?populate[titel_photo]=*&populate[missions]=*&populate[locations]=*&populate[services]=*&populate[partners]=*&populate[members]=*&populate[awards]=*&populate[our_customers]=*`,
                    {
                        headers: {
                            Authorization: `Bearer ${STRAPI_KEY}`
                        }
                    }
                );
                setData(response.data.data.attributes);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    const { main_title, aboud_detail, our_solution, service_detail, titel_photo, missions, locations, services, partners, members, awards, our_customers } = data;

    return (
        <section>
            <h2 className="text-3xl md:text-4xl font-semibold text-center">
                {main_title}
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
                    src={titel_photo.data.attributes.url}
                    alt="NEX3 Team"
                />
                <motion.p
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="leading-loose font-medium text-lg text-justify md:text-center mt-4 md:mt-6 max-w-[1240px] mx-auto"
                    dangerouslySetInnerHTML={{ __html: aboud_detail }}
                />
            </section>

            <hr className="w-[90%] mx-auto section-margin" />

            {/* Mission */}
            <section className="section-margin outer-padding">
                <h2 className="text-3xl font-semibold text-center">ミッション</h2>
                <div className="w-24 h-1 gradient-1 mt-2 rounded-lg mx-auto"></div>

                <div className="mt-6 divide-y sm:divide-y-0 md:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
                    {missions.map((mission, index) => (
                        <MissionCard
                            key={index}
                            icon={
                                index === 0 ? <BsShieldLockFill className="size-20 text-gray-700 text-center" /> :
                                index === 1 ? <MdRocketLaunch className="size-20 text-gray-700 text-center" /> :
                                index === 2 ? <VscWorkspaceTrusted className="size-20 text-gray-700 text-center" /> :
                                <MdRecommend className="size-20 text-gray-700 text-center" />
                            }
                            titleBg={
                                index === 0 ? " bg-green-400" :
                                index === 1 ? " bg-yellow-400" :
                                index === 2 ? " bg-red-400" :
                                " bg-blue-400"
                            }
                            title={mission.title}
                            list={mission.detail.replace(/<\/?[^>]+(>|$)/g, "").split("\n")}
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
                    backgroundImage: `url(${titel_photo.data.attributes.url})`,
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
                        dangerouslySetInnerHTML={{ __html: our_solution }}
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
                        src={worldmap}
                        alt="World Map"
                    />
                </div>
                <div className="md:w-1/2 grid grid-cols-2 gap-2 md:gap-6">
                    {locations.slice(1).map((location, index) => (
                        <LocationCard
                            key={index}
                            img={
                                location.title === "ミャンマー" ? myanmar :
                                location.title === "日本" ? japan :
                                location.title === "タイ" ? thailand :
                                cambodia
                            }
                            name={location.title}
                        />
                    ))}
                </div>
            </section>

            <hr className="w-[90%] mx-auto section-margin" />

            {/* Our Services */}
            <section className="section-margin outer-padding">
                <h2 className="text-3xl font-semibold text-center">サービス</h2>
                <div className="w-24 h-1 gradient-1 mt-2 rounded-lg mx-auto"></div>

                <div className="mt-6 max-w-[1300px] mx-auto md:mt-12 divide-y sm:divide-y-0 grid grid-cols-1 sm:grid-cols-2 gap-2 gap-y-6 md:gap-x-6 md:gap-y-12 lg:grid-cols-3 place-content-center">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            logo={
                                service.title === "クラウドサービス" ? AWS :
                                service.title === "ネットワークサービス" ? Network :
                                service.title === "システム関連サービス" ? System :
                                service.title === "セキュリティ・ソリューション・サービス" ? Security :
                                Microsoft
                            }
                            name={service.title}
                            bgName={
                                service.title === "クラウドサービス" ? "bg-orange-300" :
                                service.title === "ネットワークサービス" ? "bg-green-300" :
                                service.title === "システム関連サービス" ? "bg-blue-300" :
                                service.title === "セキュリティ・ソリューション・サービス" ? "bg-red-300" :
                                "bg-yellow-200"
                            }
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
                        dangerouslySetInnerHTML={{ __html: service_detail }}
                    />
                </div>
            </section>

            {/* Partner Platform */}
            <section className="section-margin outer-padding">
                <h2 className="text-3xl font-semibold text-center">パートナー・プラットフォーム</h2>
                <div className="w-24 h-1 gradient-1 mt-2 rounded-lg mx-auto"></div>

                <div className="mt-6 max-w-[1300px] divide-y sm:divide-y-0 mx-auto md:mt-12 grid sm:grid-cols-2 gap-2 gap-y-6 md:gap-x-6 md:gap-y-12 md:grid-cols-4 place-content-center">
                    {partners.map((partner, index) => (
                        <ServiceCard
                            key={index}
                            logo={
                                partner.title.includes("AWS") ? AWS :
                                partner.title.includes("Cisco") ? Cisco :
                                partner.title.includes("VMWARE") ? vmware :
                                partner.title.includes("PaloAlto") ? p3 :
                                partner.title.includes("DellEMC") ? p4 :
                                partner.title.includes("Microsoft") ? Microsoft :
                                partner.title.includes("Fortinet") ? p5 :
                                F5
                            }
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
                                {members.slice(0, 2).map((member, index) => (
                                    <MemberCard
                                        key={index}
                                        img={
                                            member.title === "Aung Thurein" ? p1 :
                                            member.title === "Min Myat Soe" ? p2 :
                                            member.title === "Thant Zin Soe" ? profile3 :
                                            member.title === "Yan Naing Oo" ? profile4 :
                                            profile5
                                        }
                                        name={member.title}
                                        roles={member.detail.replace(/<\/?[^>]+(>|$)/g, "").split("<br>")}
                                    />
                                ))}
                            </div>
                            <div className="grid mt-6 grid-cols-1 sm:grid-cols-3 mx-auto gap-6 md:gap-12 w-fit">
                                {members.slice(2).map((member, index) => (
                                    <MemberCard
                                        key={index}
                                        img={
                                            member.title === "Aung Thurein" ? p1 :
                                            member.title === "Min Myat Soe" ? p2 :
                                            member.title === "Thant Zin Soe" ? profile3 :
                                            member.title === "Yan Naing Oo" ? profile4 :
                                            profile5
                                        }
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
                    <MultipleCarousel
                        slides={3}
                        breakpoints={{ mobile: 1, sm: 2, md: 2 }}
                    >
                        {awards.map((award, index) => (
                            <AwardCard
                                key={index}
                                img={
                                    award.title.includes("AWS") ? AWS :
                                    award.title.includes("Cisco") ? Cisco :
                                    F5
                                }
                                awards={award.detail.replace(/<\/?[^>]+(>|$)/g, "").split("\n")}
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
                    {our_customers.map((customer, index) => (
                        <ServiceCard
                            key={index}
                            logo={
                                customer.title === "MNCS" ? c1 :
                                customer.title === "中小企業と大企業" ? c2 :
                                customer.title === "金融機関" ? c3 :
                                customer.title === "石油とガス" ? c4 :
                                customer.title === "通信事業者" ? c5 :
                                c6
                            }
                            name={customer.title}
                            bgName={
                                customer.title === "MNCS" ? "bg-orange-300" :
                                customer.title === "中小企業と大企業" ? "bg-green-300" :
                                customer.title === "金融機関" ? "bg-blue-300" :
                                customer.title === "石油とガス" ? "bg-green-300" :
                                customer.title === "通信事業者" ? "bg-blue-300" :
                                "bg-green-300"
                            }
                        />
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <motion.section className="section-margin outer-padding">
                <div className="gradient-2">
                    <div className="max-w-[1280px] mx-auto section-padding text-white text-center">
                        <h2
                            variants={fadeIn("down", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="text-2xl font-semibold text-white"
                        >
                            Testimonials
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
