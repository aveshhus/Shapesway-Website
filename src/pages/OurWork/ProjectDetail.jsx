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
    PiTargetLight
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
                    <h2>ENGINEERING LOG // NODE_NULL</h2>
                    <p>The specified project repository could not be located on the current server.</p>
                    <Link to="/our-work" className="back-btn">Go to Index</Link>
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

    return (
        <div className="project-detail-premium" style={{ '--project-accent': project.color }}>
            {/* --- HERO SECTION --- */}
            <section className="pd-hero">
                <div className="pd-hero-bg">
                    <img src={project.image} alt={project.title} />
                    <div className="pd-hero-overlay"></div>
                </div>

                <div className="container">
                    <Link to="/our-work" className="back-btn">
                        <PiArrowLeftLight />
                        <span>Project Index</span>
                    </Link>

                    <motion.div
                        className="pd-hero-header"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp} className="pd-category-badge">
                            {project.category}
                        </motion.div>
                        <motion.h1 variants={fadeInUp} className="pd-title">
                            {project.title}
                        </motion.h1>
                        <motion.div variants={fadeInUp} className="pd-location">
                            <PiMapPinLight /> <span>{project.location || 'Distributed Node'}</span>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* --- CORE METRICS SECTION --- */}
            <section className="pd-metrics">
                <div className="container">
                    <motion.div
                        className="pd-metrics-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp} className="metric-item">
                            <PiUserLight />
                            <div className="m-detail">
                                <label>Client / Enterprise</label>
                                <span>{project.client}</span>
                            </div>
                        </motion.div>
                        <motion.div variants={fadeInUp} className="metric-item">
                            <PiCalendarBlankLight />
                            <div className="m-detail">
                                <label>Project Timeline</label>
                                <span>{project.year} // Launched</span>
                            </div>
                        </motion.div>
                        <motion.div variants={fadeInUp} className="metric-item">
                            <PiShieldCheckLight />
                            <div className="m-detail">
                                <label>Operational Status</label>
                                <span>{project.status.toUpperCase()}</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* --- CONTENT SECTION --- */}
            <section className="pd-content">
                <div className="container">
                    <div className="pd-grid">
                        <div className="pd-main">
                            {/* Executive Overview */}
                            <motion.div
                                className="pd-card overview-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="card-header-icon"><PiBoundingBoxLight /></div>
                                <h2>Project Overview</h2>
                                <p className="large-p">{project.longDescription}</p>
                            </motion.div>

                            {/* Challenge & Solution */}
                            <div className="pd-split-cards">
                                <motion.div
                                    className="pd-card challenge-card"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="card-header-icon sm"><PiPuzzlePieceLight /></div>
                                    <h3>Operational Challenge</h3>
                                    <p>{project.challenge}</p>
                                </motion.div>
                                <motion.div
                                    className="pd-card solution-card"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="card-header-icon sm"><PiLightbulbLight /></div>
                                    <h3>Engineering Solution</h3>
                                    <p>{project.solution}</p>
                                </motion.div>
                            </div>

                            {/* Genuine Mission & Vision Section */}
                            {(project.mission || project.vision) && (
                                <div className="pd-pillars-section">
                                    <motion.div
                                        className="pd-card pillar-card mission-card"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                    >
                                        <PiTargetLight className="pillar-icon" />
                                        <h3>Our Mission</h3>
                                        <p>{project.mission}</p>
                                    </motion.div>
                                    <motion.div
                                        className="pd-card pillar-card vision-card"
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

                            {/* Elite Brands Section */}
                            {project.brands && (
                                <motion.div
                                    className="pd-card brand-ecosystem"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <h2>Global Brand Ecosystem</h2>
                                    <div className="brand-tags">
                                        {project.brands.map((brand, i) => (
                                            <span key={i} className="brand-tag">{brand}</span>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* Infrastructure & Capacity */}
                            {project.infrastructure && (
                                <motion.div
                                    className="pd-card infrastructure-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="card-header-icon"><PiCpuLight /></div>
                                    <h2>Technical Infrastructure</h2>
                                    <p className="large-p">{project.infrastructure}</p>
                                    <div className="capability-container">
                                        <div className="capability-pill">
                                            Operational Capacity: 500+ Modular Units/Month
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Who We Serve / Sectors */}
                            {project.sectors && (
                                <motion.div
                                    className="pd-card sectors-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <h2>Industry Verticals // Who We Serve</h2>
                                    <div className="sectors-grid">
                                        {project.sectors.map((sector, i) => (
                                            <div key={i} className="sector-tag-premium">
                                                <PiTagLight />
                                                <span>{sector}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* Features */}
                            <motion.div
                                className="pd-card deliverables"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2>Key System Qualities</h2>
                                <div className="features-grid-columns">
                                    {project.features?.map((feature, index) => (
                                        <div key={index} className="feature-pill">
                                            <PiCheckCircleFill className="check-icon" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Visual Gallery */}
                            {project.gallery && (
                                <div className="pd-gallery">
                                    <div className="gallery-header">
                                        <h2>Platform Architecture // Interface</h2>
                                        <p>High-fidelity structural snapshots of the operational hub.</p>
                                    </div>
                                    <div className="gallery-grid">
                                        {project.gallery.map((img, i) => (
                                            <motion.div
                                                key={i}
                                                className="gallery-item-premium"
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true, amount: 0.1 }}
                                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                            >
                                                <div className="gallery-img-box">
                                                    <img src={img.url} alt={img.title} />
                                                    <div className="gallery-overlay">
                                                        <h4>{img.title}</h4>
                                                        <p>{img.desc}</p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Testimonials */}
                            {project.testimonials && (
                                <div className="pd-testimonials">
                                    <div className="testimonial-header">
                                        <PiQuotesLight />
                                        <h2>Community Impact</h2>
                                    </div>
                                    <div className="testimonial-grid">
                                        {project.testimonials.map((t, i) => (
                                            <motion.div
                                                key={i}
                                                className="testimonial-card-pd"
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.1 }}
                                            >
                                                <p>"{t.text}"</p>
                                                <div className="t-author">{t.author}</div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <aside className="pd-sidebar">
                            <motion.div
                                className="pd-sidebar-card tech-card-premium"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="sidebar-title">
                                    <PiCpuLight />
                                    <h3>Core Infrastructure</h3>
                                </div>
                                <div className="tech-stack-vertical">
                                    {project.technologies?.map((tech, index) => (
                                        <div key={index} className="tech-row">
                                            <div className="tech-dot"></div>
                                            <span>{tech}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                className="pd-contact-teaser"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h4>Architect Your Transformation</h4>
                                <p>Ready to engineer a digital ecosystem that outpaces the market?</p>
                                <Link to="/contact" className="sidebar-cta">
                                    Initiate Pipeline
                                </Link>
                            </motion.div>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetail;
