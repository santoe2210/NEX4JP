import React, { useEffect, useState } from "react";
import logo from '../assets/logo.png';
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Dropdown } from "flowbite-react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
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

    const navItems = [
        { link: "ホームページ", path:"home" },
        {
            link: "サービス", path: "service", dropdownItems: [
                { id: 1, link: "AWS移行サービス", path: "/service1" },
                { id: 2, link: "AWS運用監視代行サービス", path: "/service2" },
                { id: 3, link: "プロフェッショナルサービス", path: "/service3" },
                { id: 4, link: "AWS導入支援サービス", path: "/service4" }
            ]
        },
        { link: "NEX4について", path: "about" },
        { link: "チーム", path: "product" },
        { link: "ブロック", path: "blog" },
        { link: "お問い合わせ", path: "faq" },
    ];

    return (
        <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
            <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 cursor-pointer bg-white duration-300" : ""}`}>
                <div className="flex justify-between items-center text-base cursor-pointer">
                    <a href="/" className="text-2xl font-semibold flex items-center">
                        <img src={logo} alt="" className="w-40 inline-block items-center" />
                    </a>
                    <ul className="md:flex space-x-12 hidden font-bold">
                        {navItems.map(({ link, path, dropdownItems }) => (
                            <li key={path} className="relative">
                                {dropdownItems ? (
                                    <div style={{ display: "flex" }}>
                                        <span className="block text-base text-gray-900 cursor-pointer hover:text-bluehover first:font-medium">
                                            {link}
                                        </span>
                                        <Dropdown inline>
                                            {dropdownItems.map(({ link, path }) => (
                                                <Dropdown.Item key={path} className="w-60 inline-block items-center hover:text-bluehover first:font-medium cursor-pointer">
                                                    <NavLink to={path}>{link}</NavLink>
                                                </Dropdown.Item>
                                            ))}
                                        </Dropdown>
                                    </div>
                                ) : (
                                    <Link to={path} spy={true} smooth={true} offset={-100} className="block text-base text-gray-900 cursor-pointer hover:text-bluehover first:font-medium">
                                        {link}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="focus:outline-none focus:text-gray-500 text-neturalDGrey">
                            {isMenuOpen ? (<FaXmark className="h-6 w-6 text-neturalDGrey" />) : (<FaBars className="h-6 w-6 text-neturalDGrey" />)}
                        </button>
                    </div>
                </div>
                {/*for mobile view */}
                <div className={`space-y-4 px-4 mt-16 py-7 font-bold bg-bluehover ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {navItems.map(({ link, path, dropdownItems }) => (
                        <div key={path} className="relative">
                            {dropdownItems ? (
                                <div className="block group ">
                                    <button  onClick={() => setshowdropdown(!showdropdown)} className="block text-base text-white hover:text-brandPrimary first:font-medium cursor-pointer">
                                        {link}v
                                    </button>
                                    <ul className={`pl-4 ${showdropdown ? "block" : "hidden"}`}>
                                        {dropdownItems.map(({ link, path }) => (
                                            <li key={path} className="hover:text-brandPrimary">
                                                <NavLink to={path} className="block text-white hover:text-brandPrimary first:font-medium cursor-pointer">
                                                    {link}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <Link to={path} spy={true} smooth={true} offset={-100} className="block text-base text-white hover:text-brandPrimary first:font-medium">
                                    {link}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default NavBar;


