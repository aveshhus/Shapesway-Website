import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './BlogPreview.css';

const BlogPreview = () => {
    const posts = [
        {
            id: 1,
            title: 'The Future of AI in Enterprise Software',
            date: 'Jan 10, 2026',
            category: 'Technology',
            excerpt: 'How artificial intelligence is reshaping the corporate digital landscape.',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop'
        },
        {
            id: 2,
            title: 'Why Cloud Native is No Longer Optional',
            date: 'Jan 05, 2026',
            category: 'Cloud',
            excerpt: 'Scalability and resilience are the new benchmarks for successful tech platforms.',
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop'
        },
        {
            id: 3,
            title: 'Mastering Full-Stack Scalability',
            date: 'Jan 02, 2026',
            category: 'DevOps',
            excerpt: 'Best practices for building systems that handle millions of concurrent users.',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop'
        },
        {
            id: 4,
            title: 'Cybersecurity in the Age of Quantum',
            date: 'Dec 28, 2025',
            category: 'Security',
            excerpt: 'Preparing your digital infrastructure for the next generation of security threats.',
            image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop'
        }
    ];

    return (
        <section className="section blog-preview-section">
            <div className="container">
                <div className="section-header">
                    <div className="header-left">
                        <span className="section-tag">Latest Insights</span>
                        <h2>Stay Updated with Tech Trends</h2>
                    </div>
                    <div className="header-right">
                        <Link to="/blog" className="btn btn-outline">
                            Visit Our Blog <FaArrowRight />
                        </Link>
                    </div>
                </div>

                <div className="blog-modern-grid">
                    {posts.map((post) => (
                        <article key={post.id} className="blog-card-modern">
                            <div className="blog-card-content">
                                <span className="blog-badge">New</span>
                                <h3 className="blog-card-title">{post.title}</h3>
                                <p className="blog-card-desc">{post.excerpt}</p>
                                <Link to={`/blog/${post.id}`} className="blog-cta-btn">
                                    Read Article
                                </Link>
                            </div>
                            <div className="blog-card-preview">
                                <div className="ui-mockup-frame">
                                    <div className="ui-dots">
                                        <span></span><span></span><span></span>
                                    </div>
                                    <div className="ui-content-placeholder">
                                        <div className="ui-line long"></div>
                                        <div className="ui-line"></div>
                                        <div className="ui-boxes">
                                            <div className="ui-box"></div>
                                            <div className="ui-box"></div>
                                        </div>
                                        <img src={post.image} alt={post.title} className="ui-bg-img" />
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPreview;
