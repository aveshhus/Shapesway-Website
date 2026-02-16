import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    PiBrowserBold, PiDeviceMobileCameraBold, PiCodeBlockBold, PiStackBold,
    PiBrainBold, PiPaletteBold, PiMagnifyingGlassBold, PiMegaphoneBold,
    PiBroadcastBold, PiLockKeyBold, PiCurrencyBtcBold, PiRobotBold,
    PiWrenchBold, PiRocketLaunchBold, PiCloudBold, PiShieldCheckBold,
    PiPlugsBold, PiShoppingCartBold, PiChartBarBold, PiWifiHighBold,
    PiPaintBrushBold, PiPenNibBold, PiChartPieSliceBold, PiLightbulbBold,
    PiArrowRightBold, PiArrowSquareOutBold, PiCheckCircleBold,
    // New Enterprise Icons
    PiFactoryBold, PiBuildingsBold, PiCircuitryBold, PiBankBold,
    PiBriefcaseBold, PiGearBold, PiHardDrivesBold
} from 'react-icons/pi';
import servicesData from '../../data/services';
import BespokeCTA from '../../components/common/BespokeCTA';
import './NeoServices.css';

// Icon Orchestrator for standardized visual modules
const ModernIconWrapper = ({ Icon, type }) => {
    return (
        <div className={`modern-icon-wrapper icon-mode-${type}`}>
            <div className="modern-icon-glass" />
            <div className="modern-icon-svg">
                <Icon />
            </div>
        </div>
    );
};

// Engineering Pillar: Light on Dark Theme
const EngineeringModule = ({ service, Icon }) => {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

    const handleMouseMove = (e) => {
        const rect = cardRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        x.set(mouseX / rect.width - 0.5);
        y.set(mouseY / rect.height - 0.5);
    };

    return (
        <div className="eng-card-3d" ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={() => { x.set(0); y.set(0); }}>
            <motion.div className="eng-inner" style={{ rotateX, rotateY }}>
                <div className="eng-face">
                    <ModernIconWrapper Icon={Icon} type="engineering" />
                    <h3 className="h3-bespoke-master">{service.title}</h3>
                    <p className="p-bespoke-master" style={{ color: 'var(--color-gray)' }}>{service.shortDesc}</p>
                </div>
                <div className="eng-reveal">
                    <h3 className="h3-bespoke-master" style={{ color: 'var(--color-primary)' }}>Matrix Analysis</h3>
                    <ul className="list-bespoke-master">
                        {(service.features || []).slice(0, 3).map((f, i) => (
                            <li key={i} className="item-bespoke-master"><PiCheckCircleBold color="var(--color-primary)" /> {f}</li>
                        ))}
                    </ul>
                    <Link to={`/services/${service.slug}`} className="btn-bespoke-master">Technical Specs <PiArrowRightBold /></Link>
                </div>
            </motion.div>
        </div>
    );
};

// Neural Compute Pillar: Split Creative Layout
const NeuralComputeSection = ({ category, services, IconMap }) => {
    const sectionRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        sectionRef.current.style.setProperty('--mouse-x', `${x}%`);
        sectionRef.current.style.setProperty('--mouse-y', `${y}%`);
    };

    return (
        <section
            ref={sectionRef}
            className="pillar-neural-compute"
            id="intelligence"
            onMouseMove={handleMouseMove}
        >
            <div className="neo-container">
                <div className="neural-split-layout">
                    {/* Left Side: Content & CTA */}
                    <div className="neural-content-side">
                        <span style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--color-primary)', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '20px', display: 'block', fontFamily: 'var(--font-primary)' }}>
                            Phase 02 // {category.tag}
                        </span>
                        <h2 className="h2-pillar" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, letterSpacing: '-0.04em', margin: '20px 0', color: 'var(--color-dark)' }}>
                            {category.title}
                        </h2>
                        <p style={{ fontSize: '1.25rem', opacity: 0.8, color: 'var(--color-gray)', fontFamily: 'var(--font-primary)', marginBottom: '40px', lineHeight: 1.6 }}>
                            {category.desc} <br />
                            Do you have a project to deliver but struggle with tech challenges? We offer the following solutions.
                        </p>
                        <Link to="/contact" className="btn-bespoke-master" style={{ padding: '16px 40px', borderRadius: '100px' }}>
                            Book Consultation <PiArrowRightBold />
                        </Link>
                    </div>

                    {/* Right Side: Minimal Grid */}
                    <div className="neural-grid-side">
                        {services.map((service, idx) => (
                            <motion.div
                                key={service.id}
                                className="neural-item"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <ModernIconWrapper Icon={IconMap[service.slug] || PiBrainBold} type="neural-minimal" />
                                <h3>{service.title}</h3>
                                <p>{service.shortDesc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Creative Pillar: Minimal Gradient Discovery
const CreativeStudioStack = ({ service, Icon, index }) => (
    <div className="creative-stack" data-index={index}>
        <div className="creative-icon-wrapper">
            <ModernIconWrapper Icon={Icon} type="creative" />
        </div>
        <h3 className="h3-bespoke-master creative-title">{service.title}</h3>
        <p className="p-bespoke-master creative-desc">{service.shortDesc}</p>
        <Link to={`/services/${service.slug}`} className="creative-link">
            VIEW CASE <PiArrowSquareOutBold />
        </Link>
    </div>
);

// Enterprise Pillar: Geometric Data Cards
const EnterpriseGeometricCard = ({ service, Icon, index }) => (
    <motion.div
        className="enterprise-geo-card"
        data-index={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
    >
        <Link to={`/services/${service.slug}`} className="enterprise-card-link">
            <div className="enterprise-icon-wrapper">
                <Icon className="enterprise-icon" />
            </div>
            <h3 className="enterprise-card-title">{service.title}</h3>
            <p className="enterprise-card-description">{service.shortDesc}</p>
        </Link>
    </motion.div>
);

const Services = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

    // Standardized Icon Mapping - 2026 Index
    const iconMap = {
        'web-development': PiBrowserBold, 'mobile-app-development': PiDeviceMobileCameraBold, 'software-development': PiCodeBlockBold,
        'cross-platform-development': PiStackBold, 'ai-development': PiBrainBold, 'ui-ux-design': PiPaletteBold,
        'digital-marketing': PiMagnifyingGlassBold, 'social-media-marketing': PiMegaphoneBold, 'advertisement-solutions': PiBroadcastBold,
        'automation-solutions': PiRobotBold, 'api-development': PiPlugsBold, 'ecommerce-development': PiShoppingCartBold,
        'data-science': PiChartBarBold, 'iot-solutions': PiWifiHighBold, 'brand-identity': PiPaintBrushBold, 'content-strategy': PiPenNibBold,

        // Updated Enterprise/Industrial Icons
        'cloud-services': PiHardDrivesBold,
        'cybersecurity-solutions': PiShieldCheckBold,
        'erp-solutions': PiFactoryBold,
        'digital-transformation': PiCircuitryBold,
        'fintech-development': PiBankBold,
        'cryptocurrency-development': PiCurrencyBtcBold,
        'custom-business-tools': PiBriefcaseBold,
        'it-support-maintenance': PiGearBold
    };

    const categories = [
        { id: 'digital-core', tag: 'Engineering', title: 'Technical Matrix.', desc: 'Scalable, high-performance software architectures for the modern digital frontier.', slugs: ['web-development', 'mobile-app-development', 'software-development', 'cross-platform-development', 'api-development', 'ecommerce-development'], theme: 'pillar-eng', Card: EngineeringModule },
        { id: 'intelligence', tag: 'Intelligence', title: 'Neural Compute.', desc: 'Advanced AI systems and predictive analytics for the cognitive business era.', slugs: ['ai-development', 'data-science', 'automation-solutions', 'iot-solutions'], theme: 'pillar-intel', Card: null },
        { id: 'brand-growth', tag: 'Creative', title: 'Aesthetic Flow.', desc: 'Strategic design and marketing that synchronizes growth with market impact.', slugs: ['ui-ux-design', 'digital-marketing', 'social-media-marketing', 'advertisement-solutions', 'brand-identity', 'content-strategy'], theme: 'pillar-creative', Card: CreativeStudioStack },
        { id: 'enterprise', tag: 'Enterprise', title: 'Industrial Assets.', desc: 'Enterprise-grade infrastructure and digital tools for global scalability.', slugs: ['cloud-services', 'cybersecurity-solutions', 'erp-solutions', 'digital-transformation', 'fintech-development', 'cryptocurrency-development', 'custom-business-tools', 'it-support-maintenance'], theme: 'pillar-enterprise', Card: EnterpriseGeometricCard }
    ];

    const getServicesByCategory = (slugList) => servicesData.filter(s => slugList.includes(s.slug));

    return (
        <div className="neo-page" style={{ background: '#fff' }}>
            <header className="services-hero-refined" ref={heroRef}>
                <div className="neo-container">
                    <motion.div style={{ opacity: heroOpacity, y: heroY }}>
                        <span className="hero-tag-elite">Portfolio // Index 2026</span>
                        <h1 className="h1-elite">Exceptional Architecture. <br /><span>Beyond Boundaries.</span></h1>
                        <p style={{ fontSize: '1.5rem', color: 'var(--color-gray)', maxWidth: '800px', margin: '40px auto 0', lineHeight: 1.5, fontWeight: 500, fontFamily: 'var(--font-primary)' }}>
                            We operate at the edge of innovation, delivering four specialized
                            architectural pillars designed to redefine your digital reality.
                        </p>




                    </motion.div>
                </div>
            </header>

            {categories.map((cat, idx) => {
                if (cat.id === 'intelligence') {
                    return <NeuralComputeSection key={cat.id} category={cat} services={getServicesByCategory(cat.slugs)} IconMap={iconMap} />;
                }
                return (
                    <section key={cat.id} id={cat.id} className={cat.theme}>
                        <div className="neo-container">
                            <div style={{ marginBottom: '80px', maxWidth: '850px' }}>
                                <span style={{ fontWeight: 800, fontSize: '0.9rem', color: (cat.theme === 'pillar-eng' || cat.theme === 'pillar-enterprise') ? 'rgba(255,255,255,0.9)' : 'var(--color-primary)', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '20px', display: 'block', fontFamily: 'var(--font-primary)' }}>
                                    Phase 0{idx + 1} // {cat.tag}
                                </span>
                                <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, letterSpacing: '-0.04em', margin: '20px 0', color: (cat.theme === 'pillar-eng' || cat.theme === 'pillar-enterprise') ? '#fff' : 'var(--color-dark)', fontFamily: 'var(--font-heading)' }}>{cat.title}</h2>
                                <p style={{ fontSize: '1.3rem', opacity: 0.8, color: (cat.theme === 'pillar-eng' || cat.theme === 'pillar-enterprise') ? '#fff' : 'var(--color-gray)', fontFamily: 'var(--font-primary)' }}>{cat.desc}</p>
                            </div>
                            <div className={`grid-bespoke ${cat.id === 'intelligence' ? 'grid-cols-4' : 'grid-cols-3'}`}>
                                {getServicesByCategory(cat.slugs).map((service, sIdx) => (
                                    <motion.div
                                        key={service.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: sIdx * 0.1 }}
                                    >
                                        <cat.Card service={service} Icon={iconMap[service.slug] || PiBrowserBold} index={sIdx} />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                );
            })}

            <BespokeCTA
                tag="DEFINE THE FUTURE"
                title={["Ready to Define", "The Future?"]}
                desc="Join the forward-thinking enterprises building their digital legacy with Shapesway. From concept to deployment, we engineer success."
                buttonText="Partner With Us"
                visuals={
                    <>
                        <div className="bespoke-card" style={{ width: '310px', left: '0%', bottom: '5%', zIndex: 3, boxShadow: '0 20px 80px rgba(0,0,0,0.8)' }}>
                            <div className="bespoke-card-header">
                                <div className="header-spinner"></div>
                                <span>Enterprise Orchestrator</span>
                                <div className="bespoke-card-meta">v8.0</div>
                            </div>
                            <div className="bespoke-card-body">
                                <p className="greeting">Session Authenticated.</p>
                                <p>Ready to deploy high-scale architecture across your global digital infrastructure.</p>
                                <div style={{ display: 'flex', gap: '8px', mt: '10px' }}>
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} style={{ flex: 1, height: '4px', background: i === 1 ? '#0db5a4' : '#222', borderRadius: '2px' }}></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="bespoke-card" style={{ width: '220px', right: '0%', top: '5%', zIndex: 2, boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }}>
                            <div className="bespoke-card-header">
                                <div className="header-spinner"></div>
                                <span>Network Sync</span>
                            </div>
                            <div className="bespoke-card-body">
                                <span className="bespoke-card-section-label">Active Nodes</span>
                                <div className="bespoke-tag-group">
                                    <span className="bespoke-mini-tag">Edge: Active</span>
                                </div>
                                <span className="bespoke-card-section-label">Signal Strength</span>
                                <div className="bespoke-card-highlight-box">
                                    Latency: 4ms
                                </div>
                            </div>
                        </div>
                    </>
                }
            />
        </div>
    );
};

export default Services;
