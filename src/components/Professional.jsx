import React from 'react';
import service1 from '../assets/icons/Op1.png'
import service2 from '../assets/icons/Op2.png'
import service3 from '../assets/icons/Op3.png'

const ProfessionalServicePage = () => {
    return (
        <div className="container mx-auto px-4 py-8" path="">

            {/* Service Section: Operational Support & Managed Services */}
            <ServiceSection
                title="運用サポート・作業代行"
                description="AWSの運用サポート・作業代行サービスは、AWS上でのシステム運用や日常的な管理業務を代行するサービスです。例えば、インフラの監視、バックアップの管理、リソースの最適化、ソフトウェアの更新などが含まれます。AWSの専門家がこれらの業務を代行することで、企業は運用の負担を軽減し、コアビジネスに集中できます。"
                icon={service1}
            />

            {/* Service Section: Troubleshooting & Technical Support */}
            <ServiceSection
                title="トラブル障害対応・技術支援"
                description="AWSのトラブル障害対応・技術支援サービスは、AWS環境でのシステム障害やトラブルが発生した際に迅速に対応し、問題を解決するための支援を提供します。これには、障害の原因特定、復旧作業、システムの最適化、トラブルシューティングなどが含まれます。AWSの技術者が専門的な知識を活かして支援を行います。"
                icon={service2}
            />

            <ServiceSection
                title="レポート再発防止策"
                description="AWSのレポート再発防止策サービスは、過去に発生したトラブルや障害のレポートを分析し、同様の問題が再発しないようにするための対策を提供します。これには、問題の根本原因の特定、予防策の提案、システム構成の見直し、運用プロセスの改善などが含まれます。"
                icon={service3}
            />

            {/* Add more ServiceSection components for each service area */}

            {/* Call to Action Section */}
            <div className="text-center mt-8">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded">
                    お問い合わせする
                </button>
            </div>
        </div>
    );
};

// eslint-disable-next-line react/prop-types
const ServiceSection = ({ title, description , icon }) => {
    return (
        <div className="mb-8 flex items-center px-20">
            <div className="mr-4">
                <img src={icon}/>
            </div>
            <div>
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="mt-4">{description}</p>
            </div>
        </div>
    );
};

export default ProfessionalServicePage;
