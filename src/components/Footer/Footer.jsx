import React from 'react';
import { Link } from 'react-router-dom';
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaLinkedin,
    FaTwitter,
    FaFacebook,
    FaInstagram,
    FaGithub
} from 'react-icons/fa';
import servicesData from '../../data/services';
import './Footer.css';
import logo from '../../assets/logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="footer-grid">
                        {/* Company Info */}
                        <div className="footer-col">
                            <div className="footer-logo">
                                <img src={logo} alt="Shapesway Technologies" className="footer-logo-img" />
                            </div>
                            <p className="footer-desc">
                                Leading IT company providing cutting-edge digital solutions to businesses worldwide.
                                Transform your ideas into reality with our expert team.
                            </p>
                            <div className="social-links">
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <FaLinkedin />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                    <FaTwitter />
                                </a>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                    <FaFacebook />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <FaInstagram />
                                </a>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                    <FaGithub />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-col">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/careers">Careers</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="footer-col">
                            <h3>Our Services</h3>
                            <ul>
                                <li><Link to="/ai-machine-learning">AI Solutions</Link></li>
                                <li><Link to="/services/web-development">Web Development</Link></li>
                                <li><Link to="/services/mobile-app-development">App Development</Link></li>
                                <li><Link to="/services/software-development">Software Development</Link></li>
                                <li><Link to="/services/digital-marketing">SEO & Growth</Link></li>
                                <li><Link to="/services/advertisement-solutions">Paid Advertising</Link></li>
                                <li><Link to="/services/cloud-services">Cloud & DevOps</Link></li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="footer-col">
                            <h3>Contact Us</h3>
                            <div className="contact-info">
                                <div className="contact-item">
                                    <FaPhone className="contact-icon" />
                                    <a href="tel:+916367181952">+91 63671 81952</a>
                                </div>
                                <div className="contact-item">
                                    <FaEnvelope className="contact-icon" />
                                    <a href="mailto:info@shapesway.in">Info@shapesway.in</a>
                                </div>
                                <div className="contact-item">
                                    <FaMapMarkerAlt className="contact-icon" />
                                    <div>
                                        <p><strong>Jaipur Office:</strong></p>
                                        <p>4th Floor, Shree Amar Heights, 405, Ajmer Rd, Jaipur, Rajasthan 302019</p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <FaMapMarkerAlt className="contact-icon" />
                                    <div>
                                        <p><strong>Udaipur Office:</strong></p>
                                        <p>Fortune 80 Complex, 205, University Rd, Udaipur, Rajasthan 313001</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-content">
                        <p>&copy; {currentYear} Shapesway Technologies Pvt. Ltd. All rights reserved.</p>
                        <div className="footer-links">
                            <Link to="/privacy-policy">Privacy Policy</Link>
                            <Link to="/terms">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
