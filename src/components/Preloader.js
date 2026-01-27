import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    key="preloader"
                    className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)", transition: { duration: 0.8 } }}
                >
                    <div className="relative w-32 h-32 flex items-center justify-center perspective-[1000px]">
                        {/* Core */}
                        <motion.div
                            className="w-12 h-12 bg-slate-900 dark:bg-white rounded-full flex items-center justify-center z-20 shadow-[0_0_20px_rgba(0,0,0,0.2)] dark:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 10 }}
                        >
                            <span className="font-bold text-white dark:text-slate-900 text-xl font-mono">S</span>
                        </motion.div>

                        {/* Orbit 1 */}
                        <motion.div
                            className="absolute w-full h-full border-[2px] border-cyan-500/50 rounded-full"
                            style={{ rotateX: "45deg", rotateY: "45deg" }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                        >
                            <div className="w-3 h-3 bg-cyan-500 rounded-full absolute -top-1.5 left-1/2 -translate-x-1/2 shadow-[0_0_10px_#06b6d4]" />
                        </motion.div>

                        {/* Orbit 2 */}
                        <motion.div
                            className="absolute w-full h-full border-[2px] border-purple-500/50 rounded-full"
                            style={{ rotateX: "45deg", rotateY: "-45deg" }}
                            animate={{ rotate: -360 }}
                            transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                        >
                            <div className="w-3 h-3 bg-purple-500 rounded-full absolute -bottom-1.5 left-1/2 -translate-x-1/2 shadow-[0_0_10px_#a855f7]" />
                        </motion.div>

                        {/* Orbit 3 (Horizontal) */}
                        <motion.div
                            className="absolute w-[120%] h-[120%] border-[1px] border-slate-400/30 rounded-full"
                            style={{ rotateX: "75deg" }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-12 font-mono text-sm tracking-[0.3em] text-slate-500 font-bold"
                    >
                        INITIALIZING CORE
                    </motion.div>

                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;