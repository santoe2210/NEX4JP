import React from "react";
import { Footer } from "flowbite-react";
import logo from '../assets/logo.png';

import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";

const MyFooter = () =>{
    return(
        <Footer container>
        <div className="w-full px-10" id="faq" >
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div className="space-y-4 mb-8 w-1/2">
              <Footer.Brand
                href="/"
                src={logo}
                alt="NEX4 Logo"
              />
              <h3>私たちにとって毎日が新たな日であり、どこにいてもお客様に<br/>ご満足いただけるよう全力で取り組んでいます。</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:mt-4 sm:grid-cols-3 sm:gap-6 hover:text-bluehover w-1/2 font-semibold">
              <div className="">
                <Footer.Title title="Menu" />
                <Footer.LinkGroup col>
                  <Footer.Link href="/">ホームページ</Footer.Link>
                  <Footer.Link href="/service">サービス</Footer.Link>
                  <Footer.Link href="/about">NEX4について</Footer.Link>
                  <Footer.Link href="/product">チーム</Footer.Link>
                  <Footer.Link href="/blog">ブロック</Footer.Link>
                  <Footer.Link href="/faq">お問い合わせ</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col>
                  <Footer.Link href="https://www.facebook.com/nex4ict?mibextid=LQQJ4d">Facebook</Footer.Link>
                  <Footer.Link href="https://www.linkedin.com/company/nex4ict/mycompany/">LinkedIn</Footer.Link>
                  <Footer.Link href="https://x.com/nex4ict?s=09&mx=2">Twitter</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col>
                  <Footer.Link href="https://www.nex4.net/privacy-policy/">Privacy Policy</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="/" by="NEX4" year={2024} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="https://www.facebook.com/nex4ict?mibextid=LQQJ4d" icon={BsFacebook} />
              <Footer.Icon href="https://www.linkedin.com/company/nex4ict/mycompany/" icon={BsLinkedin} />
              <Footer.Icon href="https://x.com/nex4ict?s=09&mx=2" icon={BsTwitter} />
              <Footer.Icon href="https://www.youtube.com/channel/UCwcOIHDbgoaKzGM3LG-ACRg" icon={BsYoutube} />
            </div>
          </div>
        </div>
      </Footer>
    );
};

export default MyFooter;