import React from 'react';
import { motion } from 'framer-motion';

export const RevealText = ({ text, className = "", delay = 0, stagger = 0.02 }) => {
    // Split text into characters
    const characters = text.split("");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: stagger,
                delayChildren: delay
            }
        }
    };

    const charVariants = {
        hidden: { y: "100%", opacity: 0 },
        visible: {
            y: "0%",
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <motion.span
            className={`reveal-text-container ${className}`}
            style={{ display: "inline-block", overflow: "hidden", whiteSpace: "pre-wrap", verticalAlign: "bottom" }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {characters.map((char, index) => (
                <motion.span
                    key={index}
                    variants={charVariants}
                    style={{ display: "inline-block" }}
                >
                    {char}
                </motion.span>
            ))}
        </motion.span>
    );
};

export const RevealBlock = ({ children, className = "", delay = 0 }) => {
    return (
        <div style={{ overflow: "hidden" }} className={className}>
            <motion.div
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.8,
                    delay: delay,
                    ease: [0.16, 1, 0.3, 1]
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};
