import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    PiRocketBold, PiStrategyBold, PiChartLineBold, PiGearBold,
    PiLightningBold, PiGlobeBold, PiShieldCheckBold, PiGraphBold,
    PiMagnifyingGlassBold, PiCodeBold, PiTargetBold, PiBrainBold,
    PiArrowRightBold, PiLinkedinLogoBold, PiChatsBold, PiPulseBold,
    PiEnvelopeBold, PiDatabaseBold, PiFireBold, PiEyeBold,
    PiVideoCameraBold, PiArticleBold, PiMegaphoneBold,
    PiUsersThreeBold, PiLockBold, PiFingerprintBold, PiCertificateBold,
    PiTreeStructureBold, PiPathBold, PiFunnelBold
} from 'react-icons/pi';
import BespokeCTA from '../../components/common/BespokeCTA';
import './DigitalMarketing.css';

const DigitalMarketing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Digital Marketing & Growth Strategy | Shapesway Technologies";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Drive measurable growth with Shapesway's full-stack digital marketing. SEO dominance, performance ads, content strategy, and marketing automation for IT enterprises.");
        }
    }, []);

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 30 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
    };

    // Section 1: Framework
    const frameworkCards = [
        { title: "Integrated Strategy", icon: <PiStrategyBold />, desc: "Aligning your digital presence with your overarching technical roadmap.", accent: "#00d4ff" },
        { title: "Agile Marketing", icon: <PiRocketBold />, desc: "Utilizing iterative sprints to pivot strategies based on real-time market shifts.", accent: "#a3e635" },
        { title: "Scalability by Design", icon: <PiChartLineBold />, desc: "Ensuring your marketing assets grow as seamlessly as your server capacity.", accent: "#f472b6" }
    ];

    // Section 2: SEO
    const seoCards = [
        { title: "Core Web Vitals Mastery", icon: <PiPulseBold />, desc: "Optimizing LCP and CLS metrics for peak search performance rankings.", bg: "linear-gradient(135deg, #0c4a6e, #0ea5e9)", shadow: "rgba(14, 165, 233, 0.4)" },
        { title: "Schema & Structured Data", icon: <PiCodeBold />, desc: "Implementing advanced JSON-LD scripts so search engines understand your IT services.", bg: "linear-gradient(135deg, #312e81, #818cf8)", shadow: "rgba(129, 140, 248, 0.4)" },
        { title: "Infrastructure Audits", icon: <PiMagnifyingGlassBold />, desc: "Constant monitoring of crawl errors, 404s, and server issues hindering visibility.", bg: "linear-gradient(135deg, #134e4a, #14b8a6)", shadow: "rgba(20, 184, 166, 0.4)" }
    ];

    // Section 3: Performance
    const perfCards = [
        { title: "B2B LinkedIn Ecosystems", icon: <PiLinkedinLogoBold />, desc: "Precision-targeting CTOs and IT Managers using account-based marketing techniques.", accent: "#0a66c2", bg: "linear-gradient(135deg, #0a66c2, #0284c7)" },
        { title: "Algorithmic Ad Management", icon: <PiBrainBold />, desc: "Machine learning-optimized bidding strategies for lowest Cost-Per-Acquisition.", accent: "#f59e0b", bg: "linear-gradient(135deg, #d97706, #f59e0b)" },
        { title: "Landing Page Engineering", icon: <PiLightningBold />, desc: "High-speed, high-conversion entry points mirroring your site's sophistication.", accent: "#ef4444", bg: "linear-gradient(135deg, #dc2626, #ef4444)" }
    ];

    // Section 4: Content
    const contentCards = [
        { title: "The Content Laboratory", icon: <PiArticleBold />, desc: "Developing whitepapers, technical blogs, and e-books that solve real-world pain points.", bg: "linear-gradient(135deg, #4c1d95, #7c3aed)", icon_color: "#e9d5ff" },
        { title: "Video Intelligence", icon: <PiVideoCameraBold />, desc: "High-fidelity explainers and executive interviews that humanize your technical expertise.", bg: "linear-gradient(135deg, #881337, #e11d48)", icon_color: "#ffe4e6" },
        { title: "Omnichannel Distribution", icon: <PiMegaphoneBold />, desc: "Synchronized messaging across blog, newsletters, and social platforms for unified brand voice.", bg: "linear-gradient(135deg, #064e3b, #059669)", icon_color: "#d1fae5" }
    ];

    // Section 5: Social
    const socialCards = [
        { title: "Thought Leadership Incubation", icon: <PiUsersThreeBold />, desc: "Curating a LinkedIn presence for your C-suite that positions them as industry visionaries.", accent: "#00d4ff" },
        { title: "Community Engagement", icon: <PiChatsBold />, desc: "Monitoring niche forums and industry hubs to ensure your brand is part of every conversation.", accent: "#a3e635" },
        { title: "Brand Sentiment Analysis", icon: <PiEyeBold />, desc: "Using AI tools to track brand perception in real-time and adjusting messaging accordingly.", accent: "#f472b6" }
    ];

    // Section 6: Automation
    const autoCards = [
        { title: "Lifecycle Email Orchestration", icon: <PiEnvelopeBold />, desc: "Personalized drip campaigns that educate prospects based on their IT buying cycle stage.", bg: "linear-gradient(135deg, #0c4a6e, #06b6d4)", shadow: "rgba(6, 182, 212, 0.3)" },
        { title: "CRM Data Synchronization", icon: <PiDatabaseBold />, desc: "Seamlessly passing marketing intelligence into HubSpot, Salesforce for a 360° user view.", bg: "linear-gradient(135deg, #4c1d95, #8b5cf6)", shadow: "rgba(139, 92, 246, 0.3)" },
        { title: "Lead Scoring Engines", icon: <PiFireBold />, desc: "Automatically identifying hot prospects based on engagement with your technical documentation.", bg: "linear-gradient(135deg, #78350f, #f59e0b)", shadow: "rgba(245, 158, 11, 0.3)" }
    ];

    // Section 7: Analytics
    const analyticsCards = [
        { title: "Custom Visualization Suites", icon: <PiGraphBold />, desc: "Interactive dashboards translating raw data into executive summary visuals.", accent: "#a3e635" },
        { title: "Conversion Path Mapping", icon: <PiPathBold />, desc: "Analyzing the exact journey users take from first search to final inquiry.", accent: "#00d4ff" },
        { title: "Attribution Modeling", icon: <PiFunnelBold />, desc: "Understanding the value of every touchpoint for optimal budget allocation.", accent: "#f472b6" }
    ];

    // Section 8: Security
    const securityCards = [
        { title: "Privacy-First Protocols", icon: <PiFingerprintBold />, desc: "Cookie-less tracking and first-party data strategies ahead of evolving global regulations." },
        { title: "GDPR/CCPA Governance", icon: <PiCertificateBold />, desc: "Every pixel and script on your site adheres to the strictest data protection standards." },
        { title: "Zero-Trust Marketing", icon: <PiLockBold />, desc: "Building audience relationships based on transparency, data sovereignty, and ethical communication." }
    ];

    return (
        <div className="dm-page">
            {/* Background */}
            <div className="dm-bg" />
            <div className="dm-grid-lines" />

            {/* --- Hero --- */}
            <section className="dm-hero">
                <div className="dm-container">
                    <motion.div className="dm-hero-content"
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="dm-hero-tag">
                            <motion.span animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} style={{ display: 'inline-block' }}>
                                <PiTargetBold />
                            </motion.span>
                            Growth Architecture
                        </span>
                        <h1 className="dm-hero-title">
                            Digital <span>Dominance.</span>
                        </h1>
                        <p className="dm-hero-desc">
                            We don't treat marketing as a layer on top of your business — we engineer it as a core component of your IT infrastructure. This is your Growth Architecture.
                        </p>
                        <div className="dm-hero-btns">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                                <Link to="/contact" className="dm-btn-primary">
                                    Launch Strategy <PiArrowRightBold />
                                </Link>
                            </motion.div>
                            <Link to="/contact" className="dm-btn-secondary">
                                Free Audit <PiGraphBold />
                            </Link>
                        </div>
                        <div className="dm-hero-stats">
                            <motion.div className="dm-stat" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                                <h4>340%</h4><p>Average ROI</p>
                            </motion.div>
                            <motion.div className="dm-stat" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>
                                <h4>10M+</h4><p>Leads Generated</p>
                            </motion.div>
                            <motion.div className="dm-stat" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
                                <h4>99.8%</h4><p>Client Retention</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- Section 1: Digital Evolution Framework --- */}
            <section className="dm-section">
                <div className="dm-container">
                    <div className="dm-section-head">
                        <span className="dm-tag">01 // Foundation</span>
                        <h2>The Digital Evolution <span>Framework</span></h2>
                        <p className="dm-philosophy">Most agencies treat marketing as a layer on top of a business; we treat it as a core component of your IT infrastructure.</p>
                    </div>
                    <motion.div className="dm-framework-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                        {frameworkCards.map((card, idx) => (
                            <motion.div key={idx} className="dm-fw-card" variants={itemVariants} style={{ '--card-accent': card.accent }}>
                                <span className="dm-card-icon">{card.icon}</span>
                                <h3>{card.title}</h3>
                                <p>{card.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* --- Section 2: SEO & Technical Dominance --- */}
            <section className="dm-section dm-section-alt">
                <div className="dm-container">
                    <div className="dm-section-head">
                        <span className="dm-tag">02 // Search Engine</span>
                        <h2>Structural SEO & <span>Technical Dominance</span></h2>
                        <p className="dm-philosophy">In the IT world, "good enough" isn't enough. We focus on the Technical Integrity of your search presence.</p>
                    </div>
                    <motion.div className="dm-seo-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                        {seoCards.map((card, idx) => (
                            <motion.div key={idx} className="dm-seo-card" variants={itemVariants}
                                style={{ background: card.bg, boxShadow: `0 20px 50px -15px ${card.shadow}` }}>
                                <span className="dm-card-icon">{card.icon}</span>
                                <h3>{card.title}</h3>
                                <p>{card.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* --- Section 3: High-Intent Performance Marketing --- */}
            <section className="dm-section">
                <div className="dm-container">
                    <div className="dm-section-head">
                        <span className="dm-tag">03 // Performance</span>
                        <h2>High-Intent <span>Performance Marketing</span></h2>
                        <p className="dm-philosophy">We move beyond basic demographics to Behavioral Targeting and intent-based acquisition.</p>
                    </div>
                    <motion.div className="dm-perf-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                        {perfCards.map((card, idx) => (
                            <motion.div key={idx} className="dm-perf-card" variants={itemVariants} style={{ '--card-accent': card.accent }}>
                                <div className="dm-card-icon" style={{ background: card.bg }}>{card.icon}</div>
                                <h3>{card.title}</h3>
                                <p>{card.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* --- Section 4: Multi-Channel Content Sovereignty --- */}
            <section className="dm-section dm-section-alt">
                <div className="dm-container">
                    <div className="dm-section-head">
                        <span className="dm-tag">04 // Content</span>
                        <h2>Multi-Channel Content <span>Sovereignty</span></h2>
                        <p className="dm-philosophy">For an IT brand, content must bridge the gap between "Technical Specs" and "Business Value."</p>
                    </div>
                    <div className="dm-content-flow">
                        {contentCards.map((card, idx) => (
                            <motion.div key={idx} className="dm-content-item" {...fadeInUp}
                                style={{ background: card.bg, boxShadow: `0 10px 40px rgba(0,0,0,0.3)` }}>
                                <span className="dm-card-icon" style={{ color: card.icon_color, filter: `drop-shadow(0 0 15px ${card.icon_color})` }}>{card.icon}</span>
                                <div>
                                    <h3>{card.title}</h3>
                                    <p>{card.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Section 5: Social Presence & Digital Diplomacy --- */}
            <section className="dm-section">
                <div className="dm-container">
                    <div className="dm-section-head">
                        <span className="dm-tag">05 // Community</span>
                        <h2>Social Presence & <span>Digital Diplomacy</span></h2>
                        <p className="dm-philosophy">We manage your brand's reputation across the tech landscape, turning followers into Brand Advocates.</p>
                    </div>
                    <motion.div className="dm-social-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                        {socialCards.map((card, idx) => (
                            <motion.div key={idx} className="dm-social-card" variants={itemVariants} style={{ '--card-accent': card.accent }}>
                                <span className="dm-card-icon">{card.icon}</span>
                                <h3>{card.title}</h3>
                                <p>{card.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* --- Section 6: Full-Stack Marketing Automation --- */}
            <section className="dm-section dm-section-alt">
                <div className="dm-container">
                    <div className="dm-section-head">
                        <span className="dm-tag">06 // Automation</span>
                        <h2>Full-Stack Marketing <span>Automation</span></h2>
                        <p className="dm-philosophy">We replace manual repetitive tasks with Intelligent Workflows that nurture leads while you sleep.</p>
                    </div>
                    <motion.div className="dm-auto-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                        {autoCards.map((card, idx) => (
                            <motion.div key={idx} className="dm-auto-card" variants={itemVariants}
                                style={{ background: card.bg, boxShadow: `0 15px 45px -10px ${card.shadow}` }}>
                                <span className="dm-card-icon">{card.icon}</span>
                                <h3>{card.title}</h3>
                                <p>{card.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* --- Section 7: Business Intelligence & Predictive Analytics --- */}
            <section className="dm-section">
                <div className="dm-container">
                    <div className="dm-section-head">
                        <span className="dm-tag">07 // Intelligence</span>
                        <h2>Predictive Analytics & <span>Business Intelligence</span></h2>
                        <p className="dm-philosophy">We don't just report on the past; we Forecast the Future.</p>
                    </div>
                    <motion.div className="dm-analytics-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                        {analyticsCards.map((card, idx) => (
                            <motion.div key={idx} className="dm-analytics-card" variants={itemVariants} style={{ '--card-accent': card.accent }}>
                                <span className="dm-card-number">0{idx + 1}</span>
                                <span className="dm-card-icon">{card.icon}</span>
                                <h3>{card.title}</h3>
                                <p>{card.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* --- Section 8: Security & Privacy Mandate --- */}
            <section className="dm-section dm-section-alt">
                <div className="dm-container">
                    <div className="dm-section-head">
                        <span className="dm-tag">08 // Trust</span>
                        <h2>The Security & <span>Privacy Mandate</span></h2>
                        <p className="dm-philosophy">Your marketing must be as secure as your firewalls. This is your Compliance Advantage.</p>
                    </div>
                    <motion.div className="dm-security-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                        {securityCards.map((card, idx) => (
                            <motion.div key={idx} className="dm-security-card" variants={itemVariants}>
                                <span className="dm-card-icon">{card.icon}</span>
                                <h3>{card.title}</h3>
                                <p>{card.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* --- CTA --- */}
            <BespokeCTA
                tag="INITIATE GROWTH PROTOCOL"
                title={["Market Without", "Limits."]}
                desc="Our growth architects are ready to engineer your enterprise's digital dominance. Access full-stack marketing intelligence today."
                buttonText="Start Your Strategy"
                visuals={
                    <>
                        <div className="bespoke-card" style={{ width: '280px', left: '0%', bottom: '5%', zIndex: 3, boxShadow: '0 40px 100px rgba(0, 212, 255, 0.4)', background: '#0d1117', border: '1px solid #00d4ff' }}>
                            <div className="bespoke-card-header">
                                <motion.div
                                    className="header-spinner"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    style={{ borderColor: '#00d4ff', borderTopColor: 'transparent' }}
                                />
                                <span style={{ color: '#fff' }}>Growth Engine: Active</span>
                            </div>
                            <div className="bespoke-card-body">
                                <p className="greeting" style={{ color: '#00d4ff', fontWeight: 800 }}>OPTIMIZING...</p>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '6px', marginBottom: '15px' }}>
                                    {[...Array(10)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            style={{ height: '8px', background: '#00d4ff', borderRadius: '100px' }}
                                            animate={{ opacity: [0.1, 1, 0.1], scaleY: [1, 1.5, 1] }}
                                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                                        />
                                    ))}
                                </div>
                                <p style={{ fontSize: '0.8rem', color: '#8b949e', lineHeight: 1.4 }}>Multi-channel campaigns deployed. 12 active funnels tracking conversions.</p>
                            </div>
                        </div>
                    </>
                }
            />
        </div>
    );
};

export default DigitalMarketing;
