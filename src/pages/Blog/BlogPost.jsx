import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
    const { slug } = useParams();
    return (
        <div className="blog-post-page">
            <section className="page-hero">
                <div className="container">
                    <h1>Blog Post: {slug}</h1>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <p>Blog post content coming soon...</p>
                </div>
            </section>
        </div>
    );
};

export default BlogPost;
