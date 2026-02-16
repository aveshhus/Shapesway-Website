import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation, EffectCoverflow } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import './Portfolio.css';

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            title: 'FinTech Banking Ecosystem',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
        },
        {
            id: 2,
            title: 'HealthTrack Intelligent AI',
            image: 'https://images.unsplash.com/photo-1576091160550-217359f41f48?q=80&w=800&auto=format&fit=crop',
        },
        {
            id: 3,
            title: 'NextGen Cloud Scaler',
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
        },
        {
            id: 4,
            title: 'Visionary E-comm Platform',
            image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&auto=format&fit=crop',
        },
        {
            id: 5,
            title: 'Digital Marketing Suite',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
        },
        {
            id: 6,
            title: 'Smart Logistics System',
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
        }
    ];

    return (
        <section className="portfolio-section">
            <div className="container">
                <div className="portfolio-dark-panel">
                    <div className="portfolio-header-content">
                        <motion.span
                            className="p-subtitle"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            A SELECTION OF SIGNATURE PROJECTS
                        </motion.span>
                        <motion.h2
                            className="p-main-title"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            Our Works
                        </motion.h2>
                    </div>

                    <div className="swiper-container-wrapper">
                        <Swiper
                            modules={[Pagination, Autoplay, Navigation, EffectCoverflow]}
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            coverflowEffect={{
                                rotate: 35,
                                stretch: -20,
                                depth: 250,
                                modifier: 1.5,
                                slideShadows: true,
                            }}
                            pagination={{
                                clickable: true,
                                bulletClass: 'p-pagination-bullet',
                                bulletActiveClass: 'p-pagination-bullet-active',
                            }}
                            navigation={{
                                nextEl: '.p-next',
                                prevEl: '.p-prev',
                            }}
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 15,
                                    coverflowEffect: {
                                        rotate: 10,
                                        stretch: 0,
                                        depth: 100,
                                        modifier: 1,
                                    }
                                },
                                480: {
                                    slidesPerView: 1.1,
                                    spaceBetween: 15
                                },
                                640: {
                                    slidesPerView: 1.5,
                                    spaceBetween: 20
                                },
                                1024: {
                                    slidesPerView: 2.2,
                                    spaceBetween: 30
                                },
                                1400: {
                                    slidesPerView: 2.8,
                                    spaceBetween: 40
                                }
                            }}
                            className="portfolio-swiper"
                        >
                            {projects.map((project) => (
                                <SwiperSlide key={project.id}>
                                    <motion.div
                                        className="portfolio-card-reference"
                                        whileHover={{ y: -10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-card-image-box">
                                            <img src={project.image} alt={project.title} />
                                        </div>
                                        <div className="p-card-footer">
                                            <h3>{project.title}</h3>
                                        </div>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Custom Navigation */}
                        <div className="p-custom-nav">
                            <button className="p-prev"><FaArrowLeft /></button>
                            <button className="p-next"><FaArrowRight /></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
