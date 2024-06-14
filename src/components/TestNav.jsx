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
          <Navbar.Link href="/" className=" font-bold hover:underline">Why NEX4</Navbar.Link>
          <Navbar.Link>
            {/* use comment closed classname and ul under this comment*/}
            <MegaMenu.Dropdown toggle={<a href="service" className=" w-4/5 font-semibold hover:underline">Services</a>} > {/* className="w-4/5 font-semibold" */}
              <ul className="grid grid-cols-3 sm:gap-1 gap-0.5 sm:mt-4">
              {/* <ul> */}
                <div className="space-y-4 p-4">
                    <li>
                        <h2 className=" text-1xl font-bold">Cloud Related Services</h2>
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
                        Design and Implemenation
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                      Security Operation
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                      Cost Optimization Service
                    </a>
                  </li>
                </div>
                {/* for cloud */}
                <div className="space-y-4 p-4">
                <li>
                        <h2 className=" text-1xl  font-bold">Network Related Services</h2>
                    </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Data Center Network
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Enterprise Network
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                    SD-WAN Network
                    </a>
                  </li>
                </div>
                {/* open this comment for more services*/}
                <div className="space-y-4 p-4">
                <li>
                        <h2 className=" text-1xl  font-bold">System Related Services</h2>
                    </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Server Storage
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                    HCI & VM
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Containers
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Kubernetes Backup
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Diaster Recovery
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Data Protection
                    </a>
                  </li>
                </div>
                <div className="space-y-4 p-4">
                <li>
                        <h2 className=" text-1xl  font-bold">Security Solution Services</h2>
                    </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Next Gen Firewall
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Web application firewall
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                    API Security
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                    DNS Security
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Remote Access
                    </a>
                  </li>
                </div>
                <div className="space-y-4 p-4">
                <li>
                    <h2 className=" text-1xl  font-bold">Microsoft Services</h2>
                    </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Office 365 
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                      Power BI
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                      Dynamic 365
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                      Power App
                    </a>
                  </li>
                  <li className="hover:text-bluehover">
                    <a href="/developing" className="hover:text-primary-600 dark:hover:text-primary-500">
                      Power Platform
                    </a>
                  </li>
                </div>
              </ul>
            </MegaMenu.Dropdown>
          </Navbar.Link>
          <Navbar.Link href="about" className=" font-bold hover:underline">About</Navbar.Link>
          <Navbar.Link href="aws" className=" font-bold hover:underline">AWS</Navbar.Link>
          {/* <Navbar.Link href="team" className=" font-bold hover:underline">チーム</Navbar.Link> */}
          <Navbar.Link href="blog" className=" font-bold hover:underline">Blog</Navbar.Link>
          <Navbar.Link href="faq" className=" font-bold hover:underline">Contact us</Navbar.Link>
        </Navbar.Collapse>
      </div>
    </MegaMenu>
        </header>

    );
};

export default TestNav;