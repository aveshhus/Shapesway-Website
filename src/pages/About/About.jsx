import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <section className="page-hero">
                <div className="container">
                    <h1>About Shapesway Technologies</h1>
                    <p>Your Trusted Partner in Digital Transformation</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="content-grid">
                        <div>
                            <h2>Who We Are</h2>
                            <p>Shapesway Technologies is a leading IT services company specializing in cutting-edge digital solutions for businesses worldwide. Since our inception, we've been committed to delivering excellence in every project.</p>
                            <p>With offices in Jaipur and Udaipur, we serve clients across USA, Australia, Europe, and the Gulf region, providing world-class IT services that drive business growth and digital transformation.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
