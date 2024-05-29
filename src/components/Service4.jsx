import React from "react";
import NavBar from "./NavBar";
import { Card } from "flowbite-react";
import { Table } from "flowbite-react";
import MyFooter from './MyFooter'
import ProfessionalServicePage from './Professional4'
import Professional5 from './Professional5';
import Op9 from "../assets/icons/Op9.png"
import Op10 from "../assets/icons/Op10.png"
import Op11 from "../assets/icons/Op11.png"
import Op12 from "../assets/icons/Op12.png"
import Op13 from "../assets/icons/Op13.png"
import Op14 from "../assets/icons/Op14.png"


const Service4 = () =>{

    const services = [
        {
            id: 1, title: "より速い展開" , description: "" , image:Op9
        },
        {
            id: 2, title: "最適化されたパフォーマンス" , description: "" , image:Op10
        },
        {
            id: 3, title: "リスクの低減" , description: "" , image:"https://img.icons8.com/ios-filled/50/medium-risk.png"
        },

    ]

    return(
        <div path="service4">
            <div className="mb-16">
                <NavBar/>
            </div>
            <div className=" mb-8 items-center">
                <div>
                    <h1 className='text-6xl font-bold mb-4 text-neturalDGrey leading-snug text-center'>
                        <span className='cursor-pointer hover:text-bluehover'>AWS導入支援サービス</span>   
                    </h1>
                </div>  
            </div>
            <div className="mb-8 space-y-8">
            <div className=" text-4xl font-semibold text-neturalDGrey">
                    <h2 className="text-2xl text-center space-y-4 cursor-pointer hover:text-bluehover">
                    サービスリスト一覧
                    </h2>
            </div>
            {/* cards */}
            <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
                {
                    services.map(service => <div key={service.id} className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4
                    hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full">
                        <div>
                            <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl"><img src={service.image} alt="" className="-ml-5"/></div>
                            <h4 className="text-2xl font-bold text-neturalDGrey mb-2 px-2">{service.title}</h4>
                            <p className="text-sm text-neturalDGrey">{service.description}</p>
                        </div>
                    </div>)
                }
            </div>
        <div className="mt-12 grid md:grid-cols-2 grid-cols-1 gap-4 items-center text-center justify-center">
            <div className="flex flex-col items-center my-8 hover:border-indigo-700">
                <figure className="flex justify-center m-0 p-0">
                    <img src={Op12} alt="" />
                </figure>
                <div className="ml-5">
                    <h3 className="text-2xl font-bold text-neturalDGrey mb-2 px-2">ネットワーク</h3>
                    <p className="text-sm text-neturalDGrey"></p>
                </div>
            </div>
            <div className="flex flex-col items-center m-0 p-0">
                <figure className="flex justify-center m-0 p-0">
                    <img src={Op11} alt="" />
                </figure>
                <div className="ml-5">
                    <h3 className="text-2xl font-bold text-neturalDGrey mb-2 px-2">インスタンスストレージ</h3>
                    <p className="text-sm text-neturalDGrey"></p>
                </div>
            </div>
        </div>
        <div>
            <ProfessionalServicePage/>
        </div>
        <div className="mt-14 grid md:grid-cols-2 grid-cols-1 gap-8 items-center text-center">
            <div className="flex flex-col items-center my-8 hover:border-indigo-700">
                <figure className="flex justify-center m-0 p-0">
                    <img src={Op13} alt="" />
                </figure>
                <div className="ml-5">
                    <h3 className="text-2xl font-bold text-neturalDGrey mb-2 px-2">ファイアウォール</h3>
                    <p className="text-sm text-neturalDGrey"></p>
                </div>
            </div>
            <div className="flex flex-col items-center m-0 p-0">
                <figure className="flex justify-center m-0 p-0">
                    <img src={Op14} alt="" />
                </figure>
                <div className="ml-5">
                    <h3 className="text-2xl font-bold text-neturalDGrey mb-2 px-2">ロードバランサー</h3>
                    <p className="text-sm text-neturalDGrey"></p>
                </div>
            </div>
        </div>
        <div>
            <Professional5/>
        </div>
            <div className="mb-8">
            <div className=" text-4xl font-semibold text-neturalDGrey">
                <h2 className="text-2xl text-center space-y-4 cursor-pointer hover:text-bluehover">
                AAWS導入支援サービス
                </h2>
            </div>
            <div className="overflow-x-auto text-2xl px-20">
      <Table striped>
        <Table.Head className=" text-2xl font-semibold text-neturalDGrey text-center">
          <Table.HeadCell>プラン</Table.HeadCell>
          <Table.HeadCell>内容</Table.HeadCell>
          <Table.HeadCell>料金</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y text-1xl font-semibold text-neturalDGrey text-center">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'AWSの導入支援"'}
            </Table.Cell>
            <Table.Cell>インフラ構築:インスタンス起動、ミドルウェアインストール、<br />FW設定、ロードバランサー作成、バックアップ設定、DNS設定 など</Table.Cell>
            <Table.Cell>お問い合わせください</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            既存環境からAWSへの移行
            </Table.Cell>
            <Table.Cell>お客様の環境の調査、検証、AWS環境の構築、移行作業の実施 など</Table.Cell>
            <Table.Cell>お問い合わせください</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            AWSファイルサーバー構築パッケージ
                </Table.Cell>
            <Table.Cell>ファイルサーバー用途であればこちらもおすすめ。<br />
                フルマネージド型のファイルサーバーを一式10万円で構築するパッケージサービス</Table.Cell>
            <Table.Cell>お問い合わせください</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
            </div>
            
            </div>
        <div>
           <MyFooter/> 
        </div> 
            
        </div>
       
    );
};

export default Service4;