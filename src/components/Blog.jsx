import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import '../assets/css/blog.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from "swiper/modules";

const Blog = () => {
    const [featuredBlogs, setFeaturedBlogs] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    const BASE_URL = 'https://bright-eggs-6453b2c915.strapiapp.com';
    const API_KEY = '752ca3bde6c9c4c06198c76dff4ad5f3c82733dbd23c1b7e8e952ae42a436b50ef696f8f976f4439bbf297da7e7c0bb087ff8ad6113b452ddc2b85513b9275dacc1d2a7596da95f6883cb557a8728edc3750ccece807abdef72e94d0b04bbcb4a3c3a2f90f9a90f30ec11bc075a1244aa90c8d9e8a95ff92d7eb0d14be137629';

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/blogs?populate=photos`, {
                    headers: {
                        Authorization: `Bearer ${API_KEY}`
                    }
                });
                const fetchedData = response.data.data;

                const transformedData = fetchedData.map(blog => ({
                    id: blog.id,
                    image: blog.attributes.photos.data.length > 0 
                            ? `${blog.attributes.photos.data[0].attributes.url}` 
                            : 'defaultImagePath',
                    title: blog.attributes.title,
                    description: blog.attributes.front_detail + '...',
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
                                        <Link to={`/blog/${blog.id}`}>Read More</Link>
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
                                <Link to={`/blog/${blog.id}`}>Read More</Link>
                            </div>
                        ))}
                    </div>
                    <div className="pagination">
                        <button className="prev-page">＜</button>
                        <div className="page-numbers">
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>63</button>
                            <button>64</button>
                            <button>65</button>
                        </div>
                        <button className="next-page">＞</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
