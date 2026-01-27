import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);

    // Mouse position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth Spring for the Ring (slight delay)
    const springConfig = { damping: 25, stiffness: 500 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const updateMousePosition = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            // Check if hovering over clickable elements
            if (e.target.closest('a, button, input, textarea, .cursor-pointer')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY]);

    return (
        <div className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block mix-blend-difference">

            {/* 1. Main Dot (Follows strictly) */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%'
                }}
            />

            {/* 2. Outer Ring (Follows with spring physics) */}
            <motion.div
                className="fixed top-0 left-0 border border-white rounded-full"
                style={{
                    x: springX,
                    y: springY,
                    translateX: '-50%',
                    translateY: '-50%'
                }}
                animate={{
                    width: isHovering ? 50 : 32,
                    height: isHovering ? 50 : 32,
                    opacity: isHovering ? 0.5 : 0.8,
                    borderWidth: isHovering ? 2 : 1,
                    scale: isHovering ? 1.2 : 1
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
            />
        </div>
    );
};

export default CustomCursor;
