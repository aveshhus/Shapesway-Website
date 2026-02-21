import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import {
    FiCode, FiCloud, FiActivity, FiArrowRight,
    FiServer, FiMaximize, FiRepeat, FiCheckCircle, FiGlobe, FiDatabase, FiShield,
    FiChevronLeft, FiChevronRight
} from 'react-icons/fi';
import {
    PiCpu, PiStack, PiLightning, PiShieldCheckered, PiBrowser, PiGraph,
    PiShieldCheckFill, PiPulse
} from 'react-icons/pi';
import {
    SiReact, SiNodedotjs, SiPython, SiPostgresql, SiDocker, SiKubernetes,
    SiAmazonwebservices, SiGooglecloud, SiTailwindcss,
    SiTypescript, SiFlutter, SiMongodb, SiFirebase, SiAngular, SiVuedotjs,
    SiNextdotjs
} from 'react-icons/si';
import './Technology.css';

// 1. Counter Component for Premium Metrics
const CounterV3 = ({ value, label, duration = 3 }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (hasAnimated) {
            const cleanValue = value.toString().replace(/[^0-9.]/g, '');
            const end = parseFloat(cleanValue);

            if (isNaN(end) || end <= 0) {
                setCount(cleanValue);
                return;
            }

            const totalMiliseconds = duration * 1000;
            const steps = 100;
            const stepTime = totalMiliseconds / steps;
            const increment = end / steps;

            let current = 0;
            const timer = setInterval(() => {
                current += 1;
                const next = Math.min(increment * current, end);

                if (end % 1 !== 0) {
                    setCount(next.toFixed(1));
                } else {
                    setCount(Math.floor(next));
                }

                if (current >= steps) clearInterval(timer);
            }, stepTime);

            return () => clearInterval(timer);
        }
    }, [hasAnimated, value, duration]);

    const suffix = value.toString().replace(/[0-9.]/g, '');

    return (
        <motion.div
            className="metric-v3"
            onViewportEnter={() => setHasAnimated(true)}
            viewport={{ once: true, amount: 0.1 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
            <div className="val">{count}{suffix}</div>
            <div className="lab">{label}</div>
        </motion.div>
    );
};

// 2. Bento Card with Spotlight Effect
// 2. Bento Card with Spotlight Effect
const BentoCard = ({ icon, title, desc, size = "small", theme = "" }) => {
    const cardRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <motion.div
            ref={cardRef}
            className={`bento-item ${size} ${theme}`}
            onMouseMove={handleMouseMove}
            style={{
                "--mouse-x": `${mousePos.x}px`,
                "--mouse-y": `${mousePos.y}px`,
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="bento-spotlight"></div>
            <div className="bento-card-header">
                <div className="bento-icon-wrap">
                    <div className="bento-icon">{icon}</div>
                    <div className="icon-pulse"></div>
                </div>
                <div className="bento-header-info">
                    <div className="bento-badge">
                        <span className="dot"></span>
                        <span className="label">ACTIVE STACK</span>
                    </div>
                    <h3>{title}</h3>
                </div>
            </div>
            <div className="bento-content-wrap">
                <p>{desc}</p>
                <div className="tech-specs-grid">
                    <div className="spec-item">
                        <span className="val">99.9%</span>
                        <span className="lab">uptime</span>
                    </div>
                    <div className="spec-item">
                        <span className="val">20ms</span>
                        <span className="lab">latency</span>
                    </div>
                </div>
            </div>
            <button className="bento-action-btn" onClick={() => window.location.href = '/contact'}>
                <span>Access Terminal</span>
                <FiArrowRight />
                <div className="btn-glow"></div>
            </button>
        </motion.div>
    );
};

// 3. Main Technology Component
const Technology = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    const stagger = {
        visible: { transition: { staggerChildren: 0.1 } }
    };

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="tech-page-v2">
            {/* Scroll Progress Bar */}
            <motion.div className="scroll-progress-bar" style={{
                scaleX,
                position: 'fixed',
                top: 0, left: 0, right: 0,
                height: '4px',
                background: 'var(--tech-primary)',
                zIndex: 1000,
                transformOrigin: '0%'
            }} />

            {/* 1. HERO SECTION */}
            <section className="tech-hero-v2">
                <div className="hero-mesh"></div>
                <div className="hero-glow"></div>
                <div className="tech-container">
                    <motion.div
                        className="tech-hero-content"
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                    >
                        <motion.h1 variants={fadeInUp}>
                            Architectural <br />
                            <span className="text-highlight">Excellence Simplified</span>
                        </motion.h1>
                        <motion.p variants={fadeInUp}>
                            We transcend standard development. Shapesway builds elite, self-evolving
                            digital ecosystems that turn technical complexity into your most
                            powerful competitive advantage.
                        </motion.p>
                        <motion.div className="hero-cta-group" variants={fadeInUp}>
                            <a href="#powerhouse" className="tech-btn tech-btn-primary">
                                Launch Project
                            </a>
                            <a href="/contact" className="tech-btn tech-btn-secondary">
                                View Capabilities
                            </a>
                        </motion.div>
                        <motion.div className="scroll-indicator" variants={fadeInUp}>
                            <FiActivity />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 2. CORE POWERHOUSE - KINETIC CAROUSEL */}
            <section id="powerhouse" className="tech-powerhouse">
                <div className="tech-container">
                    <div className="section-head-v2">
                        <span className="section-tag-v2">Proprietary Core</span>
                        <h2>The Powerhouse Engine</h2>
                    </div>

                    <div className="kinetic-carousel-wrap">
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            speed={1200} // Snappy, premium transition
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            coverflowEffect={{
                                rotate: 10, // Slight rotation for 3D feel
                                stretch: -20, // Overlap cards slightly
                                depth: 200,
                                modifier: 1,
                                slideShadows: false,
                            }}
                            onInit={(swiper) => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                                swiper.navigation.init();
                                swiper.navigation.update();
                            }}
                            navigation={true}
                            modules={[Autoplay, EffectCoverflow, Navigation, Pagination]}
                            className="tech-swiper"
                        >
                            <SwiperSlide className="tech-slide">
                                <BentoCard
                                    size="carousel"
                                    theme="theme-teal"
                                    icon={<PiCpu />}
                                    title="Infinite Scalability"
                                    desc="We deploy auto-adaptive cloud architectures that breathe with your traffic, eliminating downtime and optimizing cost-efficiency through serverless precision."
                                />
                            </SwiperSlide>
                            <SwiperSlide className="tech-slide">
                                <BentoCard
                                    size="carousel"
                                    theme="theme-blue"
                                    icon={<PiStack />}
                                    title="Modern Core Stacks"
                                    desc="Building on the world's most robust frameworks—Next.js, Node.js, and Go—to ensure your codebase remains agile, maintainable, and future-proof."
                                />
                            </SwiperSlide>
                            <SwiperSlide className="tech-slide">
                                <BentoCard
                                    size="carousel"
                                    theme="theme-purple"
                                    icon={<PiLightning />}
                                    title="Real-Time Velocity"
                                    desc="Our 'Zero-Lag' engineering philosophy ensures sub-second interactions across all platforms, leveraging edge-computing to bring data closer to your users."
                                />
                            </SwiperSlide>
                            <SwiperSlide className="tech-slide">
                                <BentoCard
                                    size="carousel"
                                    theme="theme-orange"
                                    icon={<PiShieldCheckered />}
                                    title="Hardened Sovereignty"
                                    desc="Protecting your digital assets with enterprise-grade encryption and zero-trust protocols, ensuring complete data ownership and security compliance."
                                />
                            </SwiperSlide>
                            {/* Duplicates for seamless infinity loop */}
                            <SwiperSlide className="tech-slide">
                                <BentoCard
                                    size="carousel"
                                    theme="theme-teal"
                                    icon={<PiCpu />}
                                    title="Infinite Scalability"
                                    desc="We deploy auto-adaptive cloud architectures that breathe with your traffic, eliminating downtime and optimizing cost-efficiency through serverless precision."
                                />
                            </SwiperSlide>
                            <SwiperSlide className="tech-slide">
                                <BentoCard
                                    size="carousel"
                                    theme="theme-blue"
                                    icon={<PiStack />}
                                    title="Modern Core Stacks"
                                    desc="Building on the world's most robust frameworks—Next.js, Node.js, and Go—to ensure your codebase remains agile, maintainable, and future-proof."
                                />
                            </SwiperSlide>
                            <SwiperSlide className="tech-slide">
                                <BentoCard
                                    size="carousel"
                                    theme="theme-purple"
                                    icon={<PiLightning />}
                                    title="Real-Time Velocity"
                                    desc="Our 'Zero-Lag' engineering philosophy ensures sub-second interactions across all platforms, leveraging edge-computing to bring data closer to your users."
                                />
                            </SwiperSlide>
                            <SwiperSlide className="tech-slide">
                                <BentoCard
                                    size="carousel"
                                    theme="theme-orange"
                                    icon={<PiShieldCheckered />}
                                    title="Hardened Sovereignty"
                                    desc="Protecting your digital assets with enterprise-grade encryption and zero-trust protocols, ensuring complete data ownership and security compliance."
                                />
                            </SwiperSlide>
                        </Swiper>

                        {/* High-Tech Navigation */}
                        <div className="carousel-controls">
                            <button ref={prevRef} className="carousel-nav-btn carousel-nav-prev">
                                <FiChevronLeft />
                            </button>
                            <div className="carousel-status">
                                <span className="status-line"></span>
                                <span className="status-label">EXPLORE STACK</span>
                                <span className="status-line"></span>
                            </div>
                            <button ref={nextRef} className="carousel-nav-btn carousel-nav-next">
                                <FiChevronRight />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. FULL STACK DOMINATION - PREMIUM TABS */}
            <section className="tech-stack-domination">
                <div className="tech-container">
                    <div className="section-head-v2">
                        <span className="section-tag-v2">Infrastructure</span>
                        <h2>Global Tech Dominion</h2>
                    </div>

                    <div className="stack-categories-v3">
                        {/* Core Stack */}
                        <div className="stack-pad">
                            <h3><FiCode /> Engine Core</h3>
                            <div className="tech-grid-v3">
                                {[
                                    { name: "Next.js 14", icon: <SiNextdotjs />, level: "Edge Ready" },
                                    { name: "TypeScript", icon: <SiTypescript />, level: "Typed Safety" },
                                    { name: "Framer Motion", icon: <FiActivity />, level: "Liquid UI" }
                                ].map((tech, i) => (
                                    <div className="tech-item-row" key={i}>
                                        <div className="tech-icon-circle">{tech.icon}</div>
                                        <div className="tech-info">
                                            <h4>{tech.name}</h4>
                                            <span>{tech.level}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Intelligence Layer */}
                        <div className="stack-pad">
                            <h3><FiServer /> Neural Layer</h3>
                            <div className="tech-grid-v3">
                                {[
                                    { name: "Node.js / Go", icon: <SiNodedotjs />, level: "High-TPS" },
                                    { name: "PostgreSQL", icon: <SiPostgresql />, level: "Atomic Data" },
                                    { name: "Python / AI", icon: <SiPython />, level: "Intelligence" }
                                ].map((tech, i) => (
                                    <div className="tech-item-row" key={i}>
                                        <div className="tech-icon-circle">{tech.icon}</div>
                                        <div className="tech-info">
                                            <h4>{tech.name}</h4>
                                            <span>{tech.level}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Global Infra */}
                        <div className="stack-pad">
                            <h3><FiCloud /> Resilience</h3>
                            <div className="tech-grid-v3">
                                {[
                                    { name: "AWS / Vercel", icon: <SiAmazonwebservices />, level: "Multi-Region" },
                                    { name: "Docker / K8s", icon: <SiKubernetes />, level: "Autonomic" },
                                    { name: "Terraform", icon: <FiMaximize />, level: "IaC Immutable" }
                                ].map((tech, i) => (
                                    <div className="tech-item-row" key={i}>
                                        <div className="tech-icon-circle">{tech.icon}</div>
                                        <div className="tech-info">
                                            <h4>{tech.name}</h4>
                                            <span>{tech.level}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. INNOVATION ENGINE */}
            <section className="innovation-engine">
                <div className="quantum-bg"></div>
                <div className="tech-container">
                    <div className="innovation-grid">
                        <motion.div
                            className="innovation-content"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="section-tag-v2">Shapesway R&D</span>
                            <h2>The Innovation <br />Launchpad</h2>
                            <p>
                                Shapesway isn't just a development partner; we are your technical
                                co-pilot. Our lab constantly iterates on emerging tech to ensure
                                you stay two steps ahead of the industry curve.
                            </p>
                            <div className="metrics-capsule">
                                <div className="capsule">
                                    <h4>40%</h4>
                                    <span>Faster Dev Cycles</span>
                                </div>
                                <div className="capsule">
                                    <h4>AI+</h4>
                                    <span>Intelligence Layer</span>
                                </div>
                            </div>
                        </motion.div>
                        <div className="innovation-visual">
                            <div className="quantum-core">
                                <div className="ring ring-1"></div>
                                <div className="ring ring-2"></div>
                                <div className="ring ring-3"></div>
                                <div className="core-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. RAPID FRAMEWORK - THE PATHWAY */}
            <section className="dev-framework">
                <div className="tech-container">
                    <div className="section-head-v2">
                        <span className="section-tag-v2">Process</span>
                        <h2>The Development Pathway</h2>
                    </div>

                    <div className="framework-path">
                        {[
                            { step: "01", title: "Technical Audit", desc: "Rigorous excavation of your existing architecture to identify growth bottlenecks and scalability vectors." },
                            { step: "02", title: "Sprint-Zero Ops", desc: "Engineering the foundation: Establishing secure CI/CD pipelines, container orchestration, and cloud staging." },
                            { step: "03", title: "Atomic Build", desc: "Rapid iterative development using our modular 'Design-to-Code' engine for high-fidelity component delivery." },
                            { step: "04", title: "Global Hardening", desc: "Stress-testing sub-second responses and implementing zero-trust security layers before final deployment." }
                        ].map((item, index) => (
                            <motion.div
                                className="path-step"
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="step-number">{item.step}</div>
                                <div className="step-card">
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. SECURITY & PERFORMANCE - THE VAULT */}
            <section className="security-performance">
                <div className="tech-container">
                    <div className="section-head-v2">
                        <span className="section-tag-v2">Reliability</span>
                        <h2>The Performance Vault</h2>
                    </div>

                    <div className="vault-grid">
                        <div className="vault-card">
                            <div className="vault-icon"><PiShieldCheckFill /></div>
                            <h4>Sovereign Security</h4>
                            <p>We deploy hardened, zero-trust environments with E2E encryption, ensuring your proprietary data remains your own—always protected, never exposed.</p>
                        </div>
                        <div className="vault-card">
                            <div className="vault-icon"><PiPulse /></div>
                            <h4>Autonomous Resilience</h4>
                            <p>Leveraging self-healing multi-region failovers on AWS and Vercel, Shapesway ensures your digital presence is bulletproof against any load or outage.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. IMPACT METRICS - THE DASHBOARD */}
            <section className="tech-metrics">
                <div className="tech-container">
                    <div className="metrics-dashboard">
                        <CounterV3 value="99.9%" label="Reliability" />
                        <CounterV3 value="3.5X" label="Faster Loads" />
                        <CounterV3 value="60%" label="Ops Efficiency" />
                        <CounterV3 value="24/7" label="Active Monitoring" />
                    </div>
                </div>
            </section>

            {/* 8. AGGRESSIVE CTA - THE FINALE */}
            <section className="tech-cta-final">
                <div className="tech-container">
                    <div className="cta-content-inner">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Power Your <br />Digital Evolution
                        </motion.h2>
                        <p>
                            Don't just launch software. Deploy a high-performance ecosystem
                            engineered for growth. Your partner in technical dominance awaits.
                        </p>
                        <a href="/contact" className="tech-btn tech-btn-primary">
                            Begin Transformation
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Technology;
