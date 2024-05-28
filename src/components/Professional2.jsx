import React from 'react';
import service1 from '../assets/icons/Op5.png'
import service2 from '../assets/icons/Op4.png'
import service3 from '../assets/icons/Op6.png'

const ProfessionalServicePage = () => {
    return (
        <div className="container mx-auto px-4 py-8" path="">

            {/* Service Section: Operational Support & Managed Services */}
            <ServiceSection
                title="既存環境の調査コスト削減の提案"
                description="AWSの既存環境の調査コスト削減の提案サービスは、現在のAWS環境やオンプレミス環境を詳細に調査し、コスト削減のための提案を行います。これには、リソースの無駄を減らすための最適化、使用していないリソースの削減、効率的な運用方法の提案などが含まれます。"
                icon={service1}
            />

            {/* Service Section: Troubleshooting & Technical Support */}
            <ServiceSection
                title="コスト削減の実施"
                description="AWSのコスト削減の実施サービスは、調査結果に基づいて具体的なコスト削減策を実行するサービスです。これには、リソースの最適化、インスタンスの適正化、使用頻度の低いリソースの停止、よりコスト効率の高いサービスの導入などが含まれます。AWSの専門家が実際のコスト削減施策を実行します。"
                icon={service2}
            />

            <ServiceSection
                title="セキュリティ状況の調査"
                description="AWSのセキュリティ状況の調査サービスは、AWS環境のセキュリティ状態を評価し、潜在的な脆弱性やリスクを特定するサービスです。これには、セキュリティ診断、ペネトレーションテスト、コンプライアンスチェック、ログ分析などが含まれます。AWSのセキュリティ専門家がこれらの調査を行います。"
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
