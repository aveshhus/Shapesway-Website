import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    PiPaletteBold, PiUsersBold, PiGraphBold, PiRocketLaunchBold,
    PiDeviceMobileBold, PiBrowsersBold, PiLayoutBold, PiTrendUpBold,
    PiMagnifyingGlassBold, PiPencilCircleBold, PiTestTubeBold, PiArrowRightBold,
    PiPlusBold, PiMinusBold, PiFigmaLogoBold, PiGlobeBold, PiAppStoreLogoBold
} from 'react-icons/pi';
import { SiFigma, SiAdobexd, SiSketch, SiInvision, SiMiro } from 'react-icons/si';
import BespokeCTA from '../../components/common/BespokeCTA';
import MacbookScrollDemo from '../../components/macbook-scroll-demo';
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
                "Let's try a softer blue for the CTA button."
            </motion.div>

            <motion.div
                className="comment-bubble"
                style={{ top: '800px', left: '2%' }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
            >
                "User testing shows 90% preference for this layout."
            </motion.div>

            {/* --- 1. HERO SECTION --- */}
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
            <MacbookScrollDemo />

            {/* --- 3. OUR SERVICES --- */}
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
            </section>

            {/* --- 4. DESIGN PROCESS --- */}
            <section className="uiux-process-section">
                <div className="container">
                    <div className="section-title-wrap" style={{ textAlign: 'center' }}>
                        <span className="section-label">How We Work</span>
                        <h2 className="section-title">Built for Precision.</h2>
                    </div>

                    <div className="process-timeline">
                        {[
                            { num: "01", title: "Discover", desc: "Stakeholder interviews and user empathy mapping." },
                            { num: "02", title: "Define", desc: "Information architecture and low-fi wireframes." },
                            { num: "03", title: "Design", desc: "Interactive prototypes and high-fidelity UI." },
                            { num: "04", title: "Test", desc: "Validation with real users and design iteration." },
                            { num: "05", title: "Deliver", desc: "Pixel-perfect handoff to development teams." }
                        ].map((step, i) => (
                            <motion.div
                                className="process-step"
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="step-number">{step.num}</div>
                                <h4>{step.title}</h4>
                                <p>{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- ATOMICS / DESIGN SYSTEM --- */}
            <section className="uiux-atomics-section" style={{ padding: '80px 0', borderTop: '1px solid rgba(0,0,0,0.03)' }}>
                <div className="container">
                    <span className="section-label">Foundation</span>
                    <h2 className="section-title" style={{ fontSize: '2.5rem' }}>The Design System.</h2>

                    <div className="color-specimen-row">
                        <div className="color-specimen" style={{ background: '#2563eb' }}>#2563eb</div>
                        <div className="color-specimen" style={{ background: '#1e293b' }}>#1e293b</div>
                        <div className="color-specimen" style={{ background: '#f8fafc', color: '#64748b', border: '1px solid #e2e8f0' }}>#f8fafc</div>
                        <div className="color-specimen" style={{ background: '#ffffff', color: '#64748b', border: '1px solid #e2e8f0' }}>#ffffff</div>
                    </div>

                    <div style={{ marginTop: '50px', display: 'flex', gap: '40px', alignItems: 'center' }}>
                        <div style={{ fontFamily: 'Inter', fontSize: '2rem', fontWeight: '800' }}>Inter / ExtraBold</div>
                        <div style={{ height: '40px', width: '1px', background: 'rgba(0,0,0,0.1)' }}></div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            {[1, 2, 3, 4, 5].map(i => (
                                <div key={i} style={{ width: '40px', height: '40px', borderRadius: '8px', boxShadow: `0 ${i * 5}px ${i * 10}px rgba(0,0,0,0.05)` }}></div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 5. PORTFOLIO --- */}
            <section className="uiux-portfolio-section">
                <div className="container">
                    <div className="section-title-wrap">
                        <span className="section-label">Case Studies</span>
                        <h2 className="section-title">Real Results. Real Impact.</h2>
                    </div>

                    <div className="portfolio-grid">
                        <div className="portfolio-item">
                            <div className="portfolio-img-wrap">
                                <img src="/src/assets/uiux_portfolio_fintech.png" alt="Fintech Dashboard" />
                            </div>
                            <div className="portfolio-info">
                                <h3>Fintech Dashboard Redesign</h3>
                                <p>Reimagining complex data for one of the leading digital banking startups.</p>
                                <div className="portfolio-results">
                                    <div className="res-item">
                                        <span>38%</span>
                                        <span>Retention</span>
                                    </div>
                                    <div className="res-item">
                                        <span>2x</span>
                                        <span>Conversions</span>
                                    </div>
                                    <div className="res-item">
                                        <span>30%</span>
                                        <span>Faster Onboarding</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item">
                            <div className="portfolio-img-wrap">
                                <img src="/src/assets/uiux_portfolio_healthcare.png" alt="Healthcare App" />
                            </div>
                            <div className="portfolio-info">
                                <h3>Healthcare Mobile App</h3>
                                <p>Streamlining patient-doctor communication with user-first accessibility.</p>
                                <div className="portfolio-results">
                                    <div className="res-item">
                                        <span>85%</span>
                                        <span>CSAT Score</span>
                                    </div>
                                    <div className="res-item">
                                        <span>50k+</span>
                                        <span>Active Users</span>
                                    </div>
                                    <div className="res-item">
                                        <span>#1</span>
                                        <span>Health Category</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 6. INDUSTRIES --- */}
            <section className="industries-ticker">
                <div className="ticker-wrap">
                    {["FINTECH", "HEALTHCARE", "E-COMMERCE", "SAAS", "EDTECH", "LOGISTICS", "FINTECH", "HEALTHCARE", "E-COMMERCE", "SAAS", "EDTECH", "LOGISTICS"].map((ind, i) => (
                        <div className="ticker-item" key={i}>{ind}</div>
                    ))}
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
                        <div className="tool-logo"><SiInvision /><span>Invision</span></div>
                        <div className="tool-logo"><SiMiro /><span>Miro</span></div>
                    </div>
                </div>
            </section>

            {/* --- 9. FAQ --- */}
            <section className="faq-section">
                <div className="container">
                    <div className="section-title-wrap" style={{ textAlign: 'center' }}>
                        <span className="section-label">FAQ</span>
                        <h2 className="section-title">Objections Answered.</h2>
                    </div>

                    <div className="faq-grid">
                        {faqData.map((faq, i) => (
                            <div className="faq-item" key={i}>
                                <div className="faq-question" onClick={() => toggleFaq(i)}>
                                    <h4>{faq.q}</h4>
                                    {activeFaq === i ? <PiMinusBold /> : <PiPlusBold />}
                                </div>
                                <AnimatePresence>
                                    {activeFaq === i && (
                                        <motion.div
                                            className="faq-answer"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                        >
                                            {faq.a}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
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
