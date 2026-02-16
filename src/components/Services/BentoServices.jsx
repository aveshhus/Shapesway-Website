import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    FaArrowRight, FaCode, FaMobileAlt, FaBrain, FaPaintBrush,
    FaCloud, FaAd, FaCheckCircle
} from 'react-icons/fa';
import './BentoServices.css';

// Import images from assets
import aiImg from '../../assets/service_ai_v2.png';
import webImg from '../../assets/service_web_v2.png';
import mobileImg from '../../assets/service_mobile_v2.png';
import uiuxImg from '../../assets/service_uiux_v2.jpg';
import cloudImg from '../../assets/service_cloud_v2.png';
import adsImg from '../../assets/service_marketing_v2.png';

const services = [
    {
        id: 'ai',
        title: 'AI & Machine Learning',
        desc: 'Transform your business with intelligent automation and custom AI agents.',
        features: ['Custom AI Agents', 'Predictive Analytics', 'NLP Solutions', 'Computer Vision'],
        icon: <FaBrain />,
        link: '/services/ai-development',
        image: aiImg,
        className: 'bento-item-wide'
    },
    {
        id: 'web',
        title: 'Web Development',
        desc: 'Scalable, secure, and fast enterprise web applications.',
        features: ['React & Next.js', 'E-commerce', 'CMS Solutions', 'PWA Development'],
        icon: <FaCode />,
        link: '/services/web-development',
        image: webImg,
        className: ''
    },
    {
        id: 'mobile',
        title: 'Mobile Apps',
        desc: 'Native and cross-platform mobile experiences.',
        features: ['iOS & Android', 'React Native', 'Flutter', 'App Store SEO'],
        icon: <FaMobileAlt />,
        link: '/services/mobile-app-development',
        image: mobileImg,
        className: ''
    },
    {
        id: 'design',
        title: 'UI/UX Design',
        desc: 'User-centric interfaces that drive high engagement.',
        features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
        icon: <FaPaintBrush />,
        link: '/services/ui-ux-design',
        image: uiuxImg,
        className: ''
    },
    {
        id: 'cloud',
        title: 'Cloud & DevOps',
        desc: 'Reliable infrastructure and automated deployment pipelines.',
        features: ['AWS/Azure', 'Docker/K8s', 'CI/CD Pipelines', 'Cloud Migration'],
        icon: <FaCloud />,
        link: '/services/cloud-services',
        image: cloudImg,
        className: ''
    },
    {
        id: 'ads',
        title: 'Digital Marketing',
        desc: 'High-ROI campaigns across Google and Social Media.',
        features: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'Funnel Optimization'],
        icon: <FaAd />,
        link: '/services/advertisement-solutions',
        image: adsImg,
        className: 'bento-item-wide'
    }
];

const BentoServices = () => {
    return (
        <section className="section bento-section">
            <div className="container">
                <motion.div
                    className="section-header text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="section-tag">Our Expertise</span>
                    <h2>Comprehensive Solutions for Digital Growth</h2>
                    <p>We combine creativity with technical excellence to build products that scale.</p>
                </motion.div>

                <div className="bento-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            className={`bento-card-container ${service.className}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="bento-card">
                                {/* Front Side */}
                                <div className="bento-card-front">
                                    <div
                                        className="bento-bg-image"
                                        style={{ backgroundImage: `url(${service.image})` }}
                                    />
                                    <div className="card-overlay" />
                                    <div className="bento-icon">
                                        {service.icon}
                                    </div>
                                    <div className="bento-content">
                                        <h3 className="bento-title">{service.title}</h3>
                                        <p className="bento-desc">{service.desc}</p>
                                    </div>
                                    <div className="bento-arrow-hint">
                                        Hover to Flip <FaArrowRight />
                                    </div>
                                </div>

                                {/* Back Side (The "Book Page" reveal) */}
                                <div className="bento-card-back">
                                    <div className="back-content">
                                        <div className="back-icon">{service.icon}</div>
                                        <h3 className="back-title">{service.title}</h3>
                                        <ul className="feature-list">
                                            {service.features.map((feature, i) => (
                                                <li key={i}>
                                                    <FaCheckCircle className="check-icon" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <Link to={service.link} className="bento-explore-btn">
                                            Explore Service <FaArrowRight />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BentoServices;

