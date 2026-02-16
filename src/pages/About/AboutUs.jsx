import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    TbArrowRight, TbRocket, TbBuilding, TbTarget, TbEye, TbBulb,
    TbShieldCheck, TbTrendingUp, TbAward, TbUsers, TbCode, TbDeviceMobile,
    TbCloud, TbBrain, TbLock, TbMapPin, TbChartBar, TbDna,
    TbPalette, TbSpeakerphone, TbLayout, TbPencil, TbBroadcast, TbTargetArrow,
    TbEyeSpark, TbBulbFilled, TbShieldLock, TbCheckupList, TbArrowUpRight,
    TbGlobe, TbCircleCheck
} from 'react-icons/tb';
import './NeoAbout.css';
import ourStoryImg from '../../assets/our-story-v2.jpg';
import velocityImg from '../../assets/velocity_success.jpg';

import { ModernBentoCard } from '../../components/ModernBentoCard';
import BeyondCardsCarousel from '../../components/About/BeyondCardsCarousel';

const SectionWrapper = ({ children, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
    >
        {children}
    </motion.div>
);

const AboutUs = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
    const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

    return (
        <div className="neo-page">
            {/* Page Header & Hero Section */}
            <header className="neo-hero-editorial" ref={heroRef} style={{ background: '#ffffff', minHeight: '90vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* Dynamic Background Pattern */}
                <div style={{ position: 'absolute', inset: 0, opacity: 0.1, pointerEvents: 'none', zIndex: 0 }}>
                    <div style={{
                        position: 'absolute', inset: 0,
                        backgroundImage: 'radial-gradient(circle at center, #cbd5e1 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}></div>
                    <motion.div
                        animate={{
                            background: [
                                'radial-gradient(600px circle at 0% 0%, rgba(59, 130, 246, 0.05), transparent 100%)',
                                'radial-gradient(600px circle at 100% 100%, rgba(13, 181, 164, 0.05), transparent 100%)',
                                'radial-gradient(600px circle at 0% 100%, rgba(59, 130, 246, 0.05), transparent 100%)',
                                'radial-gradient(600px circle at 100% 0%, rgba(13, 181, 164, 0.05), transparent 100%)',
                                'radial-gradient(600px circle at 0% 0%, rgba(59, 130, 246, 0.05), transparent 100%)'
                            ]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        style={{ position: 'absolute', inset: 0 }}
                    ></motion.div>
                </div>

                {/* Floating Abstract Shapes */}
                <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{
                                x: Math.random() * 100 - 50 + "%",
                                y: Math.random() * 100 - 50 + "%",
                                opacity: 0
                            }}
                            animate={{
                                x: [
                                    Math.random() * 100 - 50 + "%",
                                    Math.random() * 100 - 50 + "%",
                                    Math.random() * 100 - 50 + "%"
                                ],
                                y: [
                                    Math.random() * 100 - 50 + "%",
                                    Math.random() * 100 - 50 + "%",
                                    Math.random() * 100 - 50 + "%"
                                ],
                                opacity: [0.1, 0.3, 0.1],
                                scale: [1, 1.2, 1]
                            }}
                            transition={{
                                duration: 20 + Math.random() * 10,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{
                                position: 'absolute',
                                left: Math.random() * 100 + "%",
                                top: Math.random() * 100 + "%",
                                width: Math.random() * 300 + 100 + "px",
                                height: Math.random() * 300 + 100 + "px",
                                background: i % 2 === 0 ? 'rgba(59, 130, 246, 0.03)' : 'rgba(13, 181, 164, 0.03)',
                                borderRadius: i % 3 === 0 ? '50%' : '30% 70% 70% 30% / 30% 30% 70% 70%',
                                filter: 'blur(60px)',
                            }}
                        />
                    ))}
                </div>

                <motion.div
                    className="neo-content-over neo-container"
                    style={{ opacity: heroOpacity, scale: heroScale, y: heroY, zIndex: 1, position: 'relative' }}
                >
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                    >
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '10px',
                                background: 'white', color: '#0f172a', padding: '12px 28px',
                                borderRadius: '100px', fontSize: '0.9rem', marginBottom: '40px', fontWeight: 700,
                                border: '1px solid #e2e8f0',
                                boxShadow: '0 4px 20px -5px rgba(0,0,0,0.05)',
                                textTransform: 'uppercase', letterSpacing: '2px'
                            }}
                        >
                            <TbRocket color="#3B82F6" className="neo-float" />
                            <span>Established 2024</span>
                        </motion.div>

                        <motion.h1
                            variants={{
                                hidden: { opacity: 0, scale: 0.95, filter: 'blur(10px)' },
                                visible: { opacity: 1, scale: 1, filter: 'blur(0px)' }
                            }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="neo-h1"
                            style={{ maxWidth: '1000px', margin: '0 auto 35px', lineHeight: 1, letterSpacing: '-0.04em' }}
                        >
                            Architects of the <br />
                            <span className="neo-gradient-text" style={{ padding: '0 10px', display: 'inline-block' }}>Digital Future</span>
                        </motion.h1>

                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="neo-text-lg"
                            style={{
                                maxWidth: '700px', margin: '0 auto 60px', color: '#64748b',
                                fontSize: '1.25rem', lineHeight: 1.6, fontWeight: 500
                            }}
                        >
                            We are more than developers. We are a collective of engineers and dreamers
                            engineering the next phase of enterprise through precision code.
                        </motion.p>

                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}
                        >
                            <Link to="/services" className="neo-btn-primary" style={{ padding: '20px 40px', borderRadius: '16px' }}>
                                Explore Expertise <TbArrowRight />
                            </Link>
                            <Link to="/global-presence-trust" style={{
                                display: 'inline-flex', alignItems: 'center', gap: '12px',
                                padding: '20px 40px', color: '#0f172a', fontWeight: 700,
                                textDecoration: 'none', borderRadius: '16px',
                                background: '#f8fafc',
                                border: '1px solid #e2e8f0', transition: 'all 0.3s ease'
                            }} className="neo-btn-ghost">
                                Our Global Footprint <TbArrowUpRight />
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Bottom Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    style={{
                        position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)',
                        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',
                        color: '#94a3b8', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px'
                    }}
                >
                    <span>Scroll to explore</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{ width: '2px', height: '40px', background: 'linear-gradient(to bottom, #3B82F6, transparent)' }}
                    />
                </motion.div>
            </header>

            {/* Narrative & Brand Story */}
            <div style={{ padding: '160px 0', background: '#ffffff', overflow: 'hidden' }}>
                <div className="neo-container">
                    <SectionWrapper>
                        <div className="neo-split" style={{ alignItems: 'center', gap: '100px' }}>
                            <div style={{ position: 'relative' }}>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.5 }}
                                    style={{ position: 'relative', zIndex: 1 }}
                                >
                                    <img
                                        src={ourStoryImg}
                                        alt="Shapesway Narrative"
                                        style={{
                                            width: '100%', borderRadius: '40px',
                                            boxShadow: '0 40px 100px -20px rgba(15,23,42,0.15)',
                                            filter: 'contrast(1.05)'
                                        }}
                                    />
                                </motion.div>
                                {/* Proof Badge */}
                                <div style={{
                                    position: 'absolute', bottom: '-40px', right: '-40px',
                                    background: '#0f172a', color: 'white', padding: '40px',
                                    borderRadius: '30px', zIndex: 2, border: '1px solid rgba(255,255,255,0.1)',
                                    boxShadow: '0 30px 60px rgba(0,0,0,0.3)'
                                }}>
                                    <div style={{ fontSize: '3rem', fontWeight: 900, color: '#3B82F6', lineHeight: 1 }}>700+</div>
                                    <div style={{ fontSize: '0.9rem', color: '#94a3b8', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '10px' }}>Projects Delivered</div>
                                </div>
                            </div>

                            <div style={{ maxWidth: '600px' }}>
                                <div style={{ color: '#3B82F6', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px', fontSize: '0.9rem' }}>Beyond the Code</div>
                                <h2 className="neo-h2" style={{ marginBottom: '30px', fontSize: '3.5rem' }}>Where Vision Meets <span style={{ color: '#0db5a4' }}>Execution.</span></h2>
                                <p className="neo-text" style={{ fontSize: '1.2rem', marginBottom: '25px', color: '#475569', lineHeight: 1.8 }}>
                                    Established in 2024, Shapesway Technology was forged with a singular objective:
                                    to bridge the chasm between experimental tech and market-defining reality.
                                </p>
                                <p className="neo-text" style={{ fontSize: '1.1rem', color: '#64748b', marginBottom: '40px' }}>
                                    We don't just "complete tasks." We embed ourselves into your business DNA,
                                    ensuring every line of code serves a strategic purpose. In under two years, we've
                                    evolved from a core innovation cell into a trusted global engineering powerhouse.
                                </p>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                                    <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '20px' }}>
                                        <TbTrendingUp color="#3B82F6" size={30} style={{ marginBottom: '15px' }} />
                                        <div style={{ fontWeight: 800, fontSize: '1.2rem' }}>200% Growth</div>
                                        <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Year-over-Year Velocity</div>
                                    </div>
                                    <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '20px' }}>
                                        <TbAward color="#0db5a4" size={30} style={{ marginBottom: '15px' }} />
                                        <div style={{ fontWeight: 800, fontSize: '1.2rem' }}>Premium Quality</div>
                                        <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Industry Best Practices</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SectionWrapper>
                </div>
            </div>

            {/* Core Values & DNA Visualization */}
            <section style={{ padding: '140px 0', background: '#0f172a' }}>
                <div className="neo-container">
                    <SectionWrapper>
                        <div style={{ textAlign: 'center', marginBottom: '100px' }}>
                            <h2 className="neo-h2" style={{ color: 'white', fontSize: '3.5rem' }}>The Shapesway DNA</h2>
                            <p className="neo-text" style={{ maxWidth: '800px', margin: '0 auto', color: '#94a3b8', fontSize: '1.2rem' }}>
                                Our culture is built on the intersection of Indian engineering discipline and
                                global innovation standards. Every project we touch inherits this legacy of excellence.
                            </p>
                        </div>
                    </SectionWrapper>

                    <SectionWrapper delay={0.2}>
                        <div className="neo-bento-grid">
                            <ModernBentoCard className="row-span-2 dna-dark dna-gradient-1">
                                <div>
                                    <div className="neo-icon-box" style={{ width: '80px', height: '80px', borderRadius: '20px', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '40px' }}>
                                        <TbTargetArrow size={45} color="#3B82F6" />
                                    </div>
                                    <h3 className="neo-h3" style={{ fontSize: '2.5rem', marginBottom: '25px', color: 'white' }}>Our Mission</h3>
                                    <p style={{ fontSize: '1.2rem', color: '#cbd5e1', lineHeight: 1.8 }}>
                                        To architect intuitive, high-performance technology that accelerates human potential.
                                        We transform complex business hurdles into scalable digital victories.
                                    </p>
                                </div>
                                <div style={{ marginTop: '50px', opacity: 0.3 }}>
                                    <TbArrowRight color="white" size={40} />
                                </div>
                            </ModernBentoCard>

                            <ModernBentoCard className="col-span-2 dna-dark dna-gradient-2" style={{ minHeight: '400px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>
                                    <div style={{ maxWidth: '60%' }}>
                                        <div style={{ color: '#0db5a4', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '15px' }}>The Vision</div>
                                        <h3 className="neo-h3" style={{ fontSize: '2.5rem', color: 'white', marginBottom: '25px' }}>Global Impact via Unseen Innovation</h3>
                                        <p style={{ fontSize: '1.15rem', color: '#cbd5e1' }}>
                                            To become the universal benchmark for digital trust. We aim to be the silent engine
                                            driving the most visionary enterprises on the planet.
                                        </p>
                                    </div>
                                    <div style={{ opacity: 0.1, transform: 'scale(1.5)', transformOrigin: 'top right' }}>
                                        <TbEyeSpark size={200} color="white" />
                                    </div>
                                </div>
                            </ModernBentoCard>

                            <ModernBentoCard className="dna-dark dna-gradient-3">
                                <div className="neo-icon-box" style={{ width: '60px', height: '60px', borderRadius: '15px', background: 'rgba(249, 115, 22, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                                    <TbBulbFilled size={30} color="#F97316" />
                                </div>
                                <h4 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'white' }}>Infinite Innovation</h4>
                                <p style={{ fontSize: '1.05rem', color: '#94a3b8', lineHeight: 1.7 }}>
                                    We don't react to trends. We build the infrastructure that enables them,
                                    from AI-first core logic to cloud-native scalability.
                                </p>
                            </ModernBentoCard>

                            <ModernBentoCard className="dna-dark dna-gradient-4">
                                <div className="neo-icon-box" style={{ width: '60px', height: '60px', borderRadius: '15px', background: 'rgba(236, 72, 153, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                                    <TbShieldLock size={30} color="#EC4899" />
                                </div>
                                <h4 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'white' }}>Deep Integrity</h4>
                                <p style={{ fontSize: '1.05rem', color: '#94a3b8', lineHeight: 1.7 }}>
                                    Code is fragile; trust is permanent. We operate with radical transparency,
                                    ensuring every commitment is etched in reliable delivery.
                                </p>
                            </ModernBentoCard>
                        </div>
                    </SectionWrapper>
                </div>
            </section>

            {/* Creative Competency Highlights */}
            <section style={{ padding: '140px 0', background: '#ffffff', overflow: 'hidden' }}>
                <div className="neo-container" style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <div style={{ color: '#3B82F6', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px', fontSize: '0.9rem' }}>Beyond Software</div>
                    <h2 className="neo-h2" style={{ fontSize: '3.5rem' }}>Creative Precision</h2>
                    <p className="neo-text-lg" style={{ margin: '0 auto', color: '#64748b' }}>
                        We harmonize technical complexity with aesthetic brilliance to build complete brand experiences.
                    </p>
                </div>

                <div style={{ padding: '20px 0' }}>
                    <BeyondCardsCarousel />
                </div>
            </section>

            {/* Growth Journey & Milestones */}
            <section style={{ padding: '140px 0', background: '#f8fafc' }}>
                <div className="neo-container">
                    <SectionWrapper>
                        <div className="neo-split" style={{ alignItems: 'flex-start', gap: '80px' }}>
                            <div>
                                <h2 className="neo-h2" style={{ fontSize: '3.5rem' }}>Velocity of <span className="neo-gradient-text">Success</span></h2>
                                <p className="neo-text-lg" style={{ marginBottom: '60px', color: '#475569' }}>
                                    A young legacy, built with relentless momentum and disciplined execution.
                                </p>
                                <div style={{ position: 'relative', paddingLeft: '50px' }}>
                                    <div style={{ position: 'absolute', left: '19px', top: '0', bottom: '0', width: '2px', background: 'linear-gradient(to bottom, #3B82F6, #0db5a4, transparent)' }}></div>
                                    {[
                                        { year: '2024', status: 'Origins', title: 'The Genesis', desc: 'Shapesway was founded with a mission to redefine digital agility.', icon: TbRocket, color: '#3B82F6' },
                                        { year: '2024', status: 'Scale', title: 'Market Mastery', desc: 'Achieved 700+ project delivery milestone within the domestic market.', icon: TbTrendingUp, color: '#0db5a4' },
                                        { year: '2025', status: 'Global', title: 'The World Stage', desc: 'Expansion into international markets with a focus on enterprise AI.', icon: TbGlobe, color: '#8B5CF6' }
                                    ].map((item, i) => (
                                        <div key={i} style={{ marginBottom: '80px', position: 'relative' }}>
                                            <div style={{
                                                position: 'absolute', left: '-51px', top: '5px', width: '40px', height: '40px',
                                                background: 'white', border: `3px solid ${item.color}`, borderRadius: '12px', zIndex: 2,
                                                display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.color,
                                                boxShadow: `0 0 20px ${item.color}33`
                                            }}>
                                                <item.icon size={20} fontWeight={900} />
                                            </div>
                                            <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginBottom: '10px' }}>
                                                <span style={{ fontSize: '1.8rem', fontWeight: 900, color: '#0f172a' }}>{item.year}</span>
                                                <span style={{ background: `${item.color}15`, color: item.color, padding: '4px 12px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase' }}>{item.status}</span>
                                            </div>
                                            <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#1e293b' }}>{item.title}</h4>
                                            <p style={{ color: '#64748b', fontSize: '1.05rem', marginTop: '10px' }}>{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div style={{ position: 'sticky', top: '150px' }}>
                                <div className="neo-glass-panel" style={{ padding: '0', background: 'transparent', overflow: 'hidden', border: 'none' }}>
                                    <img
                                        src={velocityImg}
                                        alt="Success Velocity"
                                        style={{ width: '100%', borderRadius: '40px', boxShadow: '0 50px 100px rgba(0,0,0,0.1)' }}
                                    />
                                    <div style={{
                                        position: 'absolute', inset: 0,
                                        background: 'linear-gradient(to top, rgba(15,23,42,0.8), transparent 40%)',
                                        borderRadius: '40px', padding: '40px', display: 'flex', alignItems: 'flex-end'
                                    }}>
                                        <div style={{ color: 'white' }}>
                                            <div style={{ fontSize: '2rem', fontWeight: 900 }}>Fast-Track Delivery</div>
                                            <div style={{ opacity: 0.7 }}>Optimized for High-Speed Markets</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SectionWrapper>
                </div>
            </section>

            {/* Leadership & Strategic Direction */}
            <section style={{ padding: '140px 0', background: '#ffffff' }}>
                <div className="neo-container">
                    <SectionWrapper>
                        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                            <h2 className="neo-h2" style={{ fontSize: '3.5rem' }}>Minds Behind the Machine</h2>
                            <p className="neo-text-lg" style={{ margin: '0 auto', color: '#64748b' }}>
                                Built by veterans of the industry who believe in the power of radical innovation.
                            </p>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
                            {[
                                { role: 'Founder & CEO', img: '12', name: 'Strategic Lead' },
                                { role: 'CTO', img: '33', name: 'Tech Visionary' },
                                { role: 'COO', img: '59', name: 'Ops Excellence' },
                                { role: 'Head of Design', img: '47', name: 'Creative Director' }
                            ].map((leader, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -10 }}
                                    className="neo-team-card"
                                    style={{
                                        background: '#f8fafc', padding: '40px', borderRadius: '40px',
                                        textAlign: 'center', border: '1px solid #e2e8f0', boxShadow: '0 20px 40px rgba(0,0,0,0.02)'
                                    }}
                                >
                                    <div style={{ position: 'relative', display: 'inline-block', marginBottom: '25px' }}>
                                        <img
                                            src={`https://i.pravatar.cc/150?img=${leader.img}`}
                                            alt="Leader"
                                            style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: '4px solid white', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                                        />
                                        <div style={{ position: 'absolute', bottom: '0', right: '0', padding: '8px', background: '#0db5a4', borderRadius: '50%', color: 'white' }}>
                                            <TbCircleCheck size={16} />
                                        </div>
                                    </div>
                                    <h4 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '5px' }}>{leader.name}</h4>
                                    <div style={{ color: '#3B82F6', fontWeight: 700, fontSize: '0.9rem', marginBottom: '15px' }}>{leader.role}</div>
                                    <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Driving the next generation of Shapesway innovations.</p>
                                </motion.div>
                            ))}
                        </div>
                    </SectionWrapper>
                </div>
            </section>

            {/* Regional Operations & Presence */}
            <section style={{ padding: '80px 0', background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
                <div className="neo-container">
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '80px', flexWrap: 'wrap', opacity: 0.6 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <TbMapPin size={28} color="#0f172a" />
                            <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>Udaipur (HQ)</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <TbMapPin size={28} color="#0f172a" />
                            <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>Jaipur Lab</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conversion & Call to Action */}
            <section style={{
                padding: '160px 0', background: '#0f172a', color: 'white',
                textAlign: 'center', position: 'relative', overflow: 'hidden'
            }}>
                {/* Background Pattern */}
                <div style={{
                    position: 'absolute', inset: 0, opacity: 0.1,
                    backgroundImage: 'radial-gradient(#3B82F6 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}></div>

                <div className="neo-container" style={{ position: 'relative', zIndex: 2 }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="neo-h2" style={{ color: 'white', fontSize: '4.5rem', marginBottom: '40px', fontWeight: 900 }}>
                            Ready to <span className="neo-gradient-text">Scale?</span>
                        </h2>
                        <p style={{ fontSize: '1.4rem', color: '#94a3b8', marginBottom: '60px', maxWidth: '750px', margin: '0 auto 60px' }}>
                            Join the 700+ visionary enterprises that have already accelerated their digital potential with Shapesway.
                        </p>
                        <div style={{ display: 'flex', gap: '25px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/contact" className="neo-btn-primary" style={{ background: 'white', color: '#0f172a', padding: '22px 60px', fontSize: '1.2rem' }}>
                                Initiate Project <TbArrowRight />
                            </Link>
                            <Link to="/contact" className="neo-btn-primary" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', padding: '22px 60px', fontSize: '1.2rem' }}>
                                Talk to Founders
                            </Link>
                        </div>
                    </motion.div>
                </div>

                <div style={{
                    position: 'absolute', bottom: 0, left: 0, width: '100%', height: '4px',
                    background: 'linear-gradient(90deg, transparent, #3B82F6, #0db5a4, transparent)'
                }}></div>
            </section>
        </div>
    );
};

export default AboutUs;
