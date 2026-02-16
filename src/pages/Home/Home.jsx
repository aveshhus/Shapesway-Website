import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../../components/Hero/Hero';
import BentoServices from '../../components/Services/BentoServices';
import AboutSection from '../../components/About/AboutSection';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import Portfolio from '../../components/Portfolio/Portfolio';
import Technologies from '../../components/Technologies/Technologies';
import Testimonials from '../../components/Testimonials/Testimonials';
import Process from '../../components/Process/Process';
import Industries from '../../components/Industries/Industries';
import HomeCTA from '../../components/HomeCTA/HomeCTA';
import BlogPreview from '../../components/BlogPreview/BlogPreview';
import ContactSection from '../../components/ContactSection/ContactSection';
import FAQs from '../../components/FAQs/FAQs';
import './Home.css';

const SectionWrapper = ({ children, className }) => (
    <motion.div
        className={className}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
        {children}
    </motion.div>
);

const Home = () => {
    return (
        <div className="home-page">
            <Hero />



            <SectionWrapper className="bg-white">
                <BentoServices />
            </SectionWrapper>

            <SectionWrapper className="bg-light">
                <AboutSection />
            </SectionWrapper>

            <SectionWrapper className="bg-white">
                <WhyChooseUs />
            </SectionWrapper>

            <SectionWrapper className="bg-light">
                <Process />
            </SectionWrapper>

            <SectionWrapper className="bg-white">
                <Portfolio />
            </SectionWrapper>



            <SectionWrapper className="bg-light">
                <Technologies />
            </SectionWrapper>

            <SectionWrapper className="bg-white">
                <Industries />
            </SectionWrapper>

            <SectionWrapper className="bg-light">
                <Testimonials />
            </SectionWrapper>

            <SectionWrapper className="bg-white">
                <BlogPreview />
            </SectionWrapper>

            <SectionWrapper className="bg-light">
                <FAQs />
            </SectionWrapper>

            <SectionWrapper>
                <HomeCTA />
            </SectionWrapper>

            <SectionWrapper className="bg-white">
                <ContactSection />
            </SectionWrapper>
        </div>
    );
};

export default Home;
