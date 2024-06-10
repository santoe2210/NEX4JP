"use client";
import React, { useState, useEffect }from 'react';
import { Carousel,Card, Button } from "flowbite-react";
import photo1 from "../assets/icons/homej.png";
import photo2 from "../assets/icons/home.gif";
import home2 from "../assets/icons/home2.png";
import photo3 from "../assets/photo1.jpg";
import allservices from "../assets/icons/allservices.png";
import reward from "../assets/icons/rnew.png"
import clients from "../assets/icons/clients.png"
import project1 from "../assets/icons/project1.png"
import team from "../assets/icons/team.png"
import dc from "../assets/icons/dc.png"
import enteam from "../assets/icons/enteam.png";
import mg1 from "../assets/icons/mg1.png";
import f5 from "../assets/icons/f5.png";
import cisco from "../assets/icons/cc1.png";
import vmware from "../assets/icons/vm1.png";
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import bg from "../assets/icons/bg1.jpg";
import imp from "../assets/icons/implementation.png";
import AI from "../assets/icons/AI.jpg";
import ms1 from "../assets/icons/ms1.jpg";
import net from "../assets/icons/network.jpg";
import security from "../assets/icons/security.jpg";

// eslint-disable-next-line react/prop-types
const Counter = ({ targetCount }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count < targetCount) {
            const timer = setInterval(() => {
                setCount((prevCount) => prevCount + 1);
            }, 20); // Adjust the interval timing as needed

            return () => clearInterval(timer);
        }
    }, [count, targetCount]);

    return (
        <div>
            <h4 className='text-2xl text-white  font-semibold'>{count}+</h4>
            
        </div>
    );
};


const Home = () => {
    
    return(
        
        <div className='bg-neutralSilver mb-4' id="home">
            <div className='px-10 lg:px-4 max-w-screen mx-auto min-h-screen h-screen'>
                <Carousel className='w-full mx-auto px-10'>
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div>
                            <img src={photo1} alt="" />
                        </div>
                        {/* text for picture*/}
                        <div className='md:w-1/2'>
                            <p className='text-neturalDGrey text-lg mb-8 font-serif font-weight-300'>AWSの導入からコスト削減 <br />構成・運用の最適化からデータ活用まで <br />規模や業種業態を問わない<br /> マネージドサービスで </p><br />
                            <h1 className='text-6xl font-bold mb-4 text-neturalDGrey md:w-3/4 leading-snug'><span className='text-bluehover'>AWSサービス<br />プロバイダー</span></h1>
                            {/* <button className='btn-primary'>Register</button> */}
                        </div>
                    </div>
                    <div className="my-20 md:my-5 py-10 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div>
                            <img src={photo2} alt="" className='min-h-max w-full'/>
                        </div>
                        {/* text for picture*/}
                        <div className='md:w-1/2'>
                            <p className='text-neturalDGrey text-lg mb-8 font-serif font-weight-300'>
                            <ul>
                                <li>顧客にとって良いこと</li>
                                <li>従業員にとって良いこと</li>
                                <li>地域社会と国家のために良いこと</li>
                                <li>技術とプロフェッショナリズムにとって良いこと</li>
                            </ul>
                            </p>
                            <h1 className='text-6xl font-bold mb-4 text-neturalDGrey md:w-3/4 leading-snug'><span className='text-bluehover'>四つの本質</span></h1>
                            {/* <button className='btn-primary'>Register</button> */}
                        </div>
                    </div>
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div>
                            <img src={home2} alt="" className='min-h-max w-full'/>
                        </div>
                        {/* text for picture*/}
                        <div className='md:w-1/2'>
                            <p className='text-neturalDGrey text-lg mb-8 font-serif font-weight-300'>エンタープライズ・サーバー、ストレージ仮想化ソリューションとサービス  <br />
                            企業ネットワークとセキュリティソリューションサービス <br />
                            メール、コラボレーション、エンドユーザー向けサービスソリューションとサービス <br />
                            コンサルティングと管理サービス </p><br />
                            <h1 className='text-6xl font-bold mb-4 text-neturalDGrey md:w-3/4 leading-snug'><span className='text-bluehover'>サービス<br />プロバイダー</span></h1>
                            {/* <button className='btn-primary'>Register</button> */}
                        </div>
                    </div>
                </Carousel>
            </div>
            <div>
            {/* about text*/}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 '>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                    <div>
                    <img src={photo3} alt="" />
                    </div>
                <div className='md:w-3/5 mx-auto'>
                    <h2 className='text-4xl text-neturalDGrey font-semibold mb-4 md:w-4/5'>品質、信頼性、コンプライアンスを兼ね備えたサービスを提供するリーディング会社です！</h2>
                    <p className='md:w-3/4 text-lg text-neturalDGrey mb-8'>
                    </p>
                    {/* <button className='btn-primary'>Learn More</button> */}
                </div>
                </div>
            </div>
            <div className='items-center'>
                <h2 className="text-4xl text-neturalDGrey text-center font-semibold mb-12 ">Service List</h2>
                <div className='flex flex-wrap gap-12 items-center justify-center my-1'>
                <Card className="max-w-sm hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300" 
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc={imp}>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    AWS Implementation Service
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">  
                </p>
                <Button href='/service4'>
                Read more
                    <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                    </svg>
                </Button>
                </Card>
                <Card className="max-w-sm hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300" 
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc={AI}>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Data & AI
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400"> 
                </p>
                <Button href='/developing'>
                Read more
                    <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                    </svg>
                </Button>
                </Card>
                <Card className="max-w-sm hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300" 
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc={ms1}>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Microsoft Solution Service
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">  
                </p>
                <Button href='/developing'>
                Read more
                    <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                    </svg>
                </Button>
                </Card>
                <Card className="max-w-sm hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300" 
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc={net}>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Network Service
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400"> 
                </p>
                <Button href='/developing'>
                Read more
                    <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                    </svg>
                </Button>
                </Card><Card className="max-w-sm hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300" 
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc={security}>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Security Service
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                </p>
                <Button href='developing'>
                Read more
                    <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                    </svg>
                </Button>
                </Card>
                </div>
            </div>
            <div className='flex items-center justify-center mb-10 my-12 px-10'>
                <Button className='items-center justify-center rounded-md' href='/service'>
                View All Services
                    <svg className="-mr-1 ml-2 h-4 w-4 ite" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                    </svg>
                </Button>
            </div>
            <div className="text-center items-center justify-center my-8 px-10">
                <h2 className="text-4xl text-neturalDGrey font-semibold mb-2 ">パートナー</h2>
                
                <motion.div 
                variants={fadeIn("up", 0.2)}
                initial= "hidden"
                whileInView={"show"}
                viewport={{once: false,amount: 0.7}}
                className="my-8 flex items-center justify-center">
                    <img src={allservices} alt=""  className=' items-center' />
                </motion.div>
            </div>
            {/* write for reward*/}
            <h2 className="text-4xl text-neturalDGrey font-semibold mb-2 text-center px-10">アワード</h2>
            <p className="text-neturalDGrey font-semibold text-3xl text-center">パフォーマンス</p>
            <motion.div 
             variants={fadeIn("up", 0.2)}
             initial= "hidden"
             whileInView={"show"}
             viewport={{once: false,amount: 0.7}}
            className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 items-center text-center px-12">
            <div className="flex flex-col items-center my-8 hover:border-indigo-700">
                <figure className="flex justify-center m-0 p-0">
                    <img src={reward} alt="" />
                </figure>
                <figure className="flex justify-center m-0 p-0">
                    <img src={f5} alt="" />
                </figure>
                <div className="ml-5">
                    <h3 className="text-2xl font-bold text-neturalDGrey mb-2 px-2">F5 アワード</h3>
                    <p className="text-sm text-neturalDGrey">
                    <ul className=' text-left font-semibold list-disc'>
                            <li>ミャンマーにおけるユニティ・ゴールドパートナー</li>
                            <li>F5ネットワークス ハイファイブ・アワード・オブ・ザ・イヤー(2014)</li>
                            <li>エクストラ・マイル・エフォート賞</li>
                            <li>F5ネットワークス ハイファイブ・アワード・オブ・ザ・イヤー(2015年)</li>
                            <li>トップ・パートナー・オブ・ザ・イヤー ROSEAN（2016年）</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center m-0 p-0">
                <figure className="flex justify-center m-0 p-0">
                    <img src={reward} alt="" />
                </figure>
                <figure className="flex justify-center m-0 p-0">
                    <img src={cisco} alt="" />
                </figure>
                <div className="ml-5 mb-8">
                    <h3 className="text-2xl font-bold text-neturalDGrey mb-2 px-2">CISCO アワード</h3>
                    <p className="text-sm text-neturalDGrey">
                        <ul className='text-left font-semibold list-disc'>
                            <li>プレミア・パートナー</li>
                            <li>高度なデータセンター・アーキテクチャの専門化</li>
                            <li>プレミアパートナー・オブ・ザ・イヤー インドシナ（2016年）</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center m-0 p-0">
                <figure className="flex justify-center m-0 p-0">
                    <img src={reward} alt="" />
                </figure>
                <figure className="flex justify-center m-0 p-0">
                    <img src={vmware} alt="" />
                </figure>
                <div className="ml-5">
                    <h3 className="text-2xl font-bold text-neturalDGrey mb-2 px-2">VMWARE アワード</h3>
                    <p className="text-sm text-neturalDGrey">
                        <ul className='text-left font-semibold list-disc'>
                            <li>ミャンマーのエンタープライズ・ソリューション・プロバイダー</li>
                            <li>ネットワーキング・セキュリティ・パートナー・2017年</li>
                        </ul>
                    </p>
                </div>
            </div>
        </motion.div>
            {/* added for web*/}
            <div
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '300px',
                }}
            className='px-10 lg:px-14 max-w-screen-2xl mx-auto bg-sky-300 py-16'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='md:w-1/2'>
                        <h2 className='text-4xl text-white font-semibold mb-4 md:w-2/3'>プロジェクト状況</h2>
                        <p className='md:w-3/4 text-lg text-white mb-8'>プロジェクト状況</p>
                    </div>
                    {/* status for project done*/}
                    <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'> 
                                <img src={clients} alt="" />
                                    <div> 
                                        <Counter targetCount={110} />
                                        
                                        <p className='text-xl text-white font-normal'>プロジェクト</p>
                                    </div>
                            </div>
                            <div className='flex items-center gap-4'> 
                                <img src="https://img.icons8.com/dusk/64/server.png" alt="" />
                                    <div>
                                        <Counter targetCount={188} />
                                        
                                        <p className='text-xl text-white  font-normal'>サーバー</p>
                                    </div>
                            </div>
                        </div>
                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'> 
                                <img src="https://img.icons8.com/plasticine/100/conference-call.png" alt="" />
                                <div>
                                    <Counter targetCount={120} />
                                    
                                    <p className='text-xl text-white  font-normal'>チームメンバー</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'> 
                                <img src="https://img.icons8.com/matisse/100/thin-client.png" alt="" />
                                <div>
                                    <Counter targetCount={200} />
                                    
                                    <p className='text-xl text-white  font-normal'>ネットワーク機器</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 '>
            
            <motion.div 
            variants={fadeIn("right", 0.5)}
            initial= "hidden"
            whileInView={"show"}
            viewport={{once: false,amount: 0.7}} 
            className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                <div>
                    <img src={enteam} alt="" />
                </div>
            <div className='md:w-3/5 mx-auto'>
                <h2 className='text-4xl text-neturalDGrey font-semibold mb-4 md:w-4/5'>エンジニア・チーム</h2>
                <p className='md:w-3/4 text-lg text-neturalDGrey mb-8'>デジタルで結ばれた今日の世界において、組織が業界のリーダーとなるためには、戦略のあらゆる部分を整合させることが不可欠であると私たちは考えています。<b/>私たちは、お客様がこの課題に対処し、新しいテクノロジーとの接続時に直面する可能性のある<b/>多くの障害を克服するための支援に専念しています。
                </p>
                {/* <button className='btn-primary'>Learn More</button> */}
            </div>
            </motion.div>
            <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center bg-blue-400 bg-transparent'>
            <div className=' mx-auto'>
                <h2 className='text-2xl text-neturalDGrey font-semibold mb-4'>管理チーム</h2>
                <p className='md:w-3/4 text-lg text-neturalDGrey mb-8'>
                </p>
            </div>
                <motion.div variants={fadeIn("up", 0.4)}
                initial= "hidden"
                whileInView={"show"}
                viewport={{once: false,amount: 0.7}} className="h-40 sm:h-60 xl:h-60  w-3/5">
                <Carousel>
                    <img src={mg1} alt="..." />
                </Carousel>
                </motion.div>
            </div>
            
            
        </div>
        {/* For Customers only if we get customers from japan*/}
        {/* <div className=' items-center mb-8 px-9'>
            <div>
                <h2 className="text-2xl text-neturalDGrey font-semibold mb-2 text-center px-10">
                    他にもこんなお客様に導入いただいています
                </h2>
            </div>
            <div className=' flex items-center justify-center'>
                <div className='grid grid-cols-5 grid-rows-2 ml-2 gap-14'>
                        <div><img src={reward} alt="" /></div>
                        <div><img src={reward} alt="" /></div>
                        <div><img src={reward} alt="" /></div>
                        <div><img src={reward} alt="" /></div>
                        <div><img src={reward} alt="" /></div>
                        <div><img src={reward} alt="" /></div>
                        <div><img src={reward} alt="" /></div>
                        <div><img src={reward} alt="" /></div>
                        <div><img src={reward} alt="" /></div>
                        <div><img src={reward} alt="" /></div>
                </div>
            </div>   
        </div> */}
        </div>
        </div>     
    );
};

export default Home;
