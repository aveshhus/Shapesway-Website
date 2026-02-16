import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaHandHoldingDollar, FaLayerGroup, FaLightbulb, FaHeadset, FaArrowTrendUp, FaShieldHalved } from 'react-icons/fa6';
import './WhyChooseUs.css';

// SVG Configuration
const CX = 600; // Centered in 1200 width
const CY = 500;
const RADIUS_INNER_START = 160;
const RADIUS_INNER_END = 260;
const ARROW_SHAFT_Start = 270;
const ARROW_SHAFT_END = 390;
const ARROW_TIP_End = 450;
const SEGMENT_ANGLE = 180 / 6; // 30 degrees per segment

const features = [
    {
        id: '01',
        icon: <FaHandHoldingDollar size={32} />,
        title: 'Affordable Cost',
        desc: 'Premium solutions at competitive market rates.',
        color: '#0db5a4'
    },
    {
        id: '02',
        icon: <FaLayerGroup size={32} />,
        title: 'Modern Design',
        desc: 'Cutting-edge visuals and intuitive UX.',
        color: '#224aa4'
    },
    {
        id: '03',
        icon: <FaLightbulb size={32} />,
        title: 'Creative Design',
        desc: 'Innovative approaches to complex problems.',
        color: '#0db5a4'
    },
    {
        id: '04',
        icon: <FaHeadset size={32} />,
        title: '24X7 User Support',
        desc: 'Dedicated experts available around the clock.',
        color: '#224aa4'
    },
    {
        id: '05',
        icon: <FaArrowTrendUp size={32} />,
        title: 'Business Growth',
        desc: 'Strategies designed to scale your revenue.',
        color: '#0db5a4'
    },
    {
        id: '06',
        icon: <FaShieldHalved size={32} />,
        title: 'Safe',
        desc: 'Enterprise-grade security and protection.',
        color: '#224aa4'
    },
];

const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = (angleInDegrees - 180) * Math.PI / 180.0;
    return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
    };
};

const InfographicSegment = ({ index, feature, isActive, onHover }) => {
    const startAngle = index * SEGMENT_ANGLE;
    const endAngle = (index + 1) * SEGMENT_ANGLE;
    const midAngle = startAngle + (SEGMENT_ANGLE / 2);

    // 3D Tilt Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseY, [-75, 75], [15, -15]); // Inverse for natural tilt
    const rotateY = useTransform(mouseX, [-130, 130], [-15, 15]);

    function handleMouseMove(event) {
        const rect = event.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXPos = event.clientX - rect.left;
        const mouseYPos = event.clientY - rect.top;

        const xPct = mouseXPos - width / 2;
        const yPct = mouseYPos - height / 2;

        x.set(xPct);
        y.set(yPct);

        // CSS Variable update for spotlight
        event.currentTarget.style.setProperty('--mouse-x', `${mouseXPos}px`);
        event.currentTarget.style.setProperty('--mouse-y', `${mouseYPos}px`);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
        onHover(null);
    }

    const ringPad = 1;
    const p1 = polarToCartesian(CX, CY, RADIUS_INNER_START, startAngle + ringPad);
    const p2 = polarToCartesian(CX, CY, RADIUS_INNER_END, startAngle + ringPad);
    const p3 = polarToCartesian(CX, CY, RADIUS_INNER_END, endAngle - ringPad);
    const p4 = polarToCartesian(CX, CY, RADIUS_INNER_START, endAngle - ringPad);

    const ringPath = `
        M ${p1.x} ${p1.y}
        L ${p2.x} ${p2.y}
        A ${RADIUS_INNER_END} ${RADIUS_INNER_END} 0 0 1 ${p3.x} ${p3.y}
        L ${p4.x} ${p4.y}
        A ${RADIUS_INNER_START} ${RADIUS_INNER_START} 0 0 0 ${p1.x} ${p1.y}
        Z
    `;

    // --- NARROW Arrow Segment (Corrected) ---
    // User wants thin/stick arrows.
    // Shaft: ~8 degrees total (Half=4)
    // Head: ~20 degrees total (Half=10)

    const shaftHalfWidth = 4;
    const headHalfWidth = 10;

    // Shaft Base (Thin, separated)
    const shaftBaseLeft = polarToCartesian(CX, CY, ARROW_SHAFT_Start, midAngle - shaftHalfWidth);
    const shaftBaseRight = polarToCartesian(CX, CY, ARROW_SHAFT_Start, midAngle + shaftHalfWidth);

    // Shaft Top (Straight up)
    const shaftTopLeft = polarToCartesian(CX, CY, ARROW_SHAFT_END, midAngle - shaftHalfWidth);
    const shaftTopRight = polarToCartesian(CX, CY, ARROW_SHAFT_END, midAngle + shaftHalfWidth);

    // Head Base (Wider)
    const headBaseLeft = polarToCartesian(CX, CY, ARROW_SHAFT_END, midAngle - headHalfWidth);
    const headBaseRight = polarToCartesian(CX, CY, ARROW_SHAFT_END, midAngle + headHalfWidth);

    const tip = polarToCartesian(CX, CY, ARROW_TIP_End, midAngle);

    const arrowPath = `
        M ${shaftBaseLeft.x} ${shaftBaseLeft.y}
        L ${shaftTopLeft.x} ${shaftTopLeft.y}
        L ${headBaseLeft.x} ${headBaseLeft.y}
        L ${tip.x} ${tip.y}
        L ${headBaseRight.x} ${headBaseRight.y}
        L ${shaftTopRight.x} ${shaftTopRight.y}
        L ${shaftBaseRight.x} ${shaftBaseRight.y}
        Z
    `;

    // Positions
    const iconPos = polarToCartesian(CX, CY, (RADIUS_INNER_START + RADIUS_INNER_END) / 2, midAngle);
    const numberPos = polarToCartesian(CX, CY, (ARROW_SHAFT_Start + ARROW_SHAFT_END) / 2, midAngle);
    // Push label further out to ensure gap (Reduced by ~50% of the increase)
    // Was +100, now +75 to bring it closer but keep safe
    const labelPos = polarToCartesian(CX, CY, ARROW_TIP_End + 75, midAngle);

    // Text Alignment & Spacing
    let textAlign = 'center';
    let textX = labelPos.x;
    let textY = labelPos.y;

    // Reduced lateral separation from 145 -> 130
    const lateralGap = 130;

    if (midAngle < 45) { // Left-most (Segments 1)
        textAlign = 'right';
        textX -= lateralGap;
        textY += 10; // Adjust for arc
    } else if (midAngle < 90) { // Mid-Left (Segment 2)
        textAlign = 'right';
        textX -= lateralGap;
        textY -= 10;
    } else if (midAngle > 135) { // Right-most (Segment 6)
        textAlign = 'left';
        textX += lateralGap;
        textY += 10;
    } else if (midAngle > 90) { // Mid-Right (Segment 5)
        textAlign = 'left';
        textX += lateralGap;
        textY -= 10;
    } else {
        // Center segments (3 & 4)
        textY -= 60; // Push vertically to clear arrow tip
    }

    if (midAngle > 60 && midAngle < 120) {
        textX = labelPos.x;
        textAlign = 'center';
        // Ensure center cards are definitely above the arrow tip
        // Tip is at y=~50 (since CY=500, radius 450, angle 270)
        // Actually in polar, 270 is UP. 
        // Let's rely on the radial push + this offset.
        textY = labelPos.y - 20;
    }

    const numberRotation = midAngle - 90;
    const fillColor = "url(#grad1)";

    // Framer Motion Variants
    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
    };

    return (
        <g
            className="info-segment-group"
            onMouseEnter={() => onHover(index)}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: 'pointer' }}
        >
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#224aa4" />
                    <stop offset="100%" stopColor="#0db5a4" />
                </linearGradient>
            </defs>

            {/* Inner Ring */}
            <motion.path
                d={ringPath}
                fill={fillColor}
                stroke="white"
                strokeWidth="4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0, margin: "100px" }} // Trigger earlier
                variants={itemVariants}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                style={{ transformOrigin: `${CX}px ${CY}px` }}
            />

            {/* Arrow */}
            <motion.path
                d={arrowPath}
                fill={fillColor}
                stroke="white"
                strokeWidth="2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0, margin: "100px" }} // Trigger earlier
                variants={itemVariants}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                style={{ transformOrigin: `${CX}px ${CY}px` }}
            />

            {/* Icon */}
            <foreignObject x={iconPos.x - 30} y={iconPos.y - 30} width="60" height="60" style={{ pointerEvents: 'none' }}>
                <div className="svg-icon-container">
                    {feature.icon}
                </div>
            </foreignObject>

            {/* Number */}
            <motion.text
                x={numberPos.x}
                y={numberPos.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="rgba(255,255,255,0.95)"
                fontSize="18"
                fontWeight="800"
                style={{
                    pointerEvents: 'none',
                    transformBox: 'fill-box',
                    transformOrigin: 'center',
                    transform: `rotate(${numberRotation}deg)`
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0, margin: "100px" }} // Animate numbers too
                transition={{ delay: 0.3 + index * 0.1 }}
            >
                {feature.id}
            </motion.text>

            {/* Text Labels */}
            {/* Connector Line (Arrow Tip to Card) */}
            <motion.path
                d={`M ${tip.x} ${tip.y} L ${labelPos.x} ${labelPos.y}`}
                stroke="rgba(13, 181, 164, 0.3)"
                strokeWidth="1"
                strokeDasharray="4 2"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
            />

            {/* Text Labels - PREMIUM FLOATING GLASS CARD WITH GRADIENT BORDER */}
            <foreignObject
                x={textX - 130}
                y={textY - 60}
                width="260"
                height="150"
                style={{ overflow: 'visible' }}
            >
                <div
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        width: '100%',
                        height: '100%',
                        perspective: '1000px'
                    }}
                >
                    <motion.div
                        className="why-tracker-card"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "100px" }}
                        transition={{ delay: 0.4 + index * 0.1, type: "spring", stiffness: 80, damping: 15 }}
                        style={{
                            padding: '2px', // Gradient border width
                            background: 'linear-gradient(135deg, #224aa4, #0db5a4)',
                            borderRadius: '20px',
                            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                            cursor: "pointer",
                            height: "auto",
                            minHeight: "110px",
                            position: 'relative',
                            zIndex: 10,
                            overflow: 'hidden', // Contain the spotlight
                            rotateX: rotateX,
                            rotateY: rotateY,
                            transformStyle: "preserve-3d"
                        }}
                    >
                        {/* Mouse Tracker Spotlight */}
                        <div
                            style={{
                                pointerEvents: 'none',
                                position: 'absolute',
                                inset: 0,
                                background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.4), transparent 40%)',
                                zIndex: 20,
                                opacity: 0,
                                transition: 'opacity 0.3s ease',
                                borderRadius: '20px',
                            }}
                            className="mouse-spotlight"
                        />

                        {/* Hover Overlay to show spotlight */}
                        <style>{`
                            .why-tracker-card:hover .mouse-spotlight {
                                opacity: 1 !important;
                            }
                        `}</style>

                        {/* Inner Content Card (Glass Background) */}
                        <div style={{
                            background: "rgba(255, 255, 255, 0.96)", // Slightly higher opacity
                            backdropFilter: "blur(12px)",
                            width: '100%',
                            height: '100%',
                            borderRadius: '18px',
                            padding: "16px 20px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center"
                        }}>
                            <h4 style={{
                                fontSize: '21px', // Increased from 18px
                                marginBottom: '8px',
                                lineHeight: '1.2',
                                background: 'linear-gradient(135deg, #224aa4 0%, #0db5a4 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontWeight: '800'
                            }}>
                                {feature.title}
                            </h4>
                            <p style={{ fontSize: '15px', lineHeight: '1.5', margin: 0, color: '#64748b', fontWeight: '500' }}>
                                {feature.desc}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </foreignObject>
        </g>
    );
};

const WhyChooseUs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className="section why-section-svg">
            <div className="container">
                <div className="section-header text-center">
                    <h2>Why Choose <span style={{ color: '#0db5a4' }}>Us</span></h2>
                    <p style={{ color: '#888', fontSize: '14px', marginTop: '10px' }}>
                        Providing comprehensive digital solutions for your business growth.
                    </p>
                </div>

                <div className="svg-container-wrapper">
                    <svg viewBox="0 0 1200 510" className="infographic-svg" style={{ overflow: 'visible' }}>
                        <defs>
                            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                                <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#00000015" />
                            </filter>
                        </defs>

                        <path
                            d={`M ${polarToCartesian(CX, CY, RADIUS_INNER_START - 5, 0).x} ${polarToCartesian(CX, CY, RADIUS_INNER_START - 5, 0).y}
                               A ${RADIUS_INNER_START - 5} ${RADIUS_INNER_START - 5} 0 0 1 ${polarToCartesian(CX, CY, RADIUS_INNER_START - 5, 180).x} ${polarToCartesian(CX, CY, RADIUS_INNER_START - 5, 180).y}
                               L ${CX} ${CY} Z`}
                            fill="white"
                            filter="url(#shadow)"
                        />

                        {features.map((feature, i) => (
                            <InfographicSegment
                                key={i}
                                index={i}
                                feature={feature}
                                isActive={activeIndex === i}
                                onHover={setActiveIndex}
                            />
                        ))}

                        <text x={CX} y={CY - 50} textAnchor="middle" className="center-text-title" fill="#0db5a4" fontSize="32" fontWeight="800">
                            Why Choose Us
                        </text>
                    </svg>
                </div>

                <div className="why-mobile-list">
                    {features.map((feature, i) => (
                        <div key={i} className="why-mobile-card">
                            <div className="mobile-count">{feature.id}</div>
                            <div className="mobile-icon" style={{ background: 'linear-gradient(to right, #224aa4, #0db5a4)' }}>
                                {feature.icon}
                            </div>
                            <div className="mobile-text">
                                <h4>{feature.title}</h4>
                                <p>{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
