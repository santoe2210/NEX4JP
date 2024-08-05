import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import '../assets/css/blog.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from "swiper/modules";
import { STRAPI_KEY, URL } from "../utils/api_endpoints";
import { Helmet } from "react-helmet";

const getImageUrl = (path) => (path ? `${URL}${path}` : "");

const Blog = () => {
    const [featuredBlogs, setFeaturedBlogs] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [tag, setTag] = useState("all");
    const [tags, setTags] = useState([]);
    const blogsPerPage = 12;

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${URL}/api/blogs?populate=*`, {
                    headers: {
                        Authorization: `Bearer ${STRAPI_KEY}`
                    }
                });
                const fetchedBlogs = response.data.data;

                const transformedBlogs = fetchedBlogs.map(blog => ({
                    id: blog.id,
                    image: blog.attributes.photos.data.length > 0 
                            ? getImageUrl(blog.attributes.photos.data[0].attributes.url) 
                            : 'defaultImagePath',
                    title: blog.attributes.title,
                    description: blog.attributes.front_detail + '...',
                    tags: blog.attributes.tag ? blog.attributes.tag.split(",") : []
                }));

                setFeaturedBlogs(transformedBlogs);
                setBlogs(transformedBlogs);
                setFilteredBlogs(transformedBlogs);

                const uniqueTags = [...new Set(transformedBlogs.flatMap(blog => blog.tags))];
                setTags(uniqueTags);

                setLoading(false);
            } catch (error) {
                console.error('Error fetching blog data:', error);
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    useEffect(() => {
        let updatedBlogs = blogs;

        if (searchTerm) {
            updatedBlogs = updatedBlogs.filter(blog =>
                blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                blog.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (tag && tag !== "all") {
            updatedBlogs = updatedBlogs.filter(blog =>
                blog.tags.includes(tag)
            );
        }

        setFilteredBlogs(updatedBlogs);
    }, [searchTerm, tag, blogs]);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < Math.ceil(filteredBlogs.length / blogsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const displayedBlogs = filteredBlogs.slice(
        (currentPage - 1) * blogsPerPage,
        currentPage * blogsPerPage
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="py-16 max-w-screen-2xl mx-auto" id="blog">
            <Helmet>
                <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
            </Helmet>
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
                        <select
                            className="category-dropdown"
                            value={tag}
                            onChange={(e) => setTag(e.target.value)}
                        >
                            <option value="all">カテゴリー</option>
                            {tags.map((tagItem, index) => (
                                <option key={index} value={tagItem}>{tagItem}</option>
                            ))}
                        </select>
                        <div className="search-bar">
                            <input
                                type="text"
                                placeholder="検索"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button type="submit">🔍</button>
                        </div>
                    </div>
                    <div className="blog-list">
                        {displayedBlogs.map((blog, index) => (
                            <div key={index} className="blog-item">
                                <img src={blog.image} alt={blog.title} />
                                <h3>{blog.title}</h3>
                                <p>{blog.description}</p>
                                <Link to={`/blog/${blog.id}`}>Read More</Link>
                            </div>
                        ))}
                    </div>
                    <div className="pagination">
                        <button className="prev-page" onClick={handlePrevPage}>＜</button>
                        <div className="page-numbers">
                            {[...Array(Math.ceil(filteredBlogs.length / blogsPerPage)).keys()].map((pageNumber) => (
                                <button
                                    key={pageNumber}
                                    onClick={() => handlePageClick(pageNumber + 1)}
                                    className={currentPage === pageNumber + 1 ? 'active' : ''}
                                >
                                    {pageNumber + 1}
                                </button>
                            ))}
                        </div>
                        <button className="next-page" onClick={handleNextPage}>＞</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
