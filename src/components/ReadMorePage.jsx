import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../assets/css/readmore.css';

const ReadMorePage = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    const BASE_URL = 'https://bright-eggs-6453b2c915.strapiapp.com';
    const API_KEY = '50e41656cfca401c8dbf3742b4d823e7e0221f995cdf584e3b9f2427f1a3855b3954c3edd0472d0fb06d45f5f2be43fc5c71633734c511f2bcf69870c411e20efa4a54eee64b3ec652f4c655c4813edd8705d2cf0dab439d98f31304070704619111128275190eb51bffd2299cb97b5681bdd3e7b46291593fb43b8cf74f86db';

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/blogs/${id}?populate=photos`, {
                    headers: {
                        Authorization: `Bearer ${API_KEY}`
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
                <h1>{blog.title}</h1>
                {blog.photos.data.length > 0 && (
                    <img src={blog.photos.data[0].attributes.url} alt={blog.title} />
                )}
                <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.detail }} />
            </div>
        </div>
    );
};

export default ReadMorePage;
