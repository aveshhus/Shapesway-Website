import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { PiArrowUpBold } from 'react-icons/pi';
import './ScrollToTop.css';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const buttonRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!buttonRef.current) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const moveX = (clientX - centerX) * 0.4;
        const moveY = (clientY - centerY) * 0.4;
        setMousePosition({ x: moveX, y: moveY });
    };

    const handleMouseLeave = () => {
        setMousePosition({ x: 0, y: 0 });
        setIsHovered(false);
    };

    const toggleVisibility = () => {
        if (window.scrollY > 400) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    ref={buttonRef}
                    className={`scroll-to-top-perfect ${isHovered ? 'hovered' : ''}`}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                        x: mousePosition.x,
                        y: mousePosition.y
                    }}
                    exit={{ opacity: 0, scale: 0, rotate: 180 }}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={handleMouseLeave}
                    onClick={scrollToTop}
                    style={{
                        perspective: 1000
                    }}
                >
                    {/* Progress Ring Background (Track) */}
                    <svg className="progress-ring-svg" width="60" height="60">
                        <circle
                            className="progress-ring-track"
                            cx="30"
                            cy="30"
                            r="27"
                            strokeWidth="3"
                        />
                        <motion.circle
                            className="progress-ring-indicator"
                            cx="30"
                            cy="30"
                            r="27"
                            strokeWidth="3"
                            style={{
                                pathLength: scrollYProgress,
                            }}
                        />
                    </svg>

                    {/* Button Content */}
                    <div className="scroll-content">
                        <motion.div
                            className="icon-container"
                            animate={{ y: isHovered ? [0, -4, 0] : 0 }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            <PiArrowUpBold />
                        </motion.div>
                    </div>

                    {/* Magnetic Aura & Glow */}
                    <div className="magnetic-aura"></div>
                    <div className="perfect-glow-layer"></div>

                    {/* Floating Tooltip */}
                    <div className="scroll-tooltip">Back To Top</div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
