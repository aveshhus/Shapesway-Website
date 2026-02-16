import React from 'react';
import {
    TbBuilding as TbBuildingHospital, TbBusinessplan, TbShoppingCart,
    TbSchool, TbTruck, TbHome, TbCpu, TbNetwork,
    TbCurrencyBitcoin, TbRocket, TbBuilding as TbBuildingSkyscraper
} from 'react-icons/tb';
import './Industries.css';

const Industries = () => {
    return (
        <div className="industries-page">
            <section className="ind-hero">
                <div className="container">
                    <h1>Industries We Serve</h1>
                    <p>Tailored digital solutions for diverse sectors, driving innovation and growth.</p>
                </div>
            </section>

            <section id="core" className="ind-section">
                <div className="container">
                    <h2><TbBuildingSkyscraper /> Core Industries</h2>
                    <div className="ind-grid">
                        <div className="ind-card">
                            <div className="ind-icon-box"><TbBuildingHospital /></div>
                            <h3>Healthcare</h3>
                            <p>Digital transformation for hospitals, telemedicine platforms, and patient management systems.</p>
                        </div>
                        <div className="ind-card">
                            <div className="ind-icon-box"><TbBusinessplan /></div>
                            <h3>FinTech</h3>
                            <p>Secure banking solutions, payment gateways, and investment management platforms.</p>
                        </div>
                        <div className="ind-card">
                            <div className="ind-icon-box"><TbShoppingCart /></div>
                            <h3>Retail & E-commerce</h3>
                            <p>Online stores, inventory management, and personalized shopping experiences.</p>
                        </div>
                        <div className="ind-card">
                            <div className="ind-icon-box"><TbSchool /></div>
                            <h3>Education (EdTech)</h3>
                            <p>Learning management systems, virtual classrooms, and educational apps.</p>
                        </div>
                        <div className="ind-card">
                            <div className="ind-icon-box"><TbTruck /></div>
                            <h3>Logistics & Supply Chain</h3>
                            <p>Fleet management, route optimization, and real-time tracking solutions.</p>
                        </div>
                        <div className="ind-card">
                            <div className="ind-icon-box"><TbHome /></div>
                            <h3>Real Estate</h3>
                            <p>Property management software, virtual tours, and listing platforms.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="emerging" className="ind-section">
                <div className="container">
                    <h2><TbRocket /> Emerging Sectors</h2>
                    <div className="ind-grid">
                        <div className="ind-card">
                            <div className="ind-icon-box"><TbCpu /></div>
                            <h3>AI & Robotics</h3>
                            <p>Advanced automation, machine learning models, and robotic process automation.</p>
                        </div>
                        <div className="ind-card">
                            <div className="ind-icon-box"><TbNetwork /></div>
                            <h3>Internet of Things (IoT)</h3>
                            <p>Smart home devices, industrial sensors, and connected ecosystems.</p>
                        </div>
                        <div className="ind-card">
                            <div className="ind-icon-box"><TbCurrencyBitcoin /></div>
                            <h3>Blockchain & Web3</h3>
                            <p>Decentralized apps (dApps), smart contracts, and cryptocurrency wallets.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Industries;
