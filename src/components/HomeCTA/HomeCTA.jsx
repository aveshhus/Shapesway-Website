import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './HomeCTA.css';

import handshakeImg from '../../assets/cta/handshake.png';

const HomeCTA = () => {
    return (
        <section className="home-cta-new">
            <div className="container">
                <div className="cta-wrapper-modern">
                    <div className="cta-bg-elements">
                        <div className="cta-circle cta-circle-1"></div>
                        <div className="cta-circle cta-circle-2"></div>
                        <div className="cta-grid-overlay"></div>
                    </div>

                    <div className="cta-grid-layout">
                        {/* Right side now on the left: Image */}
                        <div className="cta-right-col">
                            <motion.div
                                className="cta-image-wrapper"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <img
                                    src={handshakeImg}
                                    alt="Professional Handshake"
                                    className="cta-main-img"
                                />
                            </motion.div>
                        </div>

                        {/* Left side now on the right: Text */}
                        <div className="cta-left-col">
                            <motion.span
                                className="cta-tag-modern"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                READY TO ACCELERATE?
                            </motion.span>
                            <motion.h2
                                className="cta-title-modern"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                Have a vision? We have the <span className="text-glow">team to build it.</span>
                            </motion.h2>
                            <motion.p
                                className="cta-desc-modern"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                Join hundreds of successful businesses that have scaled with our cutting-edge tech solutions and high-performance teams.
                            </motion.p>

                            <motion.div
                                className="cta-btns-new"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <Link to="/contact" className="cta-primary-btn">
                                    Get Started Today <FaArrowRight />
                                </Link>
                                <a href="https://wa.me/+916367181952" className="cta-secondary-btn">
                                    Talk to an Expert
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeCTA;
