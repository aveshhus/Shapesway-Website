import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaQuoteRight } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Arjun Mehta',
            position: 'CEO, TechVantage India',
            text: 'Shapesway transformed our digital service ecosystem completely. Their attention to detail in UI/UX is truly world-class.',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
            origin: 'Indian'
        },
        {
            id: 2,
            name: 'Elizabeth Jeff',
            position: 'Product Head, GlobalScale',
            text: 'Working with Shapesway was a seamless experience. They delivered our AI module three weeks ahead of schedule.',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop',
            origin: 'Foreign'
        },
        {
            id: 3,
            name: 'Priyanka Sharma',
            position: 'Founder, Elevate Retail',
            text: 'The most technical and reliable team for e-commerce scaling in the market today. Highly recommended!',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
            origin: 'Indian'
        },
        {
            id: 4,
            name: 'Rohan Deshmukh',
            position: 'CTO, FinBridge',
            text: 'Our backend security was their top priority. The custom blockchain solution they built is rock solid and scalable.',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
            origin: 'Indian'
        },
        {
            id: 5,
            name: 'Emily Thomas',
            position: 'Marketing Director, Cloudify',
            text: 'Innovative thinking and perfect execution. Shapesway is our go-to partner for all things digital transformation.',
            image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop',
            origin: 'Foreign'
        },
        {
            id: 6,
            name: 'Aditya Iyer',
            position: 'Director, SmartEdge Solutions',
            text: 'The team at Shapesway understands business requirements as much as they understand code. Exceptional value.',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop',
            origin: 'Indian'
        },
        {
            id: 7,
            name: 'Ananya Rao',
            position: 'Product Designer, CreativeHub',
            text: 'They don’t just build apps; they create experiences. Their design language is fresh, modern, and very effective.',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop',
            origin: 'Indian'
        },
        {
            id: 8,
            name: 'Suresh Kumar',
            position: 'CEO, LogiTrans India',
            text: 'Automating our logistics chain was a massive task, but Shapesway handled it with precision and scale.',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop',
            origin: 'Indian'
        }
    ];

    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="testimonials-split">
                    {/* Left Column */}
                    <div className="testimonials-left">
                        <div className="section-header">
                            <motion.span
                                className="section-tag"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                Testimonials
                            </motion.span>
                            <motion.h2
                                className="testimonials-title"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                What Our <br /> <span className="text-gradient">Customers Say</span>
                            </motion.h2>
                            <motion.p
                                className="testimonials-description"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                We pride ourselves on delivering excellence across all sectors. Hear directly from the leaders who have scaled their businesses with Shapesway.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <Link to="/contact" className="btn btn-primary btn-lg">
                                    Contact Us
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column - Scrollable Zig Zag Area */}
                    <div className="testimonials-right-scrollable">
                        <div className="testimonials-cards-container">
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.id}
                                    className={`testimonial-card-minimal ${index % 2 === 0 ? 'offset-right' : 'offset-left'}`}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="card-purple-line"></div>
                                    <div className="card-avatar">
                                        <img src={testimonial.image} alt={testimonial.name} />
                                    </div>
                                    <div className="card-content">
                                        <div className="card-header">
                                            <h4>{testimonial.name}</h4>
                                            <FaQuoteRight className="quote-icon-modern" />
                                        </div>
                                        <p className="testimonial-text">"{testimonial.text}"</p>
                                        <span className="testimonial-position">{testimonial.position}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <div className="scroll-hint">
                            <span>Scroll for more</span>
                            <div className="scroll-arrow"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
