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
    SiTypescript, SiFlutter, SiMongodb, SiFirebase, SiAngular, SiVuedotjs
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
                            Engineering the <br />
                            <span className="text-highlight">Future Stacks</span>
                        </motion.h1>
                        <motion.p variants={fadeInUp}>
                            We architect high-performance digital ecosystems that scale infinitely.
                            Our technology selection is driven by one metric: Unfair Competitive Advantage.
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
                                    title="Elastic Ecosystems"
                                    desc="We architect self-healing infrastructures and serverless execution environments that automatically scale based on predictive demand, ensuring 99.999% availability even during massive traffic surges."
                                />
                            </SwiperSlide>
                            <SwiperSlide className="tech-slide">
                                <BentoCard
                                    size="carousel"
                                    theme="theme-blue"
                                    icon={<PiStack />}
                                    title="Atomic Architecture"
                                    desc="Leveraging microservices and modular design patterns to build complex systems from isolated, highly-reusable components that can be iterated or replaced without impacting the global state."
                                />
                            </SwiperSlide>
                            <SwiperSlide className="tech-slide">
                                <BentoCard
                                    size="carousel"
                                    theme="theme-purple"
                                    icon={<PiLightning />}
                                    title="Sub-ms Latency"
                                    desc="Aggressive edge-computing strategies and optimized data serialization protocols (like gRPC and Protobuf) to deliver virtually instantaneous responses across all global regions."
                                />
                            </SwiperSlide>
                            <SwiperSlide className="tech-slide">
                                <BentoCard
                                    size="carousel"
                                    theme="theme-orange"
                                    icon={<PiShieldCheckered />}
                                    title="Zero-Trust Security"
                                    desc="Integrated hardened security layers with E2E encryption, OIDC identity management, and automated penetration testing pipelines to protect enterprise-level data and maintain global compliance."
                                />
                            </SwiperSlide>
                            {/* Duplicates for seamless infinity loop */}
                            <SwiperSlide className="tech-slide">
                                <BentoCard
                                    size="carousel"
                                    theme="theme-teal"
                                    icon={<PiCpu />}
                                    title="Elastic Ecosystems"
                                    desc="We architect self-healing infrastructures and serverless execution environments that automatically scale based on predictive demand, ensuring 99.999% availability even during massive traffic surges."
                                />
                            </SwiperSlide>
                            <SwiperSlide className="tech-slide">
                                <BentoCard
                                    size="carousel"
                                    theme="theme-blue"
                                    icon={<PiStack />}
                                    title="Atomic Architecture"
                                    desc="Leveraging microservices and modular design patterns to build complex systems from isolated, highly-reusable components that can be iterated or replaced without impacting the global state."
                                />
                            </SwiperSlide>
                            <SwiperSlide className="tech-slide">
                                <BentoCard
                                    size="carousel"
                                    theme="theme-purple"
                                    icon={<PiLightning />}
                                    title="Sub-ms Latency"
                                    desc="Aggressive edge-computing strategies and optimized data serialization protocols (like gRPC and Protobuf) to deliver virtually instantaneous responses across all global regions."
                                />
                            </SwiperSlide>
                            <SwiperSlide className="tech-slide">
                                <BentoCard
                                    size="carousel"
                                    theme="theme-orange"
                                    icon={<PiShieldCheckered />}
                                    title="Zero-Trust Security"
                                    desc="Integrated hardened security layers with E2E encryption, OIDC identity management, and automated penetration testing pipelines to protect enterprise-level data and maintain global compliance."
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
                        {/* Frontend */}
                        <div className="stack-pad">
                            <h3><FiCode /> Frontend</h3>
                            <div className="tech-grid-v3">
                                {[
                                    { name: "React / Next.js", icon: <SiReact />, level: "Advanced" },
                                    { name: "TypeScript", icon: <SiTypescript />, level: "Core" },
                                    { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "Style" }
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

                        {/* Backend */}
                        <div className="stack-pad">
                            <h3><FiServer /> Backend</h3>
                            <div className="tech-grid-v3">
                                {[
                                    { name: "Node.js / Go", icon: <SiNodedotjs />, level: "Scalable" },
                                    { name: "PostgreSQL", icon: <SiPostgresql />, level: "Reliable" },
                                    { name: "MongoDB", icon: <SiMongodb />, level: "Flexible" }
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

                        {/* Cloud */}
                        <div className="stack-pad">
                            <h3><FiCloud /> Cloud Ops</h3>
                            <div className="tech-grid-v3">
                                {[
                                    { name: "AWS / Google Cloud / Azure", icon: <SiAmazonwebservices />, level: "Global Scale" },
                                    { name: "Kubernetes / Docker", icon: <SiKubernetes />, level: "Orchestration" },
                                    { name: "Terraform / Ansible", icon: <FiMaximize />, level: "IaC Automation" }
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
                            <span className="section-tag-v2">Advanced R&D</span>
                            <h2>The Quantum <br />Innovation Lab</h2>
                            <p>
                                We operate at the intersection of possibility and performance.
                                Our R&D team is focused on autonomous agentic systems and
                                next-generation data modeling.
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
                            { step: "01", title: "Technical Discovery", desc: "Rigorous deep-dive into your problem space to select the high-growth stack." },
                            { step: "02", title: "Architectural Blueprint", desc: "Modeling data flow and scalability vectors before a single line is written." },
                            { step: "03", title: "Rapid Prototyping", desc: "Deploying functional MVPs with enterprise-grade quality in record time." },
                            { step: "04", title: "Performance War-Room", desc: "Stress testing and infrastructure optimization for sub-second responses." }
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
                            <h4>Hardened Security</h4>
                            <p>Military-grade encryption protocols and zero-trust data access layers that ensure your intellectual property remains impenetrable.</p>
                        </div>
                        <div className="vault-card">
                            <div className="vault-icon"><PiPulse /></div>
                            <h4>99.9% Resilience</h4>
                            <p>Global multi-region failovers and automated backup systems that guarantee your services stay live, no matter the load.</p>
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
                            Ready for the <br />Unfair Advantage?
                        </motion.h2>
                        <p>
                            Stop settling for "industry standard". Build with the team
                            that redefines it. Your technological evolution starts now.
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
