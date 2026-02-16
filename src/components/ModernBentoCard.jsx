import React, { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const ModernBentoCard = ({
    children,
    className = "",
    backgroundImage = "",
    dark = false,
    spotlightColor = "rgba(13, 181, 164, 0.15)"
}) => {
    const ref = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    // Mouse tracking for spotlight
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // 3D Tilt Values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth springs for tilt
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = ({ clientX, clientY }) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseXRel = clientX - rect.left;
        const mouseYRel = clientY - rect.top;

        // Set spotlight values
        mouseX.set(mouseXRel);
        mouseY.set(mouseYRel);

        // Calculate normalized position (-0.5 to 0.5) for tilt
        const xPct = (mouseXRel / width) - 0.5;
        const yPct = (mouseYRel / height) - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            className={`neo-modern-card ${dark ? 'dark-theme' : 'light-theme'} ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
                perspective: 1000,
                transformStyle: "preserve-3d",
                rotateX,
                rotateY,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
            {/* Background Image with Layered Effects */}
            {backgroundImage && (
                <div className="neo-card-bg-layer" style={{ transform: "translateZ(-50px)" }}>
                    <img src={backgroundImage} alt="Background" />
                    <div className="neo-bg-overlay" />
                </div>
            )}

            {/* Dynamic Spotlight Effect */}
            <motion.div
                className="neo-spotlight-overlay"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            600px circle at ${mouseX}px ${mouseY}px,
                            ${spotlightColor},
                            transparent 80%
                        )
                    `,
                    opacity: isHovered ? 1 : 0,
                    zIndex: 2
                }}
            />

            {/* Border Glow Tracking */}


            {/* Content Container - Removed Parallax Z-depth to fix text blur */}
            <div
                className="neo-card-content relative z-10 h-full flex flex-col justify-between"
            >
                {children}
            </div>


        </motion.div>
    );
};
