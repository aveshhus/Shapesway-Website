import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    PiHeartbeatLight, PiShoppingCartLight, PiBankLight,
    PiBuildingsLight, PiGraduationCapLight, PiTruckLight,
    PiBriefcaseLight, PiCodeLight, PiShieldCheckLight,
    PiInfinityLight, PiGearLight, PiGlobeLight, PiArrowRightBold,
    PiChartLineUpLight, PiMagnifyingGlassLight, PiCloudArrowUpLight
} from 'react-icons/pi';
import './Industries.css';

const Industries = () => {
    // --- ANIMATION LOGIC ---
    const revealVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    // --- DATA MODULES ---
    const bentoData = [
        { title: "Healthcare Systems", desc: "HIPAA-compliant patient portals, telemedicine integrators, and AI-driven diagnostic engines.", icon: <PiHeartbeatLight />, span: "6", color: "#f43f5e", bgGrad: "linear-gradient(135deg, #020617 0%, #4c0519 100%)" },
        { title: "Enterprise Commerce", desc: "Hyper-scalable storefronts, predictive inventory, and frictionless omnichannel checkout flows.", icon: <PiShoppingCartLight />, span: "6", color: "#3b82f6", bgGrad: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)" },
        { title: "FinTech Architecture", desc: "Institutional trading hubs, decentralized ledgers, and ultra-low latency transaction APIs.", icon: <PiBankLight />, span: "4", color: "#10b981", bgGrad: "linear-gradient(135deg, #020617 0%, #064e3b 100%)" },
        { title: "Real Estate & Con-Tech", desc: "Predictive property analytics, 3D spatial mapping, and highly automated leasing CRM pipelines.", icon: <PiBuildingsLight />, span: "4", color: "#f59e0b", bgGrad: "linear-gradient(135deg, #1c1917 0%, #7c2d12 100%)" },
        { title: "EdTech & Learning", desc: "Adaptive learning ecosystems, real-time engagement analytics, and enterprise LMS scaling.", icon: <PiGraduationCapLight />, span: "4", color: "#8b5cf6", bgGrad: "linear-gradient(135deg, #171717 0%, #4c1d95 100%)" },
        { title: "Industrial Logistics", desc: "IoT sensor telemetry, fleet optimization algorithms, and global supply chain orchestration.", icon: <PiTruckLight />, span: "8", color: "#0db5a4", bgGrad: "linear-gradient(135deg, #020617 0%, #164e63 100%)" },
        { title: "Corporate Governance", desc: "Centralized operational dashboards, absolute workflow automation, and deep intelligence tools.", icon: <PiBriefcaseLight />, span: "4", color: "#64748b", bgGrad: "linear-gradient(135deg, #0f172a 0%, #312e81 100%)" }
    ];

    const whyData = [
        { num: "01", title: "Industry-Calibrated Strategy", desc: "We map logic to your specific domain constraints, ensuring absolute compliance and market relevance.", bgGrad: "linear-gradient(135deg, #0f172a 0%, #2e1065 100%)" },
        { num: "02", title: "Zero-Latency Architecture", desc: "Engineered on elite edge networks to guarantee milliseconds response times globally.", bgGrad: "linear-gradient(135deg, #020617 0%, #831843 100%)" },
        { num: "03", title: "Adaptive Machine Learning", desc: "Embedding intelligence layers that optimize operations autonomously.", bgGrad: "linear-gradient(135deg, #1c1917 0%, #065f46 100%)" },
        { num: "04", title: "Fortified Infrastructure", desc: "Military-grade encryption and perpetual security auditing built into the foundational code.", bgGrad: "linear-gradient(135deg, #020617 0%, #1e3a8a 100%)" }
    ];

    return (
        <div className="ind-page-v3">

            {/* 1. HERO: NEURAL PLATFORM */}
            <section className="ind-hero-v3">
                <div className="hero-v3-bg-glow"></div>
                <div className="hero-v3-bg-grid"></div>
                <div className="ind-v3-container" style={{ position: 'relative', zIndex: 5 }}>
                    <div className="hero-v3-content" style={{ margin: '0 auto', maxWidth: '1000px', textAlign: 'center' }}>
                        <motion.div initial="hidden" animate="visible" variants={revealVariant}>
                            <div className="ind-v3-tag" style={{ background: 'rgba(13, 181, 164, 0.1)', color: '#0db5a4', borderColor: 'rgba(13, 181, 164, 0.2)' }}>
                                SYS_INIT // STRATEGY_MODE
                            </div>
                            <h1 className="ind-v3-title" style={{ color: '#0a0f1d', fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', textTransform: 'uppercase' }}>
                                Architecting <br />
                                <span style={{ background: 'linear-gradient(135deg, #0db5a4, #3b82f6)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                                    Absolute Scale.
                                </span>
                            </h1>
                            <p className="ind-v3-desc" style={{ color: '#64748b', margin: '0 auto', maxWidth: '750px', fontSize: '1.4rem' }}>
                                We design and deploy high-performance, industry-specific operational frameworks.
                                Secure. Intelligent. Built to command your market.
                            </p>

                            <div style={{ marginTop: '50px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <Link to="/contact" className="btn-mag-v3" style={{ padding: '20px 45px', fontSize: '1.05rem', background: '#0a0f1d', color: '#fff' }}>
                                    Initialize Build <PiArrowRightBold />
                                </Link>
                                <Link to="/services" className="btn-mag-v3" style={{ padding: '20px 45px', fontSize: '1.05rem', background: 'transparent', color: '#0a0f1d', border: '1px solid rgba(0,0,0,0.1)' }}>
                                    View Architecture
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. BENTO GRID: INDUSTRIES WE SERVE */}
            <section className="ind-sect-bento">
                <div className="ind-v3-container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant}>
                        <div className="ind-v3-tag">DOMAINS // 7 VECTORS</div>
                        <h2 className="ind-v3-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                            Engineered for <span>Dominance.</span>
                        </h2>
                    </motion.div>

                    <motion.div className="bento-v3-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                        {bentoData.map((item, idx) => (
                            <motion.div key={idx} className="bento-v3-card vibrant-card" data-span={item.span} style={{ '--card-bg': item.bgGrad }} variants={revealVariant}>
                                <div className="b-icon">{item.icon}</div>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 3. WHY CHOOSE US: ASYMMETRIC DARK SPLIT */}
            <section className="ind-sect-why">
                <div className="ind-v3-container">
                    <div className="why-v3-wrap">
                        <div className="why-v3-sticky">
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant}>
                                <div className="ind-v3-tag" style={{ background: 'rgba(59,130,246,0.1)', color: '#3b82f6', borderColor: 'rgba(59,130,246,0.2)' }}>
                                    ADVANTAGE // THE DIFFERENCE
                                </div>
                                <h2 className="ind-v3-title" style={{ color: '#fff' }}>
                                    The Calculus of <br /><span style={{ background: 'linear-gradient(135deg, #3b82f6, #0db5a4)', WebkitBackgroundClip: 'text' }}>Excellence.</span>
                                </h2>
                                <p className="ind-v3-desc" style={{ color: '#94a3b8' }}>
                                    We do not assemble templates. We forge digital supremacy using pure mathematics, relentless logic, and hyper-optimized code to ensure your infrastructure outpaces all competition.
                                </p>
                                <div style={{ marginTop: '50px' }}>
                                    <Link to="/contact" className="btn-mag-v3" style={{ padding: '20px 40px', fontSize: '1.05rem', background: '#0db5a4', color: '#fff' }}>
                                        Discover Our Edge <PiArrowRightBold />
                                    </Link>
                                </div>
                            </motion.div>
                        </div>

                        <div className="why-v3-cards">
                            {whyData.map((w, idx) => (
                                <motion.div key={idx} className="why-v3-card vibrant-why-card" style={{ '--why-bg': w.bgGrad }} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.6 }}>
                                    <span className="why-num">NODE_{w.num}</span>
                                    <h3>{w.title}</h3>
                                    <p>{w.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. OUR APPROACH: DISCRETE PATHWAY */}
            <section className="ind-sect-approach">
                <div className="ind-v3-container">
                    <motion.div style={{ textAlign: 'center', marginBottom: '80px' }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant}>
                        <div className="ind-v3-tag">METHODOLOGY // 4 PHASES</div>
                        <h2 className="ind-v3-title">Scientific <span>Precision.</span></h2>
                    </motion.div>

                    <div className="approach-v3-grid">
                        {[
                            { title: "Empirical Research", desc: "Complete extraction of your industry constraints, API protocols, and legacy hurdles.", icon: <PiMagnifyingGlassLight />, bgGrad: "linear-gradient(135deg, #020617 0%, #4c1d95 100%)" },
                            { title: "Architectural Blueprinting", desc: "Constructing the theoretical model for zero-downtime, limitless horizontal scalability.", icon: <PiBuildingsLight />, bgGrad: "linear-gradient(135deg, #020617 0%, #164e63 100%)" },
                            { title: "Cognitive Design", desc: "Mapping human-computer interaction patterns to maximize user behavioral compliance.", icon: <PiGlobeLight />, bgGrad: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)" },
                            { title: "Iterative Deployment", desc: "Rolling out isolated nodes iteratively to maintain absolute operational continuity.", icon: <PiCloudArrowUpLight />, bgGrad: "linear-gradient(135deg, #1c1917 0%, #7c2d12 100%)" }
                        ].map((m, i) => (
                            <motion.div key={i} className="app-node-card dark-vibrant-bg" style={{ '--card-bg': m.bgGrad }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant}>
                                <div className="app-node-icon">{m.icon}</div>
                                <h4>{m.title}</h4>
                                <p>{m.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CUSTOM SOFTWARE: 3D CODE TERMINAL */}
            <section className="ind-sect-software">
                <div className="ind-v3-container">
                    <div className="soft-v3-wrap">
                        <div className="soft-v3-visual">
                            <motion.div className="ide-v3-mockup" initial={{ opacity: 0, rotateY: 20 }} whileInView={{ opacity: 1, rotateY: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
                                <div className="ide-v3-head">
                                    <div className="r"></div><div className="y"></div><div className="g"></div>
                                </div>
                                <div className="ide-v3-body">
                                    <span className="kw">async function</span> <span className="fn">deployEcosystem</span>() {'{'} <br />
                                    &nbsp;&nbsp;<span className="kw">const</span> constraints = <span className="kw">await</span> analyzeIndustry();<br />
                                    &nbsp;&nbsp;<span className="kw">if</span> (constraints.complexity &gt; <span className="str">"extreme"</span>) {'{'}<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="kw">return</span> <span className="kw">new</span> <span className="fn">ShapeswayCore</span>(constraints);<br />
                                    &nbsp;&nbsp;{'}'}<br />
                                    &nbsp;&nbsp;<span className="kw">await</span> system.<span className="fn">ignite</span>();<br />
                                    {'}'}
                                </div>
                            </motion.div>
                        </div>
                        <div className="soft-v3-text">
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant}>
                                <div className="ind-v3-tag">KERNEL // CUSTOM BUILD</div>
                                <h2 className="ind-v3-title" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
                                    Writing the Future, <span>Line by Line.</span>
                                </h2>
                                <p className="ind-v3-desc">
                                    No templates. No off-the-shelf limits. We engineer highly specialized, deeply integrated operational software from the ground up, guaranteeing your structural autonomy.
                                </p>

                                <div className="soft-v3-features">
                                    {['SaaS Platform Engineering', 'CRM & API Ecosystems', 'Deep Machine Learning Bots'].map((f, i) => (
                                        <div key={i} className="sf-item">
                                            <PiCodeLight className="sf-icon" />
                                            <h4 style={{ fontSize: '1.25rem', fontWeight: '700' }}>{f}</h4>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. DIGITAL TRANSFORMATION: HOLOGRAPHIC CARDS */}
            <section className="ind-sect-trans">
                <div className="ind-v3-container">
                    <motion.div style={{ textAlign: 'center' }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant}>
                        <div className="ind-v3-tag">METAMORPHOSIS // AUTOMATION</div>
                        <h2 className="ind-v3-title">Intelligent <span>Workflow.</span></h2>
                    </motion.div>

                    <div className="trans-v3-grid">
                        {[
                            { title: "Synthetic Automation", desc: "Removing human error by hardwiring logic into redundant tasks, saving millions in operational latency.", icon: <PiGearLight />, bgGrad: "linear-gradient(135deg, #0f172a 0%, #064e3b 100%)" },
                            { title: "Predictive Analytics", desc: "We turn raw data exhausts into crystal clear financial forecasting interfaces.", icon: <PiChartLineUpLight />, bgGrad: "linear-gradient(135deg, #1c1917 0%, #831843 100%)" },
                            { title: "Elastic Cloud Shift", desc: "Seamless migration of localized risk into hyper-secure, globally distributed cloud nodes.", icon: <PiCloudArrowUpLight />, bgGrad: "linear-gradient(135deg, #020617 0%, #1e3a8a 100%)" }
                        ].map((t, i) => (
                            <motion.div key={i} className="trans-v3-card dark-vibrant-bg" style={{ '--card-bg': t.bgGrad }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant}>
                                <div className="t-icon">{t.icon}</div>
                                <h3>{t.title}</h3>
                                <p>{t.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. TECH STACK: MARQUEE COMPONENT */}
            <section className="ind-sect-stack">
                <div className="ind-v3-container">
                    <div className="ind-v3-tag" style={{ background: 'rgba(255,255,255,0.05)', color: '#fff', borderColor: 'rgba(255,255,255,0.1)' }}>INFRASTRUCTURE // STACK</div>
                    <h2 className="ind-v3-title" style={{ color: '#fff' }}>The Arsenal of <br /><span>Modern Computation.</span></h2>
                </div>

                {/* Animated Marquee Strip */}
                <div className="stack-v3-marquee" style={{ overflowX: 'auto' }}>
                    {[
                        { name: "FRONTEND DEPLOYMENT", tags: ["React 19", "Next.js 14", "Framer Motion", "Three.js GPU", "TailwindCSS"], bgGrad: "linear-gradient(135deg, #020617 0%, #1e3a8a 100%)" },
                        { name: "BACKEND & LOGIC", tags: ["Node.js V20", "Python 3.12", "Go Microservices", "GraphQL", "REST APIs"], bgGrad: "linear-gradient(135deg, #1e1b4b 0%, #4c1d95 100%)" },
                        { name: "DATA PERSISTENCE", tags: ["PostgreSQL", "MongoDB Atlas", "Redis Clusters", "Elasticsearch"], bgGrad: "linear-gradient(135deg, #0f172a 0%, #064e3b 100%)" },
                        { name: "CLOUD PIPELINES", tags: ["AWS ECS", "Docker Kubernetes", "Azure DevOps", "Vercel Edge"], bgGrad: "linear-gradient(135deg, #1c1917 0%, #7c2d12 100%)" }
                    ].map((s, i) => (
                        <div key={i} className="stack-v3-cat dark-vibrant-bg" style={{ '--card-bg': s.bgGrad }}>
                            <h4>{s.name}</h4>
                            <div className="stack-tags">
                                {s.tags.map(tag => <span key={tag} className="stack-tag dark-vibrant-tag">{tag}</span>)}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 8. PARTNERSHIP: TRUST RINGS */}
            <section className="ind-sect-partner">
                <div className="ind-v3-container">
                    <motion.div style={{ textAlign: 'center' }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant}>
                        <div className="ind-v3-tag">ALLIANCE // POST-LAUNCH</div>
                        <h2 className="ind-v3-title">Sustained <span>Elevation.</span></h2>
                        <p className="ind-v3-desc" style={{ margin: '0 auto' }}>Deploying code is not the end. It is the initialization of a relentless partnership dedicated to system superiority.</p>
                    </motion.div>

                    <div className="partner-v3-grid">
                        {[
                            { title: "24/7 Sentient Monitoring", desc: "Automated threat detection and absolute uptime enforcement.", icon: <PiShieldCheckLight />, bgGrad: "linear-gradient(135deg, #171717 0%, #4c1d95 100%)" },
                            { title: "Infinite Scalability", desc: "Elastic bandwidth expanding preemptively as transaction volumes spike.", icon: <PiInfinityLight />, bgGrad: "linear-gradient(135deg, #020617 0%, #164e63 100%)" },
                            { title: "Elite Consultation", desc: "Direct access to our senior architects for perpetual roadmap alignment.", icon: <PiGearLight />, bgGrad: "linear-gradient(135deg, #0f172a 0%, #312e81 100%)" }
                        ].map((p, i) => (
                            <motion.div key={i} className="partner-v3-card dark-vibrant-bg r-glow" style={{ '--card-bg': p.bgGrad }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant}>
                                <div className="partner-v3-circle">
                                    <i className="r-icon">{p.icon}</i>
                                </div>
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. MASTER CTA BLOCK */}
            <section className="ind-sect-cta">
                <div className="ind-v3-container">
                    <motion.div className="cta-v3-master dark-vibrant-bg" style={{ '--card-bg': 'linear-gradient(135deg, #020617 0%, #4c1d95 100%)' }} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                        <h2>Execute the <span>Protocol.</span></h2>
                        <Link to="/contact" className="btn-mag-v3">
                            Initiate System Build <PiArrowRightBold />
                        </Link>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default Industries;
