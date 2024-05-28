import React from "react";
import photo1 from "../assets/icons/enteam.png";
import { Carousel } from "flowbite-react";
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

const Product = () => {
    return(
        <div id="product">
        {/* about text*/}
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 '>
            <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                <div>
                    <img src={photo1} alt="" />
                </div>
            <div className='md:w-3/5 mx-auto'>
                <h2 className='text-4xl text-neturalDGrey font-semibold mb-4 md:w-4/5'>エンジニア・チーム</h2>
                <p className='md:w-3/4 text-lg text-neturalDGrey mb-8'>デジタルで結ばれた今日の世界において、組織が業界のリーダーとなるためには、戦略のあらゆる部分を整合させることが不可欠であると私たちは考えています。<b/>私たちは、お客様がこの課題に対処し、新しいテクノロジーとの接続時に直面する可能性のある<b/>多くの障害を克服するための支援に専念しています。
                </p>
                {/* <button className='btn-primary'>Learn More</button> */}
            </div>
            </div>
        </div>
        {/* comapny status*/}

    </div>
    );
};

export default Product;