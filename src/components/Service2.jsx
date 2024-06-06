import React from "react";
import NavBar from "./TestNav";
import { Card } from "flowbite-react";
import { Table } from "flowbite-react";
import MyFooter from './MyFooter';
import s1 from "../assets/icons/service1.png";
import s2 from "../assets/icons/service2.png";
import s3 from "../assets/icons/service3.png";
import s4 from "../assets/icons/service4.png";
import bg from "../assets/icons/bg1.jpg";

const Service2 = () =>{
    return(
        
        <div path="service2" className="md-px-14 px-20 py-16 max-w-screen-2xl mx-auto">
            <div className="mb-16">
                <NavBar/>
            </div>
            <div style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',}}className=" mb-8 items-center rounded-xl">
                <div>
                    <h1 className='text-6xl font-bold mb-4 text-white leading-snug text-center'>
                        <span className='cursor-pointer hover:text-bluehover'>運用監視代行サービス</span>   
                    </h1>
                </div>
                <div className="space-y-8 items-center">
                    <div className=" text-4xl font-semibold text-white">
                        <h2 className="text-2xl text-center space-y-4 cursor-pointer hover:text-bluehover">
                        Amazon CloudWatch はこんな課題を解決します。
                        </h2>
                    </div>
                    <div className='space-y-8 items-center justify-center'>
                    <ul  className="flex flex-wrap gap-8 items-center justify-center" >
                        <div className='space-y-8 gap-4 items-center justify-center'>
                        <li style={{ flex: '1 1 50%'}} className="flex flex-wrap gap-12">
                            <span className="block w-12 h-12 m-0 p-0">
                                <img src={s1} alt="" />
                            </span>
                                <h3 className="hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 text-white">
                                アプリケーションを監視したい
                                </h3>
                        </li>
                        <li style={{ flex: '1 1 50%'}} className="flex flex-wrap gap-12">
                            <span className=" block w-12 h-12 m-0 p-0">
                                <img src={s2} alt="" />
                            </span>
                            <h3 className="hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 text-white">
                            パフォーマンスの変化に応答したい
                            </h3>
                        </li>
                        </div>
                        <div className='space-y-8 gap-4 items-center justify-center'>
                        <li style={{ flex: '1 1 50%' }} className="flex flex-wrap gap-12">
                            <span className=" block w-12 h-12 m-0 p-0">
                                <img src={s3} alt="" />
                            </span>
                            <h3 className="hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 text-white">
                            リソースの使用を最適化したい
                            </h3>
                        </li>
                        <li style={{ flex: '1 1 50%' }} className="flex flex-wrap gap-12">
                            <span className=" block w-12 h-12 m-0 p-0 flex-wrap">
                                <img src={s4} alt="" />
                            </span>
                            <h3 className="hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 text-white">
                            運用状態に関するインサイトを提供したい
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
                予算や用途に応じた柔軟なプランとオプション
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                
                </p>
            </Card>
            </div>
            <div className="hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300">
            <Card href="#" className="max-w-sm">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                システム全体のパフォーマンスを可視化し
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
                24時間/365日年中無休でサポート提供
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                
                </p>
            </Card>
            </div>
            <div className="hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300">
            <Card href="#" className="max-w-sm">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                ユーザーはアラームを設定、変更に自動的に対応
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                
                </p>
            </Card>
            </div>
            </div>
            </div>
            <div className="mb-8">
    <div className="mt-12 bg-bgcolor flex flex-col items-center">
        <h2 className="p-6 text-center bg-cyan-600 font-semibold text-neutral-100">
            <span>24時間、365日対応の「AWS監視・運用代行サービス」</span>
        </h2>
        <div className="justify-center flex">
            <ol className="flex flex-wrap gap-16 items-center">
                <li className="w-72 text-center">
                    <span className="block">
                        <img src={s4} alt="" className="mx-auto" />
                    </span>
                    <h3 className="mt-9 text-2xl text-bluehover">自動化・効率化を踏まえた 運用設計</h3>
                    <p className="mt-2 text-xl">
                        過負荷に備えたオートスケーリングやデータ定期バックアップなど、AWSのベストプラクティスに則って自動化と効率化を踏まえた設計を行います。
                    </p>
                </li>
                <li className="w-72 text-center">
                    <span className="block">
                        <img src={s4} alt="" className="mx-auto" />
                    </span>
                    <h3 className="mt-9 text-2xl text-bluehover">24時間365日の監視</h3>
                    <p className="mt-2 text-xl">
                        監視や運用保守に人員を割く必要はありません。監視サーバーにてリソース状況からサービス継続性まで幅広くチェックし、手順書に基づいた対応や連絡を行います。
                    </p>
                </li>
                <li className="w-72 text-center">
                    <span className="block">
                        <img src={s4} alt="" className="mx-auto" />
                    </span>
                    <h3 className="mt-9 text-2xl text-bluehover">障害発生時の一次対応</h3>
                    <p className="mt-2 text-xl">
                        AWSで障害が発生した場合には、運用監視の設計時に作成した障害対応手順書に基づいて復旧の対応をします。障害対応手順書に基づき、迅速かつ効果的な復旧作業を実施します。
                    </p>
                </li>
            </ol>
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
          <Table.HeadCell>監視項目</Table.HeadCell>
          <Table.HeadCell>監視手法</Table.HeadCell>
          <Table.HeadCell>監視時間</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y text-1xl font-semibold text-neturalDGrey text-center">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'死活監視'}
            </Table.Cell>
            <Table.Cell>ICMP疎通があるかどうかを確認</Table.Cell>
            <Table.Cell>5分</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            プロセス監視
            </Table.Cell>
            <Table.Cell>プロセスが生存しているかどうかを確認</Table.Cell>
            <Table.Cell>5分</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            ポート監視
                </Table.Cell>
            <Table.Cell>ポートがOPENしているかどうかを確認</Table.Cell>
            <Table.Cell>5分</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            ディスク容量監視
            </Table.Cell>
            <Table.Cell>ディスク容量の空き状況を確認</Table.Cell>
            <Table.Cell>5分</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            リソース監視
            </Table.Cell>
            <Table.Cell>CPU メモリ 等のリソース状況を確認</Table.Cell>
            <Table.Cell>5分</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            ログ監視
            </Table.Cell>
            <Table.Cell>特定の文字列を含むログが出力されるかどうかを確認</Table.Cell>
            <Table.Cell>5分</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            URL監視
            </Table.Cell>
            <Table.Cell>サービスURLの正常性を監視</Table.Cell>
            <Table.Cell>5分</Table.Cell>
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

export default Service2;