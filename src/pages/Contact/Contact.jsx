import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for contacting us! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="contact-page">
            <section className="page-hero">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Get in touch with our team</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-form-wrapper">
                            <h2>Send us a Message</h2>
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <label className="form-label">Full Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-input"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-input"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="form-input"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Service Interested In</label>
                                    <select name="service" className="form-select" value={formData.service} onChange={handleChange}>
                                        <option value="">Select a service</option>
                                        <option value="web">Web Development</option>
                                        <option value="mobile">Mobile App Development</option>
                                        <option value="ai">AI Development</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Message *</label>
                                    <textarea
                                        name="message"
                                        className="form-textarea"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary btn-lg">
                                    <FaPaperPlane /> Send Message
                                </button>
                            </form>
                        </div>

                        <div className="contact-info-wrapper">
                            <h2>Contact Information</h2>

                            <div className="contact-info-item">
                                <FaPhone className="contact-info-icon" />
                                <div>
                                    <h4>Phone</h4>
                                    <a href="tel:+916367181952">+91 63671 81952</a>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <FaEnvelope className="contact-info-icon" />
                                <div>
                                    <h4>Email</h4>
                                    <a href="mailto:info@shapesway.in">Info@shapesway.in</a>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <FaMapMarkerAlt className="contact-info-icon" />
                                <div>
                                    <h4>Jaipur Office</h4>
                                    <p>4th Floor, Shree Amar Heights, 405, Ajmer Rd, Jaipur, Rajasthan 302019</p>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <FaMapMarkerAlt className="contact-info-icon" />
                                <div>
                                    <h4>Udaipur Office</h4>
                                    <p>Fortune 80 Complex, 205, University Rd, Udaipur, Rajasthan 313001</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
