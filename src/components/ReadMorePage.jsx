import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../assets/css/readmore.css';
import { STRAPI_KEY, URL } from "../utils/api_endpoints";

const getImageUrl = (path) => (path ? `${URL}${path}` : "");

const ReadMorePage = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`${URL}/api/blogs/${id}?populate=photos`, {
                    headers: {
                        Authorization: `Bearer ${STRAPI_KEY}`
                    }
                });
                setBlog(response.data.data.attributes);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching blog data:', error);
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <div className="read-more-page">
            <div className="container">
                <h1 className="title">{blog.title}</h1>
                {blog.photos.data.length > 0 && (
                    <img className="blog-image" src={getImageUrl(blog.photos.data[0].attributes.url)} alt={blog.title} />
                )}
                <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.detail }} />
            </div>
        </div>
    );
};

export default ReadMorePage;
