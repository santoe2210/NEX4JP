import React, { useEffect, useState } from "react";
import logo from '../assets/lgr1.png';
import { Button, MegaMenu, Navbar } from 'flowbite-react';


const TestNav = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showdropdown, setshowdropdown] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return(
        <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0 p-0">
    <MegaMenu>
      <div className="py-4 lg:px-14 px-4 font-bold mx-auto flex max-w-screen-xl flex-wrap items-center justify-between md:space-x-8 hover:text-bluehover">
        <Navbar.Brand href="/">
          <img alt="" src={logo} className="w-50 inline-block items-center"  />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/" className=" font-bold">ホームページ</Navbar.Link>
          <Navbar.Link>
            {/* use comment closed classname and ul under this comment*/}
            <MegaMenu.Dropdown toggle={<a href="service" className=" w-4/5 font-semibold">サービス</a>} > {/* className="w-4/5 font-semibold" */}
              <ul className="grid grid-cols-5 sm:gap-1 gap-0.5 sm:mt-4">
              {/* <ul> */}
                <div className="space-y-4 p-4">
                    <li>
                        <h2 className=" text-1xl font-bold">AWS Services</h2>
                    </li>
                  <li className="hover:text-bluehover">
                    <a href="/service1" className="hover:text-primary-600 dark:hover:text-primary-500">
                        AWS移行サービス
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/service2" className="hover:text-primary-600 dark:hover:text-primary-500">
                        AWS運用監視代行サービス
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/service3" className="hover:text-primary-600 dark:hover:text-primary-500">
                        プロフェッショナルサービス
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/service4" className="hover:text-primary-600 dark:hover:text-primary-500">
                        AWS導入支援サービス
                    </a>
                  </li>
                </div>
                {/* open this comment for more services*/}
                <div className="space-y-4 p-4">
                <li>
                        <h2 className=" text-1xl  font-bold">CISCO サービス</h2>
                    </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                    CISCO サービス
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                    CISCO サービス
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                    CISCO サービス
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                    CISCO サービス
                    </a>
                  </li>
                </div>
                <div className="space-y-4 p-4">
                <li>
                        <h2 className=" text-1xl  font-bold">ネットワークサービス</h2>
                    </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                      サーバー
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                      ストレージ
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                      バックアップ
                    </a>
                  </li>
                </div>
                <div className="space-y-4 p-4">
                <li>
                        <h2 className=" text-1xl  font-bold">セキュリティー サービス</h2>
                    </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                    ファイアウォール
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                    セキュリティー
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                      F5
                    </a>
                  </li>
                </div>
                <div className="space-y-4 p-4">
                <li>
                        <h2 className=" text-1xl  font-bold">Microsoft サービス</h2>
                    </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Professional Service
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Support Service
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Soultion 
                    </a>
                  </li>
                </div>
              </ul>
            </MegaMenu.Dropdown>
          </Navbar.Link>
          <Navbar.Link href="about" className=" font-bold">NEX4について</Navbar.Link>
          <Navbar.Link href="team" className=" font-bold">チーム</Navbar.Link>
          <Navbar.Link href="blog" className=" font-bold">ブロック</Navbar.Link>
          <Navbar.Link href="faq" className=" font-bold">お問い合わせ</Navbar.Link>
        </Navbar.Collapse>
      </div>
    </MegaMenu>
        </header>

    );
};

export default TestNav;