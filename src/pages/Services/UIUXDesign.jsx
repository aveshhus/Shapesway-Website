import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    PiPaletteBold, PiUsersBold, PiGraphBold, PiRocketLaunchBold,
    PiDeviceMobileBold, PiBrowsersBold, PiLayoutBold, PiTrendUpBold,
    PiMagnifyingGlassBold, PiPencilCircleBold, PiTestTubeBold, PiArrowRightBold,
    PiPlusBold, PiMinusBold, PiFigmaLogoBold, PiGlobeBold, PiAppStoreLogoBold,
    PiChartLineBold, PiHeartbeatBold, PiShoppingCartBold, PiPackageBold
} from 'react-icons/pi';
import { SiFigma, SiAdobexd, SiSketch, SiInvision, SiMiro, SiFramer, SiAdobeillustrator, SiAdobephotoshop, SiNotion } from 'react-icons/si';
import BespokeCTA from '../../components/common/BespokeCTA';
import MacbookScrollFeature from '../../components/MacbookScrollFeature';
import './UIUXDesign.css';

const MagneticButton = ({ children, className, style, to }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 150, damping: 15 });
    const springY = useSpring(y, { stiffness: 150, damping: 15 });

    const handleMouseMove = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        x.set((clientX - centerX) * 0.35);
        y.set((clientY - centerY) * 0.35);
    };

    const handleMouseLeave = () => {
        x.set(0); y.set(0);
    };

    return (
        <motion.div
            style={{ x: springX, y: springY, display: 'inline-block' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <Link to={to || "/contact"} className={className} style={{
                ...style,
                padding: '16px 32px',
                borderRadius: '50px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                fontWeight: '600',
                transition: '0.3s'
            }}>
                {children}
            </Link>
        </motion.div>
    );
};

const UIUXDesign = () => {
    const [activeFaq, setActiveFaq] = useState(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleGlobalMouseMove = (e) => {
        setMousePos({ x: e.clientX, y: e.clientY });
    };

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const faqData = [
        { q: "How long does a UI/UX project take?", a: "A typical project can range from 2 to 12 weeks depending on complexity. A simple MVP might take 3-4 weeks, while a complex enterprise platform takes longer." },
        { q: "What is the cost?", a: "Pricing is value-based and depends on the scope. We offer fixed-price packages for startups and hourly retainers for enterprise long-term support." },
        { q: "Do you provide development as well?", a: "Yes, we are a full-service agency. We can seamlessly transition your designs into high-performance web or mobile applications." },
        { q: "Can you redesign an existing product?", a: "Absolutely. We specialize in UX Audits and modernization for legacy platforms to improve performance and user satisfaction." },
        { q: "Will I own the source design files?", a: "Yes, upon project completion and final payment, you receive full ownership of all source files, typically delivered via organized Figma files." },
        { q: "What is your design process?", a: "We follow a discovery-driven approach: Research & Strategy, Information Architecture, Wireframing, Visual UI Design, Prototyping, and final Handover." },
        { q: "Do you offer post-launch support?", a: "Yes, we provide ongoing design support for feature updates, A/B testing, and continuous UX improvements based on real user data." },
    ];

    return (
        <div className="uiux-page-wrap" onMouseMove={handleGlobalMouseMove}>
            <div className="floating-blob-bg" style={{ top: '10%', left: '-10%' }} />
            <div className="floating-blob-bg" style={{ top: '40%', right: '-10%', animationDelay: '-5s' }} />
            <div className="floating-blob-bg" style={{ bottom: '10%', left: '20%', animationDelay: '-10s' }} />

            {/* Design Tool Elements */}
            <div className="design-ruler-h">
                {[...Array(20)].map((_, i) => <span key={i}>{i * 100}</span>)}
            </div>

            <motion.div
                className="designer-cursor"
                style={{
                    left: mousePos.x,
                    top: mousePos.y,
                    transform: 'translate(-5px, -5px)',
                    position: 'fixed'
                }}
            >
                <div className="designer-cursor-label">Shapesway Designer</div>
            </motion.div>

            <motion.div
                className="comment-bubble"
                style={{ top: '150px', right: '5%' }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
            >
                "Prioritizing accessibility and visual hierarchy in every component."
            </motion.div>

            <motion.div
                className="comment-bubble"
                style={{ top: '800px', left: '2%' }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
            >
                "Implementing atomic design principles for enterprise-grade scalability."
            </motion.div>

            {/* Landing Hero Section */}
            <section className="uiux-hero">
                <div className="container">
                    <motion.div
                        className="uiux-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="uiux-hero-tag">PREMIUM DESIGN AGENCY</span>
                        <h1 className="uiux-hero-title">
                            Designing Digital <br />
                            <span className="gradient-text">Experiences That Drive Growth.</span>
                        </h1>
                        <p className="uiux-hero-desc">
                            We create intuitive, scalable, and conversion-focused digital experiences for web and mobile platforms. Human-centered design meets business logic.
                        </p>
                        <div className="hero-btns">
                            <MagneticButton to="/contact" className="btn-primary" style={{ background: '#2563eb', color: '#fff' }}>
                                Get a Free Consultation <PiArrowRightBold />
                            </MagneticButton>
                            <MagneticButton to="/our-work" className="btn-secondary" style={{ border: '1px solid rgba(0,0,0,0.1)', color: '#111' }}>
                                View Our Work
                            </MagneticButton>
                        </div>
                    </motion.div>
                </div>

                {/* Vibrant Bottom Gradients - Matching MacbookScroll Top */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-orange-500/40 via-transparent to-transparent dark:from-orange-500/50 pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-tl from-pink-500/35 via-transparent to-transparent dark:from-pink-500/45 pointer-events-none" />
            </section>

            {/* --- 2. WHY UI/UX MATTERS - REDESIGNED WITH MACBOOK SCROLL --- */}
            <MacbookScrollFeature />

            {/* Design Methodology Showcase */}
            <section className="uiux-services-section relative">
                {/* Vibrant Top Gradients - Matching MacbookScroll Bottom */}
                <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-blue-500/40 via-transparent to-transparent dark:from-blue-500/50 pointer-events-none" />
                <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-br from-purple-500/35 via-transparent to-transparent dark:from-purple-500/45 pointer-events-none" />

                <div className="container">
                    <div className="section-title-wrap">
                        <span className="section-label">Our Expertise</span>
                        <h2 className="section-title">End-to-End Design.</h2>
                    </div>

                    <div className="services-bento">
                        <div className="service-bento-card bento-1 gradient-card-blue">
                            <div className="card-gradient-overlay" />
                            <div className="spec-overlay">radius: 30px / bg: rgba(255, 255, 255, 0.7) / blur: 10px</div>
                            <h3>UX Research</h3>
                            <ul className="service-list">
                                <li><PiUsersBold /> User Personas & Segmentation</li>
                                <li><PiGraphBold /> Comprehensive Journey Mapping</li>
                                <li><PiMagnifyingGlassBold /> Competitive Market Analysis</li>
                                <li><PiTestTubeBold /> Remote & Live Usability Testing</li>
                            </ul>
                        </div>
                        <div className="service-bento-card bento-2 gradient-card-purple">
                            <div className="card-gradient-overlay" />
                            <div className="spec-overlay">flex: column / gap: 24px</div>
                            <h3>UI Design</h3>
                            <ul className="service-list">
                                <li><PiLayoutBold /> Wireframing</li>
                                <li><PiPaletteBold /> Design Systems</li>
                                <li><PiPencilCircleBold /> High-Fidelity Mockups</li>
                            </ul>
                        </div>
                        <div className="service-bento-card bento-3 gradient-card-orange">
                            <div className="card-gradient-overlay" />
                            <div className="spec-overlay">grid-column: span 5</div>
                            <h3>Product Design</h3>
                            <ul className="service-list">
                                <li><PiBrowsersBold /> SaaS Platforms</li>
                                <li><PiDeviceMobileBold /> Mobile Apps</li>
                                <li><PiLayoutBold /> Enterprise Dashboards</li>
                            </ul>
                        </div>
                        <div className="service-bento-card bento-4 gradient-card-pink">
                            <div className="card-gradient-overlay" />
                            <div className="spec-overlay">shadow: 0 10px 40px rgba(0,0,0,0.02)</div>
                            <h3>UX Optimization</h3>
                            <ul className="service-list">
                                <li><PiMagnifyingGlassBold /> Full UX Audits</li>
                                <li><PiTrendUpBold /> Conversion Optimization</li>
                                <li><PiTestTubeBold /> A/B Testing & Analysis</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Vibrant Bottom Gradients - Matching Top Style but New Colors */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-emerald-500/40 via-transparent to-transparent dark:from-emerald-500/50 pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-tl from-teal-500/35 via-transparent to-transparent dark:from-teal-500/45 pointer-events-none" />
            </section>

            {/* Iterative Design Workflow */}
            <section className="uiux-process-section relative">
                {/* Vibrant Top Gradients - Process Section */}
                <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-emerald-500/40 via-transparent to-transparent dark:from-emerald-500/50 pointer-events-none" />
                <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-bl from-teal-500/35 via-transparent to-transparent dark:from-teal-500/45 pointer-events-none" />
                <div className="container">
                    <div className="section-title-wrap" style={{ textAlign: 'center' }}>
                        <span className="section-label">How We Work</span>
                        <h2 className="section-title">Built for Precision.</h2>
                    </div>

                    <div className="process-strip-container">
                        {[
                            {
                                num: "01",
                                title: "Discover",
                                desc: "We start by diving deep into your goals, understanding user needs, and mapping out the core problems to solve.",
                                icon: <PiMagnifyingGlassBold />,
                                gradient: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)", /* Blue to Purple */
                                color: "#3b82f6"
                            },
                            {
                                num: "02",
                                title: "Define",
                                desc: "Structuring the information architecture and plotting user flows to ensure a logical, intuitive experience.",
                                icon: <PiGraphBold />,
                                gradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)", /* Cyan to Blue */
                                color: "#06b6d4"
                            },
                            {
                                num: "03",
                                title: "Design",
                                desc: "Translating wireframes into stunning, high-fidelity interfaces with interactive prototypes for real-feel testing.",
                                icon: <PiPaletteBold />,
                                gradient: "linear-gradient(135deg, #d946ef 0%, #ec4899 100%)", /* Fuchsia to Pink */
                                color: "#d946ef"
                            },
                            {
                                num: "04",
                                title: "Test",
                                desc: "Rigorous usability testing with real users to identify friction points and validate design decisions.",
                                icon: <PiTestTubeBold />,
                                gradient: "linear-gradient(135deg, #f97316 0%, #f43f5e 100%)", /* Orange to Red */
                                color: "#f97316"
                            },
                            {
                                num: "05",
                                title: "Deliver",
                                desc: "Providing a complete design system and pixel-perfect assets ready for development handoff.",
                                icon: <PiRocketLaunchBold />,
                                gradient: "linear-gradient(135deg, #10b981 0%, #14b8a6 100%)", /* Emerald to Teal */
                                color: "#10b981"
                            }
                        ].map((step, i) => (
                            <div className="process-strip" key={i} style={{ '--accent-color': step.color }}>
                                <div className="strip-gradient" style={{ background: step.gradient }} />
                                <div className="strip-content">
                                    <div className="strip-header">
                                        <span className="strip-num">{step.num}</span>
                                        <span className="strip-icon-wrapper">{step.icon}</span>
                                    </div>
                                    <div className="strip-text">
                                        <h3>{step.title}</h3>
                                        <p>{step.desc}</p>
                                    </div>
                                    <div className="strip-arrow" style={{ color: step.color }}><PiArrowRightBold /></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* System Foundations & Atomics */}
            <section className="uiux-atomics-section" style={{ padding: '100px 0', borderTop: '1px solid rgba(0,0,0,0.03)', background: '#f8fafc' }}>
                <div className="container">
                    <div className="section-title-wrap">
                        <span className="section-label">Foundation</span>
                        <h2 className="section-title">Scalable Design Systems.</h2>
                        <p style={{ maxWidth: '600px', margin: '20px 0 0', color: 'rgba(0,0,0,0.6)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                            We don't just design pages; we build living design systems. This ensures consistency, speed, and scalability for your product's future.
                        </p>
                    </div>

                    <div className="design-system-grid">
                        <div className="ds-card" style={{ '--card-accent': '#3b82f6' }}>
                            <div className="ds-icon-box"><span style={{ fontFamily: 'Inter', fontWeight: 800 }}>Aa</span></div>
                            <div className="ds-content">
                                <h3>Typography</h3>
                                <p>Accessible type scale ensuring readability and hierarchy.</p>
                            </div>
                            <div className="ds-visual type-visual">
                                <div className="type-line" style={{ height: '10px', width: '60%' }}></div>
                                <div className="type-line" style={{ height: '6px', width: '40%', opacity: 0.6 }}></div>
                                <div className="type-line" style={{ height: '6px', width: '50%', opacity: 0.6 }}></div>
                            </div>
                        </div>

                        <div className="ds-card" style={{ '--card-accent': '#10b981' }}>
                            <div className="ds-icon-box"><PiPaletteBold /></div>
                            <div className="ds-content">
                                <h3>Color Palette</h3>
                                <p>Semantic tokens for consistent and accessible theming.</p>
                            </div>
                            <div className="ds-visual color-visual">
                                <div className="color-circle main"></div>
                                <div className="color-circle sub"></div>
                            </div>
                        </div>

                        <div className="ds-card" style={{ '--card-accent': '#8b5cf6' }}>
                            <div className="ds-icon-box"><PiLayoutBold /></div>
                            <div className="ds-content">
                                <h3>Components</h3>
                                <p>Modular, reusable elements for rapid development.</p>
                            </div>
                            <div className="ds-visual comp-visual">
                                <div className="comp-mock-btn"></div>
                                <div className="comp-mock-input"></div>
                            </div>
                        </div>

                        <div className="ds-card" style={{ '--card-accent': '#f97316' }}>
                            <div className="ds-icon-box"><PiFigmaLogoBold /></div>
                            <div className="ds-content">
                                <h3>Assets</h3>
                                <p>Custom icon sets defining your unique visual language.</p>
                            </div>
                            <div className="ds-visual icon-visual">
                                <PiGlobeBold /> <PiRocketLaunchBold />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Highlights */}
            <section className="uiux-portfolio-section">
                <div className="container">
                    <div className="section-title-wrap">
                        <span className="section-label">Case Studies</span>
                        <h2 className="section-title">Real Results. Real Impact.</h2>
                        <p style={{ maxWidth: '600px', margin: '20px auto 0', color: 'rgba(0,0,0,0.6)', fontSize: '1.1rem', lineHeight: '1.6', textAlign: 'center' }}>
                            See how we've transformed digital experiences across industries
                        </p>
                    </div>

                    <div className="case-studies-grid">
                        <motion.div
                            className="case-study-card"
                            style={{ '--case-accent': '#3b82f6' }}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="case-category">
                                <PiChartLineBold />
                                <span>Fintech</span>
                            </div>
                            <div className="case-image-wrapper">
                                <img src="/src/assets/uiux_portfolio_fintech.png" alt="Fintech Dashboard" />
                                <div className="case-overlay"></div>
                            </div>
                            <div className="case-content">
                                <h3>Digital Banking Dashboard</h3>
                                <p>Reimagining complex financial data visualization for modern users</p>
                                <div className="case-metrics">
                                    <div className="metric">
                                        <span className="metric-value">+38%</span>
                                        <span className="metric-label">User Retention</span>
                                    </div>
                                    <div className="metric">
                                        <span className="metric-value">2x</span>
                                        <span className="metric-label">Conversions</span>
                                    </div>
                                    <div className="metric">
                                        <span className="metric-value">-30%</span>
                                        <span className="metric-label">Onboarding Time</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="case-study-card"
                            style={{ '--case-accent': '#10b981' }}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="case-category">
                                <PiHeartbeatBold />
                                <span>Healthcare</span>
                            </div>
                            <div className="case-image-wrapper">
                                <img src="/src/assets/uiux_portfolio_healthcare.png" alt="Healthcare App" />
                                <div className="case-overlay"></div>
                            </div>
                            <div className="case-content">
                                <h3>Patient Care Mobile App</h3>
                                <p>Streamlining doctor-patient communication with accessibility-first design</p>
                                <div className="case-metrics">
                                    <div className="metric">
                                        <span className="metric-value">85%</span>
                                        <span className="metric-label">CSAT Score</span>
                                    </div>
                                    <div className="metric">
                                        <span className="metric-value">50k+</span>
                                        <span className="metric-label">Active Users</span>
                                    </div>
                                    <div className="metric">
                                        <span className="metric-value">#1</span>
                                        <span className="metric-label">Health Category</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Industry Expertise */}
            <section className="industries-section">
                <div className="container">
                    <div className="section-title-wrap" style={{ textAlign: 'center' }}>
                        <span className="section-label">Industries</span>
                        <h2 className="section-title">Trusted Across Sectors.</h2>
                        <p style={{ maxWidth: '600px', margin: '20px auto 0', color: 'rgba(0,0,0,0.6)', fontSize: '1.05rem', lineHeight: '1.6', textAlign: 'center' }}>
                            From startups to enterprises, we've delivered exceptional UI/UX across diverse industries
                        </p>
                    </div>

                    <div className="industries-grid">
                        <motion.div
                            className="industry-card"
                            style={{ '--industry-color': '#3b82f6' }}
                            whileHover={{ y: -8 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="industry-icon">
                                <PiChartLineBold />
                            </div>
                            <h3>Fintech</h3>
                        </motion.div>

                        <motion.div
                            className="industry-card"
                            style={{ '--industry-color': '#10b981' }}
                            whileHover={{ y: -8 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="industry-icon">
                                <PiHeartbeatBold />
                            </div>
                            <h3>Healthcare</h3>
                        </motion.div>

                        <motion.div
                            className="industry-card"
                            style={{ '--industry-color': '#8b5cf6' }}
                            whileHover={{ y: -8 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="industry-icon">
                                <PiShoppingCartBold />
                            </div>
                            <h3>E-Commerce</h3>
                        </motion.div>

                        <motion.div
                            className="industry-card"
                            style={{ '--industry-color': '#f59e0b' }}
                            whileHover={{ y: -8 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="industry-icon">
                                <PiRocketLaunchBold />
                            </div>
                            <h3>SaaS</h3>
                        </motion.div>

                        <motion.div
                            className="industry-card"
                            style={{ '--industry-color': '#ec4899' }}
                            whileHover={{ y: -8 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="industry-icon">
                                <PiUsersBold />
                            </div>
                            <h3>EdTech</h3>
                        </motion.div>

                        <motion.div
                            className="industry-card"
                            style={{ '--industry-color': '#06b6d4' }}
                            whileHover={{ y: -8 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="industry-icon">
                                <PiTrendUpBold />
                            </div>
                            <h3>Logistics</h3>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- 7. TOOLS --- */}
            <section className="uiux-tools-section">
                <div className="container">
                    <span className="section-label">Our Stack</span>
                    <h2 className="section-title">Industry Standard Tools.</h2>
                    <div className="tools-flex">
                        <div className="tool-logo"><SiFigma /><span>Figma</span></div>
                        <div className="tool-logo"><SiAdobexd /><span>Adobe XD</span></div>
                        <div className="tool-logo"><SiSketch /><span>Sketch</span></div>
                        <div className="tool-logo"><SiFramer /><span>Framer</span></div>
                        <div className="tool-logo"><SiInvision /><span>InVision</span></div>
                        <div className="tool-logo"><SiMiro /><span>Miro</span></div>
                        <div className="tool-logo"><SiAdobeillustrator /><span>Illustrator</span></div>
                        <div className="tool-logo"><SiAdobephotoshop /><span>Photoshop</span></div>
                        <div className="tool-logo"><SiNotion /><span>Notion</span></div>
                    </div>
                </div>
            </section>

            {/* Common Internal Inquiries */}
            <section className="faq-section">
                <div className="container">
                    <div className="faq-layout-grid">
                        <div className="faq-creative-side">
                            <span className="section-label">Support</span>
                            <h2 className="section-title">Common Questions.</h2>
                            <p className="faq-intro-text">
                                Can't find the answer you're looking for? Reach out to our design experts for a personalized consultation.
                            </p>

                            <div className="faq-visual-card">
                                <div className="visual-card-inner">
                                    <div className="visual-icon-row">
                                        <div className="mini-icon blue"><PiPencilCircleBold /></div>
                                        <div className="mini-icon purple"><PiUsersBold /></div>
                                        <div className="mini-icon orange"><PiRocketLaunchBold /></div>
                                    </div>
                                    <h3>Need more help?</h3>
                                    <p>Our team is available 24/7 to discuss your project requirements.</p>
                                    <Link to="/contact" className="faq-contact-btn">
                                        Contact Us <PiArrowRightBold />
                                    </Link>
                                </div>
                                <div className="visual-bg-blur" />
                            </div>

                            <div className="decorative-dots">
                                {[...Array(12)].map((_, i) => <div key={i} className="dot" />)}
                            </div>
                        </div>

                        <div className="faq-grid-side">
                            <div className="faq-list">
                                {faqData.map((faq, i) => (
                                    <div className={`faq-item ${activeFaq === i ? 'active' : ''}`} key={i}>
                                        <div className="faq-question" onClick={() => toggleFaq(i)}>
                                            <h4>{faq.q}</h4>
                                            <div className="faq-toggle-icon">
                                                {activeFaq === i ? <PiMinusBold /> : <PiPlusBold />}
                                            </div>
                                        </div>
                                        <AnimatePresence>
                                            {activeFaq === i && (
                                                <motion.div
                                                    className="faq-answer"
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                                >
                                                    <div className="answer-content">
                                                        {faq.a}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 10. FINAL CTA --- */}
            <BespokeCTA
                tag="GET STARTED"
                title={["Ready to Transform", "Your Digital Experience?"]}
                desc="Let’s build something users love. Schedule a free strategy call today."
                buttonText="Schedule a Strategy Call"
                visuals={
                    <>
                        <div className="bespoke-card" style={{ width: '300px', left: '0%', bottom: '5%', zIndex: 3, boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}>
                            <div className="bespoke-card-header">
                                <div className="header-spinner"></div>
                                <span>Prototype Validator</span>
                                <div className="bespoke-card-meta">FIGMA Sync</div>
                            </div>
                            <div className="bespoke-card-body">
                                <p className="greeting">User Test #402</p>
                                <div style={{ display: 'flex', gap: '4px', height: '20px', marginBottom: '10px' }}>
                                    {[1, 2, 3, 4, 5, 6].map(i => (
                                        <div key={i} style={{ flex: 1, background: i < 5 ? '#2563eb' : '#1a1a1a', borderRadius: '1px' }}></div>
                                    ))}
                                </div>
                                <p style={{ fontSize: '0.75rem', marginBottom: 0 }}>Success Rate: 98.2% on main flows.</p>
                            </div>
                        </div>
                    </>
                }
            />
        </div>
    );
};

export default UIUXDesign;
