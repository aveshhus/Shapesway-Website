import React, { useEffect, useRef } from 'react';
import {
    motion, useScroll, useTransform, useSpring,
    useMotionValue, useMotionTemplate
} from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    PiArrowRightBold, PiCodeLight, PiLayoutLight,
    PiDeviceMobileLight, PiRocketLaunchLight, PiShieldCheckLight,
    PiGlobeLight, PiCaretRightBold, PiLightningLight,
    PiInfinityLight, PiMonitorLight, PiCpuLight,
    PiDatabaseLight, PiBracketsCurlyBold
} from 'react-icons/pi';
import {
    SiReact, SiNextdotjs, SiTypescript, SiNodedotjs,
    SiTailwindcss, SiPostgresql, SiVercel, SiHtml5,
    SiCss3, SiJavascript, SiPhp, SiLaravel,
    SiWordpress, SiMysql, SiMongodb
} from 'react-icons/si';
import { TbCircleCheck, TbBrandAws } from 'react-icons/tb';
import { FaArrowRight } from 'react-icons/fa';
import BespokeCTA from '../../components/common/BespokeCTA';
import './WebDevelopment.css';

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
            <Link to={to} className={className} style={style}>
                {children}
            </Link>
        </motion.div>
    );
};

const InteractiveCard = ({ children, className, style, span }) => {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]));
    const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]));

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const spotlightBg = useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(13, 181, 164, 0.1), transparent 40%)`;

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = cardRef.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        x.set(clientX - centerX);
        y.set(clientY - centerY);
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    const handleMouseLeave = () => {
        x.set(0); y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            className={className + " " + (span || "")}
            style={{
                ...style,
                rotateX, rotateY,
                perspective: 1000,
                transformStyle: "preserve-3d"
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
        >
            <motion.div
                className="spotlight-layer"
                style={{ background: spotlightBg }}
            />
            <div className="card-inner-perspective" style={{ transform: "translateZ(30px)" }}>
                {children}
            </div>
        </motion.div>
    );
};

const PulsePath = ({ color }) => {
    return (
        <svg style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '1px', height: '100%', overflow: 'visible', zIndex: 0 }}>
            <motion.path
                d="M1 0 L1 100"
                stroke={color}
                strokeWidth="0.5"
                fill="none"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.2 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.circle
                r="3"
                fill={color}
                initial={{ offsetDistance: "0%" }}
                animate={{ offsetDistance: "100%" }}
                transition={{
                    duration: 5 + Math.random() * 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: Math.random() * 3
                }}
                style={{ offsetPath: "path('M1 0 L1 100')", filter: `blur(1px) drop-shadow(0 0 3px ${color})` }}
            />
        </svg>
    );
};

const SectionHeader = ({ tag, title, desc, align = 'center', dark = false }) => (
    <div className={`section-header-wrap ${align}`} style={{
        textAlign: align,
        marginBottom: '80px',
        maxWidth: align === 'center' ? '800px' : '700px',
        margin: align === 'center' ? '0 auto 80px' : '0 0 80px'
    }}>
        <motion.span
            className="text-gradient-web"
            style={{ fontWeight: 900, fontSize: '0.9rem', letterSpacing: '4px', textTransform: 'uppercase' }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            {tag}
        </motion.span>
        <motion.h2
            className="web-title-large"
            style={{ color: dark ? 'white' : 'var(--web-slate-deep)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
        >
            {title}
        </motion.h2>
        <motion.p
            style={{ fontSize: '1.25rem', color: dark ? 'rgba(255,255,255,0.6)' : 'var(--web-slate-light)', lineHeight: 1.6 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
        >
            {desc}
        </motion.p>
    </div>
);

const TechItem = ({ tech, index }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 150, damping: 15 });
    const springY = useSpring(y, { stiffness: 150, damping: 15 });

    const handleMouseMove = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        x.set((clientX - centerX) * 0.4);
        y.set((clientY - centerY) * 0.4);
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    const handleMouseLeave = () => {
        x.set(0); y.set(0);
    };

    const spotlight = useMotionTemplate`radial-gradient(120px circle at ${mouseX}px ${mouseY}px, rgba(13, 181, 164, 0.15), transparent 80%)`;

    return (
        <motion.div
            className="web-tech-item"
            style={{ x: springX, y: springY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
        >
            <motion.div className="tech-spotlight" style={{ background: spotlight }} />
            <div className="web-tech-icon">{tech.icon}</div>
            <span className="web-tech-name">{tech.name}</span>
            <div className="tech-magnetic-glow"></div>
        </motion.div>
    );
};

const WebDevelopment = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { scrollYProgress } = useScroll();
    const heroBgScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);

    const mouseHeroX = useMotionValue(0);
    const mouseHeroY = useMotionValue(0);
    const heroParallaxX = useSpring(useTransform(mouseHeroX, [-500, 500], [-30, 30]));
    const heroParallaxY = useSpring(useTransform(mouseHeroY, [-500, 500], [-30, 30]));

    const handleHeroMouseMove = (e) => {
        const { clientX, clientY } = e;
        mouseHeroX.set(clientX - window.innerWidth / 2);
        mouseHeroY.set(clientY - window.innerHeight / 2);
    };

    const bentoItems = [
        {
            title: "100% Custom Design",
            desc: "Unique digital identities tailored to your brand, moving beyond generic templates.",
            icon: <PiLayoutLight />,
            span: "span-double",
            specs: ["Bespoke Layouts", "Brand Alignment", "Pixel Perfect"]
        },
        {
            title: "Fast & Mobile Friendly",
            desc: "Ultra-responsive designs optimized for speed and fluidity on every device class.",
            icon: <PiLightningLight />,
            specs: ["99+ Performance", "Core Web Vitals", "PWA Ready"]
        },
        {
            title: "SEO Optimized",
            desc: "Engineered for search visibility with semantic structure and metadata precision.",
            icon: <PiGlobeLight />,
            specs: ["Structured Data", "Fast Indexing", "Content Ready"]
        },
        {
            title: "Secure Coding",
            desc: "Institutional-grade protection against vulnerabilities and unauthorized access.",
            icon: <PiShieldCheckLight />,
            specs: ["End-to-End TLS", "Access Control", "Data Insulation"]
        },
        {
            title: "Scalable Growth",
            desc: "Future-proof architectures built to expand with your business requirements.",
            icon: <PiInfinityLight />,
            specs: ["Modular Core", "Infinite Scale", "Cloud Native"]
        },
        {
            title: "Dedicated Support",
            desc: "Professional maintenance and ongoing evolution for your digital ecosystem.",
            icon: <PiCpuLight />,
            span: "span-double",
            specs: ["24/7 Monitoring", "Active Evolution", "SLA Priority"]
        }
    ];

    const techCategories = [
        {
            title: "Frontend Layer",
            pulseColor: "rgba(13, 181, 164, 0.4)",
            items: [
                { icon: <SiHtml5 />, name: "HTML5" },
                { icon: <SiCss3 />, name: "CSS3" },
                { icon: <SiJavascript />, name: "JavaScript" },
                { icon: <SiReact />, name: "React" },
                { icon: <SiTailwindcss />, name: "Tailwind" }
            ]
        },
        {
            title: "Backend Layer",
            pulseColor: "rgba(13, 181, 164, 0.4)",
            items: [
                { icon: <SiNodedotjs />, name: "Node.js" },
                { icon: <SiPhp />, name: "PHP" },
                { icon: <SiLaravel />, name: "Laravel" },
                { icon: <SiPostgresql />, name: "PostgreSQL" },
                { icon: <SiMysql />, name: "MySQL" }
            ]
        },
        {
            title: "Ecosystem & Infrastructure",
            pulseColor: "rgba(13, 181, 164, 0.4)",
            items: [
                { icon: <SiNextdotjs />, name: "Next.js" },
                { icon: <SiMongodb />, name: "MongoDB" },
                { icon: <SiWordpress />, name: "WordPress" },
                { icon: <TbBrandAws />, name: "AWS" },
                { icon: <SiVercel />, name: "Vercel" }
            ]
        }
    ];

    return (
        <div className="web-page">
            {/* --- 1. HERO: PROFESSIONAL STUDIO --- */}
            <header className="web-hero" onMouseMove={handleHeroMouseMove}>
                <div className="hero-technical-grid"></div>

                <motion.div
                    className="web-hero-bg"
                    style={{
                        scale: heroBgScale,
                        x: heroParallaxX,
                        y: heroParallaxY
                    }}
                >
                    <div className="web-orb" style={{ top: '10%', left: '10%' }}></div>
                    <div className="web-orb secondary" style={{ bottom: '10%', right: '10%' }}></div>
                </motion.div>

                <div className="container">
                    <div className="hero-split-web">
                        <div className="hero-content-web">
                            <motion.div
                                className="web-glass-badge"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                            >
                                <div className="badge-dot"></div>
                                <span>ENTERPRISE GRADE DEVELOPMENT</span>
                            </motion.div>

                            <motion.h1
                                className="hero-title-web"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.8 }}
                            >
                                Custom Web <br />
                                <span className="text-gradient-web">Architecture</span>.
                            </motion.h1>

                            <motion.p
                                className="hero-desc-web"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            >
                            </motion.p>

                            <motion.div
                                className="hero-highlights-web"
                                style={{ marginTop: '25px', marginBottom: '40px', display: 'flex', gap: '15px', flexWrap: 'wrap' }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                            >
                                {["React / Next.js", "Cloud Native", "99.9% Uptime"].map((h, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', fontWeight: 600, color: 'var(--web-slate-deep)' }}>
                                        <TbCircleCheck color="var(--web-teal)" size={18} /> {h}
                                    </div>
                                ))}
                            </motion.div>

                            <div className="hero-btns-web" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <MagneticButton to="/contact" className="btn btn-primary btn-web-hero" style={{ padding: '20px 48px', borderRadius: '100px', fontSize: '1.1rem', boxShadow: '0 20px 40px -10px rgba(13, 181, 164, 0.3)' }}>
                                    Start Project <PiArrowRightBold />
                                </MagneticButton>
                                <Link to="/portfolio" className="btn-secondary-web" style={{ color: 'var(--web-slate-deep)', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    View Casestudies <FaArrowRight />
                                </Link>
                            </div>
                        </div>

                        <div className="hero-visual-web">
                            <motion.div
                                className="web-hero-terminal"
                                style={{
                                    rotateX: useTransform(heroParallaxY, [-30, 30], [5, -5]),
                                    rotateY: useTransform(heroParallaxX, [-30, 30], [-5, 5])
                                }}
                                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y: [0, -15, 0] // Floating animation loop
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.2,
                                    y: {
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }}
                            >
                                <div className="terminal-header">
                                    <div className="terminal-dot" style={{ background: '#ef4444' }}></div>
                                    <div className="terminal-dot" style={{ background: '#f59e0b' }}></div>
                                    <div className="terminal-dot" style={{ background: '#22c55e' }}></div>
                                    <div style={{ marginLeft: 'auto', fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>server.config.ts</div>
                                </div>

                                <div className="terminal-body">
                                    <div className="code-line">
                                        <div className="line-num">1</div>
                                        <div className="code-content">
                                            <span className="c-key">import</span> <span className="c-plain">{'{'}</span> <span className="c-func">defineConfig</span> <span className="c-plain">{'}'}</span> <span className="c-key">from</span> <span className="c-str">'@shapesway/core'</span>;
                                        </div>
                                    </div>
                                    <div className="code-line">
                                        <div className="line-num">2</div>
                                        <div className="code-content"></div>
                                    </div>
                                    <div className="code-line">
                                        <div className="line-num">3</div>
                                        <div className="code-content">
                                            <span className="c-key">export default</span> <span className="c-func">defineConfig</span><span className="c-plain">({'{'}</span>
                                        </div>
                                    </div>
                                    <div className="code-line">
                                        <div className="line-num">4</div>
                                        <div className="code-content" style={{ paddingLeft: '20px' }}>
                                            <span className="c-prop">performance</span>: <span className="c-str">'turbo'</span>,
                                        </div>
                                    </div>
                                    <div className="code-line">
                                        <div className="line-num">5</div>
                                        <div className="code-content" style={{ paddingLeft: '20px' }}>
                                            <span className="c-prop">security</span>: <span className="c-key">true</span>,
                                        </div>
                                    </div>
                                    <div className="code-line">
                                        <div className="line-num">6</div>
                                        <div className="code-content" style={{ paddingLeft: '20px' }}>
                                            <span className="c-prop">ssr</span>: <span className="c-plain">{'{'}</span> <span className="c-prop">mode</span>: <span className="c-str">'edge'</span> <span className="c-plain">{'}'}</span>,
                                        </div>
                                    </div>
                                    <div className="code-line">
                                        <div className="line-num">7</div>
                                        <div className="code-content" style={{ paddingLeft: '20px' }}>
                                            <span className="c-prop">modules</span>: <span className="c-plain">[</span><span className="c-str">'AI'</span>, <span className="c-str">'Analytics'</span><span className="c-plain">]</span>
                                        </div>
                                    </div>
                                    <div className="code-line">
                                        <div className="line-num">8</div>
                                        <div className="code-content">
                                            <span className="c-plain">{'}'});</span>
                                        </div>
                                    </div>
                                    <div className="code-line">
                                        <div className="line-num">9</div>
                                        <div className="code-content">
                                            <span className="c-comment">// Deployment Status: Active (10ms)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="terminal-glow-ambience"></div>
                            </motion.div>

                            <motion.div
                                className="hero-float-badge top-right"
                                style={{ y: useTransform(heroParallaxY, [-30, 30], [-15, 15]) }}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                <div className="badge-icon-box">
                                    <PiLightningLight />
                                </div>
                                <div className="badge-text">
                                    <span className="badge-label">Performance</span>
                                    <span className="badge-value">99/100 Score</span>
                                </div>
                            </motion.div>

                            <motion.div
                                className="hero-float-badge bottom-left"
                                style={{ y: useTransform(heroParallaxY, [-30, 30], [15, -15]) }}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8 }}
                            >
                                <div className="badge-icon-box">
                                    <PiShieldCheckLight />
                                </div>
                                <div className="badge-text">
                                    <span className="badge-label">Security</span>
                                    <span className="badge-value">Enterprise Ready</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </header>

            {/* --- 2. ABOUT: ECOSYSTEM --- */}
            {/* --- 2. ABOUT: ECOSYSTEM --- */}
            <section className="web-overview-section" style={{ padding: '120px 0', borderBottom: '1px solid #f1f5f9', background: '#ffffff' }}>
                <div className="container">
                    <div className="overview-split-layout" style={{ display: 'flex', gap: '80px', alignItems: 'flex-start' }}>
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <span style={{
                                    textTransform: 'uppercase',
                                    letterSpacing: '3px',
                                    fontSize: '0.85rem',
                                    fontWeight: 700,
                                    color: 'var(--web-teal)',
                                    display: 'block',
                                    marginBottom: '15px'
                                }}>
                                    Overview
                                </span>
                                <h2 style={{
                                    fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                                    lineHeight: '1.2',
                                    fontWeight: 800,
                                    color: 'var(--web-slate-deep)',
                                    marginBottom: '20px',
                                    marginTop: 0
                                }}>
                                    Engineered for <br />
                                    <span className="text-gradient-web">Scalable Growth.</span>
                                </h2>
                                <p style={{
                                    fontSize: '1.1rem',
                                    lineHeight: '1.7',
                                    color: '#64748b',
                                    marginBottom: '40px',
                                    maxWidth: '90%'
                                }}>
                                    We don't just build websites; we architect digital platforms that drive business velocity. Our comprehensive development lifecycle ensures your web presence is fast, secure, and ready to scale.
                                </p>

                                <MagneticButton to="/contact" className="btn-overview-glow">
                                    <span style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        Explore Capabilities <PiArrowRightBold />
                                    </span>
                                </MagneticButton>
                            </motion.div>
                        </div>

                        <div style={{ flex: 1.3 }}>
                            <div className="features-grid-web">
                                {[
                                    {
                                        title: "Bespoke Digital Platforms",
                                        desc: "Custom-coded solutions tailored to your unique operational needs, moving far beyond generic templates.",
                                        icon: <PiLayoutLight />
                                    },
                                    {
                                        title: "Full-Stack Architecture",
                                        desc: "Seamless integration of high-performance frontends with robust, data-driven backends.",
                                        icon: <PiCodeLight />
                                    },
                                    {
                                        title: "Headless CMS Solutions",
                                        desc: "Decoupled content management for ultimate flexibility across multiple digital channels.",
                                        icon: <PiDatabaseLight />
                                    },
                                    {
                                        title: "API & Integration Layer",
                                        desc: "Connecting your web platform with 3rd-party services (CRM, ERP, Payment) for unified operations.",
                                        icon: <PiBracketsCurlyBold />
                                    }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className="feature-pod-web"
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.15 }}
                                    >
                                        <div className="pod-icon">{item.icon}</div>
                                        <div className="pod-content">
                                            <h4>{item.title}</h4>
                                            <p>{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 3. NEURAL CIRCUIT ECOSYSTEM (TECH ARCHITECTURE) --- */}
            <section className="web-ecosystem-section">
                <div className="container">
                    <SectionHeader
                        tag="01 // Technology"
                        title="Architecture of Performance."
                        desc="A multi-layered stack engineered for high interaction, military-grade security, and sub-second delivery."
                    />

                    <div className="tech-circuit-container">
                        <div className="circuit-backbone"></div>

                        {techCategories.map((cat, ci) => (
                            <div key={ci} className={`circuit-branch branch-${ci}`}>
                                <PulsePath color={cat.pulseColor} />
                                <motion.div
                                    className="branch-header"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="branch-label">
                                        <span className="branch-num">0{ci + 1}.</span>
                                        <h3>{cat.title}</h3>
                                    </div>
                                    <div className="branch-line"></div>
                                </motion.div>

                                <div className="branch-nodes">
                                    {cat.items.map((tech, i) => (
                                        <motion.div
                                            key={i}
                                            className="tech-node-v3"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: (ci * 0.1) + (i * 0.05) }}
                                        >
                                            <InteractiveCard className="crystal-card">
                                                <div className="crystal-icon">{tech.icon}</div>
                                                <span className="crystal-name">{tech.name}</span>
                                                <div className="crystal-refraction"></div>
                                            </InteractiveCard>
                                            <div className="node-connection"></div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 3. BENTO MASTERY --- */}
            <section className="web-bento-section">
                <div className="container">
                    <SectionHeader
                        tag="02 // Capabilities"
                        title="Engineered for Impact."
                        desc="Advanced web solutions designed for complex organizational requirements."
                    />
                    <div className="web-bento-grid">
                        {bentoItems.map((item, i) => (
                            <InteractiveCard
                                key={i}
                                className="web-bento-card"
                                span={item.span}
                            >
                                <div className="card-watermark">{item.icon}</div>
                                <div className="web-card-overlay"></div>
                                <div className="web-card-content">
                                    <div className="web-card-icon">{item.icon}</div>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>

                                    <div className="web-spec-chips">
                                        {item.specs.map((spec, si) => (
                                            <span key={si} className="spec-chip">{spec}</span>
                                        ))}
                                    </div>

                                    <div className="web-card-action">
                                        SYSTEM SPECS <PiCaretRightBold size={14} />
                                    </div>
                                </div>
                            </InteractiveCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 4. CYBER-KINETIC ROADMAP --- */}
            <section className="web-roadmap-section">
                <div className="container">
                    <SectionHeader
                        tag="03 // Process"
                        title="Our Web Development Process"
                        desc="Our surgical approach to software engineering ensures 100% predictable delivery and technical excellence."
                    />
                    <div className="web-roadmap-container">
                        <div className="web-roadmap-track">
                            {[0, 20, 40, 60, 80, 100].map((pos, i) => (
                                <div key={i} className="web-node-wrap" style={{ left: `${pos}%` }}>
                                    <motion.div
                                        className="web-node-pulse"
                                        animate={{ scale: [1, 2.5, 1], opacity: [0.4, 0, 0.4] }}
                                        transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                                    />
                                    <div className="web-node-ring"></div>
                                    <div className="web-node-core"></div>
                                </div>
                            ))}
                        </div>
                        <div className="web-milestones-grid" style={{ gridTemplateColumns: 'repeat(6, 1fr)' }}>
                            {[
                                { tag: "ANALYZE", title: "Requirement Analysis", icon: <PiMonitorLight /> },
                                { tag: "DESIGN", title: "UI/UX & Wireframing", icon: <PiLayoutLight /> },
                                { tag: "BUILD", title: "Development phase", icon: <PiCodeLight /> },
                                { tag: "VERIFY", title: "QA & Testing", icon: <PiShieldCheckLight /> },
                                { tag: "LAUNCH", title: "Deployment", icon: <PiRocketLaunchLight /> },
                                { tag: "SUSTAIN", title: "Ongoing Support", icon: <PiInfinityLight /> }
                            ].map((step, i) => (
                                <motion.div
                                    key={i}
                                    className="web-milestone-card"
                                    style={{ padding: '30px 15px' }}
                                    whileHover={{ y: -10 }}
                                >
                                    <div className="ms-icon" style={{ width: '50px', height: '50px', fontSize: '1.5rem', marginBottom: '15px' }}>{step.icon}</div>
                                    <div className="ms-content">
                                        <span className="ms-tag" style={{ fontSize: '0.65rem' }}>{step.tag}</span>
                                        <h4 style={{ fontSize: '1rem' }}>{step.title}</h4>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 5. PERFORMANCE COCKPIT --- */}
            <section className="web-cockpit-section">
                <div className="container">
                    <div className="web-cockpit-inner">
                        <SectionHeader
                            dark={true}
                            tag="04 // Performance"
                            title="The Velocity Dashboard."
                            desc="We engineer for extreme speed. Our deployments are calibrated for core web vitals and sub-second interaction."
                        />
                        <div className="web-cockpit-stats">
                            {[
                                { label: "LCP Optimization", value: "99%", icon: <PiLightningLight /> },
                                { label: "Global Uptime", value: "100%", icon: <PiGlobeLight /> },
                                { label: "Security Index", value: "Level 4", icon: <PiShieldCheckLight /> }
                            ].map((stat, i) => (
                                <InteractiveCard key={i} className="web-stat-card">
                                    <div className="stat-icon-wrap">
                                        {stat.icon}
                                        <div className="stat-glow"></div>
                                    </div>
                                    <div className="stat-info">
                                        <span className="stat-val">{stat.value}</span>
                                        <p className="stat-label">{stat.label}</p>
                                    </div>
                                </InteractiveCard>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 6. FINAL CTA --- */}
            <BespokeCTA
                tag="INITIALIZE DEVELOPMENT"
                title={["Start Your Web", "Development Project."]}
                desc="We don’t just build websites — we build digital experiences that convert visitors into customers."
                buttonText="Get Free Consultation"
                visuals={
                    <>
                        <div className="bespoke-card" style={{ width: '300px', left: '0%', bottom: '5%', zIndex: 3, boxShadow: '0 20px 80px rgba(0,0,0,0.8)' }}>
                            <div className="bespoke-card-header">
                                <div className="header-spinner"></div>
                                <span>Deployment Console</span>
                                <div className="bespoke-card-meta">index.tsx</div>
                            </div>
                            <div className="bespoke-card-body">
                                <p className="greeting">Build Strategy: Standard</p>
                                <div style={{ fontFamily: 'monospace', fontSize: '0.7rem', color: '#0db5a4', background: 'rgba(0,0,0,0.4)', padding: '12px', borderRadius: '4px' }}>
                                    <div style={{ color: '#6366f1' }}>{'export const'} <span style={{ color: '#fff' }}>{'Config = {'}</span></div>
                                    <div style={{ paddingLeft: '10px' }}>{'scale: '}<span style={{ color: '#f59e0b' }}>{"'global'"}</span>{','}</div>
                                    <div style={{ paddingLeft: '10px' }}>{'performance: '}<span style={{ color: '#f59e0b' }}>{"'turbo'"}</span></div>
                                    <div>{'};'}</div>
                                </div>
                            </div>
                        </div>
                        <div className="bespoke-card" style={{ width: '200px', right: '0%', top: '5%', zIndex: 2, boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }}>
                            <div className="bespoke-card-header">
                                <div className="header-spinner"></div>
                                <span>Optimization</span>
                            </div>
                            <div className="bespoke-card-body">
                                <span className="bespoke-card-section-label">Lighthouse</span>
                                <div className="bespoke-tag-group">
                                    <span className="bespoke-mini-tag">Perf: 100</span>
                                    <span className="bespoke-mini-tag">SEO</span>
                                </div>
                                <span className="bespoke-card-section-label">Edge Cache</span>
                                <div className="bespoke-card-highlight-box">
                                    Status: Propagated
                                </div>
                            </div>
                        </div>
                    </>
                }
            />
        </div>
    );
};

export default WebDevelopment;
