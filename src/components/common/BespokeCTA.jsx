import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import '../../styles/bespoke-cta.css';

const MagneticButton = ({ children, to, className }) => {
    return (
        <motion.div
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            <Link to={to} className={className}>
                {children}
            </Link>
        </motion.div>
    );
};

const BespokeCTA = ({
    tag = "INITIALIZE",
    title = [],
    desc = "",
    buttonText = "Start Project",
    buttonLink = "/contact",
    visuals = null
}) => {
    return (
        <section className="bespoke-cta-section">
            <div className="container">
                <motion.div
                    className="bespoke-cta-box"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="bespoke-cta-layout">
                        {/* Text Side */}
                        <div className="bespoke-cta-text">
                            <span className="bespoke-cta-tag">{tag}</span>
                            <h2 className="bespoke-cta-title">
                                {title[0]} <br />
                                <span>{title[1]}</span>
                            </h2>
                            <p className="bespoke-cta-desc">{desc}</p>

                            <MagneticButton to={buttonLink} className="bespoke-cta-btn">
                                {buttonText} <FaArrowRight />
                            </MagneticButton>
                        </div>

                        {/* Visual Side */}
                        <div className="bespoke-cta-visual">
                            <div className="bespoke-visual-grid" />

                            {/* Wavy Graph Lines */}
                            <div className="bespoke-wavy-container">
                                <svg viewBox="0 0 400 200" className="bespoke-wavy-svg">
                                    <path d="M0,150 Q100,50 200,150 T400,100" fill="none" stroke="#0db5a4" strokeWidth="1.5" />
                                    <path d="M0,120 Q80,180 160,120 T320,150 T400,80" fill="none" stroke="#6366f1" strokeWidth="1" />
                                </svg>
                            </div>

                            {/* Dynamic Visual Content */}
                            {visuals || (
                                <>
                                    <div className="bespoke-card" style={{ width: '320px', left: '0%', bottom: '5%', zIndex: 3, boxShadow: '0 20px 80px rgba(0,0,0,0.8)' }}>
                                        <div className="bespoke-card-header">
                                            <div className="header-spinner"></div>
                                            <span>System Orchestrator...</span>
                                            <div className="bespoke-card-meta">v4.2</div>
                                        </div>
                                        <div className="bespoke-card-body">
                                            <p className="greeting">Initialization Complete.</p>
                                            <p>Our autonomous pipelines are ready to scale your enterprise operations across global networks.</p>
                                            <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
                                                <div style={{ flex: 1, height: '4px', background: '#0db5a4' }}></div>
                                                <div style={{ flex: 1, height: '4px', background: '#222' }}></div>
                                                <div style={{ flex: 1, height: '4px', background: '#222' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bespoke-card" style={{ width: '220px', right: '0%', top: '5%', zIndex: 2, boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }}>
                                        <div className="bespoke-card-header">
                                            <div className="header-spinner"></div>
                                            <span>Real-time Analytics</span>
                                        </div>
                                        <div className="bespoke-card-body">
                                            <span className="bespoke-card-section-label">Active Flux</span>
                                            <div className="bespoke-tag-group">
                                                <span className="bespoke-mini-tag">82% CPU</span>
                                                <span className="bespoke-mini-tag">Safe</span>
                                            </div>
                                            <span className="bespoke-card-section-label">Output Feed</span>
                                            <div className="bespoke-card-highlight-box">
                                                Optimization: 99.8%
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BespokeCTA;
