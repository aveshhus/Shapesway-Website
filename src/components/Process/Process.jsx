import React from 'react';
import { motion } from 'framer-motion';
import {
    FaUsers,
    FaSitemap,
    FaPaintBrush,
    FaCode,
    FaCheckCircle,
    FaRocket
} from 'react-icons/fa';
import './Process.css';

const Process = () => {
    const stepsData = [
        {
            id: 1,
            title: 'Information Gathering',
            description: 'We dig deep to understand your goals, audience, and requirements.',
            icon: <FaUsers />
        },
        {
            id: 2,
            title: 'Structure & Planning',
            description: 'Creating a solid sitemap and wireframes to guide the user journey.',
            icon: <FaSitemap />
        },
        {
            id: 3,
            title: 'UI/UX Design',
            description: 'Crafting stunning, user-centric visual designs that fit your brand.',
            icon: <FaPaintBrush />
        },
        {
            id: 4,
            title: 'Development',
            description: 'Writing clean, scalable code to bring the designs to life.',
            icon: <FaCode />
        },
        {
            id: 5,
            title: 'Testing & QA',
            description: 'Rigorous testing across all devices to ensure flawless performance.',
            icon: <FaCheckCircle />
        },
        {
            id: 6,
            title: 'Launch & Support',
            description: 'Deploying your site and providing ongoing maintenance for success.',
            icon: <FaRocket />
        }
    ];

    return (
        <section className="process-section">
            <div className="container">
                <div className="section-header text-center">
                    <span className="section-tag">How We Work</span>
                    <h2>Our Development Process</h2>
                    <p>A proven simplified workflow to deliver exceptional results.</p>
                </div>

                <div className="process-grid">
                    {stepsData.map((step, index) => (
                        <motion.div
                            key={step.id}
                            className="process-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{
                                y: 15,
                                scale: 1.05,
                                transition: { type: "spring", stiffness: 300, damping: 20 }
                            }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="card-number">0{step.id}</div>
                            <div className="card-icon">
                                {step.icon}
                            </div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
