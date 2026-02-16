import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './Hero.css';
import aiRobot from '../../assets/ai_robot.png';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background">
                <div className="hero-blob-1"></div>
                <div className="hero-blob-2"></div>
            </div>

            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <div className="hero-badge animate-fade-in">
                            <span className="badge-pulse"></span>
                            World-Class Digital Solutions
                        </div>

                        <h1 className="hero-title animate-fade-in-up">
                            Build Your <br />
                            <span className="text-gradient">Future</span> Faster
                        </h1>

                        <p className="hero-description animate-fade-in-up">
                            We design and engineer high-performance software, AI models, and cloud infrastructure for the next generation of global leaders.
                        </p>

                        <div className="hero-cta animate-fade-in-up">
                            <Link to="/contact" className="btn btn-primary">
                                Discuss Project <FaArrowRight />
                            </Link>
                            <Link to="/portfolio" className="btn btn-outline">
                                View Case Studies
                            </Link>
                        </div>

                        <div className="hero-stats animate-fade-in-up">
                            <div className="stat-item">
                                <h3>500+</h3>
                                <p>Success Projects</p>
                            </div>
                            <div className="stat-item">
                                <h3>98%</h3>
                                <p>Client Loyalty</p>
                            </div>
                            <div className="stat-item">
                                <h3>24/7</h3>
                                <p>Expert Support</p>
                            </div>
                        </div>
                    </div>

                    <div className="hero-visual animate-scale-in">
                        <div className="image-container">
                            <img src={aiRobot} alt="Future Tech" className="main-image" />

                            <div className="floating-element float-1">
                                <div className="float-icon">⚡</div>
                                <div className="float-info">
                                    <h4>Fast Pace</h4>
                                    <p>Rapid Deployment</p>
                                </div>
                            </div>

                            <div className="floating-element float-2">
                                <div className="float-icon">🛡️</div>
                                <div className="float-info">
                                    <h4>Secure</h4>
                                    <p>End-to-End Safety</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="scroll-hint">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                Scroll to Explore
            </div>
        </section>
    );
};

export default Hero;
