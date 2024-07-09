/** @format */

import { Button, Card, Carousel } from "flowbite-react";
import React from "react";
import SlideCard from "../components/home/SlideCard";

import bgImg1 from "../assets/bg/carouselBg1.jpg";
import sliderPhoto1 from "../assets/photo3.jpg";
import avatar from "../assets/avatar.jpeg";

import MultipleCarousel from "../components/MultipleCarousel";
import WhyChooseCard from "../components/home/WhyChooseCard";
import ApprovementCard from "../components/home/ApprovementCard";
import KeyCard from "../components/home/KeyCard";
import Blog from "../components/Blog"; // Changed to import Blog
import F5 from "../assets/F5.png";
import Cisco from "../assets/icons/cisco.jpg";
import AWS from "../assets/aws.png";

import { GiAchievement } from "react-icons/gi";
import { FaTasks, FaServer } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import {
  MdOutlineSecurity,
  MdOutlineMiscellaneousServices,
  MdOutlineSpeed,
  MdSupportAgent,
} from "react-icons/md";
import { TiGroupOutline } from "react-icons/ti";

import imp from "../assets/icons/implementation.png";
import AI from "../assets/icons/AI.jpg";
import ms1 from "../assets/icons/ms1.jpg";
import net from "../assets/icons/network.jpg";
import security from "../assets/icons/security.jpg";
import partners from "../assets/partners.jpg";
import engineeringTeam from "../assets/engineeringTeam.jpg";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const RenewHome = () => {
  return (
    <div>
      {/* Carousel */}
      <div>
        <Carousel>
          <SlideCard
            bgImg={bgImg1}
            title="卓越性と顧客満足度を追求し、高度なセキュリティ、インフラ、クラウドサービスを提供します。​"
            to="/about"
            img={sliderPhoto1}
          />
          <SlideCard
            bgImg={bgImg1}
            title="効率性、拡張性、セキュリティを高めるために設計されたクラウドサービスで、お客様のビジネスを強化します。シームレスな統合と、お客様固有の要件に合わせた比類のないサポートによる自由を体験しています。​"
            to="/about"
          />
          <SlideCard
            bgImg={bgImg1}
            title="私たちのミッションは、セキュリティ、効率性、信頼性を高める革新的なICTソリューションを提供することです。お客様のご要望に合わせたサポートと最先端技術により、お客様のビジネスが急速に進化するデジタル環境の中で常に優位に立てるよう努めます。​"
            to="/about"
          />
        </Carousel>
      </div>

      {/* Approvement Section */}
      <section className="section-margin outer-padding grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        <ApprovementCard
          icon={<GiAchievement className=" size-36 text-cyan-300" />}
          title="ミャンマーにおけるAWS上級パートナー"
          prize="1 st"
        />
        <ApprovementCard
          icon={<FaTasks className=" size-28 text-cyan-300" />}
          title="終了プロジェクト"
          count="110"
        />
        <ApprovementCard
          icon={<FaServer className=" size-28 text-cyan-300" />}
          title="サーバー"
          count="180"
        />
        <ApprovementCard
          icon={<PiCertificateFill className=" size-36 text-cyan-300" />}
          title="認証授与"
          count="80"
        />
      </section>

      {/* Our Journey Section */}
      <section className="section-margin flex items-center gap-6 flex-col md:flex-row lg:gap-12 section-bgImg-padding gradient-2">
        <motion.div
          variants={fadeIn("right", 0.25)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="xl:w-1/2 text-gray-800"
        >
          <h2 className="text-4xl tracking-wider">
            <span className="text-xl tracking-wide">NEX4の</span>
            <br /> 歴史
          </h2>

          <div className="w-24 h-1 rounded-lg gradient-1 mt-2"></div>
          <motion.img
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="w-1/2 m-4 lg:m-6 float-right hidden md:block xl:hidden object-cover rounded-md"
            src={sliderPhoto1}
            alt=""
          />
          <p className="mt-3 text-lg leading-relaxed text-justify">
            NEX4は、革新的な技術と卓越したサービスによってネットワークソリューションを革命的に変えることをミッションとして、
            2013年に設立されました。小さなスタートアップとして始まり、顧客満足を最優先し、最先端技術を取り入れることで急速に成長しました。
            年々、同社は高度なネットワークソリューション、マネージドサービス、クラウドコンピューティング、
            強固なサイバーセキュリティ対策を含むサービスを拡充してきました。
            現在、NEX4は信頼性、持続可能性、顧客中心のアプローチで知られるネットワークサービス業界のリーダーです。
          </p>
        </motion.div>
        <motion.img
          variants={fadeIn("left", 0.25)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="w-full xl:w-1/2 md:hidden xl:block object-cover rounded-md"
          src={sliderPhoto1}
          alt=""
        />
      </section>

      {/* Why Choose NEX4 */}
      <section className="section-margin outer-padding text-center">
        <h2 className="text-3xl font-semibold">選ばれる5つの理由</h2>
        <div className="w-24 h-1 gradient-1 mt-2 mx-auto"></div>
        <div className="mt-6">
          <MultipleCarousel
            breakpoints={{ mobile: 1, sm: 2, md: 3, lg: 4 }}
            slides={4}
          >
            <WhyChooseCard
              icon={<MdOutlineSecurity className=" size-32 text-white" />}
              title="高度なセキュリティ"
              desc="NEX4は企業のセキュリティに特化し、お客様のデータとシステムを脅威から確実に保護します。"
            />
            <WhyChooseCard
							icon={
								<MdOutlineMiscellaneousServices className=" size-32 text-white" />
							}
              title="総合サービス"
              desc="データセンター、ネットワークインフラからクラウドソリューション、最新ワークスペース技術まで、NEX4はICTサービス一式を提供しています。"
            />
            <WhyChooseCard
              icon={<MdOutlineSpeed className=" size-36 text-white" />}
              title="信頼性とスピード "
              desc="NEX4は、信頼性が高く迅速なソリューションを提供し、お客様の業務を強化することをお約束します。"
            />
            <WhyChooseCard
              icon={<MdSupportAgent className=" size-36 text-white" />}
              title="要件に合わせたサポート"
              desc="お客様一人ひとりのご要件に合わせたコンサルティングと技術サポートを提供します。"
            />
            <WhyChooseCard
              icon={<TiGroupOutline className=" size-36 text-white" />}
              title="信頼される専門知識"
              desc="信頼される専門知識当社の専門知識は、卓越性と顧客満足度へのコミットメントを反映し、大手銀行や企業から信頼されています。"
            />
          </MultipleCarousel>
        </div>
      </section>

      <hr className="w-[90%] mx-auto section-margin" />

      {/* Key Achievements */}
      <section className="section-margin outer-padding text-center">
        <h2 className="text-3xl font-semibold">実績</h2>
        <div className="w-24 h-1 gradient-1 mt-2 mx-auto"></div>
        <div className="mt-6 max-w-7xl mx-auto md:mt-12 grid grid-cols-1 sm:grid-cols-2 justify-items-stretch lg:grid-cols-3 gap-6 md-gap-12">
          <KeyCard
            logo={F5}
            achievements={[
              "ミャンマーで最初で唯一のF5ゴールドパートナー",
              "F5での豊富な経験を持つ創業者",
              "ADCとWAFソリューションでトップ銀行と通信会社にサービスを提供",
            ]}
          />
          <KeyCard
            logo={Cisco}
            achievements={[
              "ミャンマー初の現地Ciscoゴールドパートナー",
              "銀行2行と通信会社1社にCisco ACIを導入。",
            ]}
          />
          <KeyCard
            logo={AWS}
            achievements={[
              "ミャンマーにおけるAWS上級パートナー",
              "AWSウェルアーキテクトパートナープログラム",
            ]}
          />
        </div>
      </section>

      <hr className="w-[90%] mx-auto section-margin" />

      {/* Service List */}
      <section className="section-margin outer-padding text-center">
        <h2 className="text-3xl font-semibold">サービス一覧</h2>
        <div className="w-24 h-1 gradient-1 mt-2 mx-auto"></div>
        <motion.div
          variants={fadeIn("up", 0.25)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-6 items-center justify-center"
        >
          <Card
            className="max-w-xs hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={imp}
          >
            <motion.h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              クラウドサービス
            </motion.h5>
            <p className="font-normal text-gray-700 dark:text-gray-400"></p>
            <Button href="/aws">
              もっと見る
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Card>
          <Card
            className="max-w-xs hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={AI}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              セキュリティ・ソリューション・サービス
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400"></p>
            <Button href="/developing">
              もっと見る
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Card>
          <Card
            className="max-w-xs hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={ms1}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Microsoft ソリューションサービス
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400"></p>
            <Button href="/developing">
              もっと見る
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Card>
          <Card
            className="max-w-xs hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={net}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              ネットワークサービス
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400"></p>
            <Button href="/developing">
              もっと見る
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Card>
        </motion.div>
        <div className="flex items-center justify-center mb-10 my-12 px-10">
          <Button
            className="items-center justify-center rounded-md"
            href="/service"
          >
            全てのサービスを見る
            <svg
              className="-mr-1 ml-2 h-4 w-4 ite"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </div>
      </section>

      <hr className="w-[90%] mx-auto section-margin" />

      {/* Partners And Alliances */}
      <section className=" section-margin outer-padding text-center">
        <h2 className="text-3xl font-semibold">パートナーと提携</h2>
        <div className="w-24 h-1 gradient-1 mt-2 mx-auto"></div>
        <motion.img
          variants={fadeIn("right", 0.25)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="w-full mt-6 object-cover"
          src={partners}
          alt="NEX$ Partners And Alliances"
        />
      </section>

      <hr className="w-[90%] mx-auto section-margin" />

      {/* Our Strong Engineering Team */}
      <section className=" section-margin outer-padding text-center">
        <h2 className="text-3xl font-semibold">エンジニアリング・チーム</h2>
        <div className="w-24 h-1 gradient-1 mt-2 mx-auto"></div>
        <motion.img
          variants={fadeIn("left", 0.25)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="w-full mt-6 object-cover"
          src={engineeringTeam}
          alt="NEX$ Our Strong Engineering Team"
        />
      </section>

      <hr className="w-[90%] mx-auto section-margin" />

      {/* Blogs */}
      <section className=" section-margin outer-padding text-center">
        <h2 className="text-3xl font-semibold">ブログ</h2>
        <div className="w-24 h-1 gradient-1 mt-2 mx-auto"></div>
        <motion.div
          variants={fadeIn("up", 0.25)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="mt-6"
        >
          <Blog /> {/* Changed to use Blog component */}
        </motion.div>
      </section>
    </div>
  );
};

export default RenewHome;
