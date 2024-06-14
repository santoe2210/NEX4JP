import React from "react";
import NavBar from "./TestNav";
import { Card } from "flowbite-react";
import { Table } from "flowbite-react";
import MyFooter from './MyFooter'
import s1 from "../assets/icons/service1.png";
import s2 from "../assets/icons/service2.png";
import s3 from "../assets/icons/service3.png";
import s4 from "../assets/icons/service4.png";
import bg from "../assets/icons/bg1.jpg";
import aws from "../assets/aws1.jpg";

const Service1 = () =>{
    return(
        
        <div path="service1" className="md-px-14  py-16 max-w-screen-2xl mx-auto">
            <div className="mb-16">
                <NavBar/>
            </div>
            <div style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '320px',
                }}className="w-full mb-8 items-center rounded-xl">
                <div  className="h-500 w-500"> 
                    <h1 className='text-6xl font-bold mb-4 text-white leading-snug text-center h-200'>
                        <span className='cursor-pointer hover:text-black'>AWSの移行サービス</span>   
                    </h1>
                </div>
                <div className="space-y-8 items-center">
                    <div className=" text-4xl font-semibold text-white">
                        <h2 className="text-3xl text-center space-y-4 cursor-pointer hover:text-black">
                        AWS移行支援でこんな課題を解決します。
                        </h2>
                    </div>
                    <div className='space-y-8 items-center justify-center'>
                    <ul  className="flex flex-wrap gap-8 items-center justify-center" >
                        <div className='space-y-8 gap-4 items-center justify-center'>
                        <li style={{ flex: '1 1 50%'}} className="flex flex-wrap gap-12">
                            <span className="block w-12 h-12 m-0 p-0">
                                <img src="https://img.icons8.com/dusk/64/server.png" alt="" />
                            </span>
                                <h3 className="hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 text-white">
                                AWSを活用した最適なサーバー構成がわからない
                                </h3>
                        </li>
                        <li style={{ flex: '1 1 50%'}} className="flex flex-wrap gap-12">
                            <span className=" block w-12 h-12 m-0 p-0">
                            <img width="80" height="80" src="https://img.icons8.com/officel/80/immigration.png" alt="immigration"/>
                            </span>
                            <h3 className="hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 text-white">
                            移行後の手順や運用フローがどう変わるのかわからない
                            </h3>
                        </li>
                        </div>
                        <div className='space-y-8 gap-4 items-center justify-center'>
                        <li style={{ flex: '1 1 50%' }} className="flex flex-wrap gap-12">
                            <span className=" block w-12 h-12 m-0 p-0">
                                <img src="https://img.icons8.com/plasticine/100/cost.png" alt="" />
                            </span>
                            <h3 className="hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 text-white">
                            不要なコストを削減して、本当に必要なシステムに投資したい
                            </h3>
                        </li>
                        <li style={{ flex: '1 1 50%' }} className="flex flex-wrap gap-12">
                            <span className=" block w-12 h-12 m-0 p-0 flex-wrap">
                            <img width="64" height="64" src="https://img.icons8.com/dusk/64/cloud.png" alt="cloud"/>
                            </span>
                            <h3 className="hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 text-white">
                            クラウド移行に関する十分な知識がない
                            </h3>
                        </li>
                        </div>
                        
                    </ul>
                    </div>
                </div>
            </div>
            <div className="mb-8 space-y-8 px-20">
            <div className=" text-4xl font-semibold text-neturalDGrey">
                    <h2 className="text-4xl text-center space-y-4 cursor-pointer hover:text-bluehover">
                    利点
                    </h2>
            </div>
            <div className="space-y-8 items-center justify-center">
            <div className="flex flex-wrap gap-8 items-center justify-center" >
            <div className="hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300">
            <Card href="#" className="max-w-sm">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    最大 66%インフラストラクチャのコスト削減
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                
                </p>
            </Card>
            </div>
            <div className="hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300">
            <Card href="#" className="max-w-sm">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    最大 77%必要なライセンスの削減
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                
                </p>
            </Card>
            </div>
            </div>
            <div className="flex flex-wrap gap-8 items-center justify-center" >
            <div className="hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300">
            <Card href="#" className="max-w-sm">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                43%新機能の市場投入までの時間を短縮
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                
                </p>
            </Card>
            </div>
            <div className="hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300">
            <Card href="#" className="max-w-sm">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                29%イノベーションに注力するスタッフの増加
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                
                </p>
            </Card>
            </div>
            </div>
            <div>
            <div className="flex flex-wrap gap-8 items-center justify-center" >
            <div className="hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300">
            <Card href="#" className="max-w-sm">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                45%セキュリティ関連事件の <br />減少
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                
                </p>
            </Card>
            </div>
            </div>
            </div>
            </div>
            <div className="mb-8">
            <div className=" text-4xl font-semibold text-neturalDGrey">
                <h2 className="text-2xl text-center space-y-4 cursor-pointer hover:text-bluehover">
                AWSの導入・移行支援サービス プラン
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
            <div className="mb-10 px-20">
            <h2 className="text-center text-4xl font-bold">Meet our related partner platform to power your business</h2>
            <div className="mb-8 flex items-center px-20">
                <div className="mr-4">
                    <a href="/aws"><img className="cursor-pointer hover:text-blue-500" src={aws}/></a>
                </div>
                <div>
                    <a href="/aws"><h2 className="text-5xl font-bold cursor-pointer hover:text-blue-500">AWS </h2></a>
                    <br />
                    <a href="/aws"><p className="text-1xl font-bold cursor-pointer hover:text-blue-500">Find out more &#62;</p></a>
                    <hr className="my-4 border-t-1 border-blue-400" />
                    <p className="mt-4">A pioneer partner of public cloud , multi cloud, hybrid cloud infrastructure, it offers your business mature technology, complete services , golbal availability and a well-developed cloud ecosystem with an abunded of online resources </p>
                </div>
            </div>
            </div>
        <div>
           <MyFooter/> 
        </div>  
        </div>
       
    );
};

export default Service1;