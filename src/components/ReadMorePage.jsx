import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../assets/css/readmore.css';

const ReadMorePage = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    const BASE_URL = 'https://bright-eggs-6453b2c915.strapiapp.com';
    const API_KEY = '752ca3bde6c9c4c06198c76dff4ad5f3c82733dbd23c1b7e8e952ae42a436b50ef696f8f976f4439bbf297da7e7c0bb087ff8ad6113b452ddc2b85513b9275dacc1d2a7596da95f6883cb557a8728edc3750ccece807abdef72e94d0b04bbcb4a3c3a2f90f9a90f30ec11bc075a1244aa90c8d9e8a95ff92d7eb0d14be137629';

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
            <h1>{blog.title}</h1>
            {blog.photos.data.length > 0 && (
                <img src={blog.photos.data[0].attributes.url} alt={blog.title} />
            )}
            <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.detail }} />
        </div>
    );
};

export default ReadMorePage;
