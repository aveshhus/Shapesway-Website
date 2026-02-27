import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../../data/portfolioData';
import {
    PiArrowLeftLight,
    PiCpuLight,
    PiCheckCircleFill,
    PiCalendarBlankLight,
    PiUserLight,
    PiTagLight,
    PiBoundingBoxLight,
    PiLightbulbLight,
    PiPuzzlePieceLight,
    PiShieldCheckLight,
    PiMapPinLight,
    PiQuotesLight,
    PiTargetLight,
    PiArrowRightLight,
    PiGlobeLight,
    PiLockKeyLight,
    PiZapLight,
    PiArrowsClockwiseLight
} from 'react-icons/pi';
import './ProjectDetail.css';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="project-not-found">
                <div className="container">
                    <div className="error-code">404</div>
                    <h2>ENGINEERING LOG // NODE_NULL</h2>
                    <p>The specified project repository could not be located on the current server.</p>
                    <Link to="/our-work" className="back-btn">
                        <PiArrowLeftLight />
                        Return to Index
                    </Link>
                </div>
            </div>
        );
    }

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    const staggerContainer = {
        visible: { transition: { staggerChildren: 0.1 } }
    };

    const getIcon = (iconName) => {
        switch (iconName) {
            case 'sync': return <PiArrowsClockwiseLight />;
            case 'lock': return <PiLockKeyLight />;
            case 'zap': return <PiZapLight />;
            case 'globe': return <PiGlobeLight />;
            default: return <PiCpuLight />;
        }
    };

    return (
        <div className="project-detail-premium" style={{ '--project-accent': project.color }}>
            {/* --- HERO SECTION --- */}
            <section className="pd-hero">
                <div className="pd-hero-bg">
                    <img src={project.image} alt={project.title} />
                    <div className="pd-hero-overlay"></div>
                </div>

                <div className="container">
                    <Link to="/our-work" className="back-btn-top">
                        <PiArrowLeftLight />
                        <span>Project Repository</span>
                    </Link>

                    <motion.div
                        className="pd-hero-header"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp} className="pd-badge-row">
                            <span className="pd-category-badge">{project.category}</span>
                            <span className="pd-status-pill">{project.status}</span>
                        </motion.div>
                        <motion.h1 variants={fadeInUp} className="pd-title">
                            {project.title}
                        </motion.h1>
                        <motion.div variants={fadeInUp} className="pd-meta-row">
                            <div className="pd-meta-item">
                                <PiUserLight /> <span>{project.client}</span>
                            </div>
                            <div className="pd-meta-item">
                                <PiMapPinLight /> <span>{project.location || 'India'}</span>
                            </div>
                            <div className="pd-meta-item">
                                <PiCalendarBlankLight /> <span>{project.year}</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                <div className="hero-scroll-indicator">
                    <div className="mouse"></div>
                    <span>Explore Architecture</span>
                </div>
            </section>

            {/* --- RESULTS / STATS SECTION --- */}
            {project.results && (
                <section className="pd-results">
                    <div className="container">
                        <motion.div
                            className="results-grid"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                        >
                            {project.results.map((res, i) => (
                                <motion.div key={i} variants={fadeInUp} className="result-card">
                                    <h3>{res.metric}</h3>
                                    <p>{res.label}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
            )}

            {/* --- CONTENT SECTION --- */}
            <section className="pd-content">
                <div className="container">
                    <div className="pd-grid">
                        <div className="pd-main">
                            {/* Executive Overview */}
                            <motion.div
                                className="pd-glass-card overview-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="card-tag">EXECUTIVE SUMMARY</div>
                                <h2>Project Overview</h2>
                                <p className="large-p">{project.longDescription}</p>
                            </motion.div>

                            {/* Challenge & Solution */}
                            <div className="pd-split-cards">
                                <motion.div
                                    className="pd-glass-card challenge-card"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="card-header-icon sm"><PiPuzzlePieceLight /></div>
                                    <h3>Operational Challenge</h3>
                                    <p>{project.challenge}</p>
                                </motion.div>
                                <motion.div
                                    className="pd-glass-card solution-card"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="card-header-icon sm"><PiLightbulbLight /></div>
                                    <h3>Engineering Solution</h3>
                                    <p>{project.solution}</p>
                                </motion.div>
                            </div>

                            {/* Technical Deep Dive */}
                            {project.techBreakdown && (
                                <motion.div
                                    className="pd-glass-card tech-deep-dive"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="card-tag">SYSTEM ANALYTICS</div>
                                    <h2>Technical Performance</h2>
                                    <div className="tech-stats-grid">
                                        {project.techBreakdown.map((item, i) => (
                                            <div key={i} className="tech-stat-item">
                                                <div className="ts-icon">{getIcon(item.icon)}</div>
                                                <div className="ts-info">
                                                    <label>{item.label}</label>
                                                    <span>{item.value}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* Pillars */}
                            {(project.mission || project.vision) && (
                                <div className="pd-pillars-section">
                                    <motion.div
                                        className="pd-glass-card pillar-card mission-card"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                    >
                                        <PiTargetLight className="pillar-icon" />
                                        <h3>Our Mission</h3>
                                        <p>{project.mission}</p>
                                    </motion.div>
                                    <motion.div
                                        className="pd-glass-card pillar-card vision-card"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <PiTagLight className="pillar-icon" />
                                        <h3>Our Vision</h3>
                                        <p>{project.vision}</p>
                                    </motion.div>
                                </div>
                            )}

                            {/* Visual Gallery */}
                            {project.gallery && (
                                <div className="pd-gallery-premium">
                                    <div className="gallery-header">
                                        <div className="card-tag">VISUAL ARCHITECTURE</div>
                                        <h2>Platform Interface</h2>
                                        <p>High-fidelity structural snapshots of the operational hub.</p>
                                    </div>
                                    <div className="gallery-grid-v2">
                                        {project.gallery.map((img, i) => (
                                            <motion.div
                                                key={i}
                                                className={`gallery-item-v2 ${i === 0 ? 'span-2' : ''}`}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.1 }}
                                            >
                                                <div className="gallery-img-container">
                                                    <img src={img.url} alt={img.title} />
                                                    <div className="gallery-info-v2">
                                                        <h4>{img.title}</h4>
                                                        <p>{img.desc}</p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Features */}
                            <motion.div
                                className="pd-glass-card deliverables-premium"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="card-tag">SYSTEM QUALITIES</div>
                                <h2>Key Deliverables</h2>
                                <div className="features-grid-v2">
                                    {project.features?.map((feature, index) => (
                                        <div key={index} className="feature-item-v2">
                                            <PiCheckCircleFill className="check-icon" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Sidebar */}
                        <aside className="pd-sidebar">
                            <motion.div
                                className="pd-glass-card tech-sidebar-premium"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="sidebar-header">
                                    <PiCpuLight className="sidebar-icon" />
                                    <h3>Core Tech Stack</h3>
                                </div>
                                <div className="tech-list-premium">
                                    {project.technologies?.map((tech, index) => (
                                        <div key={index} className="tech-item-premium">
                                            <div className="tech-progress" style={{ width: '100%', opacity: 0.1 }}></div>
                                            <span>{tech}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                className="pd-glass-card contact-cta-sidebar"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3>Ready to Build?</h3>
                                <p>Let's collaborate on your next digital transformation project.</p>
                                <Link to="/contact" className="premium-sidebar-btn">
                                    <span>Initiate Pipeline</span>
                                    <PiArrowRightLight />
                                </Link>
                            </motion.div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* --- FINAL CTA --- */}
            <section className="pd-final-cta">
                <div className="container">
                    <motion.div
                        className="cta-glass-box"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2>Vision into <span>Reality.</span></h2>
                        <p>Join the ecosystem of forward-thinking enterprises.</p>
                        <Link to="/contact" className="cta-main-btn">
                            Get Started
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetail;
