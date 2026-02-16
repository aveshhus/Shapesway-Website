import React from 'react';
import { motion } from 'framer-motion';
import {
    FaHospitalAlt, FaShoppingCart, FaUniversity,
    FaGraduationCap, FaPlane, FaHome,
    FaCar, FaIndustry
} from 'react-icons/fa';
import industryMainImage from '../../assets/industries_main.png';
import './Industries.css';

const Industries = () => {
    const industries = [
        { name: 'Healthcare', icon: <FaHospitalAlt />, color: '#ef4444' },
        { name: 'E-commerce', icon: <FaShoppingCart />, color: '#f59e0b' },
        { name: 'FinTech', icon: <FaUniversity />, color: '#10b981' },
        { name: 'Education', icon: <FaGraduationCap />, color: '#3b82f6' },
        { name: 'Logistics', icon: <FaPlane />, color: '#8b5cf6' },
        { name: 'Real Estate', icon: <FaHome />, color: '#ec4899' },
        { name: 'Automotive', icon: <FaCar />, color: '#64748b' },
        { name: 'Manufacturing', icon: <FaIndustry />, color: '#06b6d4' }
    ];

    return (
        <section className="industries-section">
            <div className="container">
                <div className="industries-split">
                    {/* Left Content */}
                    <div className="industries-left">
                        <div className="section-header">
                            <motion.span
                                className="section-tag"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                Success Across Sectors
                            </motion.span>
                            <motion.h2
                                className="industries-title"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                Industries We <span className="text-gradient">Transform</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                We deliver tailored digital ecosystems that solve complex industry challenges and drive measurable growth.
                            </motion.p>
                        </div>

                        <div className="industries-small-grid">
                            {industries.map((industry, index) => (
                                <motion.div
                                    key={industry.name}
                                    className="industry-mini-card"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                                    whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0,0,0,0.08)' }}
                                >
                                    <div className="mini-card-icon" style={{ backgroundColor: `${industry.color}15`, color: industry.color }}>
                                        {industry.icon}
                                    </div>
                                    <div className="mini-card-info">
                                        <h4>{industry.name}</h4>
                                    </div>
                                    <div className="mini-card-glow" style={{ backgroundColor: industry.color }}></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="industries-right">
                        <motion.div
                            className="industries-image-container"
                            initial={{ opacity: 0, scale: 0.8, rotate: 2 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <img src={industryMainImage} alt="Business Transformation" className="industries-main-img" />
                            <div className="image-overlay-gradient"></div>

                            {/* Floating Stats or Accents */}
                            <motion.div
                                className="floating-stat-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.6 }}
                            >
                                <span className="stat-number">50+</span>
                                <span className="stat-label">Sectors Served</span>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Industries;
