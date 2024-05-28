import React from 'react';
import service1 from '../assets/icons/Op13.png'
import service2 from '../assets/icons/Op14.png'

const Professional5 = () => {
    return (
        <div className="container mx-auto px-4 py-8" path="">

            {/* Service Section: Operational Support & Managed Services */}
            <ServiceSection
                title="ファイアウォール"
                description="AWSのファイアウォール導入支援サービスは、AWS環境のセキュリティを強化するためのファイアウォール設定を支援します。具体的には、AWS WAF（Web Application Firewall）の設定、セキュリティグループやネットワークACLの構成、侵入検知システム（IDS）や侵入防止システム（IPS）の設定などが含まれます。これにより、不正アクセスからシステムを保護します。"
                icon={service1}
            />

            {/* Service Section: Troubleshooting & Technical Support */}
            <ServiceSection
                title="ロードバランサー"
                description="AWSのロードバランサー導入支援サービスは、トラフィックの分散を最適化するためのロードバランシングソリューションを設計・構築する支援を提供します。これには、Amazon ELB（Elastic Load Balancing）の設定、アプリケーションロードバランサー（ALB）やネットワークロードバランサー（NLB）の導入、ヘルスチェックの設定、トラフィックの分散ポリシーの最適化などが含まれます。これにより、システムの可用性とスケーラビリティを向上させます。"
                icon={service2}
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

export default Professional5;
