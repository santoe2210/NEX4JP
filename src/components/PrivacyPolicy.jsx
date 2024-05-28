import React from "react";

const PrivacyPolicy = () => {
    return(
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neturalSilver py-16" id="pp">
                <div className="flex items-center justify-center lg:w-2/5 mx-auto"> 
                    <div className="text-center">
                    <h2 className='lg:text-5xl text-3xl text-neturalDGrey font-semibold mb-6 lg:leading-snug'>プライバシーポリシー
                    </h2>
                    <div className="flex items-center justify-center gap-8">
                        <button className="btn-primary border-t-indigo-600 text-white">
                            <a href="https://www.nex4.net/privacy-policy/">もっと見る</a>
                        </button>
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default PrivacyPolicy;