import React, { useEffect, useRef, useState } from 'react';
import {
    motion, useScroll, useTransform, useSpring,
    useMotionValue, useAnimationFrame
} from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    PiArrowRightBold, PiBrainLight, PiMonitorLight,
    PiChartLineUpLight, PiShieldCheckLight, PiCpuLight,
    PiCodeBold, PiPlugsConnectedLight, PiLightningLight,
    PiInfinityLight, PiGlobeLight, PiUserCircleLight,
    PiCaretRightBold, PiCircuitryLight, PiFingerprintLight
} from 'react-icons/pi';
import {
    SiTensorflow, SiPytorch, SiNvidia, SiHuggingface,
    SiDatabricks, SiPython, SiOpenai
} from 'react-icons/si';
import { TbCircleCheck, TbDna2 } from 'react-icons/tb';
import { FaArrowRight } from 'react-icons/fa';
import BespokeCTA from '../../components/common/BespokeCTA';
import './AIMachineLearning.css';

// Neural Network Background Visualization Core
const NeuralNetwork = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        let animationFrameId;

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            createParticles();
        };

        const createParticles = () => {
            particles = [];
            const count = Math.floor(width * height / 12000); // Increased density
            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    size: Math.random() * 2.5 + 1.5,
                    color: `rgba(13, 181, 164, ${Math.random() * 0.5 + 0.4})` // Higher opacity
                });
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw connections first
            ctx.lineWidth = 0.8;

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                // Move
                p.x += p.vx;
                p.y += p.vy;

                // Bounce
                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                // Draw particle
                ctx.fillStyle = p.color;
                ctx.shadowBlur = 5;
                ctx.shadowColor = "rgba(13, 181, 164, 0.5)";
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0;

                // Connect
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 140) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(13, 181, 164, ${0.4 * (1 - dist / 140)})`; // Stronger lines
                        ctx.stroke();
                    }
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="neural-canvas" />;
};

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
    const rotateX = useSpring(useTransform(y, [-100, 100], [5, -5])); // Reduced rotation for subtlety
    const rotateY = useSpring(useTransform(x, [-100, 100], [-5, 5]));

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const spotlightBg = useTransform(
        [mouseX, mouseY],
        ([cx, cy]) => `radial-gradient(600px circle at ${cx}px ${cy}px, rgba(255,255,255,0.15), transparent 40%)`
    );

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
            <div className="card-border-scanner"></div>
            <div className="card-inner-perspective" style={{ transform: "translateZ(30px)" }}>
                {children}
            </div>
        </motion.div>
    );
};

const SectionHeader = ({ tag, title, desc, align = 'center', dark = false }) => (
    <div style={{
        textAlign: align,
        marginBottom: '80px',
        maxWidth: align === 'center' ? '800px' : '700px',
        margin: align === 'center' ? '0 auto 80px' : '0 0 80px',
        position: 'relative',
        zIndex: 2
    }}>
        <motion.div
            className="text-gradient-ultimate"
            style={{
                fontWeight: 900,
                fontSize: '0.9rem',
                letterSpacing: '4px',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                justifyContent: align === 'center' ? 'center' : 'flex-start'
            }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <span className="pulse-dot"></span> {tag}
        </motion.div>
        <motion.h2
            className="cta-title-ultimate"
            style={{ color: dark ? 'white' : 'var(--ai-slate-deep)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
        >
            {title}
        </motion.h2>
        <motion.p
            style={{ fontSize: '1.25rem', color: dark ? 'rgba(255,255,255,0.6)' : 'var(--ai-slate-light)', lineHeight: 1.6 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
        >
            {desc}
        </motion.p>
    </div>
);

const AIMachineLearning = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { scrollYProgress } = useScroll();
    const smoothY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const heroBgScale = useTransform(smoothY, [0, 1], [1, 1.2]);

    const features = [
        { title: "Generative AI & LLM-Ops", desc: "Production-grade Large Language Models orchestrated via RAG Pipelines for institutional knowledge sovereignty.", icon: <PiBrainLight />, span: "span-large" },
        { title: "Edge Cognition", desc: "Sub-millisecond inference architectures for specialized hardware.", icon: <PiCpuLight />, span: "span-small" },
        { title: "Vectorized Intel", desc: "Transforming raw temporal data into predictive decision streams.", icon: <PiChartLineUpLight />, span: "span-small" },
        { title: "Multi-Modal Scene Vision", desc: "Advanced spatial intelligence for industrial scene understanding and object tracking.", icon: <PiMonitorLight />, span: "span-large" }
    ];

    const apps = [
        { title: "Predictive Maintenance", desc: "Anticipating failure states via LSTM-based neural forecasting.", icon: <PiLightningLight /> },
        { title: "Sovereign Chatbots", desc: "Secure data-insulated knowledge retrieval interfaces.", icon: <PiGlobeLight /> },
        { title: "Supply Chain Swarms", desc: "Agentic routing logic for complex logistical networks.", icon: <PiInfinityLight /> },
        { title: "Risk Intelligence", desc: "Real-time algorithmic anomaly detection at scale.", icon: <PiShieldCheckLight /> }
    ];

    return (
        <div className="ai-page">
            {/* Cognitive Hero Section */}
            <header className="hero-ultimate">
                <div className="hero-bg-layer">
                    <NeuralNetwork />
                    <div className="hero-vignette"></div>
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <div className="hero-split-ai">

                        {/* LEFT COLUMN: TEXT CONTENT */}
                        <div className="hero-content-ai">
                            <motion.div
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    background: 'rgba(255,255,255,0.9)',
                                    backdropFilter: 'blur(10px)',
                                    color: 'var(--ai-slate-deep)',
                                    padding: '10px 24px',
                                    borderRadius: '100px',
                                    fontSize: '0.85rem',
                                    marginBottom: '32px',
                                    fontWeight: 800,
                                    border: '1px solid rgba(13, 181, 164, 0.2)',
                                    boxShadow: '0 10px 30px rgba(13, 181, 164, 0.15)'
                                }}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                            >
                                <TbCircleCheck color="var(--ai-teal)" size={18} />
                                <span style={{ letterSpacing: '2px' }}>NEXT-GEN COGNITIVE SYSTEMS</span>
                            </motion.div>

                            <motion.h1
                                className="hero-title-ultimate"
                                style={{ textAlign: 'left', fontSize: 'clamp(3.5rem, 6vw, 5rem)', lineHeight: 1.1, marginBottom: '24px' }}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.8 }}
                            >
                                Build The <br />
                                <span className="text-gradient-ultimate">Intelligence System</span>
                            </motion.h1>

                            <motion.p
                                style={{
                                    fontSize: '1.25rem',
                                    color: 'var(--ai-slate-light)',
                                    lineHeight: 1.6,
                                    maxWidth: '600px',
                                    marginBottom: '40px',
                                    textAlign: 'left'
                                }}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            >
                                Shapesway architects high-fidelity Machine Learning ecosystems.
                                From sovereign RAG architectures to industrial-grade neural deployment.
                            </motion.p>

                            <motion.div
                                style={{ display: 'flex', gap: '20px', alignItems: 'center' }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <MagneticButton to="/contact" className="btn btn-primary" style={{ padding: '20px 48px', borderRadius: '100px', fontSize: '1.1rem', boxShadow: '0 20px 40px rgba(13, 181, 164, 0.3)' }}>
                                    Initialize Consultation <PiArrowRightBold />
                                </MagneticButton>
                            </motion.div>
                        </div>

                        {/* RIGHT COLUMN: AI VISUALS */}
                        <div className="hero-visual-ai">
                            <motion.div
                                className="ai-core-visual"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            >
                                {/* Central Brain/Core */}
                                <div className="ai-core-orb"></div>
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                    style={{
                                        position: 'absolute', inset: '40px', border: '1px dashed rgba(13, 181, 164, 0.3)', borderRadius: '50%'
                                    }}
                                />
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                    style={{
                                        position: 'absolute', inset: '60px', border: '2px solid rgba(13, 181, 164, 0.1)', borderRadius: '50%', borderLeftColor: 'transparent', borderRightColor: 'transparent'
                                    }}
                                />

                                <div style={{
                                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                                    fontSize: '5rem', color: 'var(--ai-teal)', filter: 'drop-shadow(0 0 20px rgba(13, 181, 164, 0.4))'
                                }}>
                                    <PiBrainLight />
                                </div>

                                {/* Floating Data Cards */}
                                <motion.div
                                    className="ai-data-card"
                                    style={{ top: '20%', right: '-40px' }}
                                    animate={{ y: [-10, 10, -10] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <div className="ai-icon-box"><PiChartLineUpLight /></div>
                                    <div>
                                        <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase' }}>Predictive</div>
                                        <div>98.5% Accuracy</div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="ai-data-card"
                                    style={{ bottom: '20%', left: '-60px' }}
                                    animate={{ y: [10, -10, 10] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                >
                                    <div className="ai-icon-box"><PiCircuitryLight /></div>
                                    <div>
                                        <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase' }}>Processing</div>
                                        <div>Neural Neural Net</div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="ai-data-card"
                                    style={{ top: '-40px', left: '20%' }}
                                    animate={{ y: [-5, 5, -5] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                >
                                    <div className="ai-icon-box"><PiFingerprintLight /></div>
                                    <div>ID Verification</div>
                                </motion.div>

                            </motion.div>
                        </div>

                    </div>
                </div>
            </header>

            {/* Strategic Overview Module */}
            <section className="overview-ultimate">
                <div className="container">
                    <div className="glass-panel-ultimate scanning-border">
                        <div className="neo-split" style={{ alignItems: 'center', gap: '100px' }}>
                            <div style={{ flex: 1.3 }}>
                                <SectionHeader
                                    align="left"
                                    tag="01 // Overview"
                                    title="Strategic Logic Architectures."
                                    desc="We don't just implement models; we architect cognitive ecosystems. Our approach transforms institutional knowledge into autonomous value through vectorized reasoners and secure data insulation."
                                />
                                <div className="tech-tags-cloud">
                                    {["Neural Networks", "LLMs", "Computer Vision", "Predictive Analytics", "Deep Learning"].map((t, i) => (
                                        <span key={i} className="tech-pill">{t}</span>
                                    ))}
                                </div>
                            </div>
                            <div style={{ flex: 1, display: 'grid', gap: '40px' }}>
                                {[
                                    { t: "Inference Precision", v: "99.8%", b: "99.8%" },
                                    { t: "Knowledge Fidelity", v: "High", b: "95%" },
                                    { t: "Deployment Speed", v: "Rapid", b: "90%" }
                                ].map((stat, i) => (
                                    <div key={i} className="stat-bar-group">
                                        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 800, marginBottom: '15px' }}>
                                            <span style={{ color: 'var(--ai-slate-deep)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                <PiCircuitryLight className="spin-slow" /> {stat.t}
                                            </span>
                                            <span className="text-gradient-ultimate">{stat.v}</span>
                                        </div>
                                        <div className="progress-track">
                                            <motion.div
                                                className="progress-fill"
                                                width={stat.b}
                                                whileInView={{ width: stat.b }}
                                                transition={{ duration: 1.5, delay: i * 0.1 }}
                                                viewport={{ once: true }}
                                            >
                                                <div className="progress-glow"></div>
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Capabilities Matrix: Bento Architecture */}
            <section className="features-ultimate">
                <div className="container">
                    <SectionHeader
                        tag="02 // Capabilities"
                        title="Modular Intelligence Flow."
                        desc="Scalable neural blocks designed for complex industrial orchestration."
                    />
                    <div className="bento-grid-ultimate">
                        {features.map((f, i) => (
                            <InteractiveCard
                                key={i}
                                className="bento-card-ultimate"
                                span={f.span}
                            >
                                <div className="card-grad-overlay"></div>
                                <div style={{ position: 'relative', zIndex: 2 }}>
                                    <div className="card-icon-quantum">
                                        {f.icon}
                                        <div className="icon-ring"></div>
                                    </div>
                                    <h3>{f.title}</h3>
                                    <p>{f.desc}</p>
                                    <div className="card-action-quantum">
                                        VIEW TECHNICAL SPECS <PiCaretRightBold size={14} />
                                    </div>
                                </div>
                            </InteractiveCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industrial Applications: Prism Layer */}
            <section className="apps-ultimate vantablack-prism-section">
                <div className="matrix-rain-overlay"></div>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="neo-split" style={{ alignItems: 'center', gap: '80px', padding: '120px 0' }}>
                        <div style={{ flex: 1 }}>
                            <SectionHeader
                                align="left"
                                dark={true}
                                tag="03 // Impact"
                                title="Neural Velocity in Production."
                                desc="Our industrial Machine Learning ecosystem is engineered for absolute resilience. We move beyond abstract theory, deploying sovereign agentic swarms and high-fidelity neural forecasting."
                            />

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                style={{ marginTop: '-20px' }}
                            >
                                <MagneticButton to="/contact" className="btn-ghost-brand" style={{ padding: '16px 40px', borderRadius: '100px', fontSize: '1.1rem' }}>
                                    Initialize Consultation <PiArrowRightBold />
                                </MagneticButton>
                            </motion.div>
                        </div>

                        <div style={{ flex: 1.6, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
                            {apps.map((app, i) => (
                                <InteractiveCard
                                    key={i}
                                    className="app-tile-prism"
                                >
                                    <div className="app-tile-icon-brand">
                                        {app.icon}
                                        <div className="icon-glow-brand"></div>
                                    </div>
                                    <div className="app-tile-content-prism">
                                        <h4>{app.title}</h4>
                                        <p>{app.desc}</p>
                                    </div>
                                </InteractiveCard>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Engineering Stack & Ecosystem Labs */}
            <section className="tech-ultimate">
                <div className="container">
                    <SectionHeader
                        tag="04 // The Stack"
                        title="Authorized Technology Stack."
                        desc="World-class engineering infrastructure optimized for high-fidelity intelligence."
                    />
                    <div className="tech-grid-ultimate">
                        {[
                            { icon: <SiTensorflow />, name: "TensorFlow" },
                            { icon: <SiPytorch />, name: "PyTorch" },
                            { icon: <SiNvidia />, name: "NVIDIA CUDA" },
                            { icon: <SiHuggingface />, name: "Hugging Face" },
                            { icon: <SiDatabricks />, name: "Databricks" },
                            { icon: <SiOpenai />, name: "OpenAI Labs" },
                            { icon: <SiPython />, name: "Python Core" }
                        ].map((tech, i) => (
                            <motion.div
                                key={i}
                                className="tech-item-ultimate"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                            >
                                <div className="tech-icon-wrapper">{tech.icon}</div>
                                <div className="tech-name">{tech.name}</div>
                                <div className="tech-status-dot"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Human-Centered Cognitive Interfaces */}
            <section className="ux-ultimate">
                <div className="container">
                    <div className="cockpit-view">
                        <SectionHeader
                            dark={true}
                            tag="05 // Human-AI Interface"
                            title="Empowering the User Flow."
                            desc="We design the human side of AI, ensuring complex neural outputs are transformed into intuitive, actionable executive foresight."
                        />
                        <div className="ux-grid-prism">
                            {[
                                {
                                    icon: <PiUserCircleLight size={50} />,
                                    title: "Cognitive Interactivity",
                                    desc: "Sub-millisecond response visualizers that bridge the human-machine gap with real-time feedback loops."
                                },
                                {
                                    icon: <PiCodeBold size={50} />,
                                    title: "Algorithmic Transparency",
                                    desc: "Explainable AI (XAI) layers that provide clear, auditable logic for every tactical neural decision."
                                },
                                {
                                    icon: <PiLightningLight size={50} />,
                                    title: "Executive Foresight",
                                    desc: "Transforming raw inference data into predictive strategic narratives for institutional leadership."
                                }
                            ].map((pillar, idx) => (
                                <InteractiveCard
                                    key={idx}
                                    className="ux-pillar-card"
                                >
                                    <div className="pillar-icon-wrap">
                                        {pillar.icon}
                                        <div className="pillar-glow"></div>
                                    </div>
                                    <div className="pillar-content">
                                        <h4>{pillar.title}</h4>
                                        <p>{pillar.desc}</p>
                                    </div>
                                </InteractiveCard>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Roadmap & Infrastructure Horizon */}
            <section className="future-ultimate horizon-prism">
                <div className="container">
                    <SectionHeader
                        tag="06 // Roadmap"
                        title="The Autonomous Horizon."
                        desc="Engineering the future of sovereign intelligence systems."
                    />

                    <div className="cyber-roadmap-container">
                        <div className="cyber-roadmap-line">
                            {[0, 33, 66, 100].map((pos, i) => (
                                <div key={i} className="cyber-node-wrapper" style={{ left: `${pos}%` }}>
                                    <motion.div
                                        className="cyber-node-pulse"
                                        animate={{
                                            scale: [1, 2, 1],
                                            opacity: [0.8, 0, 0.8]
                                        }}
                                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                                    />
                                    <div className="cyber-node-core"></div>
                                </div>
                            ))}
                        </div>

                        <div className="cyber-milestones-grid">
                            {[
                                { t: "PRESENT", d: "RAG & LLM Orchestration", icon: <PiBrainLight /> },
                                { t: "PHASE II", d: "Multi-Agent Swarms", icon: <PiInfinityLight /> },
                                { t: "PHASE III", d: "Cognitive Edge Hardware", icon: <PiCpuLight /> },
                                { t: "BEYOND", d: "Sovereign AGI Fragments", icon: <PiGlobeLight /> }
                            ].map((step, i) => (
                                <motion.div
                                    key={i}
                                    className="milestone-glass-card"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <div className="milestone-icon">{step.icon}</div>
                                    <div className="milestone-content">
                                        <span className="milestone-tag">{step.t}</span>
                                        <h4>{step.d}</h4>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 8. CTA SECTION (HOME SYNC) --- */}
            <BespokeCTA
                tag="INITIALIZE THE FUTURE"
                title={["Architect Your Future with", "Shapesway Labs."]}
                desc="Join the elite global institutions that have scaled with our sovereign intelligence architectures."
                buttonText="Connect with Engineers"
                visuals={
                    <>
                        <div className="bespoke-card" style={{ width: '310px', left: '0%', bottom: '5%', zIndex: 3, boxShadow: '0 20px 80px rgba(0,0,0,0.8)' }}>
                            <div className="bespoke-card-header">
                                <div className="header-spinner"></div>
                                <span>Neural Network Node</span>
                                <div className="bespoke-card-meta">GPT-4.5</div>
                            </div>
                            <div className="bespoke-card-body">
                                <p className="greeting">Context Ingestion...</p>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '4px', marginBottom: '15px' }}>
                                    {[...Array(10)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            style={{ height: '6px', background: '#0db5a4', borderRadius: '1px' }}
                                            animate={{ opacity: [0.2, 1, 0.2] }}
                                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                                        />
                                    ))}
                                </div>
                                <p style={{ fontSize: '0.75rem', marginBottom: 0 }}>Mapping institutional knowledge swarms for agentic reasoning.</p>
                            </div>
                        </div>
                        <div className="bespoke-card" style={{ width: '220px', right: '0%', top: '5%', zIndex: 2, boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }}>
                            <div className="bespoke-card-header">
                                <div className="header-spinner"></div>
                                <span>Inference Stats</span>
                            </div>
                            <div className="bespoke-card-body">
                                <span className="bespoke-card-section-label">Token Velocity</span>
                                <div className="bespoke-tag-group">
                                    <span className="bespoke-mini-tag">120 t/s</span>
                                    <span className="bespoke-mini-tag">Stable</span>
                                </div>
                                <span className="bespoke-card-section-label">Model Health</span>
                                <div className="bespoke-card-highlight-box">
                                    Precision: 99.8%
                                </div>
                            </div>
                        </div>
                    </>
                }
            />
        </div>
    );
};

export default AIMachineLearning;
