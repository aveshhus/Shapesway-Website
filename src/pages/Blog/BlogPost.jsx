import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    PiArrowLeftBold, PiArrowRightBold, PiUserCircleBold,
    PiClockBold, PiShareNetworkBold, PiFolderOpenBold
} from 'react-icons/pi';
import { blogPosts } from '../../data/blogData';
import './BlogPost.css';

const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [relatedPosts, setRelatedPosts] = useState([]);

    // Get unique categories for the sidebar
    const categories = ['All', ...new Set(blogPosts.map(p => p.category))];

    useEffect(() => {
        const currentIndex = blogPosts.findIndex(p => p.slug === slug);

        if (currentIndex !== -1) {
            const foundPost = blogPosts[currentIndex];
            setPost(foundPost);
            document.title = `${foundPost.title} | Shapesway Intelligence Hub`;

            // Get related/recent posts (excluding current)
            const others = blogPosts.filter(p => p.id !== foundPost.id);
            setRelatedPosts(others.slice(0, 4));

        } else {
            navigate('/blog');
        }
        window.scrollTo(0, 0);
    }, [slug, navigate]);

    if (!post) return null;

    // Previous and Next Post Logic
    const currentIndex = blogPosts.findIndex(p => p.slug === slug);
    const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
    const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

    return (
        <div className="blog-post-page-premium">
            <div className="post-ambient-bg"></div>

            {/* HERO SECTION */}
            <header className="post-hero-premium">
                <div className="container relative-z">
                    <Link to="/blog" className="back-to-hub">
                        <PiArrowLeftBold /> Back to Intelligence Hub
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="post-hero-content"
                    >
                        <div className="post-meta-badges">
                            <span className="post-cat-badge">{post.category}</span>
                            <span className="post-date-badge"><PiClockBold /> {post.date}</span>
                        </div>

                        <h1 className="post-title-main">{post.title}</h1>

                        <div className="post-author-row">
                            <div className="pa-avatar"><PiUserCircleBold /></div>
                            <div className="pa-info">
                                <span className="pa-label">Author</span>
                                <strong className="pa-name">{post.author}</strong>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* MAIN CONTENT AREA */}
            <div className="container relative-z post-grid-layout">
                <motion.main
                    className="post-main-column"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="post-featured-hero-image">
                        <img src={post.image} alt={post.title} />
                    </div>

                    <div className="post-rich-content" dangerouslySetInnerHTML={{ __html: post.content }} />

                    {/* POST NAVIGATION */}
                    <div className="post-bottom-nav">
                        {prevPost ? (
                            <Link to={`/blog/${prevPost.slug}`} className="p-nav-card prev-card">
                                <span className="nav-label">Previous Article</span>
                                <h4 className="nav-title">{prevPost.title}</h4>
                            </Link>
                        ) : <div className="p-nav-card empty-card"></div>}

                        {nextPost ? (
                            <Link to={`/blog/${nextPost.slug}`} className="p-nav-card next-card">
                                <span className="nav-label">Next Article</span>
                                <h4 className="nav-title">{nextPost.title}</h4>
                            </Link>
                        ) : <div className="p-nav-card empty-card"></div>}
                    </div>
                </motion.main>

                {/* SIDEBAR */}
                <motion.aside
                    className="post-sidebar-column"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {/* Categories Widget */}
                    <div className="sidebar-widget">
                        <h3 className="widget-title"><PiFolderOpenBold /> Categories</h3>
                        <ul className="widget-category-list">
                            {categories.map((cat, idx) => (
                                <li key={idx}>
                                    <Link to="/blog">{cat}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Recent Articles Widget */}
                    <div className="sidebar-widget widget-recent-posts">
                        <h3 className="widget-title"><PiClockBold /> Recent Insights</h3>
                        <div className="recent-posts-list">
                            {relatedPosts.map(rp => (
                                <Link to={`/blog/${rp.slug}`} key={rp.id} className="recent-post-item">
                                    <div className="rp-image">
                                        <img src={rp.image} alt={rp.title} />
                                    </div>
                                    <div className="rp-info">
                                        <span className="rp-date">{rp.date}</span>
                                        <h4 className="rp-title">{rp.title}</h4>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* CTA Widget */}
                    <div className="sidebar-widget widget-cta">
                        <h3>Ready to Transform?</h3>
                        <p>Leverage our engineering expertise to scale your enterprise architecture.</p>
                        <Link to="/contact" className="sidebar-cta-btn">
                            Discuss Project <PiArrowRightBold />
                        </Link>
                    </div>
                </motion.aside>
            </div>
        </div>
    );
};

export default BlogPost;
