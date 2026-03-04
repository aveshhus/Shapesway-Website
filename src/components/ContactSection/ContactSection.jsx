import React from 'react';
import { motion } from 'framer-motion';
import {
    FaHeadset, FaWhatsapp, FaEnvelope,
    FaFacebookF, FaInstagram, FaLinkedinIn
} from 'react-icons/fa';
import './ContactSection.css';

const ContactSection = () => {
    return (
        <section className="contact-modern-section" id="contact">
            <div className="container">
                <div className="contact-header-top">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Contact Us
                    </motion.h2>
                </div>

                <div className="contact-panel-wrapper">
                    {/* Left Panel: Form */}
                    <motion.div
                        className="contact-panel-left"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3>Send us a message</h3>
                        <p className="panel-subtext">Do you have a question? A complaint? Or need any help to choose the right service from Shapesway? Feel free to contact us.</p>

                        <form action="https://formsubmit.co/shapesway.technolgies@gmail.com" method="POST" className="modern-contact-form">
                            {/* FormSubmit Configs */}
                            <input type="hidden" name="_subject" value="New Submission from Shapesway Landing Page" />
                            <input type="hidden" name="_captcha" value="false" />

                            <div className="form-grid">
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" name="First Name" placeholder="Enter your first name" required />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" name="Last Name" placeholder="Enter your Last name" required />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" name="email" placeholder="Enter your email" required />
                                </div>
                                <div className="form-group">
                                    <label>Contact Details</label>
                                    <div className="input-with-code">
                                        <select className="country-code" name="Country Code">
                                            <option value="+91">🇮🇳 +91 (India)</option>
                                            <option value="+1">🇺🇸 +1 (USA)</option>
                                            <option value="+44">🇬🇧 +44 (UK)</option>
                                            <option value="+971">🇦🇪 +971 (UAE)</option>
                                            <option value="+1">🇨🇦 +1 (Canada)</option>
                                            <option value="+61">🇦🇺 +61 (Australia)</option>
                                            <option value="+49">🇩🇪 +49 (Germany)</option>
                                            <option value="+33">🇫🇷 +33 (France)</option>
                                            <option value="+81">🇯🇵 +81 (Japan)</option>
                                            <option value="+65">🇸🇬 +65 (Singapore)</option>
                                            <option value="+966">🇸🇦 +966 (Saudi Arabia)</option>
                                            <option value="+92">🇵🇰 +92 (Pakistan)</option>
                                            <option value="+880">🇧🇩 +880 (Bangladesh)</option>
                                            <option value="+94">🇱🇰 +94 (Sri Lanka)</option>
                                            <option value="+977">🇳🇵 +977 (Nepal)</option>
                                            <option value="+60">🇲🇾 +60 (Malaysia)</option>
                                            <option value="+62">🇮🇩 +62 (Indonesia)</option>
                                            <option value="+63">🇵🇭 +63 (Philippines)</option>
                                            <option value="+66">🇹🇭 +66 (Thailand)</option>
                                            <option value="+84">🇻🇳 +84 (Vietnam)</option>
                                            <option value="+852">🇭🇰 +852 (Hong Kong)</option>
                                            <option value="+82">🇰🇷 +82 (South Korea)</option>
                                            <option value="+86">🇨🇳 +86 (China)</option>
                                            <option value="+64">🇳🇿 +64 (New Zealand)</option>
                                            <option value="+34">🇪🇸 +34 (Spain)</option>
                                            <option value="+39">🇮🇹 +39 (Italy)</option>
                                            <option value="+31">🇳🇱 +31 (Netherlands)</option>
                                            <option value="+41">🇨🇭 +41 (Switzerland)</option>
                                            <option value="+46">🇸🇪 +46 (Sweden)</option>
                                            <option value="+47">🇳🇴 +47 (Norway)</option>
                                            <option value="+45">🇩🇰 +45 (Denmark)</option>
                                            <option value="+353">🇮🇪 +353 (Ireland)</option>
                                            <option value="+32">🇧🇪 +32 (Belgium)</option>
                                            <option value="+43">🇦🇹 +43 (Austria)</option>
                                            <option value="+351">🇵🇹 +351 (Portugal)</option>
                                            <option value="+30">🇬🇷 +3 griechisch (Greece)</option>
                                            <option value="+48">🇵🇱 +48 (Poland)</option>
                                            <option value="+90">🇹🇷 +90 (Turkey)</option>
                                            <option value="+20">🇪🇬 +20 (Egypt)</option>
                                            <option value="+234">🇳🇬 +234 (Nigeria)</option>
                                            <option value="+254">🇰🇪 +254 (Kenya)</option>
                                            <option value="+27">🇿🇦 +27 (South Africa)</option>
                                            <option value="+55">🇧🇷 +55 (Brazil)</option>
                                            <option value="+52">🇲🇽 +52 (Mexico)</option>
                                            <option value="+54">🇦🇷 +54 (Argentina)</option>
                                            <option value="+56">🇨🇱 +56 (Chile)</option>
                                            <option value="+57">🇨🇴 +57 (Colombia)</option>
                                            <option value="+51">🇵🇪 +51 (Peru)</option>
                                            <option value="+974">🇶🇦 +974 (Qatar)</option>
                                            <option value="+965">🇰🇼 +965 (Kuwait)</option>
                                            <option value="+968">🇴🇲 +968 (Oman)</option>
                                            <option value="+973">🇧🇭 +973 (Bahrain)</option>
                                            <option value="+962">🇯🇴 +962 (Jordan)</option>
                                            <option value="+961">🇱🇧 +961 (Lebanon)</option>
                                            <option value="+7">🇷🇺 +7 (Russia)</option>
                                            <option value="+380">🇺🇦 +380 (Ukraine)</option>
                                            <option value="+972">🇮🇱 +972 (Israel)</option>
                                            <option value="+358">🇫🇮 +358 (Finland)</option>
                                            <option value="+352">🇱🇺 +352 (Luxembourg)</option>
                                            <option value="+420">🇨🇿 +420 (Czechia)</option>
                                            <option value="+36">🇭🇺 +36 (Hungary)</option>
                                            <option value="+40">🇷🇴 +40 (Romania)</option>
                                            <option value="+66">🇹🇭 +66 (Thailand)</option>
                                            <option value="+95">🇲🇲 +95 (Myanmar)</option>
                                            <option value="+855">🇰🇭 +855 (Cambodia)</option>
                                            <option value="+856">🇱🇦 +856 (Laos)</option>
                                            <option value="+998">🇺🇿 +998 (Uzbekistan)</option>
                                            <option value="+7">🇰🇿 +7 (Kazakhstan)</option>
                                            <option value="+93">🇦🇫 +93 (Afghanistan)</option>
                                            <option value="+250">🇷🇼 +250 (Rwanda)</option>
                                            <option value="+251">🇪🇹 +251 (Ethiopia)</option>
                                            <option value="+255">🇹🇿 +255 (Tanzania)</option>
                                            <option value="+256">🇺🇬 +256 (Uganda)</option>
                                            <option value="+263">🇿🇼 +263 (Zimbabwe)</option>
                                        </select>
                                        <input type="tel" name="phone" placeholder="Enter your contact number" required />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group full-width">
                                <label>Message</label>
                                <textarea name="message" rows="4" placeholder="Enter your message" required></textarea>
                            </div>

                            <div className="form-action">
                                <button type="submit" className="send-message-btn">
                                    Send a Message
                                </button>
                            </div>
                        </form>
                    </motion.div>

                    {/* Right Panel: Dark Info Card */}
                    <motion.div
                        className="contact-panel-right"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="info-content">
                            <h4>Hi! We are always here to help you.</h4>

                            <div className="info-items-list">
                                <div className="info-item-box">
                                    <div className="info-icon"><FaHeadset /></div>
                                    <div className="info-text">
                                        <span>Hotline:</span>
                                        <p>+91 63671 81952</p>
                                    </div>
                                </div>
                                <div className="info-item-box">
                                    <div className="info-icon"><FaWhatsapp /></div>
                                    <div className="info-text">
                                        <span>SMS / Whatsapp:</span>
                                        <p>+91 63671 81952</p>
                                    </div>
                                </div>
                                <div className="info-item-box">
                                    <div className="info-icon"><FaEnvelope /></div>
                                    <div className="info-text">
                                        <span>Email:</span>
                                        <p>Info@shapesway.in</p>
                                    </div>
                                </div>
                            </div>

                            <div className="social-footer">
                                <p>Connect with us</p>
                                <div className="social-icons-row">
                                    <a href="https://in.linkedin.com/company/shapesway-technologies-private-limited" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                                    <a href="https://www.instagram.com/shapesway_technologies/" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                                    <a href="https://wa.me/916367181952" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                                    <a href="mailto:Info@shapesway.in" aria-label="Email"><FaEnvelope /></a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
