import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    TbArrowUpRight,
    TbActivity,
    TbBrandApple,
    TbBrandAndroid,
    TbCloudComputing,
    TbDeviceDesktopCode,
    TbBulb,
    TbRocket,
    TbUsers,
    TbChartHistogram,
    TbSettings,
    TbShieldLock,
    TbBuildingStore,
    TbBuildingBank,
    TbHeartRateMonitor,
    TbPlaneDeparture
} from 'react-icons/tb';
import BespokeCTA from '../../components/common/BespokeCTA';
import './OurWork.css';

const OurWork = () => {

    // --- 1. HERO ---
    const renderHero = () => (
        <section className="ow-hero-section">
            <div className="ow-container">
                <span className="ow-sub">Engineering Digital Excellence</span>
                <motion.h1
                    className="ow-hero-title ow-display"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    We Shape The <br />
                    Digital Future.
                </motion.h1>
                <motion.p
                    className="ow-hero-desc"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    From visionary startups to global enterprises, we architect software solutions
                    that drive innovation, scalability, and measurable business growth.
                </motion.p>
                <Link to="/contact" className="btn-bespoke-master">
                    Start Your Project <TbArrowUpRight />
                </Link>
            </div>
        </section>
    );

    // --- 2. CORE PHILOSOPHY ---
    const renderPhilosophy = () => (
        <section className="ow-philosophy-section">
            <div className="ow-container">
                <div style={{ textAlign: 'center', marginBottom: 60 }}>
                    <span className="ow-sub">Our Standard</span>
                    <h2 className="ow-h2">Why Shapesway?</h2>
                </div>
                <div className="ow-phil-grid">
                    {[
                        { icon: TbRocket, title: "Velocity & Precision", desc: "We deploy high-quality MVP in weeks, not months. Speed to market is our priority without compromising code integrity." },
                        { icon: TbBulb, title: "Innovation First", desc: "Our R&D labs constantly explore AI, Blockchain, and IoT to give you a competitive edge in a rapidly evolving landscape." },
                        { icon: TbUsers, title: "User-Centric Design", desc: "We don't just write code; we craft experiences. Every pixel is engineered to maximize user retention and engagement." }
                    ].map((item, i) => (
                        <div key={i} className="ow-phil-card">
                            <div className="ow-phil-icon"><item.icon /></div>
                            <h3 className="ow-h3">{item.title}</h3>
                            <p style={{ color: '#64748b', lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

    // --- 3. INDUSTRY SOLUTIONS ---
    const renderIndustries = () => (
        <section className="ow-industry-section">
            <div className="ow-container">
                <div style={{ marginBottom: 60 }}>
                    <span className="ow-sub">Sector Expertise</span>
                    <h2 className="ow-h2">Solutions by Industry</h2>
                </div>
                <div className="ow-industry-grid">
                    {[
                        { icon: TbBuildingBank, title: "FinTech", text: "Secure payments & banking compliance." },
                        { icon: TbHeartRateMonitor, title: "Healthcare", text: "HIPAA-ready telemedicine platforms." },
                        { icon: TbBuildingStore, title: "E-Commerce", text: "High-scale marketplaces & inventory." },
                        { icon: TbPlaneDeparture, title: "Logistics", text: "Real-time tracking & fleet management." }
                    ].map((ind, i) => (
                        <div key={i} className="ow-ind-card">
                            <ind.icon size={40} color="#0db5a4" style={{ marginBottom: 20 }} />
                            <h3 className="ow-h3" style={{ fontSize: '1.25rem' }}>{ind.title}</h3>
                            <p style={{ fontSize: '0.95rem', color: '#64748b' }}>{ind.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

    // --- 4. DIGITAL SERVICES ---
    const renderServices = () => (
        <section className="ow-services-split">
            <div className="ow-container">
                <div className="ow-srv-grid">
                    <div>
                        <span className="ow-sub">End-to-End Capabilities</span>
                        <h2 className="ow-h2">Full-Cycle <br />Product Development</h2>
                        <p style={{ fontSize: '1.1rem', color: '#64748b', marginBottom: 40, lineHeight: 1.6 }}>
                            We handle everything from initial ideation and architecture to deployment and long-term scaling.
                            Our cross-functional teams integrate seamlessly with your vision.
                        </p>
                        <Link to="/services" className="btn-bespoke-master" style={{ background: '#0f172a' }}>
                            Explore Services
                        </Link>
                    </div>
                    <div>
                        <div className="ow-srv-list">
                            {[
                                "Enterprise Software Architecture",
                                "Mobile App Ecosystems (iOS/Android)",
                                "Cloud Infrastructure (AWS/Azure)",
                                "AI & Machine Learning Integration",
                                "UI/UX & Brand Identity",
                                "Legacy System Modernization"
                            ].map((item, i) => (
                                <div key={i} className="ow-srv-item">
                                    <TbActivity className="ow-check" />
                                    <span style={{ fontSize: '1.2rem', fontWeight: 600, color: '#334155' }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

    // --- 5. TECH STACK ---
    const renderTech = () => (
        <section className="ow-tech-section">
            <div className="ow-container" style={{ textAlign: 'center' }}>
                <span className="ow-sub">Technology Ecosystem</span>
                <h2 className="ow-h2">Built on Modern Foundations</h2>
                <div className="ow-tech-wrapper">
                    {[
                        "React.js", "Node.js", "Python", "Flutter",
                        "AWS", "Docker", "Kubernetes", "PostgreSQL",
                        "GraphQL", "Next.js", "TypeScript", "TensorFlow",
                        "Redis", "MongoDB", "Swift", "Kotlin"
                    ].map((tech, i) => (
                        <div key={i} className="ow-tech-tag">
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

    // --- 6. PROCESS ---
    const renderProcess = () => (
        <section className="ow-process-section">
            <div className="ow-container">
                <div style={{ textAlign: 'center' }}>
                    <span className="ow-sub">Our Workflow</span>
                    <h2 className="ow-h2">From Concept to Launch</h2>
                </div>
                <div className="ow-process-steps">
                    {[
                        { step: "01", title: "Discovery", desc: "Understanding goals, market research, and technical feasibility." },
                        { step: "02", title: "Design", desc: "Wireframing, prototyping, and high-fidelity UI/UX creation." },
                        { step: "03", title: "Develop", desc: "Agile sprints, clean code, and rigorous testing cycles." },
                        { step: "04", title: "Deploy", desc: "CI/CD pipelines, cloud setup, and post-launch monitoring." }
                    ].map((p, i) => (
                        <div key={i} className="ow-step-card">
                            <div className="ow-step-num">{p.step}</div>
                            <h3 className="ow-h3">{p.title}</h3>
                            <p style={{ fontSize: '0.95rem', color: '#64748b' }}>{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

    // --- 7. IMPACT / METRICS ---
    const renderImpact = () => (
        <section className="ow-impact-section">
            <div className="ow-container">
                <span className="ow-sub" style={{ color: '#fff', opacity: 0.7 }}>Delivering Real Value</span>
                <h2 className="ow-h2" style={{ color: '#fff' }}>Impact by Numbers</h2>
                <div className="ow-impact-grid">
                    <div className="ow-metric">
                        <h2>150+</h2>
                        <p>Projects Delivered</p>
                    </div>
                    <div className="ow-metric">
                        <h2>98%</h2>
                        <p>Client Retention</p>
                    </div>
                    <div className="ow-metric">
                        <h2>5M+</h2>
                        <p>Daily Active Users</p>
                    </div>
                    <div className="ow-metric">
                        <h2>25+</h2>
                        <p>Global Partners</p>
                    </div>
                </div>
            </div>
        </section>
    );

    // --- 8. CTA ---
    const renderCTA = () => (
        <section className="ow-cta-section">
            <div className="ow-container">
                <div className="ow-cta-box">
                    <h2 className="ow-h2" style={{ fontSize: '3.5rem' }}>Ready to Scale?</h2>
                    <p style={{ fontSize: '1.25rem', color: '#64748b', marginBottom: 40 }}>
                        Partner with a team that understands your vision. <br />
                        Let's build something extraordinary together.
                    </p>
                    <Link to="/contact" className="btn-bespoke-master">
                        Schedule a Consultation <TbArrowUpRight />
                    </Link>
                </div>
            </div>
        </section>
    );

    return (
        <div className="our-work-page">
            {renderHero()}
            {renderPhilosophy()}
            {renderIndustries()}
            {renderServices()}
            {renderTech()}
            {renderProcess()}
            {renderImpact()}
            {renderCTA()}
        </div>
    );
};

export default OurWork;
