import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';
import {
    SiReact, SiNodedotjs, SiPython, SiAmazonwebservices,
    SiDocker, SiKubernetes, SiPostgresql, SiNextdotjs,
    SiTailwindcss, SiTypescript, SiFigma, SiAdobexd,
    SiGooglecloud, SiTerraform, SiTensorflow, SiPytorch,
    SiOpenai, SiFlutter, SiKotlin, SiSwift, SiMongodb,
    SiGo, SiVuedotjs, SiLinkedin, SiFacebook, SiAngular,
    SiSvelte, SiRedux, SiThreedotjs, SiRust, SiGraphql,
    SiRedis, SiFirebase, SiAdobephotoshop, SiAdobeillustrator,
    SiAdobeaftereffects, SiJenkins,
    SiGithubactions, SiNginx, SiHuggingface, SiScikitlearn,
    SiPandas, SiHubspot, SiMailchimp, SiSemrush, SiIonic,
    SiCapacitor, SiDart
} from 'react-icons/si';
import { FaMobileAlt, FaCloud, FaBrain, FaChartLine, FaThLarge, FaServer, FaPalette, FaAd, FaLaptopCode, FaDatabase } from 'react-icons/fa';
import './Technologies.css';

const TechCard = ({ tech, index }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function onMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            className="tech-card-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
            onMouseMove={onMouseMove}
        >
            <div className="tech-card">
                {/* Spotlight Effect */}
                <motion.div
                    className="tech-card-spotlight"
                    style={{
                        background: `radial-gradient(400px circle at ${mouseX}px ${mouseY}px, ${tech.color}15, transparent 80%)`
                    }}
                />

                <div className="tech-card-inner">
                    <div className="tech-icon-box" style={{ '--tech-color': tech.color }}>
                        {tech.icon}
                        <div className="tech-icon-bg"></div>
                    </div>
                    <span className="tech-card-name">{tech.name}</span>
                </div>

                {/* Corner accent */}
                <div className="tech-card-corner" style={{ backgroundColor: tech.color }}></div>
            </div>
        </motion.div>
    );
};

const Technologies = () => {
    const categories = [
        { id: 'frontend', name: 'Frontend', icon: <FaThLarge /> },
        { id: 'backend', name: 'Backend', icon: <FaServer /> },
        { id: 'uiux', name: 'UI/UX Design', icon: <FaPalette /> },
        { id: 'cloud', name: 'Cloud & DevOps', icon: <FaCloud /> },
        { id: 'ai', name: 'AI Development', icon: <FaBrain /> },
        { id: 'marketing', name: 'Digital Marketing', icon: <FaChartLine /> },
        { id: 'app', name: 'Mobile Apps', icon: <FaMobileAlt /> }
    ];

    const techData = {
        frontend: [
            { name: 'React', icon: <SiReact />, color: '#61DAFB' },
            { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
            { name: 'Vue.js', icon: <SiVuedotjs />, color: '#4FC08D' },
            { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
            { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
            { name: 'Angular', icon: <SiAngular />, color: '#DD0031' },
            { name: 'Svelte', icon: <SiSvelte />, color: '#FF3E00' },
            { name: 'Three.js', icon: <SiThreedotjs />, color: '#000000' },
            { name: 'Redux', icon: <SiRedux />, color: '#764ABC' }
        ],
        backend: [
            { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
            { name: 'Python', icon: <SiPython />, color: '#3776AB' },
            { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
            { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
            { name: 'Go', icon: <SiGo />, color: '#00ADD8' },
            { name: 'Rust', icon: <SiRust />, color: '#000000' },
            { name: 'GraphQL', icon: <SiGraphql />, color: '#E10098' },
            { name: 'Redis', icon: <SiRedis />, color: '#DC382D' },
            { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' }
        ],
        uiux: [
            { name: 'Figma', icon: <SiFigma />, color: '#F24E1E' },
            { name: 'Adobe XD', icon: <SiAdobexd />, color: '#FF61F6' },
            { name: 'Photoshop', icon: <SiAdobephotoshop />, color: '#31A8FF' },
            { name: 'Illustrator', icon: <SiAdobeillustrator />, color: '#FF9A00' },
            { name: 'After Effects', icon: <SiAdobeaftereffects />, color: '#9999FF' },
            { name: 'Wireframing', icon: <FaThLarge />, color: '#00C2FF' },
            { name: 'User Research', icon: <FaPalette />, color: '#FFB800' },
            { name: 'Prototyping', icon: <FaPalette />, color: '#9747FF' }
        ],
        cloud: [
            { name: 'AWS', icon: <SiAmazonwebservices />, color: '#FF9900' },
            { name: 'Google Cloud', icon: <SiGooglecloud />, color: '#4285F4' },
            { name: 'Azure', icon: <FaCloud />, color: '#0089D6' },
            { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
            { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326CE5' },
            { name: 'Terraform', icon: <SiTerraform />, color: '#7B42BC' },
            { name: 'Jenkins', icon: <SiJenkins />, color: '#D24939' },
            { name: 'GitHub Actions', icon: <SiGithubactions />, color: '#2088FF' },
            { name: 'Nginx', icon: <SiNginx />, color: '#009639' }
        ],
        ai: [
            { name: 'OpenAI', icon: <SiOpenai />, color: '#412991' },
            { name: 'TensorFlow', icon: <SiTensorflow />, color: '#FF6F00' },
            { name: 'PyTorch', icon: <SiPytorch />, color: '#EE4C2C' },
            { name: 'Hugging Face', icon: <SiHuggingface />, color: '#FFD21E' },
            { name: 'Scikit-learn', icon: <SiScikitlearn />, color: '#F7931E' },
            { name: 'Pandas', icon: <SiPandas />, color: '#150458' },
            { name: 'NLP', icon: <FaBrain />, color: '#00d2ff' },
            { name: 'LangChain', icon: <FaLaptopCode />, color: '#2563eb' }
        ],
        marketing: [
            { name: 'Google Ads', icon: <FaAd />, color: '#4285F4' },
            { name: 'Meta Ads', icon: <SiFacebook />, color: '#0668E1' },
            { name: 'LinkedIn Ads', icon: <SiLinkedin />, color: '#0A66C2' },
            { name: 'HubSpot', icon: <SiHubspot />, color: '#FF7A59' },
            { name: 'Mailchimp', icon: <SiMailchimp />, color: '#FFE01B' },
            { name: 'SEMrush', icon: <SiSemrush />, color: '#FF6203' },
            { name: 'SEO', icon: <FaChartLine />, color: '#34d399' },
            { name: 'Analytics', icon: <FaChartLine />, color: '#f59e0b' }
        ],
        app: [
            { name: 'Flutter', icon: <SiFlutter />, color: '#02569B' },
            { name: 'React Native', icon: <SiReact />, color: '#61DAFB' },
            { name: 'Kotlin', icon: <SiKotlin />, color: '#7F52FF' },
            { name: 'Swift', icon: <SiSwift />, color: '#F05138' },
            { name: 'Dart', icon: <SiDart />, color: '#0175C2' },
            { name: 'Ionic', icon: <SiIonic />, color: '#3880FF' },
            { name: 'Capacitor', icon: <SiCapacitor />, color: '#119EFF' },
            { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' }
        ]
    };

    const [activeTab, setActiveTab] = useState('frontend');

    return (
        <section className="tech-section">
            {/* Background elements */}
            <div className="tech-bg-blob tech-blob-1"></div>
            <div className="tech-bg-blob tech-blob-2"></div>
            <div className="tech-bg-grid"></div>

            <div className="container">
                <div className="section-header text-center">
                    <motion.span
                        className="section-tag"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Our Tech Stack
                    </motion.span>
                    <motion.h2
                        className="tech-main-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        The Engine Room of <span className="text-gradient">Innovation</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        We harness the power of world-class technologies to engineer solutions that scale.
                    </motion.p>
                </div>

                <div className="tech-content-wrapper">
                    {/* Floating Tab Sidebar/Top Bar */}
                    <div className="tech-tabs-outer">
                        <div className="tech-tabs-container">
                            {categories.map((cat, idx) => (
                                <button
                                    key={cat.id}
                                    className={`tech-nav-btn ${activeTab === cat.id ? 'active' : ''}`}
                                    onClick={() => setActiveTab(cat.id)}
                                >
                                    <div className="nav-btn-content">
                                        <span className="nav-icon">{cat.icon}</span>
                                        <span className="nav-text">{cat.name}</span>
                                    </div>
                                    {activeTab === cat.id && (
                                        <motion.div
                                            layoutId="activeTabGlow"
                                            className="nav-active-glow"
                                            transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Dynamic Tech Grid */}
                    <div className="tech-grid-container">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="tech-modern-grid"
                            >
                                {techData[activeTab].map((tech, index) => (
                                    <TechCard key={`${activeTab}-${tech.name}`} tech={tech} index={index} />
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technologies;
