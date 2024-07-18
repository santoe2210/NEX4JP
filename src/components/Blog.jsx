import React, { useEffect, useState } from "react";
import axios from 'axios';
import NavBar from "./TestNav";
import MyFooter from "./MyFooter";
import '../assets/css/blog.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from "swiper/modules";

const Blog = () => {
    const [featuredBlogs, setFeaturedBlogs] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    const BASE_URL = 'https://bright-eggs-6453b2c915.strapiapp.com'; // Set your base URL here

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/blogs?populate=photos`, {
                    headers: {
                        Authorization: `Bearer 50e41656cfca401c8dbf3742b4d823e7e0221f995cdf584e3b9f2427f1a3855b3954c3edd0472d0fb06d45f5f2be43fc5c71633734c511f2bcf69870c411e20efa4a54eee64b3ec652f4c655c4813edd8705d2cf0dab439d98f31304070704619111128275190eb51bffd2299cb97b5681bdd3e7b46291593fb43b8cf74f86db`
                    }
                });
                const fetchedData = response.data.data;

                // Transform the fetched data to match the current data structure
                const transformedData = fetchedData.map(blog => ({
                    image: blog.attributes.photos.data.length > 0 
                            ? `${blog.attributes.photos.data[0].attributes.url}` 
                            : 'defaultImagePath', // Provide a default image path if no photos are available
                    title: blog.attributes.title,
                    description: blog.attributes.detail.split(" ").slice(0, 20).join(" ") + '...',
                    link: `${BASE_URL}/blog/${blog.id}`
                }));

                setFeaturedBlogs(transformedData);
                setBlogs(transformedData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching blog data:', error);
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="py-16 max-w-screen-2xl mx-auto" id="blog">
            <section className="latest-featured-blogs">
                <div className="container">
                    <h1 className="title">新しい注目のブログ</h1>
                    <div className="center-carousel">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={20}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                                1245: {
                                    slidesPerView: 4,
                                },
                            }}
                            autoplay={{ delay: 3000 }}
                            loop={true}
                        >
                            {featuredBlogs.map((blog, index) => (
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
                        {blogs.map((blog, index) => (
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

export default Blog;
