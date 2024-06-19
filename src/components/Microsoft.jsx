import React from 'react'
import { Carousel,Card, Button } from "flowbite-react";
import imp from "../assets/icons/implementation.png";
import AI from "../assets/icons/AI.jpg";
import ms1 from "../assets/icons/ms1.jpg";
import net from "../assets/icons/network.jpg";
import security from "../assets/icons/security.jpg";
import NavBar from './TestNav';
import MyFooter from './MyFooter';

const Microsoft = () => {
  return (
    <div path='ms' className='items-center'>
        {/* <div>
            <NavBar/>
        </div> */}
    <h2 className="text-4xl text-neturalDGrey text-center font-semibold mb-12 ">Microsoft Service List</h2>
    <div className='flex flex-wrap gap-12 items-center justify-center my-1'>
    <Card className="max-w-sm hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300" 
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={imp}>
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Managed Service
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
       Data and AI
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
        Solution Service
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
        Professional Service
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
        Optimization Service
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
    {/* <div>
        <MyFooter/>
    </div> */}
</div>
  );
};

export default Microsoft
