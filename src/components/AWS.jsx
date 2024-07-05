import React from 'react'
import { Carousel,Card, Button } from "flowbite-react";
import imp from "../assets/icons/implementation.png";
import AI from "../assets/icons/AI.jpg";
import ms1 from "../assets/icons/ms1.jpg";
import net from "../assets/icons/network.jpg";
import security from "../assets/icons/security.jpg";
import NavBar from './TestNav';
import MyFooter from './MyFooter';

const AWS = () => {
  return (
    <div path='aws' className='items-center'>
    <h2 className="text-4xl text-neturalDGrey text-center font-semibold mb-12 ">AWSサービス一覧</h2>
    <div className='flex flex-wrap gap-12 items-center justify-center my-1'>
    <Card className="max-w-sm hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300" 
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={imp}>
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        設計と実装
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">  
    </p>
    <Button href='/cloud/design-and-implementation'>
    もっと見る
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
    移動
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400"> 
    </p>
    <Button href='/cloud/migration'>
    もっと見る
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
    運用・監視サービス
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">  
    </p>
    <Button href='/cloud/operation-and-monitoring'>
    もっと見る
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
    プロフェッショナル・サービス
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400"> 
    </p>
    <Button href='/cloud/professional'>
    もっと見る
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
    セキュリティー・オペレーション
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
    </p>
    <Button href='/cloud/security-operation'>
    もっと見る
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
        imgSrc={imp}>
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    コスト最適化サービス
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">  
    </p>
    <Button href='/cloud/cost-optimization'>
    もっと見る
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
    {/* <div>
        <MyFooter/>
    </div> */}
</div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default AWS;
