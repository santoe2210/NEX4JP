import React, { useEffect, useState } from "react";
import logo from '../assets/lgr1.png';
import { Button, MegaMenu, Navbar } from 'flowbite-react';
// add hover underline

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
          <Navbar.Link href="/" className=" font-bold hover:underline">ホームページ</Navbar.Link>
          <Navbar.Link>
            {/* use comment closed classname and ul under this comment*/}
            <MegaMenu.Dropdown toggle={<a href="service" className=" w-4/5 font-semibold hover:underline">サービス</a>} > {/* className="w-4/5 font-semibold" */}
              <ul className="grid grid-cols-3 sm:gap-1 gap-0.5 sm:mt-4">
              {/* <ul> */}
                <div className="space-y-4 p-4">
                    <li>
                        <h2 className=" text-1xl font-bold">Services</h2>
                    </li>
                  <li className="hover:text-bluehover">
                    <a href="/service1" className="hover:text-primary-600 dark:hover:text-primary-500">
                        Migration
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/service2" className="hover:text-primary-600 dark:hover:text-primary-500">
                        Operation and Monitoring Service
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/service3" className="hover:text-primary-600 dark:hover:text-primary-500">
                        Professional Services 
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/service4" className="hover:text-primary-600 dark:hover:text-primary-500">
                        Implemenation Suppot Service
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                      Managed Service
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                      Optimization Service
                    </a>
                  </li>
                </div>
                {/* open this comment for more services*/}
                <div className="space-y-4 p-4">
                <li>
                        <h2 className=" text-1xl  font-bold">Solutions</h2>
                    </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Microsoft Solution Service
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Security Solution Service
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Newtwork Solution Service
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Industry Solution Service
                    </a>
                  </li>
                </div>
                <div className="space-y-4 p-4">
                <li>
                        <h2 className=" text-1xl  font-bold">Network</h2>
                    </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                      Enterprise Network
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                      DC Netwok
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                      Network Services
                    </a>
                  </li>
                </div>
                <div className="space-y-4 p-4">
                <li>
                        <h2 className=" text-1xl  font-bold">Firewall & Security</h2>
                    </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Colud Based Security
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Enterprise Security
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                      DC/Core Security
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                      Firewall Services
                    </a>
                  </li>
                </div>
                <div className="space-y-4 p-4">
                <li>
                        <h2 className=" text-1xl  font-bold">Data & Applications</h2>
                    </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Data & AI
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                    ERP
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                    CRM
                    </a>
                  </li>
                </div>
                <div className="space-y-4 p-4">
                <li>
                        <h2 className=" text-1xl  font-bold">Partner Platform</h2>
                    </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                    AWS
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Microsoft
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                    CISCO
                    </a>
                  </li>
                </div>
              </ul>
            </MegaMenu.Dropdown>
          </Navbar.Link>
          <Navbar.Link href="about" className=" font-bold hover:underline">NEX4について</Navbar.Link>
          <Navbar.Link href="team" className=" font-bold hover:underline">チーム</Navbar.Link>
          <Navbar.Link href="blog" className=" font-bold hover:underline">ブロック</Navbar.Link>
          <Navbar.Link href="faq" className=" font-bold hover:underline">お問い合わせ</Navbar.Link>
        </Navbar.Collapse>
      </div>
    </MegaMenu>
        </header>

    );
};

export default TestNav;