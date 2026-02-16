import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    TbPalette, TbSpeakerphone, TbLayout, TbPencil, TbBroadcast, TbCode, TbDeviceMobile
} from 'react-icons/tb';
import './BeyondCardsCarousel.css';

const items = [
    {
        id: 1,
        title: 'Branding & Identity',
        desc: 'Crafting unique visual identities that resonate and remain memorable.',
        icon: TbPalette,
        gradientId: 1
    },
    {
        id: 2,
        title: 'Digital Marketing',
        desc: 'Data-driven campaigns to amplify your voice and reach the right audience.',
        icon: TbSpeakerphone,
        gradientId: 2
    },
    {
        id: 3,
        title: 'UI/UX Design',
        desc: 'Intuitive, user-centric interfaces designed for engagement and conversion.',
        icon: TbLayout,
        gradientId: 3
    },
    {
        id: 4,
        title: 'Content Creation',
        desc: 'Compelling storytelling that communicates your value proposition effectively.',
        icon: TbPencil,
        gradientId: 4
    },
    {
        id: 5,
        title: 'Promotion & Growth',
        desc: 'Strategic promotion channels to accelerate brand awareness.',
        icon: TbBroadcast,
        gradientId: 5
    },
    {
        id: 6,
        title: 'Web & App Dev',
        desc: 'Robust engineering meeting modern creative standards.',
        icon: TbCode,
        gradientId: 1 // Reuse 1
    },
    {
        id: 7,
        title: 'Graphic Designing',
        desc: 'Stunning visuals for social media, print, and digital assets.',
        icon: TbDeviceMobile,
        gradientId: 2 // Reuse 2
    }
];

const CardItem = ({ item, state, onClick }) => {
    // Only center card shows detailed info
    const isCenter = state === 'active';

    // Animation Variants - Tuned for "5 visible cards" feel
    // Far cards are smaller, darker, further back
    const variants = {
        active: {
            x: '0%',
            scale: 1, // Reference scale
            zIndex: 10,
            opacity: 1,
            filter: 'blur(0px)',
            rotateY: 0
        },
        left: {
            x: '-105%', // Slight overlap feels premium
            scale: 0.85,
            zIndex: 5,
            opacity: 0.8,
            filter: 'blur(0px)', // Keep crisp but smaller
            rotateY: 10
        },
        right: {
            x: '105%',
            scale: 0.85,
            zIndex: 5,
            opacity: 0.8,
            filter: 'blur(0px)',
            rotateY: -10
        },
        'far-left': {
            x: '-180%',
            scale: 0.7,
            zIndex: 1,
            opacity: 0.4,
            filter: 'blur(2px)',
            rotateY: 15
        },
        'far-right': {
            x: '180%',
            scale: 0.7,
            zIndex: 1,
            opacity: 0.4,
            filter: 'blur(2px)',
            rotateY: -15
        },
        hidden: {
            x: '0%',
            scale: 0,
            opacity: 0,
            zIndex: 0,
            display: 'none'
        }
    };

    return (
        <motion.div
            className={`beyond-card state-${state} gradient-${item.gradientId}`}
            animate={state}
            variants={variants}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }} // Smoother damping
            onClick={onClick}
        >
            {/* Background Glow Layer for Active Card */}
            <div className="beyond-bg-layer" />

            <div className="beyond-card-inner">
                {/* Icon Top Left */}
                <div className="beyond-icon-area">
                    <div className="beyond-icon-box">
                        <item.icon className="beyond-icon" />
                    </div>
                </div>

                {/* Content Bottom Left */}
                <div className="beyond-text-area">
                    <h3 className="beyond-title">{item.title}</h3>

                    {/* Description only visible on active card */}
                    <motion.div
                        className="beyond-desc-wrapper"
                        initial={false}
                        animate={{
                            height: isCenter ? 'auto' : 0,
                            opacity: isCenter ? 1 : 0,
                            marginTop: isCenter ? '10px' : '0px'
                        }}
                        transition={{ duration: 0.4 }}
                    >
                        <p className="beyond-desc">{item.desc}</p>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

const BeyondCardsCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto-rotation
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % items.length);
        }, 4000); // Slower, more premium rotation time
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="beyond-carousel-container">
            <div className="beyond-carousel-track">
                {items.map((item, index) => {
                    // Logic to find relative position: -2, -1, 0, 1, 2
                    let offset = (index - activeIndex);
                    // Handle wrap-around for shortest path
                    const len = items.length;
                    if (offset > len / 2) offset -= len;
                    if (offset < -len / 2) offset += len;

                    // Determine state string
                    let state = 'hidden';
                    if (offset === 0) state = 'active';
                    else if (offset === 1) state = 'right';
                    else if (offset === -1) state = 'left';
                    else if (offset === 2) state = 'far-right';
                    else if (offset === -2) state = 'far-left';

                    return (
                        <CardItem
                            key={item.id}
                            item={item}
                            state={state}
                            onClick={() => setActiveIndex(index)}
                        />
                    );
                })}
            </div>

            <div className="beyond-indicators">
                {items.map((_, idx) => (
                    <button
                        key={idx}
                        className={`beyond-dot ${idx === activeIndex ? 'active' : ''}`}
                        onClick={() => setActiveIndex(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default BeyondCardsCarousel;
