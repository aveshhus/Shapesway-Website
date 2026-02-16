import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './FAQs.css';

const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqs = [
        {
            question: "How do you ensure the security of my project?",
            answer: "We follow industry-leading security protocols including NDA signing, bank-grade encryption, secure coding practices (OWASP), and regular rigorous security audits. Your IP is 100% safe with us."
        },
        {
            question: "What is your typical engagement model?",
            answer: "We offer flexible engagement models: Fixed Cost (for well-defined scope), Time & Materials (for evolving projects), and Dedicated Team (for long-term collaboration)."
        },
        {
            question: "Do you provide support after launch?",
            answer: "Absolutely. We offer standard free support for 30-90 days after deployment. Beyond that, we have comprehensive maintenance packages to ensure stability."
        },
        {
            question: "Can you help with legacy system modernization?",
            answer: "Yes, we specialize in digital transformation. We can assess your legacy systems and plan a phased migration to modern, scalable cloud architectures."
        },
        {
            question: "What industries do you specialize in?",
            answer: "We have deep expertise in FinTech, Healthcare, E-commerce, Logistics, and SaaS product development, though we are industry-agnostic."
        },
        {
            question: "How long does a typical project take?",
            answer: "Project timelines vary: MVPs typically take 2-4 months, while complex enterprise platforms can take 6-12 months depending on the scope."
        },
        {
            question: "Do you offer UI/UX design services?",
            answer: "Yes, our team includes award-winning designers who focus on creating intuitive, user-centric experiences."
        },
        {
            question: "How do we communicate during development?",
            answer: "We use Slack for daily communication, Jira for task tracking, and weekly Zoom syncs to ensure total transparency."
        },
        {
            question: "What technologies do you use?",
            answer: "We specialize in React, Node.js, Python, AWS, Azure, and Google Cloud, staying at the forefront of modern software stacks."
        },
        {
            question: "Can I scale the team during the project?",
            answer: "Yes, our agile model allows you to scale your dedicated team up or down with a notice period of 30 days."
        },
        {
            question: "Do you help with mobile app development?",
            answer: "We build high-performance native (iOS/Android) and cross-platform (React Native/Flutter) mobile applications."
        },
        {
            question: "How do you handle project management?",
            answer: "We follow Scrum/Agile methodologies, providing you with a dedicated Project Manager to ensure milestones are met on time."
        },
        {
            question: "Do you sign Non-Disclosure Agreements (NDAs)?",
            answer: "Yes, we prioritize your confidentiality and sign a comprehensive NDA before any project discussions begin."
        },
        {
            question: "What is your hourly rate or project pricing?",
            answer: "Pricing depends on the engagement model and team expertise required. We provide detailed estimates after an initial discovery session."
        },
        {
            question: "Can you work with my existing in-house team?",
            answer: "Absolutely. We often act as an extension of in-house teams, providing specialized expertise and additional bandwidth."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="home-faq-section">
            <div className="container">
                <div className="faq-split-layout">
                    {/* Left side: Heading and CTA */}
                    <div className="faq-left-col sticky-col">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="faq-badge-wrapper">
                                <span className="faq-mini-tag">Common Queries & Support</span>
                            </div>
                            <h2 className="faq-main-title">Frequently asked <br />questions</h2>

                            <div className="faq-cta-box">
                                <h3>Still have a questions?</h3>
                                <p>Can't find the answer to your question? Send us an email and we'll get back to you as soon as possible!</p>
                                <a href="mailto:contact@shapesway.com" className="faq-send-btn">
                                    Send email
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right side: Accordion */}
                    <div className="faq-right-col">
                        <motion.div
                            className="accordion-wrapper"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={{
                                visible: { transition: { staggerChildren: 0.1 } }
                            }}
                        >
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    className={`faq-item-modern ${activeIndex === index ? 'active' : ''}`}
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <div className="faq-header-modern">
                                        <h4>{faq.question}</h4>
                                        <button className="faq-toggle-btn">
                                            <span className={`toggle-icon ${activeIndex === index ? 'rotated' : ''}`}></span>
                                        </button>
                                    </div>
                                    <div className="faq-content-modern">
                                        <div className="faq-inner-content">
                                            <p>{faq.answer}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQs;
