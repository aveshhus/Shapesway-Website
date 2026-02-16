import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    TbArrowRight,
    TbTarget,
    TbRocket,
    TbShieldLock,
    TbSettings,
    TbChartBar,
    TbRefresh,
    TbSearch,
    TbCheckupList,
    TbUsers,
    TbCircleCheck,
    TbMessage2,
    TbAnalyze,
    TbDeviceLaptop,
    TbCpu
} from 'react-icons/tb';
import './NeoAbout.css';

const WhyUs = () => {
    // Differentiators Data
    const differentiators = [
        {
            title: "Business-First Engineering",
            description: "We design technology solutions aligned with your business objectives, ensuring every feature delivers real impact — not just functionality.",
            icon: TbTarget,
            gradient: "dna-gradient-1"
        },
        {
            title: "End-to-End Delivery Ownership",
            description: "From discovery and architecture to deployment and optimization, we take complete responsibility for outcomes.",
            icon: TbRocket,
            gradient: "dna-gradient-2"
        },
        {
            title: "Proven Execution Excellence",
            description: "Our structured processes, experienced teams, and delivery discipline ensure predictable timelines and consistent quality.",
            icon: TbChartBar,
            gradient: "dna-gradient-3"
        },
        {
            title: "Scalable by Design",
            description: "We build systems that grow with your business — flexible, future-ready, and adaptable to evolving needs.",
            icon: TbSettings,
            gradient: "dna-gradient-4"
        }
    ];

    // Delivery Approach Data
    const steps = [
        { title: "Requirement Clarity", desc: "Through discovery workshops & deep analysis.", icon: TbSearch },
        { title: "Agile Sprints", desc: "Iterative development with regular progress demos.", icon: TbRefresh },
        { title: "Transparent Communication", desc: "Direct reporting and open collaboration channels.", icon: TbMessage2 },
        { title: "Continuous Optimization", desc: "Post-launch improvements and constant scaling.", icon: TbAnalyze }
    ];

    // Security & Quality Points
    const engineeringPoints = [
        "Clean, maintainable, and scalable code",
        "Performance optimization and reliability testing",
        "Continuous integration and deployment practices",
        "Rigorous quality assurance standards"
    ];

    const securityPoints = [
        "Secure architecture and access controls",
        "Data protection and privacy safeguards",
        "Compliance-ready development processes",
        "Regular audits and risk assessments"
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
                            background: '#0f172a', color: 'white', padding: '8px 20px',
                            borderRadius: '100px', fontSize: '0.9rem', marginBottom: '30px', fontWeight: 600,
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}>
                            <TbCircleCheck color="#0db5a4" /> <span>TRUST & EXCELLENCE</span>
                        </div>
                        <h1 className="neo-h1" style={{ maxWidth: '1000px', margin: '0 auto 30px' }}>
                            More Than a Vendor. <br />
                            <span className="neo-gradient-text">A Long-Term Partner.</span>
                        </h1>
                        <p className="neo-text-lg" style={{ margin: '0 auto 50px', maxWidth: '850px', lineHeight: 1.6 }}>
                            Choosing the right technology partner can define the success of your digital initiatives.
                            We work as an extension of your team — combining deep technical expertise, strategic thinking,
                            and a results-driven approach.
                        </p>
                        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/contact" className="neo-btn-primary">
                                Start a Project <TbArrowRight />
                            </Link>
                            <Link to="/contact" className="neo-btn-primary" style={{ background: 'transparent', color: '#0f172a', border: '1px solid #0f172a', boxShadow: 'none' }}>
                                Talk to an Expert
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* 2. DIFFERENTIATORS SECTION */}
            <section style={{ padding: '120px 0', background: '#ffffff' }}>
                <div className="neo-container">
                    <h2 className="neo-h2" style={{ textAlign: 'center', marginBottom: '80px' }}>What Truly Sets Us Apart</h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '40px'
                    }}>
                        {differentiators.map((item, index) => (
                            <motion.div
                                key={index}
                                className={`neo-modern-card dna-dark ${item.gradient}`}
                                whileHover={{ y: -10 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="neo-card-content" style={{ padding: '50px 40px' }}>
                                    <div className="neo-icon-box" style={{ width: '60px', height: '60px', marginBottom: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.1)', borderRadius: '15px' }}>
                                        <item.icon size={30} color="white" />
                                    </div>
                                    <h3 className="neo-h3" style={{ color: 'white', marginBottom: '15px' }}>{item.title}</h3>
                                    <p className="neo-text" style={{ color: '#94a3b8' }}>{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. DELIVERY APPROACH SECTION */}
            <section style={{ padding: '120px 0', background: '#f8fafc' }}>
                <div className="neo-container">
                    <div className="neo-split">
                        <div>
                            <h2 className="neo-h2">Built for Speed, Quality, and Transparency</h2>
                            <p className="neo-text-lg" style={{ marginBottom: '40px' }}>
                                We follow a collaborative and agile delivery model that keeps you informed, involved, and in control through every phase of development.
                            </p>
                            <div style={{ display: 'grid', gap: '30px' }}>
                                {steps.map((step, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                                        <div style={{
                                            padding: '12px', background: 'white', borderRadius: '12px',
                                            boxShadow: '0 10px 20px rgba(0,0,0,0.05)', color: '#3B82F6'
                                        }}>
                                            <step.icon size={24} />
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '5px' }}>{step.title}</h4>
                                            <p className="neo-text">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{
                            background: '#0f172a', borderRadius: '40px', padding: '60px',
                            color: 'white', position: 'relative', overflow: 'hidden'
                        }}>
                            <div className="foundation-glow" style={{ background: '#3B82F6', opacity: 0.2 }}></div>
                            <h3 className="neo-h3" style={{ color: 'white', fontSize: '2rem', marginBottom: '40px' }}>Our Engagement Models</h3>
                            <div style={{ display: 'grid', gap: '20px' }}>
                                {[
                                    "Dedicated Development Teams",
                                    "Project-Based Fixed Delivery",
                                    "Long-Term Technology Partnerships",
                                    "Scalable Maintenance & Support"
                                ].map((model, i) => (
                                    <div key={i} style={{
                                        padding: '20px 10px', display: 'flex', alignItems: 'center', gap: '15px',
                                        borderBottom: '1px solid rgba(255,255,255,0.1)'
                                    }}>
                                        <div style={{ width: '8px', height: '8px', background: '#0db5a4', borderRadius: '50%' }}></div>
                                        <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>{model}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. SECURITY & QUALITY SECTION */}
            <section style={{ padding: '120px 0', background: 'white' }}>
                <div className="neo-container">
                    <div className="neo-split">
                        <div className="neo-glass-panel" style={{ background: 'white' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                                <TbCheckupList size={40} color="#3B82F6" />
                                <h3 className="neo-h3">Engineering Excellence</h3>
                            </div>
                            <p className="neo-text" style={{ marginBottom: '30px' }}>Development you can depend on, built with maintenance and scale in mind.</p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {engineeringPoints.map((point, i) => (
                                    <li key={i} style={{ marginBottom: '15px', display: 'flex', gap: '12px', alignItems: 'center' }}>
                                        <TbCircleCheck color="#10B981" /> <span className="neo-text" style={{ fontWeight: 600 }}>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="neo-glass-panel" style={{ background: 'white' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                                <TbShieldLock size={40} color="#8B5CF6" />
                                <h3 className="neo-h3">Security-First Mindset</h3>
                            </div>
                            <p className="neo-text" style={{ marginBottom: '30px' }}>We treat data protection as a non-negotiable core requirement for every global solution.</p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {securityPoints.map((point, i) => (
                                    <li key={i} style={{ marginBottom: '15px', display: 'flex', gap: '12px', alignItems: 'center' }}>
                                        <TbCircleCheck color="#8B5CF6" /> <span className="neo-text" style={{ fontWeight: 600 }}>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. LONG TERM VALUE SECTION */}
            <section style={{ padding: '100px 0', background: '#0f172a', color: 'white' }}>
                <div className="neo-container" style={{ textAlign: 'center' }}>
                    <h2 className="neo-h2" style={{ color: 'white', marginBottom: '20px' }}>Focused on Sustainable Growth</h2>
                    <p className="neo-text-lg" style={{ color: '#94a3b8', margin: '0 auto 60px', maxWidth: '800px' }}>
                        We don’t just deliver projects — we help build long-term digital capabilities and maintain delivery excellence.
                    </p>
                    <div className="neo-stats-container" style={{ padding: 0, gap: '40px' }}>
                        {[
                            { title: 'Consistent Delivery', icon: TbTarget },
                            { title: 'Strategic Guidance', icon: TbRocket },
                            { title: 'Innovation-First', icon: TbCpu },
                            { title: 'Reliable Support', icon: TbUsers }
                        ].map((item, i) => (
                            <div key={i} style={{ flex: 1, minWidth: '200px' }}>
                                <div style={{
                                    width: '80px', height: '80px', background: 'rgba(255,255,255,0.05)',
                                    borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', color: '#3B82F6'
                                }}>
                                    <item.icon size={40} />
                                </div>
                                <h4 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{item.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. FINAL CTA */}
            <section style={{ padding: '120px 0', textAlign: 'center', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}>
                <div className="neo-container">
                    <h2 className="neo-h2" style={{ color: 'white' }}>Let’s Build Something That Lasts</h2>
                    <p className="neo-text" style={{ color: '#94a3b8', margin: '0 auto 50px', maxWidth: '700px', fontSize: '1.2rem' }}>
                        Whether you’re launching a new product, modernizing systems, or scaling your digital infrastructure, we’re ready to partner with you.
                    </p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/contact" className="neo-btn-primary" style={{ background: 'white', color: '#0f172a', padding: '18px 40px', fontSize: '1.1rem' }}>
                            Start Your Project <TbArrowRight />
                        </Link>
                        <Link to="/contact" className="neo-btn-primary" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.3)', padding: '18px 40px', fontSize: '1.1rem' }}>
                            Schedule a Consultation
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyUs;
