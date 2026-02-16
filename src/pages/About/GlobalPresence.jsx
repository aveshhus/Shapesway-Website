import React, { useEffect, useState } from 'react';
import { motion, animate, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    TbArrowRight,
    TbWorld,
    TbGlobe,
    TbMapPin,
    TbRocket,
    TbShieldLock,
    TbCircleCheck,
    TbSettings,
    TbChartBar,
    TbUsers,
    TbCpu,
    TbDeviceLaptop,
    TbBox,
    TbMessage2,
    TbChecks
} from 'react-icons/tb';
import './NeoAbout.css';

// Local Counter Component
const Counter = ({ from, to, duration = 2, label, suffix = "+" }) => {
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
                fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                fontWeight: 900,
                color: 'white',
                lineHeight: 1,
                fontFamily: 'var(--font-heading)'
            }}>
                {displayCount}<span style={{ color: '#3B82F6' }}>{suffix}</span>
            </div>
            <div style={{
                marginTop: '12px',
                color: '#94a3b8',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontSize: '0.8rem',
                fontWeight: 700
            }}>
                {label}
            </div>
        </div>
    );
};

const GlobalPresence = () => {
    // Service Categories
    const serviceCategories = [
        {
            category: "Software & Development",
            icon: TbDeviceLaptop,
            items: [
                "Web Application Development",
                "CMS & Code-based Websites",
                "Android & iOS Mobile apps",
                "Cross-Platform Solutions",
                "E-commerce & CRM Systems",
                "Custom Business Software"
            ]
        },
        {
            category: "Digital Growth & Creative",
            icon: TbChartBar,
            items: [
                "Search Engine Optimization",
                "Performance Marketing",
                "Paid Ad Campaigns (PPC)",
                "Branding & Visual Identity",
                "Premium Graphic Design"
            ]
        },
        {
            category: "Advanced Technology",
            icon: TbCpu,
            items: [
                "Artificial Intelligence",
                "Machine Learning Models",
                "Intelligent Automation",
                "Predictive Analytics",
                "Custom AI Agents"
            ]
        }
    ];

    // Trust Factors
    const trustFactors = [
        { title: "Local Proof", desc: "700+ successfully delivered projects in India.", icon: TbChecks },
        { title: "Global Readiness", desc: "Teams and systems designed for international collaboration.", icon: TbGlobe },
        { title: "Scalable Operations", desc: "Processes built to handle global-scale delivery.", icon: TbSettings },
        { title: "Transparent Communication", desc: "Clear, consistent, and professional client interaction.", icon: TbMessage2 }
    ];

    return (
        <div className="neo-page">
            {/* 1. HERO SECTION */}
            <header className="neo-hero-editorial">
                <div className="neo-content-over neo-container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            background: '#0f172a', color: 'white', padding: '8px 25px',
                            borderRadius: '100px', fontSize: '0.9rem', marginBottom: '35px', fontWeight: 700,
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}>
                            <TbWorld color="#3B82F6" /> <span>GLOBAL EXPANSION 2025</span>
                        </div>
                        <h1 className="neo-h1" style={{ maxWidth: '1000px', margin: '0 auto 30px' }}>
                            Building Global Trust Through <br />
                            <span className="neo-gradient-text">Proven Delivery</span>
                        </h1>
                        <p className="neo-text-lg" style={{ margin: '0 auto 50px', maxWidth: '850px', fontSize: '1.2rem', lineHeight: 1.7 }}>
                            Founded in 2024, our journey started with a clear goal: reliable, scalable, and high-quality digital solutions.
                            After 700+ successful projects in India, we're bringing our technical mastery to the global stage.
                        </p>
                        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/contact" className="neo-btn-primary">
                                Partner With Us <TbArrowRight />
                            </Link>
                            <Link to="/contact" className="neo-btn-primary" style={{ background: 'transparent', color: '#0f172a', border: '1px solid #0f172a', boxShadow: 'none' }}>
                                Start a Global Project
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* 2. ORIGIN STORY & GLOBAL VISION SPLIT */}
            <section style={{ padding: '120px 0', background: '#ffffff' }}>
                <div className="neo-container">
                    <div className="neo-split" style={{ alignItems: 'stretch' }}>
                        {/* Origin Story */}
                        <div className="neo-glass-panel" style={{ background: '#f8fafc', padding: '60px', borderRadius: '40px' }}>
                            <h2 className="neo-h2" style={{ fontSize: '2rem', marginBottom: '30px' }}>Proven in High-Growth Ecosystems</h2>
                            <p className="neo-text" style={{ fontSize: '1.1rem', marginBottom: '40px' }}>
                                India is one of the world's most competitive tech markets. Overcoming its challenges has refined our delivery frameworks and structured our operational maturity.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                                {[
                                    { icon: TbBox, text: "700+ Projects Delivered" },
                                    { icon: TbCpu, text: "Multi-Domain Expertise" },
                                    { icon: TbRocket, text: "Structured Frameworks" },
                                    { icon: TbChartBar, text: "Operational Maturity" }
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                        <div style={{ color: '#3B82F6' }}><item.icon size={24} /></div>
                                        <span style={{ fontWeight: 600, color: '#0f172a' }}>{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Global Vision */}
                        <div style={{ background: '#0f172a', borderRadius: '40px', padding: '60px', color: 'white', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', top: 0, right: 0, width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)' }}></div>
                            <h2 className="neo-h2" style={{ color: 'white', fontSize: '2rem', marginBottom: '30px' }}>Designed for Collaboration</h2>
                            <p className="neo-text" style={{ color: '#94a3b8', marginBottom: '40px' }}>
                                Our remote-first delivery models and English-first workflows ensure seamless synergy with international clients across all time zones.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {[
                                    "Remote-first delivery models",
                                    "English-first communication systems",
                                    "Agile project management flows",
                                    "International quality benchmarks",
                                    "Secure global infrastructure"
                                ].map((point, i) => (
                                    <li key={i} style={{ marginBottom: '18px', display: 'flex', gap: '15px', alignItems: 'center' }}>
                                        <TbCircleCheck color="#0db5a4" size={22} />
                                        <span style={{ fontSize: '1.05rem', fontWeight: 500 }}>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CAPABILITIES GRID */}
            <section style={{ padding: '120px 0', background: '#0f172a' }}>
                <div className="neo-container">
                    <h2 className="neo-h2" style={{ color: 'white', textAlign: 'center', marginBottom: '80px' }}>End-to-End Digital Mastery</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
                        {serviceCategories.map((cat, i) => (
                            <div key={i} className="neo-glass-panel" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '50px' }}>
                                <div style={{
                                    width: '60px', height: '60px', background: 'rgba(59, 130, 246, 0.1)',
                                    borderRadius: '15px', color: '#3B82F6', display: 'flex',
                                    alignItems: 'center', justifyContent: 'center', marginBottom: '30px'
                                }}>
                                    <cat.icon size={32} />
                                </div>
                                <h3 className="neo-h3" style={{ color: 'white', marginBottom: '30px' }}>{cat.category}</h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                    {cat.items.map((item, idx) => (
                                        <span key={idx} style={{
                                            background: 'rgba(255,255,255,0.05)', padding: '8px 16px',
                                            borderRadius: '8px', fontSize: '0.85rem', color: '#cbd5e1',
                                            border: '1px solid rgba(255,255,255,0.03)'
                                        }}>
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. DELIVERY @ SCALE & SECURITY */}
            <section style={{ padding: '120px 0', background: '#f8fafc' }}>
                <div className="neo-container">
                    <div className="neo-split">
                        <div>
                            <h2 className="neo-h2">Delivery at Scale</h2>
                            <p className="neo-text-lg" style={{ marginBottom: '50px' }}>
                                700+ projects in record time required more than just skill — it required disciplined systems and mature project ownership.
                            </p>
                            <div style={{ display: 'grid', gap: '20px' }}>
                                {[
                                    { t: "Structured Onboarding", s: "Clear alignment from day zero." },
                                    { t: "Sprint-Based Engineering", s: "Bi-weekly demos and agile iterations." },
                                    { t: "Dedicated Ownership", s: "A focused lead for every global client." },
                                    { t: "Continuous QA", s: "Automated and manual testing cycles." }
                                ].map((step, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '20px' }}>
                                        <div style={{
                                            width: '40px', height: '40px', background: '#3B82F6',
                                            borderRadius: '10px', color: 'white', display: 'flex',
                                            alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                                            fontWeight: 900
                                        }}>{i + 1}</div>
                                        <div>
                                            <h4 style={{ fontWeight: 700, fontSize: '1.2rem' }}>{step.t}</h4>
                                            <p className="neo-text" style={{ fontSize: '0.95rem' }}>{step.s}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Security Panel */}
                        <div className="neo-glass-panel" style={{ background: 'white', border: '1px solid #e2e8f0' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '35px' }}>
                                <div style={{ padding: '15px', background: '#f1f5f9', borderRadius: '15px', color: '#8B5CF6' }}>
                                    <TbShieldLock size={35} />
                                </div>
                                <h3 className="neo-h3">Global Compliance</h3>
                            </div>
                            <p className="neo-text" style={{ marginBottom: '35px' }}>
                                Build trust with security-first development and international data privacy protection workflows.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {[
                                    "Secure architecture standards",
                                    "GDPR-aligned data workflows",
                                    "Strict access & infrastructure controls",
                                    "Compliance-ready dev processes",
                                    "Regular risk audits"
                                ].map((point, i) => (
                                    <li key={i} style={{ marginBottom: '15px', display: 'flex', gap: '12px', alignItems: 'center' }}>
                                        <TbCircleCheck color="#8B5CF6" />
                                        <span style={{ fontWeight: 600 }}>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. TRUST FACTORS & ROADMAP */}
            <section style={{ padding: '120px 0', background: '#ffffff' }}>
                <div className="neo-container">
                    <h2 className="neo-h2" style={{ textAlign: 'center', marginBottom: '80px' }}>Why Global Leaders Trust Us</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', marginBottom: '120px' }}>
                        {trustFactors.map((item, i) => (
                            <div key={i} style={{ textAlign: 'center' }}>
                                <div style={{ color: '#3B82F6', marginBottom: '25px', display: 'flex', justifyContent: 'center' }}>
                                    <item.icon size={50} strokeWidth={1.5} />
                                </div>
                                <h4 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '15px' }}>{item.title}</h4>
                                <p className="neo-text">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* From India to the World Visual Block */}
                    <div style={{ background: '#0f172a', borderRadius: '50px', padding: '80px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                        <div className="foundation-glow" style={{ background: '#3B82F6', opacity: 0.15 }}></div>
                        <h2 className="neo-h2" style={{ color: 'white', marginBottom: '30px' }}>From India to the World</h2>
                        <p className="neo-text-lg" style={{ color: '#94a3b8', margin: '0 auto 60px', maxWidth: '800px' }}>
                            Supporting startups, SMEs, and agencies worldwide with digital transformation that sticks.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', flexWrap: 'wrap' }}>
                            <Counter from={0} to={700} label="Projects Delivered" />
                            <Counter from={0} to={2024} label="Origin Year" suffix="" />
                            <Counter from={0} to={50} label="Core Technologies" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. FINAL CTA */}
            <section style={{ padding: '120px 0', textAlign: 'center', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}>
                <div className="neo-container">
                    <h2 className="neo-h2" style={{ color: 'white' }}>Ready to Build Global Digital Success?</h2>
                    <p className="neo-text" style={{ color: '#94a3b8', margin: '0 auto 50px', maxWidth: '700px', fontSize: '1.2rem' }}>
                        Whether you are launching internationally or scaling globally, we are ready to support your digital journey with proven experience.
                    </p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/contact" className="neo-btn-primary" style={{ background: 'white', color: '#0f172a', padding: '18px 45px' }}>
                            Start a Global Project <TbArrowRight />
                        </Link>
                        <Link to="/contact" className="neo-btn-primary" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.3)', padding: '18px 45px' }}>
                            Talk to Our Global Team
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GlobalPresence;
