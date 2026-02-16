import React from 'react';
import {
    TbMoodSmile, TbBriefcase, TbSchool,
    TbCoffee, TbClock, TbDeviceLaptop, TbHeart as TbHeartHandshake
} from 'react-icons/tb';
import './Careers.css';

const Careers = () => {
    return (
        <div className="careers-page">
            <section className="career-hero">
                <div className="container">
                    <h1>Join Our Team</h1>
                    <p>Build the future of technology with a passionate team of innovators.</p>
                </div>
            </section>

            <section id="life" className="career-section">
                <div className="container">
                    <h2><TbMoodSmile /> Life at Shapesway</h2>
                    <div className="perks-grid">
                        <div className="perk-card">
                            <TbCoffee style={{ fontSize: '2.5rem', color: '#0db5a4', marginBottom: '15px' }} />
                            <h3>Great Culture</h3>
                            <p>Collaborative environment where every voice is heard and valued.</p>
                        </div>
                        <div className="perk-card">
                            <TbClock style={{ fontSize: '2.5rem', color: '#0db5a4', marginBottom: '15px' }} />
                            <h3>Flexible Hours</h3>
                            <p>Work-life balance is a priority here. Work when you're most productive.</p>
                        </div>
                        <div className="perk-card">
                            <TbDeviceLaptop style={{ fontSize: '2.5rem', color: '#0db5a4', marginBottom: '15px' }} />
                            <h3>Latest Tech</h3>
                            <p>We provide the best tools and hardware to help you do your best work.</p>
                        </div>
                        <div className="perk-card">
                            <TbHeartHandshake style={{ fontSize: '2.5rem', color: '#0db5a4', marginBottom: '15px' }} />
                            <h3>Health & Wellness</h3>
                            <p>Comprehensive health benefits and wellness programs for our team.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="positions" className="career-section">
                <div className="container">
                    <h2><TbBriefcase /> Open Positions</h2>
                    <div className="job-list">
                        <div className="job-card">
                            <div className="job-info">
                                <h3>Senior Frontend Developer</h3>
                                <div className="job-meta">
                                    <span>Remote</span> • <span>Full-Time</span> • <span>Engineering</span>
                                </div>
                            </div>
                            <button className="apply-btn">Apply Now</button>
                        </div>
                        <div className="job-card">
                            <div className="job-info">
                                <h3>Backend Engineer (Node.js)</h3>
                                <div className="job-meta">
                                    <span>Hybrid</span> • <span>Full-Time</span> • <span>Engineering</span>
                                </div>
                            </div>
                            <button className="apply-btn">Apply Now</button>
                        </div>
                        <div className="job-card">
                            <div className="job-info">
                                <h3>UI/UX Designer</h3>
                                <div className="job-meta">
                                    <span>Remote</span> • <span>Full-Time</span> • <span>Design</span>
                                </div>
                            </div>
                            <button className="apply-btn">Apply Now</button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="students" className="career-section">
                <div className="container">
                    <h2><TbSchool /> Students & Freshers</h2>
                    <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>
                        We offer internship programs and entry-level positions for talented graduates.
                        Check back soon for our next recruitment drive.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Careers;
