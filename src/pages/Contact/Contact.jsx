import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    PiPhoneCallFill,
    PiEnvelopeSimpleFill,
    PiMapPinFill,
    PiPaperPlaneRightFill,
    PiHeadsetFill,
    PiSparkleFill,
    PiGlobeFill,
    PiNavigationArrowFill,
    PiCheckCircleFill,
    PiTerminalFill,
    PiCpuFill,
    PiChatCircleTextFill
} from 'react-icons/pi';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', service: '', message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [sessionId] = useState(() => Math.random().toString(36).substring(7).toUpperCase());

    // Mouse Tracking for Parallax
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <div className="contact-premium">
            {/* --- IMMERSIVE BACKGROUND --- */}
            <div className="ambient-background">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
                <div className="blob blob-3"></div>
                <div className="grid-sub-overlay"></div>

                {/* Floating Orbitals */}
                <div className="tech-nodes">
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className={`orbital node-${i + 1}`}
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 360],
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 10 + i * 2,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* --- HERO SECTION --- */}
            <section className="contact-hero">
                <div className="container">
                    <motion.div
                        className="hero-parallax-wrapper"
                        style={{
                            transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
                            transition: 'transform 0.1s ease-out'
                        }}
                    >
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                visible: { transition: { staggerChildren: 0.1 } }
                            }}
                            className="hero-content"
                        >
                            <motion.div variants={fadeInUp} className="badge-refractive">
                                <div className="glass-shine"></div>
                                <PiSparkleFill className="sparkle-icon" />
                                <span>Core Systems Online</span>
                            </motion.div>

                            <motion.h1 variants={fadeInUp} className="hero-title">
                                <span className="title-top">Command Your</span> <br />
                                <span className="text-glow">Digital Future.</span>
                            </motion.h1>

                            <motion.p variants={fadeInUp} className="hero-subtitle">
                                Initiate high-bandwidth collaboration with our senior architects.
                                We don't just build software; we engineer competitive advantages.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="hero-dashboard">
                                <div className="dash-item">
                                    <div className="dash-viz">
                                        <svg viewBox="0 0 36 36" className="circular-chart teal">
                                            <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                            <motion.path className="circle" initial={{ strokeDasharray: "0, 100" }} animate={{ strokeDasharray: "95, 100" }} transition={{ duration: 2, delay: 1 }} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                        </svg>
                                        <span className="viz-val">95%</span>
                                    </div>
                                    <div className="dash-meta">
                                        <h4>Efficiency</h4>
                                        <p>Protocol Speed</p>
                                    </div>
                                </div>
                                <div className="dash-divider"></div>
                                <div className="dash-item">
                                    <div className="dash-viz pulse">
                                        <div className="pulse-core"></div>
                                        <div className="pulse-ring"></div>
                                    </div>
                                    <div className="dash-meta">
                                        <h4>24/7</h4>
                                        <p>Node Monitor</p>
                                    </div>
                                </div>
                                <div className="dash-divider"></div>
                                <div className="dash-item">
                                    <div className="dash-viz">
                                        <PiCpuFill className="dash-icon-cpu" />
                                    </div>
                                    <div className="dash-meta">
                                        <h4>Scalable</h4>
                                        <p>Architecture</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* --- MAIN INTERFACE SECTION --- */}
            <section className="contact-interface">
                <div className="container">
                    <div className="interface-grid">

                        {/* LEFT: INFO NODES */}
                        <motion.div
                            className="info-panel"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="panel-header">
                                <PiCpuFill className="panel-icon" />
                                <h3>Connection Nodes</h3>
                            </div>

                            <div className="node-list">
                                {[
                                    { icon: <PiEnvelopeSimpleFill />, label: 'Email Protocol', value: 'hello@shapesway.in', link: 'mailto:hello@shapesway.in', color: '#0db5a4' },
                                    { icon: <PiPhoneCallFill />, label: 'Direct Voice', value: '+91 63671 81952', link: 'tel:+916367181952', color: '#3b82f6' },
                                    { icon: <PiChatCircleTextFill />, label: 'Live Assistance', value: 'Start Signal Chat', link: '#', color: '#8b5cf6' },
                                    { icon: <PiGlobeFill />, label: 'Digital Hub', value: 'www.shapesway.in', link: 'https://shapesway.in', color: '#f59e0b' }
                                ].map((node, i) => (
                                    <motion.a
                                        href={node.link}
                                        key={i}
                                        className="modern-node-card"
                                        whileHover={{ x: 10 }}
                                        style={{ '--node-accent': node.color }}
                                    >
                                        <div className="node-icon">{node.icon}</div>
                                        <div className="node-text">
                                            <span className="node-label">{node.label}</span>
                                            <span className="node-value">{node.value}</span>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            <div className="security-badge">
                                <PiCheckCircleFill />
                                <span>End-to-End Encrypted Transmission Active</span>
                            </div>
                        </motion.div>

                        {/* RIGHT: FORM TERMINAL */}
                        <motion.div
                            className="form-container"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="glass-form-card">
                                <div className="form-top-bar">
                                    <div className="terminal-dots">
                                        <span></span><span></span><span></span>
                                    </div>
                                    <div className="terminal-id">SES_ID: {sessionId}</div>
                                </div>

                                <AnimatePresence mode="wait">
                                    {!isSubmitted ? (
                                        <motion.div
                                            key="form"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            <div className="form-content">
                                                <h2 className="form-title">Initialize Engagement</h2>
                                                <p className="form-desc">Fill in the technical parameters of your project.</p>

                                                <form onSubmit={handleSubmit} className="premium-form">
                                                    <div className="form-row">
                                                        <div className="input-group">
                                                            <label>Identifier</label>
                                                            <input
                                                                type="text"
                                                                name="name"
                                                                placeholder="Your Full Name"
                                                                required
                                                                value={formData.name}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                        <div className="input-group">
                                                            <label>Vector Mail</label>
                                                            <input
                                                                type="email"
                                                                name="email"
                                                                placeholder="name@company.com"
                                                                required
                                                                value={formData.email}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="form-row">
                                                        <div className="input-group">
                                                            <label>Service Stream</label>
                                                            <select name="service" value={formData.service} onChange={handleChange}>
                                                                <option value="">Select Protocol</option>
                                                                <option value="ai">AI / Machine Learning</option>
                                                                <option value="web">Hyper-Scale Web</option>
                                                                <option value="mobile">Native Mobile Hub</option>
                                                                <option value="cloud">Cloud Architecture</option>
                                                            </select>
                                                        </div>
                                                        <div className="input-group">
                                                            <label>Contact Node</label>
                                                            <input
                                                                type="tel"
                                                                name="phone"
                                                                placeholder="+91 ...."
                                                                value={formData.phone}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="input-group full">
                                                        <label>Project Matrix (Requirements)</label>
                                                        <textarea
                                                            name="message"
                                                            placeholder="Describe your vision / technical constraints..."
                                                            required
                                                            value={formData.message}
                                                            onChange={handleChange}
                                                        ></textarea>
                                                    </div>

                                                    <button
                                                        type="submit"
                                                        className={`submit-btn-premium ${isSubmitting ? 'loading' : ''}`}
                                                        disabled={isSubmitting}
                                                    >
                                                        {isSubmitting ? (
                                                            <span className="loader">TRANSMITTING...</span>
                                                        ) : (
                                                            <>
                                                                <span>Establish Connection</span>
                                                                <PiPaperPlaneRightFill />
                                                            </>
                                                        )}
                                                    </button>
                                                </form>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="success-state"
                                        >
                                            <div className="success-icon-wrap">
                                                <PiCheckCircleFill />
                                            </div>
                                            <h3>Transmission Complete</h3>
                                            <p>Your signal has been successfully routed. Our senior architects will engage with you within 2 business hours.</p>
                                            <button
                                                className="reset-btn"
                                                onClick={() => setIsSubmitted(false)}
                                            >
                                                Send Another Signal
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* --- LOCATIONS SECTION --- */}
            <section className="contact-locations">
                <div className="container">
                    <div className="section-header-modern">
                        <span className="sup-title">OFFICE_NODES</span>
                        <h2>Global Infrastructure</h2>
                    </div>

                    <div className="locations-grid">
                        {[
                            {
                                city: 'Jaipur HQ',
                                address: '4th Floor, Shree Amar Heights, 405, Ajmer Rd, Jaipur, Rajasthan 302019',
                                map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.3897658887145!2d75.7421279!3d26.891122599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db56a81b57573%3A0xd6febd17e35d2bb2!2sShapesway%20Technologies%20pvt.%20Ltd.%20Jaipur!5e0!3m2!1sen!2sin!4v1772006489332!5m2!1sen!2sin",
                                color: '#0db5a4'
                            },
                            {
                                city: 'Udaipur Hub',
                                address: 'Fortune 80 Complex, 205, University Rd, Udaipur, Rajasthan 313001',
                                map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1857535.9008310616!2d71.27681495625002!3d24.589202900000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5aff53ee55f%3A0x830a6c0e0010eeeb!2sShapesway%20Technologies%20Private%20Limited%20-%20Best%20Digital%20Marketing%20Agency%20in%20Udaipur!5e0!3m2!1sen!2sin!4v1772006537399!5m2!1sen!2sin",
                                color: '#3b82f6'
                            }
                        ].map((loc, idx) => (
                            <motion.div
                                key={idx}
                                className="location-card-modern"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                            >
                                <div className="loc-info">
                                    <div className="loc-tag" style={{ backgroundColor: loc.color }}>
                                        {idx === 0 ? 'Primary Node' : 'Regional Node'}
                                    </div>
                                    <h3>{loc.city}</h3>
                                    <p>{loc.address}</p>
                                    <a
                                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.city + ' ' + loc.address)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="view-map-link"
                                    >
                                        <PiNavigationArrowFill /> Get Directions
                                    </a>
                                </div>
                                <div className="loc-map-wrap">
                                    <iframe
                                        src={loc.map}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        title={loc.city}
                                    ></iframe>
                                    <div className="map-shimmer"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
