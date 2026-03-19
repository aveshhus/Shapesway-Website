import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PiArrowRightBold, PiSparkleLight, PiCursorClickLight } from 'react-icons/pi';
import { projects } from '../../data/portfolioData';
import BespokeCTA from '../../components/common/BespokeCTA';
import './PortfolioPage.css';

const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fintech', label: 'FinTech' },
    { id: 'health', label: 'Healthcare' },
    { id: 'ecomm', label: 'E-Commerce' },
    { id: 'auto', label: 'Automotive' },
    { id: 'furniture', label: 'Manufacturing & Interior' }
];

const matchFilter = (category, filterId) => {
    const cat = category.toLowerCase();
    if (filterId === 'all') return true;
    if (filterId === 'fintech') return cat.includes('fintech');
    if (filterId === 'health') return cat.includes('health') || cat.includes('dental');
    if (filterId === 'ecomm') return cat.includes('e-comm');
    if (filterId === 'auto') return cat.includes('auto');
    if (filterId === 'furniture') return cat.includes('furniture');
    return true;
};

const InteractiveProjectCard = ({ project }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e) => {
        const { currentTarget, clientX, clientY } = e;
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <motion.div 
            layout 
            initial={{ opacity: 0, scale: 0.9, y: 30 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.5, type: 'spring', bounce: 0.3 }}
        >
            <Link 
                to={`/our-work/${project.id}`} 
                className="portfolio-item-card"
                style={{ '--accent-color': project.color }}
                onMouseMove={handleMouseMove}
            >
                <motion.div 
                    className="portfolio-card-spotlight" 
                    style={{ 
                        background: useMotionTemplate`radial-gradient(450px circle at ${mouseX}px ${mouseY}px, ${project.color}66, transparent 80%)`,
                        position: 'absolute',
                        top: 0, left: 0, width: '100%', height: '100%',
                        zIndex: 1,
                        pointerEvents: 'none'
                    }}
                />
                
                <div className="portfolio-category-badge">
                    {project.category}
                </div>
                <div className="portfolio-project-status">
                    {project.status}
                </div>
                
                <div className="portfolio-item-image-wrapper">
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="portfolio-item-image"
                    />
                    <div className="portfolio-item-overlay">
                        <div className="portfolio-item-content">
                            <div className="portfolio-meta-info">
                                <span>ID // {project.year}</span>
                                <span>{project.client}</span>
                            </div>
                            <h3 className="portfolio-item-title">{project.title}</h3>
                            <p className="portfolio-item-desc">{project.description}</p>
                            
                            <div className="portfolio-explore-btn">
                                View Case Study <PiArrowRightBold size={18} />
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-glow-effect"></div>
                </div>
            </Link>
        </motion.div>
    );
};

const PortfolioPage = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [filteredProjects, setFilteredProjects] = useState(projects);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        setFilteredProjects(projects.filter(p => matchFilter(p.category, activeFilter)));
    }, [activeFilter]);

    return (
        <div className="portfolio-page">
            <div className="portfolio-bg-grid"></div>
            <div className="portfolio-ambient-glow"></div>
            
            <div className="portfolio-container relative-z">
                <motion.div 
                    className="portfolio-header-section"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div 
                        className="glass-tag"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <PiSparkleLight size={16} /> A Selection of Signature Projects
                    </motion.div>
                    
                    <h1 className="portfolio-title">
                        Innovative <span>Portfolios</span>
                    </h1>
                    
                    <p className="portfolio-description">
                        Explore our featured case studies demonstrating scalable architecture, modern design, and exceptional technical execution across multiple industries.
                    </p>

                    <motion.div 
                        className="portfolio-filter-nav"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        {filters.map(filter => (
                            <button 
                                key={filter.id} 
                                className={`portfolio-filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                                onClick={() => setActiveFilter(filter.id)}
                            >
                                {filter.label}
                                {activeFilter === filter.id && (
                                    <motion.div className="filter-active-bg" layoutId="activeFilterBg" />
                                )}
                            </button>
                        ))}
                    </motion.div>
                </motion.div>

                <div className="portfolio-grid">
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <InteractiveProjectCard key={project.id} project={project} />
                        ))}
                    </AnimatePresence>
                </div>
            </div>
            
            <div className="relative-z">
                <BespokeCTA 
                    tag="READY TO START" 
                    title={["Have a project", "in mind?"]} 
                    desc="Let's shape your digital future together with our scalable architecture." 
                    buttonText="Start a Project" 
                />
            </div>
        </div>
    );
};

export default PortfolioPage;
