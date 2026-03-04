import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    PiArrowRightBold, PiMagnifyingGlassBold, PiSparkleBold,
    PiCpuBold, PiCloudBold, PiCodeBold, PiShieldCheckBold,
    PiDeviceMobileBold, PiSpeakerHighBold, PiTrendUpBold, PiBookOpenBold,
    PiClockBold, PiUserCircleBold
} from 'react-icons/pi';
import { blogPosts } from '../../data/blogData';
import './Blog.css';

const getCategoryIcon = (category) => {
    if (category === 'All') return <PiBookOpenBold />;
    if (category.includes('Artificial Intelligence')) return <PiCpuBold />;
    if (category.includes('Cloud')) return <PiCloudBold />;
    if (category.includes('Web')) return <PiCodeBold />;
    if (category.includes('Security')) return <PiShieldCheckBold />;
    if (category.includes('App')) return <PiDeviceMobileBold />;
    if (category.includes('Marketing')) return <PiSpeakerHighBold />;
    if (category.includes('SEO')) return <PiTrendUpBold />;
    if (category.includes('Ads')) return <PiSparkleBold />;
    return <PiBookOpenBold />;
};

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Intelligence Hub | Shapesway";

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
    const gridPosts = filteredPosts.length > 1 ? filteredPosts.slice(1) : [];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
        exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } }
    };

    return (
        <div className="blog-premium-page">

            {/* AMBIENT BACKGROUND */}
            <div className="blog-ambient-bg">
                <div className="ambient-orb orb-1"></div>
                <div className="ambient-orb orb-2"></div>
                <div className="grid-overlay"></div>
            </div>

            <div className="container relative-z">
                {/* HERO SECTION */}
                <section className="blog-premium-hero">
                    <motion.div
                        className="hero-badge"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <PiSparkleBold className="badge-icon" />
                        Shapesway Intelligence
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        The Architecture of <br />
                        <span className="text-gradient">Digital Transformation</span>
                    </motion.h1>

                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Deep-dive frameworks, technical strategies, and executive insights engineered for high-growth enterprises.
                    </motion.p>

                    {/* SEARCH BAR (Premium Floating) */}
                    <motion.div
                        className="premium-search-container"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="search-glass-wrapper">
                            <PiMagnifyingGlassBold className="s-icon" />
                            <input
                                type="text"
                                placeholder="Search articles, topics, or keywords..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            {searchQuery && (
                                <button className="clear-btn" onClick={() => setSearchQuery('')}>Clear</button>
                            )}
                        </div>
                    </motion.div>
                </section>

                {/* STICKY CATEGORY NAVIGATION */}
                <div className={`category-nav-wrapper ${isScrolled ? 'is-sticky' : ''}`}>
                    <div className="category-scroll-container">
                        {categories.map((cat, idx) => (
                            <button
                                key={idx}
                                className={`premium-cat-btn ${activeCategory === cat ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                <span className="cat-icon">{getCategoryIcon(cat)}</span>
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <section className="blog-content-area">
                    <AnimatePresence mode="wait">
                        {filteredPosts.length === 0 ? (
                            <motion.div
                                className="empty-state"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <div className="empty-icon-wrapper">
                                    <PiMagnifyingGlassBold />
                                </div>
                                <h3>No insights found.</h3>
                                <p>We couldn't find anything matching "{searchQuery}". Try adjusting your search.</p>
                                <button className="reset-btn" onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}>
                                    Reset Filters
                                </button>
                            </motion.div>
                        ) : (
                            <motion.div
                                key={activeCategory + searchQuery}
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                {/* HERO FEATURED CARD */}
                                {featuredPost && activeCategory === 'All' && !searchQuery && (
                                    <motion.article className="premium-featured-card" variants={itemVariants}>
                                        <div className="pf-image">
                                            <img src={featuredPost.image} alt={featuredPost.title} />
                                            <div className="pf-overlay"></div>
                                        </div>
                                        <div className="pf-content">
                                            <div className="pf-glass-panel">
                                                <div className="pf-meta">
                                                    <span className="pf-tag">
                                                        {getCategoryIcon(featuredPost.category)}
                                                        {featuredPost.category}
                                                    </span>
                                                    <span className="pf-date"><PiClockBold /> {featuredPost.date}</span>
                                                </div>
                                                <Link to={`/blog/${featuredPost.slug}`}>
                                                    <h2 className="pf-title">{featuredPost.title}</h2>
                                                </Link>
                                                <p className="pf-excerpt">{featuredPost.excerpt}</p>

                                                <div className="pf-footer">
                                                    <div className="pf-author">
                                                        <div className="pf-avatar">
                                                            <PiUserCircleBold />
                                                        </div>
                                                        <div className="pf-author-info">
                                                            <span>Written by</span>
                                                            <strong>{featuredPost.author}</strong>
                                                        </div>
                                                    </div>
                                                    <Link to={`/blog/${featuredPost.slug}`} className="pf-read-btn">
                                                        Read Story <PiArrowRightBold />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.article>
                                )}

                                {/* BENTO GRID */}
                                <div className="premium-bento-grid">
                                    {(activeCategory !== 'All' || searchQuery ? filteredPosts : gridPosts).map((post, index) => {
                                        // Make certain cards larger in the grid for a bento feel
                                        const isLarge = index === 0 || index === 7;

                                        return (
                                            <motion.article
                                                key={post.id}
                                                className={`premium-bento-card ${isLarge ? 'card-large' : 'card-standard'}`}
                                                variants={itemVariants}
                                            >
                                                <div className="pb-image">
                                                    <Link to={`/blog/${post.slug}`}>
                                                        <img src={post.image} alt={post.title} />
                                                    </Link>
                                                    <div className="pb-category-badge">
                                                        {getCategoryIcon(post.category)}
                                                        <span>{post.category}</span>
                                                    </div>
                                                </div>

                                                <div className="pb-content">
                                                    <div className="pb-meta-top">
                                                        <span>{post.date}</span>
                                                    </div>

                                                    <Link to={`/blog/${post.slug}`} className="pb-title-link">
                                                        <h3 className="pb-title">{post.title}</h3>
                                                    </Link>

                                                    <p className="pb-excerpt">{post.excerpt}</p>

                                                    <div className="pb-footer-bottom">
                                                        <span className="pb-author-text">{post.author}</span>
                                                        <Link to={`/blog/${post.slug}`} className="pb-circular-btn">
                                                            <PiArrowRightBold />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </motion.article>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </section>
            </div>
        </div>
    );
};

export default Blog;
