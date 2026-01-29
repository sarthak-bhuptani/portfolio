import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);

    // Mouse Position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Spring configurations for the trail
    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };

    // Create a chain of springs where each one follows the previous one
    const x1 = useSpring(mouseX, { ...springConfig, damping: 25 });
    const y1 = useSpring(mouseY, { ...springConfig, damping: 25 });

    const x2 = useSpring(x1, { ...springConfig, damping: 30 });
    const y2 = useSpring(y1, { ...springConfig, damping: 30 });

    const x3 = useSpring(x2, { ...springConfig, damping: 35 });
    const y3 = useSpring(y2, { ...springConfig, damping: 35 });

    const x4 = useSpring(x3, { ...springConfig, damping: 40 });
    const y4 = useSpring(y3, { ...springConfig, damping: 40 });

    const x5 = useSpring(x4, { ...springConfig, damping: 45 });
    const y5 = useSpring(y4, { ...springConfig, damping: 45 });

    useEffect(() => {
        const updateMouse = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            if (e.target.closest('a, button, input, textarea, .cursor-pointer, [role="button"]')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMouse);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMouse);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY]);

    // Trail rendering helper
    const TrailPoint = ({ x, y, size, opacity, color }) => (
        <motion.div
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
            style={{ x, y, translateX: '-50%', translateY: '-50%' }}
            animate={{
                width: isHovering ? size * 1.5 : size,
                height: isHovering ? size * 1.5 : size,
                backgroundColor: isHovering ? '#22d3ee' : color, // Cyan on hover, Gradient otherwise
            }}
            initial={{ opacity }}
        />
    );

    return (
        <div className="hidden md:block">
            {/* Gradient Trail: Purple -> Blue -> Cyan */}
            <TrailPoint x={x5} y={y5} size={6} opacity={0.4} color="#9333ea" /> {/* Purple */}
            <TrailPoint x={x4} y={y4} size={8} opacity={0.5} color="#7c3aed" /> {/* Violet */}
            <TrailPoint x={x3} y={y3} size={10} opacity={0.6} color="#2563eb" /> {/* Blue */}
            <TrailPoint x={x2} y={y2} size={12} opacity={0.7} color="#0891b2" /> {/* Cyan */}

            {/* Head of the comet */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[10000] rounded-full mix-blend-difference bg-white"
                style={{ x: x1, y: y1, translateX: '-50%', translateY: '-50%' }}
                animate={{
                    width: isHovering ? 24 : 16,
                    height: isHovering ? 24 : 16,
                    scale: isHovering ? 0.8 : 1,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 25 }}
            >
                {isHovering && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 rounded-full border-2 border-white"
                    />
                )}
            </motion.div>
        </div>
    );
};

export default CustomCursor;
