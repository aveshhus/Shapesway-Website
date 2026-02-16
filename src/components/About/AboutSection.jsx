import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../../assets/about_section_image.png';
import './AboutSection.css';
import { Link } from 'react-router-dom';

const AboutSection = () => {
    return (
        <section className="section about-section">
            <div className="container">
                <div className="about-split">
                    {/* Visual Side */}
                    <div className="about-visual">
                        <motion.div
                            className="about-image-wrapper hover-scale-trigger"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            {/* ... image content ... */}
                            <div className="about-img-container">
                                <img src={aboutImage} alt="About Shapesway" className="about-main-img" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Content Side */}
                    <div className="about-content">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="story-title">Our Story</h2>

                            <p className="about-desc">
                                Shapesway Technologies was established in 2024. Since then, the company has grown from a single desk into a global technology partner, driven by a commitment to excellence and a passion for innovation. We have successfully navigated the rapidly changing tech environment, helping businesses of all sizes unlock their full potential.
                                <br /><br />
                                We believe in the power of "Why" – understanding your core business goals before writing a single line of code. We combine creativity with technical excellence to build products that scale. Our team of dedicated experts works tirelessly to ensure that every solution we deliver is not only robust and scalable but also perfectly aligned with your long-term vision.
                            </p>

                            <Link to="/about" className="btn btn-primary btn-lg about-btn">
                                Read More
                            </Link>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
