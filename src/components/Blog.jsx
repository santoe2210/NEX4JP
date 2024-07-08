import React from "react";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog/blog1.png";
import NavBar from "./TestNav";
import MyFooter from "./MyFooter";
import '../assets/css/blog.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Navigation, Pagination } from 'swiper';

// Install Swiper modules
// SwiperCore.use([Navigation, Pagination]);

const Blog = () => {
    return (
        <div className="py-16 max-w-screen-2xl mx-auto" id="blog">
            {/* <div className="mb-16">
                <NavBar/>
            </div> */}
            <section className="latest-featured-blogs">
                <div className="container">
                    <h1 className="title">新しい注目のブログ</h1>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}
                    >
                        {featuredBlogData.map((blog, index) => (
                            <SwiperSlide key={index}>
                                <div className="blog-item">
                                    <img src={blog.image} alt={blog.title} />
                                    <h3>{blog.title}</h3>
                                    <p>{blog.description}</p>
                                    <a href={blog.link}>Read More</a>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            <section className="latest-blogs">
                <div className="container">
                    <h1 className="title">私たちのブログ</h1>
                    <div className="category-search">
                        <select className="category-dropdown">
                            <option value="category1">カテゴリー</option>
                            {/* Add more categories here */}
                        </select>
                        <div className="search-bar">
                            <input type="text" placeholder="検索" />
                            <button type="submit">🔍</button>
                        </div>
                    </div>
                    <div className="blog-list">
                        {blogData.map((blog, index) => (
                            <div key={index} className="blog-item">
                                <img src={blog.image} alt={blog.title} />
                                <h3>{blog.title}</h3>
                                <p>{blog.description}</p>
                                <a href={blog.link}>Read More</a>
                            </div>
                        ))}
                    </div>
                    <div className="pagination">
                        <button className="prev-page">＜</button>
                        <div className="page-numbers">
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            {/* Add more page numbers here */}
                            <button>63</button>
                            <button>64</button>
                            <button>65</button>
                        </div>
                        <button className="next-page">＞</button>
                    </div>
                </div>
            </section>

            {/* <div>
                <MyFooter/>
            </div> */}
        </div>
    );
};

const featuredBlogData = [
    {
        image: blog1,
        title: 'FEATURED BLOG 1',
        description: 'Description for featured blog 1',
        link: '#',
    },
    {
        image: blog2,
        title: 'FEATURED BLOG 2',
        description: 'Description for featured blog 2',
        link: '#',
    },
    {
        image: blog3,
        title: 'FEATURED BLOG 3',
        description: 'Description for featured blog 3',
        link: '#',
    },
    {
        image: blog4,
        title: 'FEATURED BLOG 4',
        description: 'Description for featured blog 4',
        link: '#',
    },
];

const blogData = [
    {
        image: blog1,
        title: 'ENHANCING SECURITY AND PERFORMANCE THROUGH CI/CD AND CLOUDFRONT',
        description: 'Malesuada error laudantium quibusdam, voluptas recusandae, corporis nec, metus numquam, facilis, nascetur?',
        link: '#',
    },
    {
        image: blog2,
        title: 'CLOUD SECURITY OPERATIONS ON AWS SHARING SESSION',
        description: 'Malesuada error laudantium quibusdam, voluptas recusandae, corporis nec, metus numquam, facilis, nascetur?',
        link: '#',
    },
    {
        image: blog3,
        title: 'ENHANCING SECURITY AND PERFORMANCE THROUGH CI/CD AND CLOUDFRONTHOW CORPORATE',
        description: 'Malesuada error laudantium quibusdam, voluptas recusandae, corporis nec, metus numquam, facilis, nascetur?',
        link: '#',
    },
    {
        image: blog4,
        title: 'AMAZING CAPABILITIES OF IMPERVA DATA SECURITY',
        description: 'Malesuada error laudantium quibusdam, voluptas recusandae, corporis nec, metus numquam, facilis, nascetur?',
        link: '#',
    },
    {
        image: blog4,
        title: 'DATA SECURITY ON PUBLIC CLOUD',
        description: 'Malesuada error laudantium quibusdam, voluptas recusandae, corporis nec, metus numquam, facilis, nascetur?',
        link: '#',
    },
    {
        image: blog4,
        title: 'WHY MICROSOFT CLOUD SOLUTIONS FOR EMAIL?',
        description: 'Malesuada error laudantium quibusdam, voluptas recusandae, corporis nec, metus numquam, facilis, nascetur?',
        link: '#',
    },
];

export default Blog;
