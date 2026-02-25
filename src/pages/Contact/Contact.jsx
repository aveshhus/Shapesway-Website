import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    PiPhoneCallFill,
    PiEnvelopeSimpleFill,
    PiMapPinFill,
    PiPaperPlaneRightFill,
    PiHeadsetFill,
    PiSparkleFill,
    PiGlobeFill,
    PiNavigationArrowFill
} from 'react-icons/pi';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('COMMS_ESTABLISHED: Your message has been routed to our core team.');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="contact-v4">
            <div className="neural-bg"></div>
            <div className="grid-overlay"></div>

            {/* 1. HERO SECTION: COMMS_INIT */}
            <section className="hero-lite">
                <div className="container">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: { transition: { staggerChildren: 0.15 } }
                        }}
                    >
                        <motion.div variants={fadeInUp} className="badge-tactical">
                            <span className="dot"></span>
                            SYS_STATUS // ONLINE
                        </motion.div>
                        <motion.h1 variants={fadeInUp}>
                            Initialize <br /> <span>Connection.</span>
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="ind-v3-desc" style={{ margin: '0 auto', maxWidth: '700px' }}>
                            Ready to transform your technical infrastructure? Route your query below
                            and our senior architects will engage within 6 business hours.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* 2. CORE INTERFACE GRID */}
            <section className="main-comms-grid">
                {/* Left: Terminal Form */}
                <motion.div
                    className="form-terminal"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="form-header">
                        <h2>Transmission Terminal</h2>
                        <div className="status-dot-pulse">
                            <span className="dot"></span>
                            ACTIVE_LINK
                        </div>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="input-matrix">
                            <div className="input-wrap">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter identifier..."
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-wrap">
                                <label>Vector Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="address@domain.io"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-wrap">
                                <label>Contact Node</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="+91 ...."
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-wrap">
                                <label>Target Stream</label>
                                <select name="service" value={formData.service} onChange={handleChange}>
                                    <option value="">Select Service Scope</option>
                                    <option value="ai">AI / Machine Learning</option>
                                    <option value="web">Next-Gen Web Dev</option>
                                    <option value="mobile">Native Mobile Hub</option>
                                    <option value="cloud">Cloud Infrastructure</option>
                                    <option value="other">Bespoke Protocol</option>
                                </select>
                            </div>
                            <div className="input-wrap full">
                                <label>Message Payload</label>
                                <textarea
                                    name="message"
                                    placeholder="Describe your project vision / technical requirements..."
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                        </div>

                        <button type="submit" className="btn-submit-elite">
                            <span>Execute Transmission</span>
                            <PiPaperPlaneRightFill />
                        </button>
                    </form>
                </motion.div>

                {/* Right: Connection Nodes */}
                <div className="connection-nodes">
                    {[
                        {
                            id: 'node-1',
                            icon: <PiPhoneCallFill />,
                            label: 'Direct Link',
                            val: '+91 63671 81952',
                            link: 'tel:+916367181952'
                        },
                        {
                            id: 'node-2',
                            icon: <PiEnvelopeSimpleFill />,
                            label: 'Secure Mail',
                            val: 'info@shapesway.in',
                            link: 'mailto:info@shapesway.in'
                        },
                        {
                            id: 'node-3',
                            icon: <PiHeadsetFill />,
                            label: 'Support Hub',
                            val: '24/7 Response Ready',
                            link: '/support'
                        },
                        {
                            id: 'node-4',
                            icon: <PiSparkleFill />,
                            label: 'Social Presence',
                            val: '@shapesway_tech',
                            link: 'https://instagram.com'
                        }
                    ].map((node, i) => (
                        <motion.div
                            key={node.id}
                            className="node-card"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                        >
                            <div className="node-icon-wrap">
                                {node.icon}
                            </div>
                            <div className="node-info">
                                <h4>{node.label}</h4>
                                <a href={node.link}>{node.val}</a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 3. LOCATION MATRIX */}
            <section className="location-matrix">
                <div className="office-grid">
                    <motion.div
                        className="office-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                            <PiGlobeFill style={{ color: 'var(--con-primary)', fontSize: '2rem' }} />
                            <span className="badge-tactical" style={{ marginBottom: 0 }}>HQ_NODE</span>
                        </div>
                        <h3>Jaipur HQ</h3>
                        <p>4th Floor, Shree Amar Heights, 405, Ajmer Rd, Jaipur, Rajasthan 302019</p>
                        <div className="map-mock">
                            <PiNavigationArrowFill style={{ marginRight: '10px' }} />
                            Spatial Data: 26.9124° N, 75.7873° E
                        </div>
                    </motion.div>

                    <motion.div
                        className="office-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                            <PiGlobeFill style={{ color: 'var(--con-secondary)', fontSize: '2rem' }} />
                            <span className="badge-tactical" style={{ marginBottom: 0, color: 'var(--con-secondary)', borderColor: 'rgba(59, 130, 246, 0.2)' }}>REGIONAL_NODE</span>
                        </div>
                        <h3>Udaipur Hub</h3>
                        <p>Fortune 80 Complex, 205, University Rd, Udaipur, Rajasthan 313001</p>
                        <div className="map-mock">
                            <PiNavigationArrowFill style={{ marginRight: '10px' }} />
                            Spatial Data: 24.5854° N, 73.7125° E
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
