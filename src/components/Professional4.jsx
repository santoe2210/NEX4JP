import React from 'react';
import service1 from '../assets/icons/Op12.png'
import service2 from '../assets/icons/Op11.png'
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const Professional4 = () => {
    return (
        <div className="container mx-auto px-4 py-8" path="">

            {/* Service Section: Operational Support & Managed Services */}
            <ServiceSection
                title="ネットワーク"
                description="AWSのネットワーク導入支援サービスは、企業がAWS上で最適なネットワーク構成を設計・構築するための支援を提供します。これには、仮想プライベートクラウド（VPC）の設定、サブネットの分割、ルートテーブルやインターネットゲートウェイの設定、セキュリティグループやネットワークACLの構成などが含まれます。これにより、セキュアでスケーラブルなネットワーク環境を構築できます。"
                icon={service1}
            />

            {/* Service Section: Troubleshooting & Technical Support */}
            <ServiceSection
                title="インスタンスストレージ"
                description="AWSのインスタンスストレージ導入支援サービスは、EC2インスタンスに最適なストレージオプションを選定し、設定するための支援を提供します。これには、Amazon EBS（Elastic Block Store）ボリュームの作成・アタッチ、ストレージのパフォーマンス最適化、スナップショットの管理、ストレージのバックアップ戦略の構築などが含まれます。これにより、データの耐久性とパフォーマンスを確保できます。"
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

export default Professional4;
