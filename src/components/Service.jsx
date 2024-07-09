import React from "react";
import { MdDescription } from "react-icons/md";
import m1 from "../assets/icons/m-1.png";
import m2 from "../assets/icons/m-2.png";
import m3 from "../assets/icons/m-3.png";
import NavBar from "./TestNav";
import MyFooter from "./MyFooter";

const Services = () => {
    const cloudServices = [
        {
            id: 1, title: "移動", description: "クラウドへのデータおよびアプリケーションの移行サービス。迅速かつ安全な移行を保証します。", image: m1
        },
        {
            id: 2, title: "運用・監視サービス", description: "クラウドインフラの運用と監視を提供。安定したパフォーマンスと稼働時間を維持します。", image: m2
        },
        {
            id: 3, title: "プロフェッショナル・サービス", description: "専門的なコンサルティングとサポートを提供。クラウド導入や最適化を支援します。", image: m3
        },
        {
            id: 4, title: "設計と実装", description: "クラウドソリューションの設計と実装を行います。効率的でスケーラブルなインフラを構築します。", image: m1
        },
        {
            id: 5, title: "セキュリティー・オペレーション", description: "クラウドセキュリティ運用を提供。データの保護とコンプライアンスを確保します。", image: m2
        },
        {
            id: 6, title: "コスト最適化サービス", description: "クラウド使用コストの最適化を支援。コスト効率の高い運用を実現します。", image: m3
        }
    ];

    const securityServices = [
        {
            id: 7, title: "Next Gen ファイアウォール", description: "次世代ファイアウォールの提供。高度なセキュリティ対策を実現します。", image: m1
        },
        {
            id: 8, title: "ウェブアプリケーションファイアウォール", description: "ウェブアプリケーションの保護。攻撃からウェブアプリケーションを守ります。", image: m2
        },
        {
            id: 9, title: "API セキュリティー", description: "APIのセキュリティ管理。APIエコシステム全体を保護します。", image: m3
        },
        {
            id: 10, title: "DNS セキュリティー", description: "DNSのセキュリティ対策。DNSベースの攻撃を防止します。", image: m1
        },
        {
            id: 11, title: "リモートアクセス", description: "安全なリモートアクセスサービス。リモートワーク環境を保護します。", image: m2
        }
    ];

    const networkServices = [
        {
            id: 12, title: "データセンター・ネットワーク", description: "データセンターネットワークの設計と構築。高性能で信頼性のあるネットワークを提供します。", image: m1
        },
        {
            id: 13, title: "企業ネットワーク", description: "企業向けネットワークサービス。効率的で安全なネットワークを構築します。", image: m2
        },
        {
            id: 14, title: "SD-WANネットワーク", description: "SD-WANソリューションの提供。柔軟でスケーラブルなネットワークを実現します。", image: m3
        }
    ];

    const systemServices = [
        {
            id: 15, title: "サーバー・ストレージ", description: "サーバーおよびストレージソリューション。データの安全な保管と管理を提供します。", image: m1
        },
        {
            id: 16, title: "HCI & VM", description: "ハイパーコンバージドインフラと仮想マシン。効率的なリソース管理を実現します。", image: m2
        },
        {
            id: 17, title: "コンテナ", description: "コンテナ管理サービス。アプリケーションの効率的なデプロイを支援します。", image: m3
        },
        {
            id: 18, title: "Kubernetes バックアップ", description: "Kubernetesのバックアップサービス。クラスタの安全な保護と復元を提供します。", image: m1
        },
        {
            id: 19, title: "災害復興", description: "災害復旧サービス。災害時の迅速な復旧を支援します。", image: m2
        },
        {
            id: 20, title: "データ保護", description: "データ保護ソリューション。データの安全性とプライバシーを確保します。", image: m3
        }
    ];

    const modernWorkplaceServices = [
        {
            id: 21, title: "Office 365", description: "Office 365の導入とサポート。ビジネスの効率化を支援します。", image: m1
        },
        {
            id: 22, title: "Power BI", description: "Power BIによるデータ分析。意思決定を支援します。", image: m2
        },
        {
            id: 23, title: "Dynamic 365", description: "Dynamics 365の統合ソリューション。ビジネスプロセスの最適化を実現します。", image: m3
        },
        {
            id: 24, title: "Power App", description: "Power Appsによるアプリ開発。カスタムアプリケーションを簡単に構築します。", image: m1
        },
        {
            id: 25, title: "Power Platform", description: "Power Platformの統合サービス。ビジネスの自動化と効率化を支援します。", image: m2
        }
    ];

    return (
        <div path="service" className="md-px-14 px-20 py-16 max-w-screen-2xl mx-auto">
            {/* <div className="mb-16">
                <NavBar/>    
            </div>  */}
            <div className="text-center my-8">
                {/* services card */}
                <div>
                    <h2 className="text-4xl text-neturalDGrey font-semibold mb-2">クラウドサービス</h2>
                    <p className="text-neturalDGrey font-semibold">クラウドプロバイダーがインフラストラクチャやアプリケーションの管理と運用を代行するサービスです。<br />
                        これにより、企業はIT運用の負担を軽減し、ビジネスに集中できます。<br />
                        プロバイダーはセキュリティ、スケーラビリティ、およびコスト効率を提供し、迅速な導入と柔軟な拡張をサポートします。</p>
                    <h3 className="text-3xl text-neturalDGrey font-semibold my-4">なぜこのサービスを利用するのか？</h3>
                    <p className="text-neturalDGrey font-semibold">クラウドサービスを利用することで、企業はITインフラの運用コストを削減し、スケーラビリティとセキュリティの向上を実現できます。また、専門的な支援により、迅速かつ効率的なクラウド導入が可能になります。</p>
                </div>
            </div>
            {/* cards */}
            <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
                {
                    cloudServices.map(service => <div key={service.id} className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4
                    hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full">
                        <div>
                            <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl"><img src={service.image} alt="" className="-ml-5" /></div>
                            <h4 className="text-2xl font-bold text-neturalDGrey mb-2 px-2">{service.title}</h4>
                            <p className="text-sm text-neturalDGrey">{service.description}</p>
                        </div>
                    </div>)
                }
            </div>

            <div className="text-center my-8">
                <div>
                    <h2 className="text-4xl text-neturalDGrey font-semibold mb-2">セキュリティ・ソリューション・サービス</h2>
                    <p className="text-neturalDGrey font-semibold">当社のセキュリティ・ソリューション・サービスは、最新の技術と専門知識を駆使して、企業の重要なデータとインフラを保護します。<br />
                        多層防御と高度なセキュリティ対策により、サイバー脅威からの防御を強化し、安全なビジネス運営をサポートします。</p>
                    <h3 className="text-3xl text-neturalDGrey font-semibold my-4">なぜこのサービスを利用するのか？</h3>
                    <p className="text-neturalDGrey font-semibold">企業は、サイバー脅威が増加する中で、重要なデータとインフラを保護するために強力なセキュリティ対策を必要としています。当社のセキュリティ・ソリューション・サービスは、最新のセキュリティ技術を提供し、企業のセキュリティ体制を強化します。</p>
                </div>
            </div>
            {/* cards */}
            <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
                {
                    securityServices.map(service => <div key={service.id} className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4
                    hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full">
                        <div>
                            <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl"><img src={service.image} alt="" className="-ml-5" /></div>
                            <h4 className="text-2xl font-bold text-neturalDGrey mb-2 px-2">{service.title}</h4>
                            <p className="text-sm text-neturalDGrey">{service.description}</p>
                        </div>
                    </div>)
                }
            </div>

            <div className="text-center my-8">
                <div>
                    <h2 className="text-4xl text-neturalDGrey font-semibold mb-2">ネットワーク関連サービス</h2>
                    <p className="text-neturalDGrey font-semibold">当社のネットワーク関連サービスは、企業のネットワークインフラを最適化し、信頼性とパフォーマンスを向上させます。<br />
                        最新のネットワーク技術を駆使し、安全で効率的なネットワーク運用をサポートします。</p>
                    <h3 className="text-3xl text-neturalDGrey font-semibold my-4">なぜこのサービスを利用するのか？</h3>
                    <p className="text-neturalDGrey font-semibold">ネットワークは企業の基盤であり、信頼性とパフォーマンスが求められます。当社のネットワーク関連サービスは、最新技術を活用し、ネットワークの信頼性と効率性を最大化します。</p>
                </div>
            </div>
            {/* cards */}
            <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
                {
                    networkServices.map(service => <div key={service.id} className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4
                    hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full">
                        <div>
                            <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl"><img src={service.image} alt="" className="-ml-5" /></div>
                            <h4 className="text-2xl font-bold text-neturalDGrey mb-2 px-2">{service.title}</h4>
                            <p className="text-sm text-neturalDGrey">{service.description}</p>
                        </div>
                    </div>)
                }
            </div>

            <div className="text-center my-8">
                <div>
                    <h2 className="text-4xl text-neturalDGrey font-semibold mb-2">システム関連サービス</h2>
                    <p className="text-neturalDGrey font-semibold">当社のシステム関連サービスは、企業のITインフラを最適化し、効率的なリソース管理と高いパフォーマンスを提供します。<br />
                        信頼性の高いシステムソリューションを通じて、ビジネスの継続性と成長をサポートします。</p>
                    <h3 className="text-3xl text-neturalDGrey font-semibold my-4">なぜこのサービスを利用するのか？</h3>
                    <p className="text-neturalDGrey font-semibold">企業のITインフラはビジネスの成長と効率を左右します。当社のシステム関連サービスは、最適化されたリソース管理と高性能なシステムソリューションを提供し、企業のIT運用を支援します。</p>
                </div>
            </div>
            {/* cards */}
            <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
                {
                    systemServices.map(service => <div key={service.id} className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4
                    hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full">
                        <div>
                            <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl"><img src={service.image} alt="" className="-ml-5" /></div>
                            <h4 className="text-2xl font-bold text-neturalDGrey mb-2 px-2">{service.title}</h4>
                            <p className="text-sm text-neturalDGrey">{service.description}</p>
                        </div>
                    </div>)
                }
            </div>

            <div className="text-center my-8">
                <div>
                    <h2 className="text-4xl text-neturalDGrey font-semibold mb-2">モダンワークプレイスサービス</h2>
                    <p className="text-neturalDGrey font-semibold">当社のモダンワークプレイスサービスは、最新のツールとテクノロジーを駆使して、効率的でコラボレーティブな作業環境を提供します。<br />
                        ビジネスの生産性を向上させ、柔軟な働き方を支援します。</p>
                    <h3 className="text-3xl text-neturalDGrey font-semibold my-4">なぜこのサービスを利用するのか？</h3>
                    <p className="text-neturalDGrey font-semibold">モダンワークプレイスサービスを利用することで、企業は従業員の生産性を最大化し、効率的なコラボレーション環境を構築できます。最新のツールとテクノロジーを活用し、柔軟な働き方を支援します。</p>
                </div>
            </div>
            {/* cards */}
            <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
                {
                    modernWorkplaceServices.map(service => <div key={service.id} className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4
                    hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full">
                        <div>
                            <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl"><img src={service.image} alt="" className="-ml-5" /></div>
                            <h4 className="text-2xl font-bold text-neturalDGrey mb-2 px-2">{service.title}</h4>
                            <p className="text-sm text-neturalDGrey">{service.description}</p>
                        </div>
                    </div>)
                }
            </div>
            {/* <div>
           <MyFooter/> 
        </div> */}
        </div>
    );
};

export default Services;
