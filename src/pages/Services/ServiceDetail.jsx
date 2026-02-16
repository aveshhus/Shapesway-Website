import React from 'react';
import { useParams, Link } from 'react-router-dom';
import servicesData from '../../data/services';
import { FaCheckCircle, FaArrowLeft } from 'react-icons/fa';
import BespokeCTA from '../../components/common/BespokeCTA';

const ServiceDetail = () => {
    const { slug } = useParams();
    const service = servicesData.find(s => s.slug === slug);

    if (!service) {
        return <div className="container" style={{ paddingTop: '100px' }}>Service not found</div>;
    }

    return (
        <div className="service-detail-page">
            <section className="page-hero">
                <div className="container">
                    <Link to="/services" className="back-link"><FaArrowLeft /> Back to Services</Link>
                    <h1>{service.title}</h1>
                    <p>{service.shortDesc}</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2>Features</h2>
                    <ul className="feature-list">
                        {service.features.map((feature, index) => (
                            <li key={index}><FaCheckCircle /> {feature}</li>
                        ))}
                    </ul>

                    <h2>Technologies</h2>
                    <div className="tech-tags">
                        {service.technologies.map((tech, index) => (
                            <span key={index} className="tech-tag">{tech}</span>
                        ))}
                    </div>
                </div>
            </section>
            <BespokeCTA
                tag="GET STARTED"
                title={["Ready to Transform", "Your Business?"]}
                desc="Scale your operations with our elite digital solutions. Our engineers are ready to build the custom architecture your enterprise deserves."
                buttonText="Connect With Us"
            />
        </div>
    );
};

export default ServiceDetail;
