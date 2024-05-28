"use client";
import React from 'react';
import { Carousel } from "flowbite-react";
import photo1 from "../assets/icons/home1.png";
import photo2 from "../assets/icons/home.gif";
import photo3 from "../assets/icons/home2.png";
import NavBar from "./NavBar";

const Home = () => {
    return(
        <div className='bg-neutralSilver' id="home">
            <div>
            <NavBar/>
            </div>
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
                            <p className='text-neturalDGrey text-lg mb-8 font-serif font-weight-300'>1.顧客にとって良いこと <br />2.従業員にとって良いこと <br />3.地域社会と国家のために良いこと<br />4.技術とプロフェッショナリズムにとって良いこと</p><br />
                            <h1 className='text-6xl font-bold mb-4 text-neturalDGrey md:w-3/4 leading-snug'><span className='text-bluehover'>四つの本質</span></h1>
                            {/* <button className='btn-primary'>Register</button> */}
                        </div>
                    </div>
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div>
                            <img src={photo3} alt="" className='min-h-max w-full'/>
                        </div>
                        {/* text for picture*/}
                        <div className='md:w-1/2'>
                            <p className='text-neturalDGrey text-lg mb-8 font-serif font-weight-300'>エンタープライズ・サーバー、ストレージ仮想化ソリューションとサービス  <br />
                            企業ネットワークとセキュリティソリューションサービス <br />
                            メール、コラボレーション、エンドユーザー向けサービスソリューションとサービス <br />
                            コンサルティングと管理サービス </p><br />
                            <h1 className='text-6xl font-bold mb-4 text-neturalDGrey md:w-3/4 leading-snug'><span className='text-bluehover'>AWSサービス<br />プロバイダー</span></h1>
                            {/* <button className='btn-primary'>Register</button> */}
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>     
    );
};

export default Home;
