/* eslint-disable react/no-unknown-property */
/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";

import { STRAPI_KEY, URL } from "../../utils/api_endpoints"; // Ensure this path is correct

import bg from "../../assets/icons/bg1.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import KeyCard from "../../components/cloud_services/KeyCard";
import BenifitCard from "../../components/cloud_services/BenifitCard";
import MultipleCarousel from "../../components/MultipleCarousel";
import TestiCard from "../../components/cloud_services/TestiCard";
import { Link, useNavigate } from "react-router-dom";
import WhyChoose from "../../components/cloud_services/WhyChoose";

const OperationAndMonitoring = () => {
    const navigate = useNavigate();
    const [data, setData] = useState(null);
	const ApiName = "cloud-management-service"

    useEffect(() => {
        axios
            .get(
                `${URL}/api/${ApiName}?populate[page][populate]=title1,service_condition.title,service_condition.detail,service_detail.title_for_service,service_detail.detail.icon,service_detail.detail.title,service_detail.detail.detail,why_choose_us.icon,why_choose_us.title,why_choose_us.detail,title3,merit.title,merit.detail,get_started.title,get_started.detail,title4,partners_platform.photo,partners_platform.detail,partners_platform.link,service_conclusion`,
                {
                    headers: {
                        Authorization: `Bearer ${STRAPI_KEY}`
                    }
                }
            )
            .then((response) => {
                setData(response.data.data.attributes.page);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    const getImageUrl = (path) => (path ? `${URL}${path}` : "");

    const renderKeyCards = (services) => {
        return services.map((service) => (
            <KeyCard
                key={service.id}
                img={getImageUrl(service.icon.data.attributes.url)}
                icon={<img src={getImageUrl(service.icon.data.attributes.url)} alt={service.icon.data.attributes.name} />}
                title={service.title}
                desc={<div dangerouslySetInnerHTML={{ __html: service.detail }} />}
            />
        ));
    };

    const renderBenefitCards = (benefits) => {
        return benefits.map((benefit) => (
            <BenifitCard
                key={benefit.id}
                title={benefit.title}
                desc={<div dangerouslySetInnerHTML={{ __html: benefit.detail }} />}
            />
        ));
    };

    const renderPartners = (partners) => {
        return partners.map((partner) => (
            <Link key={partner.id} className="block mr-4 w-60 md:w-96 shrink-0" to={partner.link ? partner.link : "/aws"}>
                <img
                    className="cursor-pointer w-full aspect-square object-center object-cover hover:text-blue-500"
                    src={getImageUrl(partner.photo.data.attributes.url)}
                    alt={partner.photo.data.attributes.name}
                />
                <div>
                    <a href={partner.link ? partner.link : "/aws"}>
                        <h2 className="text-5xl font-bold cursor-pointer hover:text-blue-500">
                            AWS{" "}
                        </h2>
                    </a>
                    <br />
                    <a href={partner.link ? partner.link : "/aws"}>
                        <p className="text-xl font-bold cursor-pointer hover:text-blue-500">
                            詳細を見る &#62;
                        </p>
                    </a>
                    <hr className="my-4 border-t-1 border-blue-400" />
                    <p className="mt-4" dangerouslySetInnerHTML={{ __html: partner.detail }} />
                </div>
            </Link>
        ));
    };

    return (
        <div className="">
            {/* Header */}
            <div className="relative flex items-center justify-center h-60 overflow-hidden">
                <img className="absolute left-0 right-0 w-full" src={bg} alt="Background Image" />
                <motion.h1
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.7 }}
                    className="text-white text-3xl font-semibold z-10"
                >
                    {data.title1}
                </motion.h1>
            </div>

            {/* Sub Title */}
            <div className="px-12 section-margin text-center space-y-4">
                <h2
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="text-2xl font-semibold text-bluehover"
                >
                    {data.service_conclusion?.title}
                </h2>
                <motion.div
                    variants={fadeIn(".", 0.25)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="mt-3 w-32 max-w-full mx-auto h-[.1rem] bg-bluehover "
                />

                <motion.p
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="container mx-auto"
                    dangerouslySetInnerHTML={{ __html: data.service_conclusion?.detail }}
                />
            </div>

            <hr className="section-margin w-[90%] block mx-auto" />

            <div className="outer-padding customscreen:px-0">
                {data.service_detail.map((service, index) => (
                    <div key={service.id} className="text-center section-margin rounded-tl-2xl space-y-6 rounded-br-2xl">
                        <h2
                            variants={fadeIn("down", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="text-2xl font-semibold text-bluehover"
                        >
                            {service.title_for_service}
                        </h2>
                        <motion.div
                            variants={fadeIn(".", 0.25)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="mt-3 w-32 max-w-full mx-auto h-[.1rem] bg-bluehover "
                        />
                        {renderKeyCards(service.detail)}
                    </div>
                ))}

                {/* Why Choose Section */}
                <WhyChoose
                    img={getImageUrl(data.why_choose_us.icon.data.attributes.url)}
                    title={data.why_choose_us.title}
                    desc={<div dangerouslySetInnerHTML={{ __html: data.why_choose_us.detail }} />}
                />

                {/* Benifits */}
                <div className="section-margin text-center">
                    <h2
                        variants={fadeIn("down", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="text-2xl font-semibold text-bluehover"
                    >
                        {data.title3}
                    </h2>
                    <motion.div
                        variants={fadeIn(".", 0.25)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="mt-3 w-32 max-w-full mx-auto h-[.1rem] bg-bluehover "
                    />
                    <div className="mt-6 slide-container max-w-[1240px] mx-auto gap-6">
                        <MultipleCarousel
                            breakpoints={{ mobile: 1, sm: 2, md: 3, lg: 4 }}
                            slides={4}
                        >
                            {renderBenefitCards(data.merit)}
                        </MultipleCarousel>
                    </div>
                </div>

                {/* Testimonials */}
                <motion.div className="max-w-[1240px] mx-auto">
                    <div className="section-margin section-padding gradient-1 text-white text-center">
                        <h2
                            variants={fadeIn("down", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="text-2xl font-semibold text-white"
                        >
                            事例
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
                                    desc="チームが実施したコスト最適化戦略のおかげで、高いパフォーマンスと信頼性を維持しながら、クラウドへの支出を30％削減することができました。"
                                    img=""
                                />
                                <TestiCard
                                    name="Client"
                                    desc="同サービスが提供する包括的なコスト分析によって、リソースの使用におけるいくつかの非効率性が明らかになり、私たちはすぐに対処して大幅な節約を達成しました。"
                                    img=""
                                />
                            </MultipleCarousel>
                        </div>
                    </div>
                </motion.div>

                {/* Get Started Today */}
                <div className="section-margin max-w-[1240px] drop-shadow-lg rounded-b-lg px-6 bg-white pb-8 space-y-8 text-center mx-auto">
                    <p className="text-cyan-300 text-xs font-semibold uppercase">
                        今すぐ始めよう
                    </p>
                    <motion.h2
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="text-2xl  text-bluehover font-semibold"
                    >
                        {data.get_started.title} <span className="text-bold text-cyan-400">始める準備</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="text-bluehover max-w-[1080px] mx-auto leading-loose tracking-wide"
                        dangerouslySetInnerHTML={{ __html: data.get_started.detail }}
                    />
                    <motion.button
                        variants={fadeIn(".", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="px-4 btn-outline-primary"
                        onClick={() => navigate("/faq")}
                    >
                        お問い合わせ
                    </motion.button>
                </div>

                <hr className="section-margin w-[90%] mx-auto block" />

                {/* Related Partner */}
                <motion.div
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="section-margin max-w-[1240px] mx-auto"
                >
                    <h2 className="text-center text-2xl font-bold">
                        {data.title4}
                    </h2>
                    <div className=" flex flex-col md:flex-row items-center">
                        {data.partners_platform.map((partner) => (
                            <Link
                                key={partner.id}
                                className="block mr-4 w-60 md:w-96 shrink-0"
                                to={partner.link ? partner.link : "/aws"}
                            >
                                <img
                                    className="cursor-pointer w-full aspect-square object-center object-cover hover:text-blue-500"
                                    src={getImageUrl(partner.photo.data.attributes.url)}
                                    alt={partner.photo.data.attributes.name}
                                />
                            </Link>
                        ))}
                        <div>
                            <a href="/aws">
                                <h2 className="text-5xl font-bold cursor-pointer hover:text-blue-500">
                                    AWS{" "}
                                </h2>
                            </a>
                            <br />
                            <a href="/aws">
                                <p className="text-xl font-bold cursor-pointer hover:text-blue-500">
                                    詳細を見る &#62;
                                </p>
                            </a>
                            <hr className="my-4 border-t-1 border-blue-400" />
                            <p className="mt-4" dangerouslySetInnerHTML={{ __html: data.partners_platform[0].detail }} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default OperationAndMonitoring;

