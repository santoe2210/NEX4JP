import React from 'react';
import service1 from '../assets/icons/Op7.png'
import service2 from '../assets/icons/Op8.png'
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';


const ProfessionalServicePage = () => {
    return (
        <div className="container mx-auto px-4 py-8" path="">

            {/* Service Section: Operational Support & Managed Services */}
            <ServiceSection
                title="セキュリティ強化の実施"
                description="AWSのセキュリティ強化の実施サービスは、セキュリティ状況の調査結果に基づいて、必要なセキュリティ対策を実施するサービスです。これには、アクセス制御の強化、暗号化の導入、セキュリティポリシーの設定、従業員向けのセキュリティ教育などが含まれます。AWSの専門家が具体的なセキュリティ強化策を実行します。"
                icon={service1}
            />

            {/* Service Section: Troubleshooting & Technical Support */}
            <ServiceSection
                title="クラウドネイティブ化"
                description="AWSのクラウドネイティブ化サービスは、既存のシステムやアプリケーションをAWSクラウド環境に最適化するために再設計・再構築するサービスです。これにより、スケーラビリティの向上、コスト効率の改善、運用の自動化などが実現されます。具体的には、コンテナ化、マイクロサービスアーキテクチャの導入、AWSネイティブサービスの活用などが含まれます。"
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
        <motion.div 
        variants={fadeIn("up", 0.5)}
        initial= "hidden"
        whileInView={"show"}
        viewport={{once: false,amount: 0.7}}
        className="mb-8 flex items-center px-20">
            <div className="mr-4">
                <img src={icon}/>
            </div>
            <div>
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="mt-4">{description}</p>
            </div>
        </motion.div>
    );
};

export default ProfessionalServicePage;
