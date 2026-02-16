import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, animate, useMotionValue } from 'framer-motion';
import { TbBulb, TbTarget, TbRocket, TbArrowRight, TbUsers, TbWorld, TbAward, TbHeart, TbCpu, TbDeviceMobile, TbChartBar, TbBrush } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import storyImage from '../../assets/shapesway-story.jpg';
import genesisImg from '../../assets/timeline-genesis.png';
import expansionImg from '../../assets/timeline-expansion.png';
import milestoneImg from '../../assets/timeline-milestone.png';
import futureImg from '../../assets/timeline-future.png';
import './NeoAbout.css';

// Counter Component for Stats
const Counter = ({ from, to, duration = 2, label, showPlus = true }) => {
    const count = useMotionValue(from);
    const [displayCount, setDisplayCount] = useState(from);

    useEffect(() => {
        const controls = animate(count, to, {
            duration: duration,
            onUpdate: (latest) => setDisplayCount(Math.floor(latest))
        });
        return controls.stop;
    }, [to]);

    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{
                fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                fontWeight: 900,
                color: 'white',
                lineHeight: 1,
                fontFamily: 'var(--font-heading)'
            }}>
                {displayCount}{showPlus && <span style={{ color: '#3B82F6' }}>+</span>}
            </div>
            <div style={{
                marginTop: '15px',
                color: '#94a3b8',
                textTransform: 'uppercase',
                letterSpacing: '3px',
                fontSize: '0.85rem',
                fontWeight: 700
            }}>
                {label}
            </div>
        </div>
    );
};

// Infinite Marquee Component
const Marquee = ({ items, speed = 20 }) => {
    return (
        <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', position: 'relative', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-50%" }}
                transition={{ repeat: Infinity, ease: "linear", duration: speed }}
                style={{ display: 'inline-flex', gap: '50px' }}
            >
                {[...items, ...items, ...items].map((item, i) => (
                    <div key={i} style={{ fontSize: '1.2rem', fontWeight: 600, color: '#64748b', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ width: '8px', height: '8px', background: '#3B82F6', borderRadius: '50%' }}></span>
                        {item}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

const Company = () => {
    const { scrollYProgress } = useScroll();
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

    // State for Full-Stack Mastery Interaction
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [hoveredFoundationIndex, setHoveredFoundationIndex] = useState(null);

    const masteryItems = [
        { id: 1, title: 'Web & CMS', icon: TbWorld, desc: 'We engineer high-performance custom websites and scalable CMS solutions, specializing in WordPress, Shopify, and enterprise-grade React/Next.js architectures that drive engagement and SEO.', start: '#0db5a4', end: '#3B82F6' },
        { id: 2, title: 'Mobile Apps', icon: TbDeviceMobile, desc: 'Our team delivers stunning, native-performance iOS & Android applications using Flutter and React Native, ensuring seamless user experiences across all devices with robust backend integration.', start: '#8B5CF6', end: '#EC4899' },
        { id: 3, title: 'Business Software', icon: TbChartBar, desc: 'Streamline operations with our tailored CRM, ERP, and Accounting software. We build intuitive tools that automate complex workflows, reporting, and data management for total efficiency.', start: '#F97316', end: '#EF4444' },
        { id: 4, title: 'Digital Growth', icon: TbBrush, desc: 'From distinctive Brand Identity and UI/UX Design to data-driven Paid Marketing campaigns, we craft comprehensive digital strategies that amplify your presence and convert leads into loyal customers.', start: '#10B981', end: '#059669' },
        { id: 5, title: 'AI & ML', icon: TbCpu, desc: 'Leverage the power of next-gen predictive models, custom automation agents, and intelligent chatbots. We help you unlock data insights and automate routine tasks with cutting-edge Artificial Intelligence.', start: '#3B82F6', end: '#6366F1' },
        { id: 6, title: 'Cloud Solutions', icon: TbBulb, desc: 'Architecting secure, scalable cloud infrastructure on AWS and Azure. We prioritize uptime, security, and cost-efficiency to ensure your applications perform reliably at global scale.', start: '#06B6D4', end: '#0EA5E9' }
    ];

    const foundationItems = [
        { id: 1, title: 'Our Mission', icon: TbTarget, span: 'span-8', label: 'Mission', desc: 'To empower businesses through hyper-agile digital transformation, transitioning from India’s fastest-growing agency to a global leader in AI-driven innovation and custom software engineering.', start: '#0db5a4', end: '#3B82F6' },
        { id: 2, title: 'Our Vision', icon: TbBulb, span: 'span-4', label: 'Vision', desc: 'We envision a future where organizations solve complex problems through human creativity and predictive Intelligence.', start: '#8B5CF6', end: '#EC4899' },
        { id: 3, title: 'Our Purpose', icon: TbRocket, span: 'span-4', label: 'Why We Exist', desc: 'Bridge the gap between ambitious ideas and technical reality with unprecedented speed and uncompromising quality.', start: '#F97316', end: '#EF4444' },
        { id: 4, title: 'Innovation', icon: TbCpu, span: 'span-4', label: 'Value', desc: 'Staying at the bleeding edge of AI ensures our clients always benefit from the most advanced digital tools.', start: '#10B981', end: '#059669' },
        { id: 5, title: 'Integrity', icon: TbAward, span: 'span-4', label: 'Value', desc: 'Absolute transparency and prioritising long-term client success over short-term operational gains.', start: '#3B82F6', end: '#6366F1' },
        { id: 6, title: 'Excellence', icon: TbHeart, span: 'span-6', label: 'Commitment', desc: 'Maintaining rigorous standards that have allowed us to deliver 700+ successful projects in record time with pixel-perfection.', start: '#06B6D4', end: '#0EA5E9' },
        { id: 7, title: 'Agility', icon: TbRocket, span: 'span-6', label: 'Commitment', desc: 'Extreme flexibility in pivoting to market needs, ensuring our clients stay ahead in the rapidly evolving global AI landscape.', start: '#F59E0B', end: '#D97706' }
    ];

    return (
        <div className="neo-page">
            {/* Header / Company Overview */}
            <header className="neo-hero-editorial" style={{ minHeight: '80vh' }}>
                <div className="neo-content-over neo-container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            background: '#0f172a', color: 'white', padding: '8px 20px',
                            borderRadius: '100px', fontSize: '0.9rem', marginBottom: '30px', fontWeight: 600,
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}>
                            <TbRocket color="#06B6D4" />
                            <span style={{ letterSpacing: '1px' }}>EST. 2024</span>
                        </div>
                        <h1 className="neo-h1" style={{ maxWidth: '1000px', margin: '0 auto 30px', fontSize: 'clamp(3rem, 5vw, 5rem)' }}>
                            Architects of <span className="neo-gradient-text">Rapid Evolution</span>
                        </h1>
                        <p className="neo-text-lg" style={{ margin: '0 auto', maxWidth: '800px', fontSize: '1.3rem', lineHeight: '1.6' }}>
                            Shapesway is not just a company; it's a movement. From a garage startup to delivering <span style={{ color: '#0f172a', fontWeight: 700 }}>700+ projects</span> in one year, we are redefining what's possible in the digital age.
                        </p>
                    </motion.div>
                </div>

                {/* Floating Elements Background */}
                <motion.div style={{ position: 'absolute', top: '20%', left: '10%', opacity: 0.1, rotate }}>
                    <TbCpu size={200} />
                </motion.div>
                <motion.div style={{ position: 'absolute', bottom: '20%', right: '10%', opacity: 0.1, rotate: rotate }}>
                    <TbWorld size={200} />
                </motion.div>
            </header>

            {/* Marquee Section */}
            <section style={{ padding: '40px 0', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
                <Marquee items={['CMS Development', 'Mobile Apps (iOS/Android)', 'Enterprise CRM', 'SaaS Platforms', 'E-Commerce', 'Brand Identity', 'SEO & Marketing', 'AI Solutions', 'Machine Learning']} speed={30} />
            </section>

            {/* About the Company - Dedicated Section */}
            <section style={{ padding: '120px 0', background: 'white' }}>
                <div className="neo-container">
                    <div className="neo-split">
                        <div>
                            <h2 className="neo-h2">The Shapesway Story</h2>
                            <h3 className="neo-h3" style={{ color: '#3B82F6', marginBottom: '30px', fontWeight: 600 }}>Unprecedented Growth. Unmatched Quality.</h3>
                            <p className="neo-text" style={{ fontSize: '1.15rem', marginBottom: '25px', lineHeight: '1.8' }}>
                                Founded in 2024, Shapesway began with a singular mission: <strong>To build better technology, faster.</strong> In a landscape cluttered with slow legacy providers, we introduced a culture of extreme agility.
                            </p>
                            <p className="neo-text" style={{ fontSize: '1.15rem', marginBottom: '25px', lineHeight: '1.8' }}>
                                The result? <strong>700+ successful projects delivered in our first year.</strong> From empowering local businesses with custom CRM and Accounting software to building complex Cross-Platform Mobile Apps and high-conversion E-commerce stores, we've done it all.
                            </p>
                            <p className="neo-text" style={{ fontSize: '1.15rem', lineHeight: '1.8' }}>
                                Today, we are channeling this momentum into the next frontier: <strong>Artificial Intelligence.</strong> We are pivoting from being a generalist powerhouse to a specialized leader in AI & ML innovation for the global market.
                            </p>
                        </div>
                        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {/* Visual Representation of Growth with Image */}
                            <div style={{
                                width: '100%', height: '540px',
                                borderRadius: '40px',
                                position: 'relative', overflow: 'hidden',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                            }}>
                                {/* Background Image */}
                                <motion.img
                                    src={storyImage}
                                    alt="Shapesway Success Story"
                                    initial={{ scale: 1.1 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 1.5 }}
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        zIndex: 0
                                    }}
                                />

                                {/* Gradient Overlay for readability and premium look */}
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.8))',
                                    zIndex: 1
                                }}></div>

                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                    style={{ textAlign: 'center', zIndex: 2 }}
                                >
                                    <div style={{
                                        fontSize: '7rem',
                                        fontWeight: 900,
                                        color: 'white',
                                        lineHeight: 0.9,
                                        textShadow: '0 10px 30px rgba(0,0,0,0.5)'
                                    }}>
                                        700<span style={{ color: '#3B82F6' }}>+</span>
                                    </div>
                                    <div style={{
                                        fontSize: '1.5rem',
                                        color: 'white',
                                        fontWeight: 700,
                                        marginTop: '15px',
                                        letterSpacing: '3px',
                                        textTransform: 'uppercase'
                                    }}>
                                        Projects Delivered
                                    </div>
                                    <div style={{
                                        fontSize: '1.1rem',
                                        color: 'rgba(255,255,255,0.7)',
                                        marginTop: '10px',
                                        fontStyle: 'italic'
                                    }}>
                                        & Counting Since 2024
                                    </div>
                                </motion.div>

                                {/* Decorative elements */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: '30px',
                                    left: '30px',
                                    right: '30px',
                                    height: '1px',
                                    background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent)',
                                    zIndex: 2
                                }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW Full-Stack Mastery Grid - Exactly as requested */}
            <section className="mastery-section">
                <div className="neo-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                    <h2 className="neo-h2" style={{ textAlign: 'center', marginBottom: '60px', color: '#0f172a' }}>Full-Stack Mastery</h2>

                    {/* Dark Slab Container */}
                    <div className="mastery-dark-slab">
                        {/* Ambient Glow */}
                        <div className="mastery-ambient-glow" style={{
                            background: hoveredIndex !== null
                                ? `radial-gradient(circle, ${masteryItems[hoveredIndex].start} 0%, transparent 70%)`
                                : 'radial-gradient(circle, rgba(0,0,0,0) 0%, transparent 70%)',
                            opacity: hoveredIndex !== null ? 0.3 : 0
                        }}></div>

                        <div className="mastery-grid">
                            {masteryItems.map((item, index) => {
                                const isHovered = hoveredIndex === index;
                                return (
                                    <div
                                        key={item.id}
                                        className="mastery-cell"
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                    >
                                        {/* Internal Cell Gradient */}
                                        <div className="mastery-cell-gradient" style={{
                                            background: `linear-gradient(135deg, ${item.start}33, ${item.end}33)`,
                                            opacity: isHovered ? 1 : 0
                                        }}></div>

                                        <div className="mastery-content">
                                            {/* Icon Wrapper - Shift Position on Hover Logic */}
                                            <div style={{ display: 'flex', alignItems: 'center', gap: isHovered ? '15px' : '0', transition: 'all 0.4s ease' }}>
                                                <div
                                                    className="mastery-icon-wrapper"
                                                    style={{
                                                        marginBottom: isHovered ? '0' : '20px',
                                                        color: isHovered ? item.start : '#94a3b8',
                                                        background: isHovered ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.08)',
                                                        boxShadow: isHovered ? `0 0 15px ${item.start}40` : 'none'
                                                    }}
                                                >
                                                    <item.icon size={28} />
                                                </div>

                                                {/* Title moves next to icon on hover */}
                                                <h3
                                                    className="mastery-title"
                                                    style={{
                                                        color: isHovered ? 'white' : '#e2e8f0',
                                                        transform: isHovered ? 'translateY(0)' : 'translateY(0)', /* Handled by flex layout change effectively */
                                                        position: isHovered ? 'relative' : 'absolute',
                                                        opacity: isHovered ? 1 : 0,
                                                        pointerEvents: 'none'
                                                    }}
                                                >
                                                    {item.title}
                                                </h3>
                                            </div>

                                            {/* Title when NOT hovered (below icon) */}
                                            <h3
                                                className="mastery-title"
                                                style={{
                                                    marginTop: '0',
                                                    opacity: isHovered ? 0 : 1,
                                                    display: isHovered ? 'none' : 'block'
                                                }}
                                            >
                                                {item.title}
                                            </h3>

                                            {/* Description Reveal */}
                                            <div style={{
                                                marginTop: '15px',
                                                opacity: isHovered ? 1 : 0,
                                                transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
                                                maxHeight: isHovered ? '120px' : '0',
                                                transition: 'all 0.4s ease',
                                                overflow: 'hidden'
                                            }}>
                                                <p className="mastery-desc" style={{ opacity: 1, transform: 'none', margin: 0 }}>
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW Foundation Section - Bento Style Staggered Layout */}
            <section className="foundation-section" style={{ paddingBottom: '0', paddingTop: '0' }}>
                <div className="neo-container">
                    <h2 className="neo-h2" style={{ textAlign: 'center', marginBottom: '80px', color: '#0f172a' }}>Strategic Foundation</h2>

                    <div className="foundation-grid">
                        {foundationItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className={`foundation-card ${item.span}`}
                                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                            >
                                <div className="foundation-glow" style={{ background: item.start }}></div>

                                <div className="foundation-icon-box" style={{ color: item.start }}>
                                    <item.icon size={35} strokeWidth={1.5} />
                                </div>

                                <div className="foundation-content">
                                    <span className="foundation-label">{item.label}</span>
                                    <h3 className="foundation-title">{item.title}</h3>
                                    <p className="foundation-desc">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modern Vertical Staggered Timeline */}
            <section className="modern-timeline-section">
                <div className="neo-container">
                    <h2 className="neo-h2" style={{ marginBottom: '100px', textAlign: 'center' }}>
                        The <span className="neo-gradient-text">Timeline of Speed</span>
                    </h2>

                    <div className="timeline-container">
                        {/* Central Guiding Line */}
                        <div className="timeline-line"></div>

                        {[
                            { year: '2024', title: 'Day One', desc: 'Shapesway was founded with a mission to bridge the gap between complex ideas and rapid technical reality.', color: '#10B981', tag: 'GENESIS', image: genesisImg },
                            { year: '2024', title: 'Market Dominance', desc: 'Became the preferred tech partner for high-scale CMS, ERP, and bespoke CRM architectures across the region.', color: '#8B5CF6', tag: 'EXPANSION', image: expansionImg },
                            { year: '2024', title: '700+ Projects', desc: 'Breaking industry records by delivering 700+ pixel-perfect solutions in our first 12 months. Redefining agility in tech engineering.', color: '#06B6D4', tag: 'MILESTONE', image: milestoneImg },
                            { year: '2025', title: 'The AI Pivot', desc: 'Transitioning into a global leader in Autonomous Agents & Enterprise ML models. Shaping the future of predictive business intelligence.', color: '#3B82F6', tag: 'FUTURE', image: futureImg }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                            >
                                {/* Background Year Text */}
                                <div className="timeline-year-big">{item.year}</div>

                                {/* Timeline Dot */}
                                <div className="timeline-dot" style={{ '--dot-color': item.color }}></div>

                                <div className="timeline-content-wrapper">
                                    {/* Image Side */}
                                    <div className="timeline-visual">
                                        <motion.img
                                            src={item.image}
                                            alt={item.title}
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            whileInView={{ scale: 1, opacity: 1 }}
                                            transition={{ duration: 0.8, delay: 0.2 }}
                                        />
                                    </div>

                                    {/* Card Side */}
                                    <div className="timeline-card" style={{ '--card-accent': item.color }}>
                                        <div className="timeline-card-glow"></div>
                                        <span className="timeline-tag" style={{ background: item.color }}>{item.tag}</span>
                                        <h3 className="timeline-title">{item.title}</h3>
                                        <p className="timeline-desc">{item.desc}</p>

                                        <div style={{ marginTop: '25px', display: 'flex', gap: '15px', alignItems: 'center' }}>
                                            <div style={{ width: '40px', height: '2px', background: item.color, opacity: 0.5 }}></div>
                                            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: item.color, letterSpacing: '1px' }}>{item.year} PHASE</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Presence - Improved with Modern Design */}
            <section style={{
                padding: '150px 0',
                background: '#0f172a',
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Dynamic Background Effects */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.2,
                    backgroundImage: 'radial-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}></div>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '800px',
                    height: '800px',
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
                    pointerEvents: 'none'
                }}></div>

                <div className="neo-container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
                    {/* Modern Global Icon / Visual */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1 }}
                        style={{ position: 'relative', display: 'inline-block', marginBottom: '40px' }}
                    >
                        <div style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            background: 'rgba(59, 130, 246, 0.1)',
                            border: '1px solid rgba(59, 130, 246, 0.3)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            zIndex: 2
                        }}>
                            <TbWorld size={50} color="#3B82F6" className="neo-float" />
                        </div>
                        {/* Orbiting Ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            style={{
                                position: 'absolute',
                                inset: '-15px',
                                borderRadius: '50%',
                                border: '1px dashed rgba(59, 130, 246, 0.4)',
                                zIndex: 1
                            }}
                        />
                    </motion.div>

                    <h2 className="neo-h2" style={{ color: 'white', marginBottom: '15px', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
                        From India to <span className="neo-gradient-text" style={{ filter: 'brightness(1.2)' }}>The World</span>
                    </h2>
                    <p className="neo-text-lg" style={{ color: '#94a3b8', margin: '0 auto 80px', maxWidth: '650px' }}>
                        With headquarters in <span style={{ color: 'white', fontWeight: 600 }}>Udaipur & Jaipur</span>, we are architecting digital solutions for visionary companies across the globe.
                    </p>

                    <div className="neo-stats-container" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '40px',
                        padding: '0',
                        maxWidth: '1200px',
                        margin: '0 auto'
                    }}>
                        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '50px 30px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <Counter from={0} to={700} label="Projects Delivered" />
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '50px 30px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <Counter from={0} to={2024} label="Year Founded" showPlus={false} />
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '50px 30px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <Counter from={0} to={50} label="Technologies Used" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section style={{ padding: '120px 0', textAlign: 'center', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}>
                <div className="neo-container">
                    <h2 className="neo-h2" style={{ color: 'white' }}>Be Part of the Next 700</h2>
                    <p className="neo-text" style={{ color: '#94a3b8', margin: '0 auto 50px', maxWidth: '600px', fontSize: '1.2rem' }}>
                        We move fast, we build quality, and we drive results. Ready to upgrade your digital innovations?
                    </p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/contact" className="neo-btn-primary" style={{ background: 'white', color: '#0f172a', padding: '18px 40px', fontSize: '1.1rem' }}>
                            Start Your Project <TbArrowRight />
                        </Link>
                        <Link to="/contact" className="neo-btn-primary" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.3)', padding: '18px 40px', fontSize: '1.1rem' }}>
                            Talk to an Expert
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Company;
