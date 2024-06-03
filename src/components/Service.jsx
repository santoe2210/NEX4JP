import React from "react";
import { MdDescription } from "react-icons/md";
import m1 from "../assets/icons/m-1.png";
import m2 from "../assets/icons/m-2.png";
import m3 from "../assets/icons/m-3.png";
import NavBar from "./TestNav";
import MyFooter from "./MyFooter";
const Services =() => {
    const services = [
        {
            id: 1, title: "プロフェッショナルサービス" , description: "企業がクラウド導入や移行、最適化を成功させるための専門的な支援を提供します。これには、コンサルティング、実装支援、トレーニング、ベストプラクティスの提供が含まれます。" , image:m1
        },
        {
            id: 2, title: "管理サービス" , description: "クラウドリソースの配置、監視、管理を簡素化するためのツールとサービスを提供します。これにより、インフラストラクチャのパフォーマンス最適化やコスト管理、セキュリティの強化が効率的に行えます。" , image:m2
        },
        {
            id: 3, title: "AWS/Azureへの課金" , description: "どちらも従量課金制を採用しており、使用したリソースに応じて料金が発生します。長期利用割引や無料利用枠も提供されており、コスト管理ツールを使って効率的にコストを追跡できます。" , image:m3
        },

    ]
    return(
        <div path="service" className="md-px-14 px-20 py-16 max-w-screen-2xl mx-auto">
            <div className="mb-16">
                <NavBar/>    
            </div> 
            <div className="text-center my-8">
                {/* services card */}
                <div>
                <h2 className="text-4xl text-neturalDGrey font-semibold mb-2">マネージドクラウドサービス</h2>
                <p className="text-neturalDGrey font-semibold">クラウドプロバイダーがインフラストラクチャやアプリケーションの管理と運用を代行するサービスです。<br />
                これにより、企業はIT運用の負担を軽減し、ビジネスに集中できます。<br />
                プロバイダーはセキュリティ、スケーラビリティ、およびコスト効率を提供し、迅速な導入と柔軟な拡張をサポートします。</p>
                </div>
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
        <div>
           <MyFooter/> 
        </div>
        </div>

    );

};

export default Services;