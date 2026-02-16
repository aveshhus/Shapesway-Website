import React, { useEffect, useRef } from 'react';
import {
    motion, useScroll, useTransform, useSpring,
    useMotionValue, useMotionTemplate
} from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    PiArrowRightBold, PiCodeBlockLight, PiDatabaseLight,
    PiCloudLight, PiBrowsersLight, PiTerminalLight,
    PiShieldCheckLight, PiGitBranchLight, PiCaretRightBold,
    PiInfinityLight, PiCpuLight, PiGraphLight, PiShapesLight,
    PiGearLight, PiStackLight
} from 'react-icons/pi';
import {
    SiDocker, SiKubernetes, SiNodedotjs, SiPython,
    SiGo, SiPostgresql, SiRedis, SiAmazonwebservices
} from 'react-icons/si';
import { TbCircleCheck, TbSettingsAutomation } from 'react-icons/tb';
import { FaArrowRight } from 'react-icons/fa';
import BespokeCTA from '../../components/common/BespokeCTA';
import './SoftwareDevelopment.css';

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

const HolographicCard = ({ children, className, span, gradient }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 150, damping: 20 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 150, damping: 20 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        x.set(mouseX / rect.width - 0.5);
        y.set(mouseY / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            className={`${className} ${span} holo-card-wrapper`}
            style={{ rotateX, rotateY, perspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.02 }}
        >
            <div className={`holo-card-inner bento-grad-${gradient}`}>
                <div className="holo-parallax-layer">
                    {children}
                </div>
                <div className="holo-liquid-mesh"></div>
                <div className="holo-border-glow"></div>
            </div>
        </motion.div>
    );
};

const OverviewCard = ({ children, className }) => {
    return (
        <div className={className} style={{ position: 'relative' }}>
            <div style={{ position: 'relative', zIndex: 2 }}>
                {children}
            </div>
        </div>
    );
};

const SectionHeader = ({ tag, title, desc, dark = false }) => (
    <div className="soft-header-wrap">
        <motion.span
            className="soft-tag"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
        >
            {tag}
        </motion.span>
        <motion.h2
            className="soft-title-large"
            style={{ color: dark ? '#fff' : 'var(--soft-slate-deep)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
        >
            {title}
        </motion.h2>
        <motion.p
            className="soft-desc-text"
            style={{ color: dark ? 'rgba(255,255,255,0.6)' : 'var(--soft-slate-light)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
        >
            {desc}
        </motion.p>
    </div>
);

const GlyphItem = ({ glyph, i, heroParallaxX, heroParallaxY }) => {
    const x = useTransform(heroParallaxX, [-30, 30], [-20 * (i % 4 + 1), 20 * (i % 4 + 1)]);
    const y = useTransform(heroParallaxY, [-30, 30], [-15 * (i % 3 + 1), 15 * (i % 3 + 1)]);

    return (
        <motion.div
            className={`soft-glyph glyph-${i}`}
            style={{
                x,
                y,
                opacity: (i % 3 + 1) * 0.15,
                zIndex: 0
            }}
            animate={{
                y: [0, -15, 0],
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.1, 1],
                filter: ['blur(1px)', 'blur(0px)', 'blur(1px)']
            }}
            transition={{
                duration: 3 + (i % 4),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2
            }}
        >
            {glyph}
        </motion.div>
    );
};

const SyntacticGlyphCluster = ({ heroParallaxX, heroParallaxY }) => {
    const glyphs = ['{', '}', '=>', 'λ', 'bin', '[]', '()', ';', '&&', '||', '!=', '++', '0x', 'sys', 'cmd', 'git'];
    return (
        <div className="soft-glyph-cluster">
            {glyphs.map((glyph, i) => (
                <GlyphItem
                    key={i}
                    glyph={glyph}
                    i={i}
                    heroParallaxX={heroParallaxX}
                    heroParallaxY={heroParallaxY}
                />
            ))}
        </div>
    );
};

const SoftwareDevelopment = () => {
    const { scrollYProgress } = useScroll();
    const scrollVelocity = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    const heroParallaxX = useMotionValue(0);
    const heroParallaxY = useMotionValue(0);

    const handleHeroParallax = (e) => {
        const { clientX, clientY } = e;
        const moveX = (clientX - window.innerWidth / 2) * 0.05;
        const moveY = (clientY - window.innerHeight / 2) * 0.05;
        heroParallaxX.set(moveX);
        heroParallaxY.set(moveY);
    };

    const overviewX = useMotionValue(0);
    const overviewY = useMotionValue(0);
    const overviewRef = useRef(null);

    const handleOverviewMouseMove = (e) => {
        if (!overviewRef.current) return;
        const { clientX, clientY } = e;
        const { left, top } = overviewRef.current.getBoundingClientRect();
        overviewX.set(clientX - left);
        overviewY.set(clientY - top);
    };

    const gaugeOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
    const gaugeReadout = useTransform(scrollYProgress, (val) => `0x${Math.floor(val * 255).toString(16).toUpperCase().padStart(2, '0')}`);

    const techStack = [
        { icon: <SiNodedotjs />, name: "Node.js", version: "LTS", status: "RUNTIME", id: "0x01", gradient: "sunset" },
        { icon: <SiPython />, name: "Python", version: "3.12", status: "KERNEL", id: "0x02", gradient: "neon" },
        { icon: <SiGo />, name: "Go Lang", version: "1.21", status: "COMPILED", id: "0x03", gradient: "cyber" },
        { icon: <SiDocker />, name: "Docker", version: "v24", status: "VIRTUAL", id: "0x04", gradient: "ocean" },
        { icon: <SiKubernetes />, name: "K8s", version: "1.28", status: "ORCHESTRA", id: "0x05", gradient: "cosmic" },
        { icon: <SiPostgresql />, name: "PostgreSQL", version: "v16", status: "PERSIST", id: "0x06", gradient: "emerald" },
        { icon: <SiRedis />, name: "Redis", version: "7.2", status: "CACHED", id: "0x07", gradient: "ruby" },
        { icon: <SiAmazonwebservices />, name: "AWS", version: "CLOUD", status: "INFRA", id: "0x08", gradient: "gold" }
    ];

    const overviewItems = [
        {
            title: "Bespoke Digital Platforms",
            desc: "Custom-coded solutions tailored to your unique operational needs, moving far beyond generic templates.",
            icon: <PiBrowsersLight />,
            gradient: "cyan"
        },
        {
            title: "Full-Stack Architecture",
            desc: "Seamless integration of high-performance frontends with robust, data-driven backends.",
            icon: <PiCodeBlockLight />,
            gradient: "violet"
        },
        {
            title: "Headless CMS Solutions",
            desc: "Decoupled content management for ultimate flexibility across multiple digital channels.",
            icon: <PiDatabaseLight />,
            gradient: "emerald"
        },
        {
            title: "API & Integration Layer",
            desc: "Connecting your web platform with 3rd-party services (CRM, ERP, Payment) for unified operations.",
            icon: <PiStackLight />,
            gradient: "amber"
        }
    ];

    const pipelineStages = [
        {
            tag: "01",
            title: "Strategy & Audit",
            desc: "Discovery, technical requirement gathering, and architectural blueprinting.",
            icon: <PiGraphLight />,
            color: "#0db5a4"
        },
        {
            tag: "02",
            title: "Agile Build",
            desc: "Iterative development cycles with continuous integration and rapid prototyping.",
            icon: <PiCodeBlockLight />,
            color: "#2563eb"
        },
        {
            tag: "03",
            title: "Quality Control",
            desc: "Comprehensive testing, security hardening, and performance calibration.",
            icon: <PiShieldCheckLight />,
            color: "#8b5cf6"
        },
        {
            tag: "04",
            title: "Deploy & Scale",
            desc: "Automated deployment, cloud orchestration, and global infrastructure delivery.",
            icon: <PiCloudLight />,
            color: "#0db5a4"
        }
    ];

    return (
        <div className="soft-page" onMouseMove={handleHeroParallax}>
            {/* --- 1. HERO: ENGINEERING VAULT --- */}
            <header className="soft-hero">
                <motion.div
                    className="soft-hero-logic-bg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <div className="soft-hero-grid-bg"></div>
                    <div className="logic-pulse-container">
                        {[1, 2, 3, 4, 5].map(i => <div key={i} className={`logic-pulse pulse-${i}`}></div>)}
                    </div>
                    <div className="soft-hex-pattern"></div>
                    <div className="soft-hero-coords top-right">
                        <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 5 }}>
                            LAT: 34.0522° N
                        </motion.span>
                    </div>
                    <div className="soft-hero-coords bottom-left">
                        <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 4, delay: 1 }}>
                            LONG: 118.2437° W
                        </motion.span>
                    </div>
                    <div className="soft-data-streams">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                            <div
                                key={i}
                                className="data-stream"
                                style={{
                                    left: `${i * 12}%`,
                                    height: `${100 + (i * 20)}px`,
                                    animationDelay: `${i * 0.8}s`,
                                    animationDuration: `${8 + (i % 4)}s`
                                }}
                            ></div>
                        ))}
                    </div>
                    <SyntacticGlyphCluster heroParallaxX={heroParallaxX} heroParallaxY={heroParallaxY} />
                </motion.div>

                <div className="container">
                    <div className="soft-hero-content">
                        <motion.div
                            className="soft-status-pill"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <span className="dot"></span> SYST_ENG_PROC: ACTIVE_NODE_v26.4
                        </motion.div>
                        <motion.h1
                            className="soft-hero-title"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            Developing <br />
                            <span className="soft-gradient-text">Scalable Solutions.</span>
                        </motion.h1>
                        <motion.p
                            className="soft-hero-desc"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.8 }}
                        >
                            We architect industrial-grade software ecosystems that transcend conventional boundaries.
                            From immutable lead systems to adaptive microservices orchestration.
                        </motion.p>
                        <div className="hero-btn-group-soft">
                            <MagneticButton to="/contact" className="soft-btn-primary">
                                Initialize Build <PiArrowRightBold />
                            </MagneticButton>
                            <div className="system-status-indicator">
                                <span className="status-label">HEALTH</span>
                                <div className="status-bar-container">
                                    <motion.div
                                        className="status-bar-fill"
                                        initial={{ width: 0 }}
                                        animate={{ width: "94%" }}
                                        transition={{ duration: 2, delay: 0.5 }}
                                    />
                                </div>
                                <span className="status-val">94%</span>
                            </div>
                        </div>
                    </div>

                    <div className="soft-hero-visual">
                        <motion.div
                            className="soft-ide-container"
                            style={{
                                rotateX: useTransform(heroParallaxY, [-30, 30], [5, -5]),
                                rotateY: useTransform(heroParallaxX, [-30, 30], [-10, 10]),
                                perspective: 1500
                            }}
                        >
                            {/* Main Editor Window */}
                            <motion.div className="ide-window main-editor">
                                <div className="ide-header">
                                    <div className="ide-controls">
                                        <div className="control red"></div>
                                        <div className="control yellow"></div>
                                        <div className="control green"></div>
                                    </div>
                                    <div className="ide-tab">NeuralCore.js</div>
                                </div>
                                <div className="ide-content">
                                    <div className="code-line"><span className="keyword">import</span> {'{ NeuralEngine }'} <span className="keyword">from</span> <span className="string">'@shapesway/ai'</span>;</div>
                                    <div className="code-line"><span className="keyword">const</span> <span className="function">initSystem</span> = () {'=>'} {'{'}</div>
                                    <div className="code-line indent"><span className="keyword">return</span> <span className="keyword">new</span> <span className="function">NeuralEngine</span>({'{'}</div>
                                    <div className="code-line indent-2">scaling: <span className="number">0xFF</span>,</div>
                                    <div className="code-line indent-2">latency: <span className="string">'low'</span></div>
                                    <div className="code-line indent">{'}'});</div>
                                    <div className="code-line">{'}'};</div>
                                </div>
                            </motion.div>

                            {/* Floating Architecture Node 1: API */}
                            <motion.div
                                className="arch-node api-node"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            >
                                <div className="node-icon-wrap"><PiBrowsersLight /></div>
                                <div className="node-text">REST_API</div>
                                <div className="node-pulse-point"></div>
                            </motion.div>

                            {/* Floating Architecture Node 2: DB */}
                            <motion.div
                                className="arch-node db-node"
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                            >
                                <div className="node-icon-wrap"><PiDatabaseLight /></div>
                                <div className="node-text">POSTGRES</div>
                                <div className="node-pulse-point"></div>
                            </motion.div>

                            {/* Floating Architecture Node 3: Cloud */}
                            <motion.div
                                className="arch-node cloud-node"
                                animate={{ y: [0, -12, 0] }}
                                transition={{ duration: 6, repeat: Infinity, delay: 2 }}
                            >
                                <div className="node-icon-wrap"><PiCloudLight /></div>
                                <div className="node-text">AWS_DEPLOY</div>
                                <div className="node-pulse-point"></div>
                            </motion.div>

                            {/* Connection Lines */}
                            <svg className="ide-connections">
                                <motion.path
                                    d="M100,200 Q150,250 200,200"
                                    fill="none"
                                    stroke="rgba(13, 181, 164, 0.2)"
                                    strokeWidth="2"
                                    strokeDasharray="5,5"
                                />
                            </svg>
                        </motion.div>
                    </div>
                </div>
            </header>

            {/* --- 2. THE FOUNDATIONAL STACK --- */}
            <section className="soft-stack-section">
                <div className="container">
                    <SectionHeader
                        dark={false}
                        tag="01 // STACK"
                        title="The Engineering Matrix."
                        desc="A curated ecosystem of high-performance frameworks and resilient infrastructure."
                    />
                    <div className="soft-matrix-wrapper">
                        <div className="soft-matrix-grid-bg"></div>
                        <div className="soft-tech-grid">
                            {techStack.map((tech, i) => (
                                <motion.div
                                    key={i}
                                    className={`soft-tech-card hover-grad-${tech.gradient}`}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
                                >
                                    <div className="tech-card-meta">
                                        <span className="tech-id">{tech.id}</span>
                                        <span className="tech-status">{tech.status}</span>
                                    </div>
                                    <div className="tech-icon">{tech.icon}</div>
                                    <div className="tech-body">
                                        <span className="tech-name">{tech.name}</span>
                                        <span className="tech-ver">{tech.version}</span>
                                    </div>
                                    <div className="tech-card-accents">
                                        <div className="accent-tl"></div>
                                        <div className="accent-br"></div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 3. OVERVIEW SECTION (REF IMAGE) --- */}
            <section className="soft-overview-section" ref={overviewRef} onMouseMove={handleOverviewMouseMove}>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="overview-grid">
                        <div className="overview-left">
                            <span className="overview-tag">OVERVIEW</span>
                            <h2 className="overview-title">
                                Engineered for <br />
                                <span>Scalable Growth.</span>
                            </h2>
                            <p className="overview-desc">
                                We don't just build websites; we architect digital platforms
                                that drive business velocity. Our comprehensive
                                development lifecycle ensures your web presence is fast,
                                secure, and ready to scale.
                            </p>
                            <Link to="/contact" className="overview-btn">
                                Explore Capabilities <PiArrowRightBold />
                            </Link>
                        </div>

                        <div className="overview-right">
                            <div className="feature-grid">
                                {overviewItems.map((item, i) => (
                                    <OverviewCard key={i} className={`feature-card f-grad-${item.gradient}`}>
                                        <div className="feature-icon-box">
                                            {item.icon}
                                        </div>
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </OverviewCard>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <motion.div
                    className="section-spotlight"
                    style={{
                        background: useMotionTemplate`
                            radial-gradient(
                                425px circle at ${overviewX}px ${overviewY}px,
                                rgba(37, 99, 235, 0.7),
                                transparent 80%
                            )
                        `
                    }}
                />
            </section>

            {/* --- 4. THE ENGINEERING PIPELINE --- */}
            <section className="soft-pipeline-section">
                <div className="container">
                    <SectionHeader
                        dark={true}
                        tag="03 // PROCESS"
                        title="The Engineering Pipeline."
                        desc="A systematic framework for translating complex requirements into resilient digital infrastructure."
                    />

                    <div className="pipeline-grid">
                        <div className="pipeline-flow-line">
                            <motion.div
                                className="flow-progress"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                            />
                        </div>

                        {pipelineStages.map((stage, i) => (
                            <motion.div
                                key={i}
                                className="pipeline-stage-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                            >
                                <div className="stage-header">
                                    <span className="stage-num" style={{ color: stage.color }}>{stage.tag}</span>
                                    <div className="stage-icon" style={{ background: `${stage.color}15`, color: stage.color }}>
                                        {stage.icon}
                                    </div>
                                </div>
                                <div className="stage-body">
                                    <h3 className="stage-title">{stage.title}</h3>
                                    <p className="stage-desc">{stage.desc}</p>
                                </div>
                                <div className="stage-connector">
                                    <div className="connector-dot" style={{ background: stage.color }}></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 5. SYSTEM METRICS --- */}
            {/* --- 5. SYSTEM TELEMETRY (PERFORMANCE) --- */}
            <section className="telemetry-section">
                <div className="container">
                    <div className="telemetry-dashboard">
                        <SectionHeader
                            tag="04 // PERFORMANCE"
                            title="Live System Telemetry."
                            desc="Real-time calibration metrics from our high-availability infrastructure node."
                        />

                        <div className="telemetry-grid-layout">
                            {/* Module 1: Uptime Monitor */}
                            <motion.div
                                className="telemetry-module module-uptime"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="module-header">
                                    <PiCloudLight className="module-icon" />
                                    <span>UPTIME_SLA</span>
                                    <div className="status-dot green"></div>
                                </div>
                                <div className="uptime-visual">
                                    <div className="uptime-circle">
                                        <svg viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="45" className="circle-bg" />
                                            <motion.circle
                                                cx="50" cy="50" r="45"
                                                className="circle-progress"
                                                initial={{ pathLength: 0 }}
                                                whileInView={{ pathLength: 0.999 }}
                                                transition={{ duration: 2, ease: "circOut" }}
                                            />
                                        </svg>
                                        <div className="uptime-value">
                                            99.99<span>%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="module-footer">
                                    <span>ZR_DOWNTIME</span>
                                    <span className="mono-val">ACTIVE</span>
                                </div>
                            </motion.div>

                            {/* Module 2: Latency Tracker */}
                            <motion.div
                                className="telemetry-module module-latency"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                <div className="module-header">
                                    <PiCpuLight className="module-icon" />
                                    <span>QUERY_LATENCY</span>
                                </div>
                                <div className="latency-graph">
                                    {[40, 65, 30, 80, 45, 20, 55, 35].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            className="latency-bar"
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${h}%` }}
                                            transition={{ duration: 1, delay: i * 0.05 }}
                                        />
                                    ))}
                                </div>
                                <div className="latency-readout">
                                    <span className="val">&lt; 45ms</span>
                                    <span className="label">GLOBAL_AVG</span>
                                </div>
                            </motion.div>

                            {/* Module 3: Throughput */}
                            <motion.div
                                className="telemetry-module module-throughput"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="module-header">
                                    <PiGraphLight className="module-icon" />
                                    <span>THROUGHPUT</span>
                                </div>
                                <div className="throughput-gauge">
                                    <div className="gauge-arc"></div>
                                    <div className="throughput-val">
                                        10K<span>TPS</span>
                                    </div>
                                </div>
                                <div className="module-footer">
                                    <span>PEAK_LOAD</span>
                                    <span className="mono-val">STABLE</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 6. FINAL CTA --- */}
            <BespokeCTA
                tag="CONSULTATION"
                title={["Architecting the Future", "of Your Enterprise."]}
                desc="Partner with our elite engineering teams to build resilient, high-performance digital infrastructure that scales with your global ambitions."
                buttonText="Launch Your Project"
                visuals={
                    <>
                        <div className="bespoke-card" style={{ width: '320px', left: '0%', bottom: '5%', zIndex: 3, boxShadow: '0 20px 80px rgba(0,0,0,0.8)' }}>
                            <div className="bespoke-card-header">
                                <div className="header-spinner"></div>
                                <span>Messaging Agent Writing...</span>
                                <div className="bespoke-card-meta">EMAIL</div>
                            </div>
                            <div className="bespoke-card-body">
                                <p className="greeting">Hi Brandon,</p>
                                <p>Most AI outreach tools rewrite your templates with synonyms.</p>
                                <p>Shapesway's different. It learns from your actual pitch decks, case studies, and positioning docs to write cold emails your team would actually send.</p>
                                <p style={{ color: 'rgba(255,255,255,0.2)', marginBottom: 0 }}>Want to see a video on how it works?</p>
                            </div>
                        </div>
                        <div className="bespoke-card" style={{ width: '220px', right: '0%', top: '5%', zIndex: 2, boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }}>
                            <div className="bespoke-card-header">
                                <div className="header-spinner"></div>
                                <span>Research Agent Results</span>
                            </div>
                            <div className="bespoke-card-body">
                                <span className="bespoke-card-section-label">Scraping</span>
                                <div className="bespoke-tag-group">
                                    <span className="bespoke-mini-tag">Website</span>
                                    <span className="bespoke-mini-tag">LinkedIn</span>
                                </div>
                                <span className="bespoke-card-section-label">Buying Trigger Found</span>
                                <div className="bespoke-card-highlight-box">
                                    Hiring Software Engineer
                                </div>
                            </div>
                        </div>
                    </>
                }
            />
            {/* Tactical Scroll Gauge */}
            <motion.div
                className="tactical-scroll-gauge"
                style={{
                    opacity: gaugeOpacity
                }}
            >
                <div className="gauge-track">
                    <motion.div
                        className="gauge-fill"
                        style={{ scaleY: scrollVelocity }}
                    />
                </div>
                <div className="gauge-readout">
                    <motion.span>
                        {gaugeReadout}
                    </motion.span>
                </div>
            </motion.div>
        </div>
    );
};

export default SoftwareDevelopment;
