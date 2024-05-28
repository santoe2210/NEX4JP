import React from "react";
import NavBar from "./NavBar";
import { Card } from "flowbite-react";
import { Table } from "flowbite-react";
import MyFooter from './MyFooter'

const Service1 = () =>{
    return(
        
        <div path="service1" className="mb-10">
            <div className="mb-16">
                <NavBar/>
            </div>
            <div className=" mb-8 items-center">
                <div>
                    <h1 className='text-6xl font-bold mb-4 text-neturalDGrey leading-snug text-center'>
                        <span className='cursor-pointer hover:text-bluehover'>AWSの移行サービス</span>   
                    </h1>
                </div>
                <div className="space-y-8 items-center">
                    <div className=" text-4xl font-semibold text-neturalDGrey">
                        <h2 className="text-2xl text-center space-y-4 cursor-pointer hover:text-bluehover">
                        AWS移行支援でこんな課題を解決します。
                        </h2>
                    </div>
                    <div className='space-y-8 items-center justify-center'>
                    <ul  className="flex flex-wrap gap-8 items-center justify-center" >
                        <div className='space-y-8 gap-4 items-center justify-center'>
                        <li style={{ flex: '1 1 50%'}} className="flex flex-wrap gap-12">
                            <span className="block w-12 h-12 m-0 p-0">
                                <img src="/src/assets/icons/service1.png" alt="" />
                            </span>
                                <h3 className="hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300">
                                AWSを活用した最適なサーバー構成がわからない
                                </h3>
                        </li>
                        <li style={{ flex: '1 1 50%'}} className="flex flex-wrap gap-12">
                            <span className=" block w-12 h-12 m-0 p-0">
                                <img src="/src/assets/icons/service2.png" alt="" />
                            </span>
                            <h3 className="hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300">
                            移行後の手順や運用フローがどう変わるのかわからない
                            </h3>
                        </li>
                        </div>
                        <div className='space-y-8 gap-4 items-center justify-center'>
                        <li style={{ flex: '1 1 50%' }} className="flex flex-wrap gap-12">
                            <span className=" block w-12 h-12 m-0 p-0">
                                <img src="/src/assets/icons/service3.png" alt="" />
                            </span>
                            <h3 className="hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300">
                            不要なコストを削減して、本当に必要なシステムに投資したい
                            </h3>
                        </li>
                        <li style={{ flex: '1 1 50%' }} className="flex flex-wrap gap-12">
                            <span className=" block w-12 h-12 m-0 p-0 flex-wrap">
                                <img src="/src/assets/icons/service4.png" alt="" />
                            </span>
                            <h3 className="hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300">
                            クラウド移行に関する十分な知識がない
                            </h3>
                        </li>
                        </div>
                        
                    </ul>
                    </div>
                </div>
            </div>
            <div className="mb-8 space-y-8">
            <div className=" text-4xl font-semibold text-neturalDGrey">
                    <h2 className="text-2xl text-center space-y-4 cursor-pointer hover:text-bluehover">
                    メリット
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
        <div>
           <MyFooter/> 
        </div>  
        </div>
       
    );
};

export default Service1;