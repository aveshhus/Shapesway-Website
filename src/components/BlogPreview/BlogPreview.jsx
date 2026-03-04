import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { blogPosts } from '../../data/blogData';
import './BlogPreview.css';

const BlogPreview = () => {
    // Only take the first 4 blogs specifically for this "Latest Insights" section
    const posts = blogPosts.slice(0, 4);

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
                                <Link to={`/blog/${post.slug}`} className="blog-cta-btn">
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
