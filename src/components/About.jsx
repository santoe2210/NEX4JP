import React, { useState, useEffect } from 'react';
import photo1 from "../assets/photo1.jpg";
import photo3 from "../assets/photo3.jpg";
import allservices from "../assets/icons/allservices.png";
import reward from "../assets/icons/rnew.png"
import clients from "../assets/icons/clients.png"
import project1 from "../assets/icons/project1.png"
import team from "../assets/icons/team.png"
import dc from "../assets/icons/dc.png"
import NavBar from "./TestNav";
import MyFooter from './MyFooter';
import f5 from "../assets/icons/f5.png";
import cisco from "../assets/icons/cc1.png";
import vmware from "../assets/icons/vm1.png";
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';


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
            <h4 className='text-2xl text-neturalGrey font-semibold'>{count}+</h4>
            
        </div>
    );
};

const About =() => {
    return(
        <div path="about" className="md-px-14 px-20 py-16 max-w-screen-2xl mx-auto">
            <div className="mb-16">
            <NavBar/>
            </div>
            {/* about text*/}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 '>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                    <div>
                        <img src={photo1} alt="" />
                    </div>
                <motion.div 
                variants={fadeIn("up", 0.5)}
                initial= "hidden"
                whileInView={"show"}
                viewport={{once: false,amount: 0.7}}
                className='md:w-3/5 mx-auto'>
                    <h2 className='text-4xl text-white font-semibold mb-4 md:w-4/5'>品質、信頼性、コンプライアンスを兼ね備えたサービスを提供するリーディング会社です！</h2>
                    <p className='md:w-3/4 text-lg text-neturalDGrey mb-8'>
                    </p>
                    {/* <button className='btn-primary'>Learn More</button> */}
                </motion.div>
                </div>
            </div>
            <div className="text-center items-center justify-center my-8 px-10">
                <h2 className="text-4xl text-neturalDGrey font-semibold mb-2">パートナー</h2>
                <p className="text-neturalDGrey font-semibold">国内で200ご客様の為にAWSサービスをプロバイダーとしてしています。</p>
                <motion.div 
                variants={fadeIn("up", 0.5)}
                initial= "hidden"
                whileInView={"show"}
                viewport={{once: false,amount: 0.7}}
                className="my-8 flex items-center justify-center">
                    <img src={allservices} alt=""  className=' items-center'/>
                </motion.div>
            </div>
            {/* write for reward*/}
            <h2 className="text-4xl text-neturalDGrey font-semibold mb-2 text-center px-10">アワード</h2>
            <p className="text-neturalDGrey font-semibold text-3xl text-center">パフォーマンス</p>
            <motion.div 
            variants={fadeIn("up", 0.5)}
            initial= "hidden"
            whileInView={"show"}
            viewport={{once: false,amount: 0.7}}
            className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 items-center text-center">
            <div className="flex flex-col items-center my-8 hover:border-indigo-700 py-8">
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
                            <li>F5ネットワークス年間最優秀ハイファイブアワード(2014,2015年)</li>
                            <li>エクストラ・マイル努力のアワード</li>
                            <li>年間最優秀パートナー ROSEAN（2016年）</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className="flex flex-col  m-0 p-0 py-8">
                <figure className="flex justify-center m-0 p-0">
                    <img src={reward} alt="" />
                </figure>
                <figure className="flex justify-center m-0 p-0">
                    <img src={cisco} alt="" />
                </figure>
                <div className="ml-5">
                    <h3 className="text-2xl font-bold text-neturalDGrey mb-2 px-2">CISCO アワード</h3>
                    <p className="text-sm text-neturalDGrey">
                        <ul className=' text-left font-semibold list-disc'>
                            <li>プレミア・パートナー</li>
                            <li>高度なデータセンター・アーキテクチャの専門化</li>
                            <li>プレミアパートナー・オブ・ザ・イヤー インドシナ（2016年）</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className="flex flex-col  m-0 p-0">
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
                            <li>ネットワーキング・セキュリティ・パートナー・<br/>2017年</li>
                        </ul>
                    </p>
                </div>
            </div>
        </motion.div>
            {/* added for web*/}
            <div className='px-10 lg:px-14 max-w-screen-2xl mx-auto bg-sky-300 py-16'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='md:w-1/2'>
                        <h2 className='text-4xl text-neturalDGrey font-semibold mb-4 md:w-2/3'>プロジェクト状況</h2>
                        <p className='md:w-3/4 text-lg text-neturalDGrey mb-8'>プロジェクト状況</p>
                    </div>
                    {/* status for project done*/}
                    <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'> 
                                <img src={clients} alt="" />
                                    <div>
                                        <Counter targetCount={110} />
                                        <p className='text-xl text-neturalGrey font-normal'>プロジェクト</p>
                                    </div>
                            </div>
                            <div className='flex items-center gap-4'> 
                                <img src={project1} alt="" />
                                    <div>
                                        <Counter targetCount={188} />
                                        <p className='text-xl text-neturalGrey font-normal'>サーバー</p>
                                    </div>
                            </div>
                        </div>
                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'> 
                                <img src={team} alt="" />
                                <div>
                                    <Counter targetCount={120} />
                                    <p className='text-xl text-neturalGrey font-normal'>チームメンバー</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'> 
                                <img src={dc} alt="" />
                                <div>
                                    <Counter targetCount={200} />
                                    <p className='text-xl text-neturalGrey font-normal'>ネットワーク機器</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
           <MyFooter/> 
        </div>
        </div>
    );
};

export default About;