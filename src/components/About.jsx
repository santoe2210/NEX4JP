import React from 'react';
import photo3 from "../assets/photo1.jpg";
import { Carousel } from "flowbite-react";
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";



const About =() => {
    return(
        <div id="about">
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
                    <button className='btn-primary'>Learn More</button>
                </div>
                </div>
            </div>
            <div className="text-center items-center justify-center my-8 px-10">
                <h2 className="text-4xl text-neturalDGrey font-semibold mb-2">パートナー</h2>
                <p className="text-neturalDGrey font-semibold">国内で200ご客様の為にAWSサービスをプロバイダーとしてしています。</p>
                <div className="my-8 flex items-center justify-center">
                    <img src="/src/assets/icons/allservices.png" alt=""  className=' items-center'/>
                </div>
            </div>
            {/* write for reward*/}
            <h2 className="text-4xl text-neturalDGrey font-semibold mb-2 text-center px-10">アワード</h2>
            <p className="text-neturalDGrey font-semibold text-3xl text-center">パフォーマンス</p>
            <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 items-center text-center">
            <div className="flex flex-col items-center my-8 hover:border-indigo-700">
                <figure className="flex justify-center m-0 p-0">
                    <img src="/src/assets/icons/reward.png" alt="" />
                </figure>
                <div className="ml-5">
                    <h3 className="text-2xl font-bold text-neturalDGrey mb-2 px-2">F5 アワード</h3>
                    <p className="text-sm text-neturalDGrey">
                    <ul className=' text-left font-semibold'>
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
                    <img src="/src/assets/icons/reward.png" alt="" />
                </figure>
                <div className="ml-5 mb-8">
                    <h3 className="text-2xl font-bold text-neturalDGrey mb-2 px-2">CISCO アワード</h3>
                    <p className="text-sm text-neturalDGrey">
                        <ul className=' font-semibold'>
                            <li>プレミア・パートナー</li>
                            <li>高度なデータセンター・アーキテクチャの専門化</li>
                            <li>プレミアパートナー・オブ・ザ・イヤー インドシナ（2016年）</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center m-0 p-0">
                <figure className="flex justify-center m-0 p-0">
                    <img src="/src/assets/icons/reward.png" alt="" />
                </figure>
                <div className="ml-5">
                    <h3 className="text-2xl font-bold text-neturalDGrey mb-2 px-2">VMWARE アワード</h3>
                    <p className="text-sm text-neturalDGrey">
                        <ul className=' font-semibold'>
                            <li>ミャンマーのエンタープライズ・ソリューション・プロバイダー</li>
                            <li>ネットワーキング・セキュリティ・パートナー・2017年</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
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
                                <img src="/src/assets/icons/clients.png" alt="" />
                                    <div>
                                        <h4 className='text-2xl text-neturalGrey font-semibold'>110+</h4>
                                        <p className='text-xl text-neturalGrey font-normal'>プロジェクト</p>
                                    </div>
                            </div>
                            <div className='flex items-center gap-4'> 
                                <img src="/src/assets/icons/project1.png" alt="" />
                                    <div>
                                        <h4 className='text-2xl text-neturalGrey font-semibold'>188+</h4>
                                        <p className='text-xl text-neturalGrey font-normal'>サーバー</p>
                                    </div>
                            </div>
                        </div>
                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'> 
                                <img src="/src/assets/icons/team.png" alt="" />
                                <div>
                                    <h4 className='text-2xl text-neturalGrey font-semibold'>120+</h4>
                                    <p className='text-xl text-neturalGrey font-normal'>チームメンバー</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'> 
                                <img src="/src/assets/icons/dc.png" alt="" />
                                <div>
                                    <h4 className='text-2xl text-neturalGrey font-semibold'>666+</h4>
                                    <p className='text-xl text-neturalGrey font-normal'>ネットワーク機器</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;