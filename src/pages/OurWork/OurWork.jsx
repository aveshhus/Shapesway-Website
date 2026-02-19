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
import {
    SiReact, SiNodedotjs, SiPython, SiFlutter, SiAmazonwebservices,
    SiDocker, SiKubernetes, SiPostgresql, SiGraphql, SiNextdotjs,
    SiTypescript, SiTensorflow, SiRedis, SiMongodb, SiSwift, SiKotlin
} from 'react-icons/si';
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
    const [hoveredIndIndex, setHoveredIndIndex] = React.useState(null);

    const industryItems = [
        { id: 1, title: "FinTech", text: "Secure payments, blockchain integration & banking compliance solutions.", icon: TbBuildingBank, start: '#0db5a4', end: '#3B82F6' },
        { id: 2, title: "Healthcare", text: "HIPAA-ready telemedicine, patient portals & EHR systems.", icon: TbHeartRateMonitor, start: '#8B5CF6', end: '#EC4899' },
        { id: 3, title: "E-Commerce", text: "Multi-vendor marketplaces, CRM & automated inventory systems.", icon: TbBuildingStore, start: '#F97316', end: '#EF4444' },
        { id: 4, title: "Logistics", text: "Real-time AI fleet tracking, warehouse automation & routing.", icon: TbPlaneDeparture, start: '#10B981', end: '#059669' },
        { id: 5, title: "Cybersecurity", text: "Advanced threat detection, zero-trust architecture & data insulation.", icon: TbShieldLock, start: '#F43F5E', end: '#881337' },
        { id: 6, title: "Tech & SaaS", text: "Scalable cloud-native platforms & high-performance API ecosystems.", icon: TbDeviceDesktopCode, start: '#06B6D4', end: '#0E7490' },
        { id: 7, title: "Energy & IoT", text: "Smart grid monitoring, utility analytics & connected ecosystems.", icon: TbBulb, start: '#EAB308', end: '#A16207' },
        { id: 8, title: "Education", text: "Interactive LMS solutions, virtual classrooms & student analytics.", icon: TbCloudComputing, start: '#EC4899', end: '#BE185D' }
    ];

    const renderIndustries = () => (
        <section className="ow-industry-section">
            <div className="ow-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                <div style={{ marginBottom: 60, textAlign: 'center' }}>
                    <span className="ow-sub">Sector Expertise</span>
                    <h2 className="ow-h2">Solutions by Industry</h2>
                    <p style={{ maxWidth: 660, margin: '0 auto', fontSize: '1.2rem', color: '#64748b', lineHeight: 1.6 }}>
                        We bring deep domain excellence and surgical precision to specialized sectors,
                        building compliant, scalable, and market-defining technology.
                    </p>
                </div>

                {/* Dark Slab Container */}
                <div className="ow-ind-slab">
                    {/* Ambient Glow */}
                    <div className="ow-ind-ambient" style={{
                        background: hoveredIndIndex !== null
                            ? `radial-gradient(circle, ${industryItems[hoveredIndIndex].start}33 0%, transparent 70%)`
                            : 'none',
                    }}></div>

                    <div className="ow-ind-grid">
                        {industryItems.map((item, index) => {
                            const isHovered = hoveredIndIndex === index;
                            return (
                                <div
                                    key={item.id}
                                    className="ow-ind-cell"
                                    onMouseEnter={() => setHoveredIndIndex(index)}
                                    onMouseLeave={() => setHoveredIndIndex(null)}
                                >
                                    {/* Cell Gradient Overlay */}
                                    <div className="ow-ind-cell-gradient" style={{
                                        background: `linear-gradient(135deg, ${item.start}33, ${item.end}33)`,
                                        opacity: isHovered ? 1 : 0
                                    }}></div>

                                    <div className="ow-ind-content">
                                        <div style={{ display: 'flex', alignItems: 'center', gap: isHovered ? '20px' : '0', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                                            <div
                                                className="ow-ind-icon-box"
                                                style={{
                                                    marginBottom: isHovered ? '0' : '20px',
                                                    color: isHovered ? item.start : '#94a3b8',
                                                    background: isHovered ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.05)',
                                                    boxShadow: isHovered ? `0 0 20px ${item.start}50` : 'none'
                                                }}
                                            >
                                                <item.icon size={26} />
                                            </div>

                                            {/* Hover Title */}
                                            <h3
                                                className="ow-ind-title"
                                                style={{
                                                    color: 'white',
                                                    opacity: isHovered ? 1 : 0,
                                                    display: isHovered ? 'block' : 'none'
                                                }}
                                            >
                                                {item.title}
                                            </h3>
                                        </div>

                                        {/* Default Title */}
                                        <h3
                                            className="ow-ind-title"
                                            style={{
                                                opacity: isHovered ? 0 : 1,
                                                display: isHovered ? 'none' : 'block'
                                            }}
                                        >
                                            {item.title}
                                        </h3>

                                        {/* Description */}
                                        <div style={{
                                            marginTop: '15px',
                                            opacity: isHovered ? 1 : 0,
                                            maxHeight: isHovered ? '100px' : '0',
                                            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                                            overflow: 'hidden'
                                        }}>
                                            <p className="ow-ind-desc">
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
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
                        <p className="ow-srv-desc">
                            We handle everything from initial ideation and architecture to deployment and long-term scaling.
                            Our cross-functional teams integrate seamlessly with your vision.
                        </p>
                        <div style={{ marginTop: 40 }}>
                            <Link to="/services" className="btn-bespoke-master">
                                Explore Services <TbArrowUpRight />
                            </Link>
                        </div>
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
                                    <div className="ow-srv-check-box">
                                        <TbActivity className="ow-check" />
                                    </div>
                                    <span className="ow-srv-text">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

    // --- 5. TECH STACK ---
    const renderTech = () => {
        const techItems = [
            { name: "React.js", icon: SiReact, color: "#61DAFB" },
            { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "Flutter", icon: SiFlutter, color: "#02569B" },
            { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
            { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
            { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
            { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
            { name: "Redis", icon: SiRedis, color: "#FF4438" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "Swift", icon: SiSwift, color: "#F05138" },
            { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" }
        ];

        return (
            <section className="ow-tech-section">
                <div className="ow-container" style={{ textAlign: 'center' }}>
                    <span className="ow-sub">Technology Ecosystem</span>
                    <h2 className="ow-h2">Built on Modern Foundations</h2>
                    <div className="ow-tech-wrapper">
                        {techItems.map((tech, i) => (
                            <div
                                key={i}
                                className="ow-tech-tag"
                                style={{
                                    "--tech-color": tech.color,
                                    "--tech-color-light": `${tech.color}15`
                                }}
                            >
                                <tech.icon className="ow-tech-icon-svg" style={{ color: tech.color }} />
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    };

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
