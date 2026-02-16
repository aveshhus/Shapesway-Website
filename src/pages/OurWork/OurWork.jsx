import React from 'react';
import {
    TbBuilding as TbBuildingFactory2, TbCpu, TbMessage as TbMessage2Heart, TbFileText as TbFileAnalytics,
    TbBrandReact, TbBrandNodejs, TbDeviceMobile
} from 'react-icons/tb';
import './OurWork.css';

const OurWork = () => {
    return (
        <div className="our-work-page">
            <section className="work-hero">
                <div className="container">
                    <h1>Our Work</h1>
                    <p>Delivering digital excellence for industry leaders and ambitious startups.</p>
                </div>
            </section>

            <section id="industry" className="work-section">
                <div className="container">
                    <h2><TbBuildingFactory2 /> Industry Solutions</h2>
                    <div className="projects-grid">
                        <div className="project-card">
                            <div className="project-image"><TbBuildingFactory2 /></div>
                            <div className="project-info">
                                <div className="project-tags">
                                    <span className="project-tag">FinTech</span>
                                    <span className="project-tag">Web App</span>
                                </div>
                                <h3>Global Payment Gateway</h3>
                                <p>Secure and scalable payment processing platform for a major financial institution.</p>
                            </div>
                        </div>
                        <div className="project-card">
                            <div className="project-image"><TbFileAnalytics /></div>
                            <div className="project-info">
                                <div className="project-tags">
                                    <span className="project-tag">Healthcare</span>
                                    <span className="project-tag">SaaS</span>
                                </div>
                                <h3>Patient Management System</h3>
                                <p>Cloud-based EMR solution streamlining hospital operations and patient care.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="tech" className="work-section">
                <div className="container">
                    <h2><TbCpu /> Technology Solutions</h2>
                    <div className="projects-grid">
                        <div className="project-card">
                            <div className="project-image"><TbDeviceMobile /></div>
                            <div className="project-info">
                                <div className="project-tags">
                                    <span className="project-tag">Mobile</span>
                                    <span className="project-tag">Flutter</span>
                                </div>
                                <h3>E-Commerce Super App</h3>
                                <p>Multi-vendor marketplace app with real-time tracking and AR features.</p>
                            </div>
                        </div>
                        <div className="project-card">
                            <div className="project-image"><TbBrandNodejs /></div>
                            <div className="project-info">
                                <div className="project-tags">
                                    <span className="project-tag">IoT</span>
                                    <span className="project-tag">Backend</span>
                                </div>
                                <h3>Smart Home Dashboard</h3>
                                <p>Centralized control hub for connected smart home devices.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="clients" className="work-section">
                <div className="container">
                    <h2><TbMessage2Heart /> Client Stories</h2>
                    <div className="client-stories-grid">
                        <div className="story-card">
                            <div className="story-content">
                                "Shapesway transformed our vision into a reality. Their technical expertise and dedication to quality are unmatched."
                            </div>
                            <div className="story-client">
                                <h4>Sarah J.</h4>
                                <span>CTO, TechFin Solutions</span>
                            </div>
                        </div>
                        <div className="story-card">
                            <div className="story-content">
                                "The team delivered a complex mobile app ahead of schedule. Highly recommended for enterprise development."
                            </div>
                            <div className="story-client">
                                <h4>Michael Brown</h4>
                                <span>CEO, RetailGo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurWork;
