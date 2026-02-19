import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    PiCloudBold, PiDatabaseBold, PiShieldCheckBold, PiGearBold,
    PiArrowsClockwiseBold, PiChartLineBold, PiCpuBold, PiGlobeBold,
    PiLightningBold, PiInfinityBold, PiTrophyBold, PiGraphBold,
    PiHardDriveBold, PiCodeBold, PiGoogleLogo, PiArrowRightBold
} from 'react-icons/pi';
import { FaAws } from 'react-icons/fa';
import BespokeCTA from '../../components/common/BespokeCTA';
import './CloudServices.css';

const CloudServices = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Cloud Services & Infrastructure | Shapesway Technologies";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Scale your enterprise with Shapesway's elite cloud services. We offer expert migration, serverless architecture, and DevOps automation on AWS, Azure, and Google Cloud.");
        }
    }, []);

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const capabilities = [
        { title: "Cloud Migration", icon: <PiCloudBold />, desc: "Seamless transition of your applications and data to leading cloud environments with zero downtime." },
        { title: "Cloud Architecture", icon: <PiDatabaseBold />, desc: "Designing robust, scalable, and resilient cloud infrastructures tailored to your business needs." },
        { title: "Cloud Native Development", icon: <PiCpuBold />, desc: "Building applications specifically for the cloud to leverage auto-scaling and elasticity." },
        { title: "Infrastructure Automation", icon: <PiGearBold />, desc: "Eliminating manual intervention through sophisticated Infrastructure as Code (IaC) solutions." },
        { title: "DevOps Enablement", icon: <PiArrowsClockwiseBold />, desc: "Bridging the gap between development and operations for faster, more reliable delivery." },
        { title: "Cloud Optimization", icon: <PiChartLineBold />, desc: "Continuous mapping and rightsizing of cloud resources to maximize performance and minimize cost." }
    ];

    const platforms = [
        { name: "AWS", icon: <FaAws /> },
        { name: "Microsoft Azure", icon: <PiCloudBold /> },
        { name: "Google Cloud", icon: <PiGoogleLogo /> },
        { name: "Hybrid Cloud", icon: <PiGlobeBold /> },
        { name: "Multi-Cloud", icon: <PiInfinityBold /> }
    ];

    const devopsIntegrations = [
        { title: "CI/CD Pipelines", icon: <PiArrowsClockwiseBold />, desc: "Automated testing and deployment workflows for rapid delivery cycles." },
        { title: "Infrastructure as Code", icon: <PiCodeBold />, desc: "Managing infrastructure through code using Terraform, Pulumi, or AWS CDK." },
        { title: "Kubernetes & Containers", icon: <PiHardDriveBold />, desc: "Orchestrating containerized applications for maximum portability and scale." },
        { title: "Monitoring & Observability", icon: <PiGraphBold />, desc: "Gaining deep insights into system performance with real-time telemetry." },
        { title: "Automated Scaling", icon: <PiLightningBold />, desc: "Dynamically adjusting resources based on live traffic and workload demands." }
    ];

    const modernizationItems = [
        { title: "Legacy App Migration", desc: "Refactoring legacy monolithic applications for modern cloud environments." },
        { title: "Monolith to Microservices", desc: "Breaking down complex systems into manageable, independent services." },
        { title: "Replatforming", desc: "Upgrading your platform to leverage modern cloud features without core code changes." },
        { title: "Refactoring", desc: "Optimizing application code to become truly cloud-native and efficient." },
        { title: "Efficient Scaling", desc: "Implementing architectural patterns that allow for granular, cost-effective scaling." }
    ];

    const processSteps = [
        { step: "01", title: "Assessment", desc: "Auditing your current infrastructure and defining cloud readiness." },
        { step: "02", title: "Planning", desc: "Designing the target architecture and migration roadmap." },
        { step: "03", title: "Migration", desc: "Executing the transition with a focus on data integrity and uptime." },
        { step: "04", title: "Optimization", desc: "Refining resources for peak performance and cost efficiency." },
        { step: "05", title: "Continuous Support", desc: "Monitoring and iterating for long-term cloud success." }
    ];

    const benefits = [
        { title: "Scalability", icon: <PiInfinityBold />, desc: "Grow your resources instantly as your business demands expand.", color: "#0ea5e9" },
        { title: "Security", icon: <PiShieldCheckBold />, desc: "Enterprise-grade protection for your most sensitive data and assets.", color: "#f43f5e" },
        { title: "High Availability", icon: <PiGlobeBold />, desc: "Ensuring your services remain online and accessible from anywhere.", color: "#2dd4bf" },
        { title: "Cost Optimization", icon: <PiChartLineBold />, desc: "Pay only for what you use with radical resource efficiency.", color: "#fb923c" },
        { title: "Performance", icon: <PiLightningBold />, desc: "Lightning-fast response times globally via CDN and edge computing.", color: "#818cf8" },
        { title: "Reliability", icon: <PiTrophyBold />, desc: "Resilient systems that self-heal and maintain consistency under load.", color: "#c084fc" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 30 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
    };

    return (
        <div className="cloud-v3-container">
            {/* --- Cinematic Background --- */}
            <div className="cloud-v3-bg">
                <div className="orb orb-1" />
                <div className="orb orb-2" />
                <div className="orb orb-3" />
            </div>

            {/* --- Hero Section: Cinematic Perspective --- */}
            <section className="hero-v3">
                <div className="container">
                    <div className="hero-v3-content">
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span className="hero-v3-tag">
                                <motion.span
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                    style={{ display: 'inline-block' }}
                                >
                                    <PiCpuBold />
                                </motion.span>
                                Digital Infrastructure Elite
                            </span>
                            <h1 className="hero-v3-title">
                                Cloud <span>Synergy.</span>
                            </h1>
                            <p className="hero-v3-desc">
                                We architect and orchestrate autonomous cloud ecosystems for global enterprises, ensuring radical scalability and institutional-grade security.
                            </p>

                            <div className="cloud-hero-btns" style={{ display: 'flex', gap: '25px', flexWrap: 'wrap' }}>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                                    <Link to="/contact" className="btn btn-primary btn-lg" style={{
                                        padding: '24px 50px',
                                        borderRadius: '100px',
                                        fontSize: '1.2rem',
                                        background: 'linear-gradient(90deg, #0ea5e9, #818cf8)',
                                        border: 'none',
                                        boxShadow: '0 25px 50px -12px rgba(14, 165, 233, 0.5)'
                                    }}>
                                        Initialize Protocol <PiArrowRightBold />
                                    </Link>
                                </motion.div>
                                <Link to="/contact" className="btn-secondary-web" style={{ color: '#0f172a', fontSize: '1.1rem', fontWeight: 800, padding: '0 30px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    Systems Audit <PiGraphBold />
                                </Link>
                            </div>

                            <div className="hero-v3-stats">
                                <motion.div className="hero-stat-item" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                                    <h4>99.99%</h4>
                                    <p>Global Uptime</p>
                                </motion.div>
                                <motion.div className="hero-stat-item" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
                                    <h4>ZERO</h4>
                                    <p>Security Breach</p>
                                </motion.div>
                                <motion.div className="hero-stat-item" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
                                    <h4>HYPER</h4>
                                    <p>Scaling Logic</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Style 1: Capabilities (Holographic Glass) --- */}
            <section className="section">
                <div className="container">
                    <div className="v3-section-head">
                        <span>01 // Technical Core</span>
                        <h2>Advanced Cloud <br />Capabilities</h2>
                    </div>
                    <motion.div
                        className="capabilities-v3-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {capabilities.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="cap-card-v3"
                                variants={itemVariants}
                                onMouseMove={(e) => {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                                    e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
                                    e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
                                }}
                            >
                                <div className="cap-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* --- Style 2: Platforms (Luminous Nodes) --- */}
            <section className="section" style={{ background: '#f1f5f9' }}>
                <div className="container">
                    <div className="v3-section-head">
                        <span>02 // Neural Network</span>
                        <h2>Ecosystem Integration</h2>
                    </div>
                    <div className="platform-v3-grid">
                        {[
                            { ...platforms[0], color: '#ff9900' },
                            { ...platforms[1], color: '#0089d6' },
                            { ...platforms[2], color: '#4285f4' },
                            { ...platforms[3], color: '#2dd4bf' },
                            { ...platforms[4], color: '#f43f5e' }
                        ].map((p, idx) => (
                            <motion.div
                                key={idx}
                                className="plat-card-v3"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, type: "spring" }}
                                style={{ '--accent-color': p.color }}
                            >
                                <div className="plat-glow" />
                                <div className="plat-icon-box">{p.icon}</div>
                                <span>{p.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Style 3: DevOps (Luminous Protocol) --- */}
            <section className="section">
                <div className="container">
                    <div className="v3-section-head">
                        <span>03 // Operations</span>
                        <h2>DevOps & Fluid <br />Automation</h2>
                    </div>
                    <div className="devops-v3-wrap">
                        {devopsIntegrations.map((item, idx) => {
                            const cardColors = [
                                { bg: 'linear-gradient(135deg, #4c1d95, #7c3aed)', border: '#a78bfa', icon: '#e9d5ff' },
                                { bg: 'linear-gradient(135deg, #164e63, #0891b2)', border: '#22d3ee', icon: '#cffafe' },
                                { bg: 'linear-gradient(135deg, #881337, #e11d48)', border: '#fb7185', icon: '#ffe4e6' },
                                { bg: 'linear-gradient(135deg, #78350f, #d97706)', border: '#fbbf24', icon: '#fef3c7' },
                                { bg: 'linear-gradient(135deg, #064e3b, #059669)', border: '#34d399', icon: '#d1fae5' }
                            ];
                            const c = cardColors[idx];
                            return (
                                <motion.div
                                    key={idx}
                                    className="dev-item-v3"
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    style={idx % 2 !== 0 ? {
                                        flexDirection: 'row-reverse',
                                        textAlign: 'right',
                                        borderLeft: 0,
                                        borderRight: `6px solid ${c.border}`,
                                        borderRadius: '40px 0 0 40px',
                                        background: c.bg
                                    } : {
                                        borderLeftColor: c.border,
                                        background: c.bg
                                    }}
                                >
                                    <div className="dev-icon-v3" style={{ color: c.icon, filter: `drop-shadow(0 0 15px ${c.icon})` }}>{item.icon}</div>
                                    <div className="dev-info-v3">
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* --- Style 4: Modernization (Layered Stacks) --- */}
            <section className="section" style={{ background: '#f1f5f9' }}>
                <div className="container">
                    <div className="v3-section-head">
                        <span>04 // Transformation</span>
                        <h2>Legacy Evolution Stack</h2>
                    </div>
                    <div className="mod-v3-scroll">
                        {modernizationItems.map((item, idx) => {
                            const modColors = [
                                { bg: 'linear-gradient(160deg, #312e81, #6366f1)', shadow: 'rgba(99, 102, 241, 0.5)' },
                                { bg: 'linear-gradient(160deg, #7f1d1d, #ef4444)', shadow: 'rgba(239, 68, 68, 0.5)' },
                                { bg: 'linear-gradient(160deg, #14532d, #22c55e)', shadow: 'rgba(34, 197, 94, 0.5)' },
                                { bg: 'linear-gradient(160deg, #78350f, #f59e0b)', shadow: 'rgba(245, 158, 11, 0.5)' },
                                { bg: 'linear-gradient(160deg, #134e4a, #14b8a6)', shadow: 'rgba(20, 184, 166, 0.5)' }
                            ];
                            const mc = modColors[idx];
                            return (
                                <motion.div
                                    key={idx}
                                    className="mod-card-v3"
                                    initial={{ opacity: 0, scale: 0.9, x: 100 }}
                                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    style={{ background: mc.bg, boxShadow: `0 40px 80px -40px ${mc.shadow}` }}
                                >
                                    <span className="phase-num">0{idx + 1}</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* --- Style 5: Process (Pulsating Timeline) --- */}
            <section className="section">
                <div className="container">
                    <div className="v3-section-head">
                        <span>05 // Methodology</span>
                        <h2>Strategic Roadmap</h2>
                    </div>
                    <div className="process-v3-timeline">
                        <div className="process-v3-line" />
                        {processSteps.map((step, idx) => {
                            const stepColors = [
                                { bg: 'linear-gradient(145deg, #1e3a5f, #0ea5e9)', marker: '#0ea5e9', shadow: 'rgba(14, 165, 233, 0.3)' },
                                { bg: 'linear-gradient(145deg, #4c1d95, #8b5cf6)', marker: '#8b5cf6', shadow: 'rgba(139, 92, 246, 0.3)' },
                                { bg: 'linear-gradient(145deg, #881337, #f43f5e)', marker: '#f43f5e', shadow: 'rgba(244, 63, 94, 0.3)' },
                                { bg: 'linear-gradient(145deg, #78350f, #f59e0b)', marker: '#f59e0b', shadow: 'rgba(245, 158, 11, 0.3)' },
                                { bg: 'linear-gradient(145deg, #064e3b, #10b981)', marker: '#10b981', shadow: 'rgba(16, 185, 129, 0.3)' }
                            ];
                            const sc = stepColors[idx];
                            return (
                                <motion.div
                                    key={idx}
                                    className={`proc-node-v3 ${idx % 2 === 0 ? '' : 'even'}`}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                >
                                    <div className="proc-marker" style={{ borderColor: sc.marker }} />
                                    <div className="proc-card-v3" style={{ background: sc.bg, boxShadow: `0 10px 40px ${sc.shadow}`, border: 'none' }}>
                                        <span style={{ fontSize: '0.85rem', fontWeight: 900, color: 'rgba(255,255,255,0.7)', letterSpacing: '2px' }}>
                                            PROTOCOL // PHASE_{step.step}
                                        </span>
                                        <h4 style={{ color: '#fff' }}>{step.title}</h4>
                                        <p style={{ color: 'rgba(255,255,255,0.85)' }}>{step.desc}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* --- Style 6: Benefits (Neon Analytics Grid) --- */}
            <section className="section" style={{ background: '#f1f5f9' }}>
                <div className="container">
                    <div className="v3-section-head">
                        <span>06 // Strategic Value</span>
                        <h2>Institutional Business <br />Impact</h2>
                    </div>
                    <div className="benefits-v3-grid">
                        {benefits.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="ben-card-v3"
                                variants={itemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                style={{ '--mesh-color': item.color }}
                            >
                                <div className="ben-mesh" />
                                <motion.span
                                    className="ben-icon-v3"
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, delay: idx * 0.5 }}
                                >
                                    {item.icon}
                                </motion.span>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <BespokeCTA
                tag="INITIALIZE GLOBAL DEPLOYMENT"
                title={["Scale Without", "Compromise."]}
                desc="Our cloud architects are ready to design your enterprise's autonomous infrastructure. Access elite scaling logic today."
                buttonText="Connect with Architects"
                visuals={
                    <>
                        <div className="bespoke-card" style={{ width: '280px', left: '0%', bottom: '5%', zIndex: 3, boxShadow: '0 40px 100px rgba(14, 165, 233, 0.4)', background: '#0b0f1a', border: '1px solid var(--c-primary)' }}>
                            <div className="bespoke-card-header">
                                <motion.div
                                    className="header-spinner"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    style={{ borderColor: 'var(--c-primary)', borderTopColor: 'transparent' }}
                                />
                                <span style={{ color: '#fff' }}>Cluster Status: Primary</span>
                            </div>
                            <div className="bespoke-card-body">
                                <p className="greeting" style={{ color: 'var(--c-primary)', fontWeight: 800 }}>ORCHESTRATING...</p>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '6px', marginBottom: '15px' }}>
                                    {[...Array(10)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            style={{ height: '8px', background: 'var(--c-primary)', borderRadius: '100px' }}
                                            animate={{ opacity: [0.1, 1, 0.1], scaleY: [1, 1.5, 1] }}
                                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                                        />
                                    ))}
                                </div>
                                <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.4 }}>Quantum-grade encryption active. 14 Global regions initialized.</p>
                            </div>
                        </div>
                    </>
                }
            />
        </div>
    );
};

export default CloudServices;
