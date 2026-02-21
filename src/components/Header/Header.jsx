import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import {
    TbHome, TbBuilding as TbBuildingSkyscraper, TbTarget as TbTargetArrow, TbWorld,
    TbBrain, TbCode, TbDeviceMobile, TbPalette, TbCloud as TbCloudComputing, TbVolume as TbSpeakerphone,
    TbBuilding as TbBuildingFactory2, TbCpu, TbFileText as TbFileAnalytics, TbMessage as TbMessage2Heart,
    TbLayoutGrid as TbLayoutDashboard, TbServer as TbServer2, TbDeviceMobile as TbDeviceMobileCode, TbCloud as TbCloudUp,
    TbBuilding as TbBuildingHospital, TbRocket,
    TbMoodSmile, TbBriefcase, TbSchool,
    TbBrandReact, TbBrandNodejs, TbBrandAws,
    TbBriefcase as TbBriefcaseIcon, TbUsers as TbUsersIcon, TbBuilding as TbBuildingIcon,
    TbBrandFacebook, TbBrandInstagram, TbBrandLinkedin
} from 'react-icons/tb';
import { SiFlutter } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';
import logo from '../../assets/logo.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeMegaMenu, setActiveMegaMenu] = useState(null);
    const [isHoveringMenu, setIsHoveringMenu] = useState(false);
    const location = useLocation();
    const menuTimeoutRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            setIsScrolled(scrolled > 50);

            const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolledPercentage = (scrolled / winHeight) * 100;
            setScrollProgress(scrolledPercentage);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setActiveMegaMenu(null);
    }, [location]);

    const handleMegaMenuEnter = (menuName) => {
        if (menuTimeoutRef.current) {
            clearTimeout(menuTimeoutRef.current);
        }
        setActiveMegaMenu(menuName);
        setIsHoveringMenu(true);
    };

    const handleMegaMenuLeave = () => {
        menuTimeoutRef.current = setTimeout(() => {
            if (!isHoveringMenu) {
                setActiveMegaMenu(null);
            }
        }, 100);
    };

    const handleMenuMouseEnter = () => {
        if (menuTimeoutRef.current) {
            clearTimeout(menuTimeoutRef.current);
        }
        setIsHoveringMenu(true);
    };

    const handleMenuMouseLeave = () => {
        setIsHoveringMenu(false);
        menuTimeoutRef.current = setTimeout(() => {
            setActiveMegaMenu(null);
        }, 100);
    };

    const navLinks = [
        { name: 'Home', path: '/', hasMegaMenu: false },
        { name: 'About', path: '/about', hasMegaMenu: true, megaType: 'about' },
        { name: 'Services', path: '/services', hasMegaMenu: true, megaType: 'services' },
        { name: 'Our Work', path: '/our-work', hasMegaMenu: false },
        { name: 'Technology', path: '/technology', hasMegaMenu: false, megaType: 'technology' },
        { name: 'Industries', path: '/industries', hasMegaMenu: true, megaType: 'industries' },
        { name: 'Career', path: '/careers', hasMegaMenu: true, megaType: 'career' }
    ];

    return (
        <>
            <div className="scroll-progress-container">
                <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
            </div>

            <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <div className="header-inner">
                        <Link to="/" className="logo">
                            <img src={logo} alt="Shapesway" className="logo-img" />
                        </Link>

                        <nav className="nav-desktop">
                            {navLinks.map((link) => (
                                <div
                                    key={link.name}
                                    className="nav-item-wrapper"
                                    onMouseEnter={() => link.hasMegaMenu && handleMegaMenuEnter(link.name)}
                                    onMouseLeave={handleMegaMenuLeave}
                                >
                                    <Link
                                        to={link.path}
                                        className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                    >
                                        {link.name}
                                        {link.hasMegaMenu && <FaChevronDown className="nav-dropdown-icon" />}
                                    </Link>

                                    {/* Mega Menu */}
                                    <AnimatePresence>
                                        {link.hasMegaMenu && activeMegaMenu === link.name && (
                                            <MegaMenu
                                                type={link.megaType}
                                                onMouseEnter={handleMenuMouseEnter}
                                                onMouseLeave={handleMenuMouseLeave}
                                            />
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </nav>

                        <div className="nav-actions">
                            <Link to="/contact" className="nav-cta-btn desktop-only">
                                Discuss Project
                            </Link>
                            <button className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Drawer */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            className="mobile-drawer"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        >
                            <div className="mobile-drawer-header">
                                <img src={logo} alt="Shapesway Logo" className="logo-img" />
                                <button className="close-drawer-btn" onClick={() => setIsMobileMenuOpen(false)}>
                                    <FaTimes />
                                </button>
                            </div>
                            <div className="mobile-drawer-links">
                                {navLinks.map((link) => (
                                    <Link key={link.name} to={link.path}>{link.name}</Link>
                                ))}
                            </div>
                            <div className="mobile-drawer-cta">
                                <Link to="/contact" className="btn btn-primary btn-lg" style={{ width: '100%' }}>Consult Now</Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    );
};

// Mega Menu Component - Tallium Style
const MegaMenu = ({ type, onMouseEnter, onMouseLeave }) => {
    return (
        <motion.div
            className={`mega-menu mega-menu-${type}`}
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1]
            }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="mega-menu-inner">
                {/* Left CTA Section */}
                <motion.div
                    className="mega-menu-cta-section"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                >
                    <p className="mega-cta-heading">Schedule a Call</p>
                    <h3 className="mega-cta-title">
                        Tell us about your project<br />
                        idea and let us guide you
                    </h3>
                    <Link to="/contact" className="mega-cta-btn">
                        Book a Meeting <TbTargetArrow className="rotate-45" />
                    </Link>

                    {/* Social Icons */}
                    <div className="mega-social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mega-social-icon">
                            <TbBrandFacebook />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mega-social-icon">
                            <TbBrandInstagram />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mega-social-icon">
                            <TbBrandLinkedin />
                        </a>
                    </div>
                </motion.div>

                {/* Right Content Grid */}
                <motion.div
                    className="mega-menu-content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.3 }}
                >
                    {type === 'simple' && <HomeMegaMenu />}
                    {type === 'about' && <AboutMegaMenu />}
                    {type === 'services' && <ServicesMegaMenu />}

                    {type === 'technology' && <TechnologyMegaMenu />}
                    {type === 'industries' && <IndustriesMegaMenu />}
                    {type === 'career' && <CareerMegaMenu />}
                </motion.div>
            </div>
        </motion.div>
    );
};

// Home Mega Menu (Simple Dropdown)
const HomeMegaMenu = () => (
    <div className="mega-menu-content">
        <div className="mega-column">
            <Link to="/" className="mega-link"><TbHome /> Overview</Link>
            <Link to="/#why-us" className="mega-link"><TbTargetArrow /> Why Choose Us</Link>
            <Link to="/#how-we-work" className="mega-link"><TbBriefcase /> How We Work</Link>
            <Link to="/#testimonials" className="mega-link"><TbUsersIcon /> Client Testimonials</Link>
        </div>
    </div>
);

// About Mega Menu (5-Column Grid - Tallium Style)
const AboutMegaMenu = () => {
    const categories = [
        {
            icon: <TbBuildingSkyscraper />,
            title: 'Company',
            link: '/company'
        },
        {
            icon: <TbTargetArrow />,
            title: 'Why Us',
            link: '/why-us'
        },
        {
            icon: <TbWorld />,
            title: 'Global Presence & Trust',
            link: '/global-presence-trust'
        }
    ];

    return (
        <div className="mega-menu-content mega-menu-category-cards mega-menu-3-col">
            {categories.map((category, index) => (
                <Link key={index} to={category.link} className="category-mega-card">
                    <div className="category-card-icon">{category.icon}</div>
                    <h5>{category.title}</h5>
                </Link>
            ))}
        </div>
    );
};

// Services Mega Menu (4-Column Grid - Tallium Style)
const ServicesMegaMenu = () => {
    const services = [
        {
            icon: <TbBrain />,
            title: 'AI & Machine Learning',
            link: '/ai-machine-learning'
        },
        {
            icon: <TbCode />,
            title: 'Web Development',
            link: '/services/web-development'
        },
        {
            icon: <TbDeviceMobile />,
            title: 'Mobile App Development',
            link: '/services/mobile-app-development'
        },
        {
            icon: <TbLayoutDashboard />,
            title: 'Software Development',
            link: '/services/software-development'
        },
        {
            icon: <TbPalette />,
            title: 'UI/UX Design',
            link: '/services/ui-ux-design'
        },
        {
            icon: <TbCloudComputing />,
            title: 'Cloud & DevOps',
            link: '/services/cloud-services'
        },
        {
            icon: <TbSpeakerphone />,
            title: 'Digital Marketing',
            link: '/services/digital-marketing'
        }
    ];

    return (
        <div className="mega-menu-content mega-menu-category-cards">
            {services.map((service, index) => (
                <Link key={index} to={service.link} className="category-mega-card">
                    <div className="category-card-icon">{service.icon}</div>
                    <h5>{service.title}</h5>
                </Link>
            ))}
        </div>
    );
};



// Technology Mega Menu (4-Column Grid - Tallium Style)
const TechnologyMegaMenu = () => {
    const categories = [];

    return (
        <div className="mega-menu-content mega-menu-category-cards">
            {categories.map((category, index) => (
                <Link key={index} to={category.link} className="category-mega-card">
                    <div className="category-card-icon">{category.icon}</div>
                    <h5>{category.title}</h5>
                </Link>
            ))}
        </div>
    );
};

// Industries Mega Menu (2-Column Grid - Tallium Style)
const IndustriesMegaMenu = () => {
    const categories = [
        {
            icon: <TbBuildingHospital />,
            title: 'Core Industries',
            link: '/industries#core'
        },
        {
            icon: <TbRocket />,
            title: 'Emerging Sectors',
            link: '/industries#emerging'
        }
    ];

    return (
        <div className="mega-menu-content mega-menu-category-cards mega-menu-2-col">
            {categories.map((category, index) => (
                <Link key={index} to={category.link} className="category-mega-card">
                    <div className="category-card-icon">{category.icon}</div>
                    <h5>{category.title}</h5>
                </Link>
            ))}
        </div>
    );
};

// Career Mega Menu (3-Column Grid - Tallium Style)
const CareerMegaMenu = () => {
    const categories = [
        {
            icon: <TbMoodSmile />,
            title: 'Life at Shapesway',
            link: '/careers#life'
        },
        {
            icon: <TbBriefcase />,
            title: 'Open Positions',
            link: '/careers#positions'
        },
        {
            icon: <TbSchool />,
            title: 'Students & Freshers',
            link: '/careers#students'
        }
    ];

    return (
        <div className="mega-menu-content mega-menu-category-cards mega-menu-3-col">
            {categories.map((category, index) => (
                <Link key={index} to={category.link} className="category-mega-card">
                    <div className="category-card-icon">{category.icon}</div>
                    <h5>{category.title}</h5>
                </Link>
            ))}
        </div>
    );
};

export default Header;
