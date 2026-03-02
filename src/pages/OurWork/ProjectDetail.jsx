import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../../data/portfolioData';
import {
    PiArrowLeft,
    PiCpu,
    PiCheckCircleFill,
    PiCalendarBlank,
    PiUser,
    PiTag,
    PiLightbulb,
    PiPuzzlePiece,
    PiMapPin,
    PiTarget,
    PiArrowRight,
    PiGlobe,
    PiLockKey,
    PiLightning,
    PiArrowsClockwise
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
                    <h2>SYSTEM_OFFLINE // NODE_NULL</h2>
                    <p>The requested project repository is inaccessible or does not exist.</p>
                    <Link to="/our-work" className="back-btn-prem">
                        <PiArrowLeft /> Return to Work
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
            case 'sync': return <PiArrowsClockwise />;
            case 'lock': return <PiLockKey />;
            case 'zap': return <PiLightning />;
            case 'globe': return <PiGlobe />;
            default: return <PiCpu />;
        }
    };

    return (
        <div className="project-detail-premium" style={{ '--project-accent': project.color }}>
            {/* --- CORE HERO ARCHITECTURE --- */}
            <section className="pd-hero">
                <div className="pd-hero-bg">
                    <img src={project.image} alt={project.title} />
                    <div className="pd-hero-overlay"></div>
                </div>

                <div className="container">
                    <Link to="/our-work" className="back-link-tactical">
                        <PiArrowLeft />
                        <span>SHELF_BACK</span>
                    </Link>

                    <motion.div
                        className="pd-hero-header"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp} className="pd-badge-row">
                            <span className="pd-cat-badge">{project.category}</span>
                            <span className="pd-stat-pill">{project.status}</span>
                        </motion.div>
                        <motion.h1 variants={fadeInUp} className="pd-hero-title">
                            {project.title}
                        </motion.h1>
                        <motion.div variants={fadeInUp} className="pd-meta-grid">
                            <div className="pd-meta-box">
                                <label>CLIENT_ID</label>
                                <span>{project.client}</span>
                            </div>
                            <div className="pd-meta-box">
                                <label>VECTOR_LOC</label>
                                <span>{project.location || 'Jaipur, IN'}</span>
                            </div>
                            <div className="pd-meta-box">
                                <label>DEPLOY_YR</label>
                                <span>{project.year}</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                <div className="pd-scroll-callout">
                    <div className="scroll-line"></div>
                    <span>ARCH_DETAILS</span>
                </div>
            </section>

            {/* --- OPERATIONAL METRICS --- */}
            {project.results && (
                <section className="pd-results-v2">
                    <div className="container">
                        <motion.div
                            className="metrics-grid-lux"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                        >
                            {project.results.map((res, i) => (
                                <motion.div key={i} variants={fadeInUp} className="metric-box-lux">
                                    <div className="metric-val">{res.metric}</div>
                                    <div className="metric-lab">{res.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
            )}

            {/* --- TECHNICAL DOCUMENTATION --- */}
            <section className="pd-body-grid">
                <div className="container">
                    <div className="pd-layout-split">
                        <div className="pd-main-stack">
                            {/* Project DNA */}
                            <motion.div
                                className="pd-bento-card overview-bento"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="bento-tag">PROJECT_DNA</div>
                                <h2>Executive Overview</h2>
                                <p>{project.longDescription}</p>
                            </motion.div>

                            {/* Challenge / Solution Duo */}
                            <div className="pd-col-2">
                                <motion.div
                                    className="pd-bento-card challenge-bento"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <PiPuzzlePiece className="bento-icon-p" />
                                    <h3>Operational Logic</h3>
                                    <p>{project.challenge}</p>
                                </motion.div>
                                <motion.div
                                    className="pd-bento-card solution-bento"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <PiLightbulb className="bento-icon-p" />
                                    <h3>Engineered Architecture</h3>
                                    <p>{project.solution}</p>
                                </motion.div>
                            </div>

                            {/* System Performance */}
                            {project.techBreakdown && (
                                <motion.div
                                    className="pd-bento-card performance-bento"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="bento-tag">SYSTEM_ANALYTICS</div>
                                    <div className="perf-grid">
                                        {project.techBreakdown.map((item, i) => (
                                            <div key={i} className="perf-item">
                                                <div className="perf-icon">{getIcon(item.icon)}</div>
                                                <div className="perf-content">
                                                    <div className="perf-label">{item.label}</div>
                                                    <div className="perf-value">{item.value}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* Gallery V3 */}
                            {project.gallery && (
                                <div className="pd-gallery-section">
                                    <div className="gallery-meta">
                                        <div className="bento-tag">VISUAL_REPO</div>
                                        <h2>Operational Interface</h2>
                                    </div>
                                    <div className="pd-gallery-grid">
                                        {project.gallery.map((img, i) => (
                                            <motion.div
                                                key={i}
                                                className={`pd-gallery-card ${i === 0 ? 'g-large' : ''}`}
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.1 }}
                                            >
                                                <img src={img.url} alt={img.title} />
                                                <div className="pd-gallery-overlay">
                                                    <h4>{img.title}</h4>
                                                    <p>{img.desc}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Deliverables */}
                            <motion.div
                                className="pd-bento-card features-bento"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="bento-tag">CORE_DELIVERABLES</div>
                                <div className="features-list-v3">
                                    {project.features?.map((f, i) => (
                                        <div key={i} className="f-item">
                                            <PiCheckCircleFill className="f-icon" />
                                            <span>{f}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Tactical Sidebar */}
                        <aside className="pd-sidebar-v2">
                            <motion.div
                                className="pd-bento-card stack-sidebar"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3>Tech Stack</h3>
                                <div className="sidebar-tech-list">
                                    {project.technologies?.map((t, i) => (
                                        <span key={i} className="tech-pill-link">{t}</span>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                className="pd-bento-card cta-sidebar"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3>Initiate Transformation</h3>
                                <p>Architecting the future of your enterprise.</p>
                                <Link to="/contact" className="sidebar-action-btn">
                                    <span>CONTACT_NODE</span>
                                    <PiArrowRight />
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
