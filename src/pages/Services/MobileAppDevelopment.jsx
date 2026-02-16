import React, { useEffect, useRef } from 'react';
import {
    motion, useScroll, useTransform, useSpring,
    useMotionValue, useMotionTemplate
} from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    PiArrowRightBold, PiDeviceMobileLight, PiCodeLight,
    PiLayoutLight, PiLightningLight, PiShieldCheckLight,
    PiGlobeLight, PiCaretRightBold, PiInfinityLight,
    PiMonitorLight, PiCpuLight, PiWavesLight, PiJoystickLight
} from 'react-icons/pi';
import {
    SiFlutter, SiReact, SiSwift, SiKotlin,
    SiFirebase, SiGooglecloud, SiAppstore, SiGoogleplay
} from 'react-icons/si';
import { TbCircleCheck, TbBrandReactNative } from 'react-icons/tb';
import { FaArrowRight } from 'react-icons/fa';
import BespokeCTA from '../../components/common/BespokeCTA';
import './MobileAppDevelopment.css';

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

const SectionHeader = ({ tag, title, desc, align = 'center', dark = false }) => (
    <div className={`section-header-wrap ${align}`} style={{
        textAlign: align,
        marginBottom: '80px',
        maxWidth: align === 'center' ? '800px' : '700px',
        margin: align === 'center' ? '0 auto 80px' : '0 0 80px',
        position: 'relative'
    }}>
        <div className="header-metadata-line">
            <motion.span
                className="text-gradient-mob"
                style={{ fontWeight: 900, fontSize: '0.8rem', letterSpacing: '4px', textTransform: 'uppercase', fontFamily: 'var(--mob-mono)' }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                {tag}
            </motion.span>
            <div className="header-line-dec"></div>
        </div>
        <motion.h2
            className="mob-title-large"
            style={{ color: dark ? 'white' : 'var(--web-slate-deep)', marginTop: '15px' }}
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
    // Increased stiffness for tighter, more premium feel
    const springX = useSpring(x, { stiffness: 300, damping: 20 });
    const springY = useSpring(y, { stiffness: 300, damping: 20 });
    const rotateX = useSpring(useTransform(y, [-50, 50], [5, -5]), { stiffness: 300, damping: 20 });
    const rotateY = useSpring(useTransform(x, [-50, 50], [-5, 5]), { stiffness: 300, damping: 20 });

    const handleMouseMove = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        x.set((clientX - centerX));
        y.set((clientY - centerY));
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    const handleMouseLeave = () => {
        x.set(0); y.set(0);
    };

    const spotlight = useMotionTemplate`radial-gradient(100px circle at ${mouseX}px ${mouseY}px, rgba(13, 181, 164, 0.15), transparent 80%)`;

    return (
        <motion.div
            className="mob-tech-item-perf"
            style={{
                rotateX,
                rotateY,
                x: springX,
                y: springY,
                perspective: 800,
                transformStyle: "preserve-3d"
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
        >
            <motion.div className="tech-spotlight-perf" style={{ background: spotlight }} />

            <div className="tech-inner-3d" style={{ transform: "translateZ(20px)" }}>
                <div className="mob-tech-icon-perf">{tech.icon}</div>
                <div className="tech-line-separator"></div>
                <span className="mob-tech-name-perf">{tech.name}</span>
            </div>

            <div className="tech-border-glow"></div>
        </motion.div>
    );
};

const GlyphCluster = ({ heroParallaxX, heroParallaxY }) => {
    const glyphs = ['0', '1', '{', '}', '<', '/>', 'λ', '∞'];
    return (
        <div className="glyph-cluster-container">
            {glyphs.map((glyph, i) => (
                <motion.div
                    key={i}
                    className="floating-glyph"
                    style={{
                        x: useTransform(heroParallaxX, [-30, 30], [-15 * (i % 3), 15 * (i % 3)]),
                        y: useTransform(heroParallaxY, [-30, 30], [-20 * ((i + 1) % 3), 20 * ((i + 1) % 3)]),
                        left: `${10 + (i * 12)}%`,
                        top: `${20 + ((i % 4) * 15)}%`,
                        opacity: 0.03 + (i * 0.01)
                    }}
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0]
                    }}
                    transition={{
                        duration: 4 + (i * 0.5),
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    {glyph}
                </motion.div>
            ))}
        </div>
    );
};

const MobileAppDevelopment = () => {
    const [activeJunction, setActiveJunction] = React.useState(null);

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
            title: "60FPS Native Experience",
            desc: "Silky smooth interactions calibrated for high-refresh rate displays.",
            icon: <PiLightningLight />,
            span: "span-double",
            specs: ["Jank-Free", "Metal/Vulkan", "Smooth Scaling"],
            metric: "Latency: <8ms",
            serial: "SYS-M01-V2"
        },
        {
            title: "Offline-First Sync",
            desc: "Resilient data synchronization that works regardless of connectivity.",
            icon: <PiWavesLight />,
            specs: ["CRDT Engines", "Background Sync"],
            metric: "Reliability: 99.99%",
            serial: "SYS-M02-V1"
        },
        {
            title: "Sovereign Shield",
            desc: "Biometric authentication and industrial-grade encryption.",
            icon: <PiShieldCheckLight />,
            specs: ["FaceID/TouchID", "KeyChain Encryption"],
            metric: "Security: AES-256",
            serial: "SYS-M03-V4"
        },
        {
            title: "Multi-Platform Core",
            desc: "Shared logic architectures that deploy across iOS, Android and Wearables.",
            icon: <PiInfinityLight />,
            specs: ["Code Reuse 90%", "Hybrid Performance"],
            metric: "Reuse: 92.4%",
            serial: "SYS-M04-V2"
        },
        {
            title: "Hardware Access",
            desc: "Deep integration with camera, GPS, and haptic feedback engines.",
            icon: <PiDeviceMobileLight />,
            specs: ["Low Latency", "Sensor Fusion"],
            metric: "Access: Level-0",
            serial: "SYS-M05-V1"
        },
        {
            title: "Cloud Ecosystem",
            desc: "Seamless serverless backends scaling to millions of concurrent users.",
            icon: <PiGlobeLight />,
            span: "span-double",
            specs: ["Serverless", "Real-time Edge", "Auto-Scale"],
            metric: "Scale: 10M+",
            serial: "SYS-M06-V5"
        }
    ];

    const techStack = [
        { icon: <SiFlutter />, name: "Flutter" },
        { icon: <TbBrandReactNative />, name: "React Native" },
        { icon: <SiSwift />, name: "Swift (iOS)" },
        { icon: <SiKotlin />, name: "Kotlin (Android)" },
        { icon: <SiFirebase />, name: "Firebase" },
        { icon: <SiGooglecloud />, name: "GCP" },
        { icon: <SiAppstore />, name: "App Store" },
        { icon: <SiGoogleplay />, name: "Play Store" }
    ];

    return (
        <div className="mob-page">
            {/* --- 1. HERO: MOBILITY MATRIX --- */}
            <header className="mob-hero" onMouseMove={handleHeroMouseMove}>
                <motion.div
                    className="mob-hero-bg"
                    style={{
                        scale: heroBgScale,
                        x: heroParallaxX,
                        y: heroParallaxY
                    }}
                >
                    <div className="mob-grid-overlay"></div>
                    <div className="mob-hero-pulse"></div>
                    <div className="mob-hero-scanner"></div>
                    <div className="mob-orb" style={{ top: '15%', left: '10%' }}></div>
                    <div className="mob-orb secondary" style={{ bottom: '15%', right: '10%' }}></div>

                    {/* Tactical Overlays */}
                    <div className="mob-hero-terminal">
                        <div className="terminal-logs">
                            <div>{">"} SYSTEM INITIALIZED</div>
                            <div>{">"} KERNEL: NATIVE_CORE_V8</div>
                            <div>{">"} DEPLOY_STATUS: ACTIVE</div>
                            <div>{">"} LATENCY: STABLE</div>
                        </div>
                    </div>
                    <div className="mob-hero-coords top-right">LAT: 34.0522° N</div>
                    <div className="mob-hero-coords bottom-left">LONG: 118.2437° W</div>
                </motion.div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="hero-split-mob">
                        <div className="hero-content-mob">
                            <motion.div
                                className="mob-tag-box"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                            >
                                <TbCircleCheck color="var(--web-teal)" /> <span style={{ letterSpacing: '2px' }}>NEXT-GEN MOBILITY</span>
                            </motion.div>
                            <motion.h1
                                className="hero-title-mob"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.8 }}
                            >
                                Mobility <br />
                                <span className="text-gradient-mob">Matrix</span>.
                            </motion.h1>
                            <motion.p
                                className="hero-desc-mob"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            >
                                Engineering high-fidelity mobile ecosystems that transcend platforms.
                                From native performance to cross-platform surgical precision.
                            </motion.p>
                            <MagneticButton to="/contact" className="btn btn-primary btn-mob-hero" style={{ padding: '24px 60px', borderRadius: '100px', fontSize: '1.2rem' }}>
                                Launch Your App <PiArrowRightBold />
                            </MagneticButton>
                        </div>

                        <div className="hero-visual-mob">
                            <motion.div
                                className="mob-3d-device-perf"
                                style={{
                                    rotateX: useTransform(heroParallaxY, [-30, 30], [10, -10]),
                                    rotateY: useTransform(heroParallaxX, [-30, 30], [-15, 15]),
                                    perspective: 1500
                                }}
                            >
                                <div className="device-screen-perf">
                                    <div className="screen-notch-perf"></div>
                                    <div className="screen-content-perf">
                                        <div className="app-sidebar-perf">
                                            {[1, 2, 3, 4].map(i => <div key={i} className="side-dot"></div>)}
                                        </div>
                                        <div className="app-main-view">
                                            <div className="app-header-perf">
                                                <div className="avatar-perf"></div>
                                                <div className="header-lines">
                                                    <div className="line-perf short"></div>
                                                    <div className="line-perf mini"></div>
                                                </div>
                                            </div>
                                            <div className="app-chart-perf">
                                                <div className="chart-bar" style={{ height: '40%' }}></div>
                                                <div className="chart-bar" style={{ height: '70%' }}></div>
                                                <div className="chart-bar" style={{ height: '50%' }}></div>
                                                <div className="chart-bar" style={{ height: '90%' }}></div>
                                            </div>
                                            <div className="app-data-grid">
                                                <div className="data-node">
                                                    <div className="node-icon"></div>
                                                </div>
                                                <div className="data-node">
                                                    <div className="node-icon"></div>
                                                </div>
                                                <div className="data-node secondary">
                                                    <div className="pulse-line"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="screen-refraction"></div>
                                </div>
                                <div className="device-frame-perf"></div>
                            </motion.div>

                            {/* Floating UI Clusters */}
                            {[1, 2, 3].map((i) => (
                                <motion.div
                                    key={i}
                                    className={`ui-cluster-perf cluster-${i}`}
                                    style={{
                                        x: useTransform(heroParallaxX, [-30, 30], [-20 * i, 20 * i]),
                                        y: useTransform(heroParallaxY, [-30, 30], [-15 * i, 15 * i]),
                                        z: 50 * i
                                    }}
                                >
                                    <div className="cluster-dot"></div>
                                    <div className="cluster-line"></div>
                                </motion.div>
                            ))}

                            <motion.div
                                className="floating-mob-card-perf store"
                                style={{ y: useTransform(heroParallaxY, [-30, 30], [-30, 30]), x: 40 }}
                                whileHover={{ scale: 1.1, z: 100 }}
                            >
                                <SiAppstore size={24} color="var(--mob-teal)" />
                                <div>
                                    <span className="label">APP STORE</span>
                                    <p>RANK #1</p>
                                </div>
                            </motion.div>
                            <motion.div
                                className="floating-mob-card-perf fps"
                                style={{ y: useTransform(heroParallaxY, [-30, 30], [40, -40]), x: -40 }}
                                whileHover={{ scale: 1.1, z: 100 }}
                            >
                                <PiJoystickLight size={24} color="var(--mob-blue)" />
                                <div>
                                    <span className="label">MOTION</span>
                                    <p>120 FPS</p>
                                </div>
                            </motion.div>
                            <motion.div
                                className="floating-mob-card-perf shield"
                                style={{
                                    y: useTransform(heroParallaxY, [-30, 30], [100, -100]),
                                    x: 80,
                                    z: 150
                                }}
                                whileHover={{ scale: 1.1, z: 100 }}
                            >
                                <PiShieldCheckLight size={24} color="var(--mob-teal)" />
                                <div>
                                    <span className="label">SECURITY</span>
                                    <p>AES-256</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </header>

            {/* --- 2. THE MOBILE STACK --- */}
            <section className="mob-stack-section">
                <div className="tech-circuitry-bg"></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <SectionHeader
                        tag="01 // Ecosystem"
                        title="Authorized Mobile Stack."
                        desc="We deploy high-performance mobile architectures using the industry's most resilient frameworks."
                    />
                    <div className="mob-tech-grid">
                        {techStack.map((tech, i) => (
                            <TechItem key={i} tech={tech} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 3. BENTO MASTERY --- */}
            <section className="mob-bento-section">
                <div className="container">
                    <SectionHeader
                        tag="02 // Architecture"
                        title="Mobile Mastery."
                        desc="Advanced features engineered for the modern mobile user."
                    />
                    <div className="mob-bento-grid-perf">
                        {bentoItems.map((item, i) => (
                            <InteractiveCard
                                key={i}
                                className="mob-bento-card-perf"
                                span={item.span}
                            >
                                <div className="card-watermark">{item.icon}</div>
                                <div className="mob-card-content">
                                    <div className="mob-card-icon-perf">{item.icon}</div>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>

                                    <div className="mob-spec-chips">
                                        {item.specs.map((spec, si) => (
                                            <span key={si} className="mob-chip-perf">{spec}</span>
                                        ))}
                                    </div>

                                    <div className="mob-card-footer-perf">
                                        <span className="footer-metric">{item.metric}</span>
                                        <span className="footer-serial">{item.serial}</span>
                                    </div>
                                </div>
                            </InteractiveCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 4. APP LIFECYCLE (ROADMAP) --- */}
            <section className="mob-roadmap-section">
                <div className="container">
                    <SectionHeader
                        tag="03 // Process"
                        title="From Concept to Store."
                        desc="Our structured lifecycle ensures a seamless transition from idea to planetary-scale deployment."
                    />
                    <div className="mob-roadmap-container-perf">
                        <div className="mob-roadmap-flow-perf">
                            <div className="roadmap-grid-bg"></div>
                            <svg className="flow-svg-perf" width="100%" height="2" viewBox="0 0 1000 2" preserveAspectRatio="none">
                                <motion.path
                                    d="M 0 1 L 1000 1"
                                    stroke="rgba(13, 181, 164, 0.2)"
                                    strokeWidth="1"
                                    fill="none"
                                />
                                <motion.path
                                    d="M 0 1 L 1000 1"
                                    stroke="url(#mob-grad-rail)"
                                    strokeWidth="2"
                                    fill="none"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    transition={{ duration: 2, ease: "easeInOut" }}
                                />
                                {[0, 0.2, 0.4].map((delay, i) => (
                                    <motion.circle
                                        key={i}
                                        r="3"
                                        fill="var(--mob-teal)"
                                        initial={{ offsetDistance: "0%" }}
                                        animate={{ offsetDistance: "100%" }}
                                        transition={{
                                            duration: 5,
                                            repeat: Infinity,
                                            ease: "linear",
                                            delay: delay
                                        }}
                                        style={{
                                            offsetPath: "path('M 0 1 L 1000 1')",
                                            filter: "blur(1px)",
                                            opacity: 1 - (i * 0.3)
                                        }}
                                    />
                                ))}
                                <defs>
                                    <linearGradient id="mob-grad-rail" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="transparent" />
                                        <stop offset="50%" stopColor="var(--mob-teal)" />
                                        <stop offset="100%" stopColor="transparent" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            {[12.5, 37.5, 62.5, 87.5].map((pos, i) => (
                                <div key={i} className={`mob-node-wrap-perf ${activeJunction === i ? 'active' : ''}`} style={{ left: `${pos}%` }}>
                                    <div className="vertical-connector-beam"></div>
                                    <div className="mob-node-junction">
                                        <div className="junction-inner"></div>
                                        <div className="junction-scanner"></div>
                                    </div>
                                    <span className="junction-label">STEP_{i + 1}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mob-milestones-grid">
                            {[
                                { tag: "01 // PROTOTYPE", title: "UX Blueprints", icon: <PiLayoutLight />, desc: "High-fidelity wireframes and interactive prototypes.", gradient: "linear-gradient(135deg, rgba(13, 181, 164, 0.08) 0%, rgba(37, 99, 235, 0.04) 100%)" },
                                { tag: "02 // ENGINEER", title: "Native Core", icon: <PiCodeLight />, desc: "Robust architecture with industrial-grade native code.", gradient: "linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(139, 92, 246, 0.04) 100%)" },
                                { tag: "03 // VALIDATE", title: "QA Dynamics", icon: <PiShieldCheckLight />, desc: "Rigorous testing across 500+ device profiles.", gradient: "linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(236, 72, 153, 0.04) 100%)" },
                                { tag: "04 // PUBLISH", title: "Global Launch", icon: <PiGlobeLight />, desc: "Surgical deployment to App Store and Play Store.", gradient: "linear-gradient(135deg, rgba(236, 72, 153, 0.08) 0%, rgba(13, 181, 164, 0.04) 100%)" }
                            ].map((step, i) => (
                                <div
                                    key={i}
                                    onMouseEnter={() => setActiveJunction(i)}
                                    onMouseLeave={() => setActiveJunction(null)}
                                >
                                    <InteractiveCard
                                        className="mob-milestone-card-perf"
                                        style={{
                                            background: `${step.gradient}, rgba(255, 255, 255, 0.85)`,
                                            backgroundBlendMode: 'normal, normal'
                                        }}
                                    >
                                        <div className="ms-watermark">{step.icon}</div>
                                        <div className="ms-content-perf">
                                            <div className="ms-icon-perf">{step.icon}</div>
                                            <span className="ms-tag-perf">{step.tag}</span>
                                            <h4>{step.title}</h4>
                                            <p>{step.desc}</p>
                                        </div>
                                        <div className="ms-border-effect"></div>
                                    </InteractiveCard>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 5. OPTIMIZATION COCKPIT --- */}
            <section className="mob-cockpit-section">
                <div className="container">
                    <div className="mob-cockpit-inner">
                        <SectionHeader
                            dark={true}
                            tag="04 // Performance"
                            title="Optimization Cockpit."
                            desc="We calibrate every build for extreme efficiency, ensuring minimal battery drain and maximum fluidity."
                        />
                        <div className="mob-cockpit-stats">
                            {[
                                { label: "Frame Rate", value: "60 FPS", icon: <PiLightningLight />, chart: [40, 70, 90, 80, 100] },
                                { label: "Cold Start", value: "< 1.2s", icon: <PiCpuLight />, chart: [100, 80, 60, 40, 20] },
                                { label: "Battery Index", value: "A+", icon: <PiDeviceMobileLight />, chart: [30, 40, 55, 75, 95] }
                            ].map((stat, i) => (
                                <InteractiveCard key={i} className="mob-stat-card-perf">
                                    <div className="stat-telemetry-box">
                                        <div className="stat-icon-wrap">
                                            {stat.icon}
                                            <div className="stat-glow"></div>
                                        </div>
                                        <div className="telemetry-oscilloscope">
                                            <svg viewBox="0 0 100 40" preserveAspectRatio="none">
                                                <motion.path
                                                    d="M0 20 Q10 5 20 20 T40 20 T60 20 T80 20 T100 20"
                                                    fill="none"
                                                    stroke="var(--mob-teal)"
                                                    strokeWidth="2"
                                                    initial={{ pathLength: 0, opacity: 0 }}
                                                    whileInView={{ pathLength: 1, opacity: 0.8 }}
                                                    animate={{
                                                        d: [
                                                            "M0 20 Q10 5 20 20 T40 20 T60 20 T80 20 T100 20",
                                                            "M0 20 Q10 35 20 20 T40 20 T60 20 T80 20 T100 20",
                                                            "M0 20 Q10 5 20 20 T40 20 T60 20 T80 20 T100 20"
                                                        ]
                                                    }}
                                                    transition={{
                                                        pathLength: { duration: 1.5, ease: "easeOut" },
                                                        d: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                                                    }}
                                                />
                                            </svg>
                                        </div>
                                        <motion.div
                                            className="diagnostic-readout"
                                            animate={{ opacity: [0.4, 1, 0.4] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            {Math.floor(Math.random() * 9999).toString().padStart(4, '0')}
                                        </motion.div>
                                    </div>
                                    <div className="stat-info-perf">
                                        <span className="stat-val-perf">{stat.value}</span>
                                        <p className="stat-label-perf">{stat.label}</p>
                                    </div>
                                    <div className="stat-scan-line"></div>
                                </InteractiveCard>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 6. FINAL CTA --- */}
            <BespokeCTA
                tag="READY TO LAUNCH"
                title={["Build Your Next", "Mobile Masterpiece"]}
                desc="Transform your vision into a high-performance mobile app. Our team delivers native iOS and Android experiences that users love and businesses trust."
                buttonText="Start Your Project"
                visuals={
                    <>
                        <div className="bespoke-card" style={{ width: '280px', left: '0%', bottom: '5%', zIndex: 3, boxShadow: '0 20px 80px rgba(0,0,0,0.8)' }}>
                            <div className="bespoke-card-header">
                                <div className="header-spinner"></div>
                                <span>Mobile Build Engine</span>
                                <div className="bespoke-card-meta">iOS/Droid</div>
                            </div>
                            <div className="bespoke-card-body">
                                <p className="greeting">Awaiting Binary...</p>
                                <div style={{ height: '8px', background: '#1a1a1a', borderRadius: '4px', overflow: 'hidden', marginBottom: '12px' }}>
                                    <motion.div
                                        style={{ height: '100%', background: '#0db5a4', width: '75%' }}
                                        animate={{ x: ['-100%', '0%'] }}
                                        transition={{ duration: 2, ease: "easeOut" }}
                                    />
                                </div>
                                <p style={{ fontSize: '0.75rem', marginBottom: 0 }}>Compiling native assets for production release.</p>
                            </div>
                        </div>
                        <div className="bespoke-card" style={{ width: '200px', right: '0%', top: '5%', zIndex: 2, boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }}>
                            <div className="bespoke-card-header">
                                <div className="header-spinner"></div>
                                <span>UX Analytics</span>
                            </div>
                            <div className="bespoke-card-body">
                                <span className="bespoke-card-section-label">User Retention</span>
                                <div className="bespoke-tag-group">
                                    <span className="bespoke-mini-tag">+14% Growth</span>
                                </div>
                                <span className="bespoke-card-section-label">Session Heatmap</span>
                                <div className="bespoke-card-highlight-box">
                                    Active Swiping Path
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
                    opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
                }}
            >
                <div className="gauge-track">
                    <motion.div
                        className="gauge-fill"
                        style={{ scaleY: scrollYProgress }}
                    />
                </div>
                <div className="gauge-readout">
                    <motion.span>
                        {useTransform(scrollYProgress, (val) => `0x${Math.floor(val * 255).toString(16).toUpperCase().padStart(2, '0')}`)}
                    </motion.span>
                </div>
            </motion.div>
        </div>
    );
};

export default MobileAppDevelopment;
