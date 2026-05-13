'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function AIAnalyzer() {
    const phrases = [
        'Analyzing your football soul...',
        'Reading your passion...',
        'Calculating your tactical DNA...',
        'Understanding your loyalty...',
        'Discovering your identity...',
    ];

    const [phrase, setPhrase] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPhrase((prev) => (prev + 1) % phrases.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [phrases.length]);

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="max-w-2xl w-full">
                {/* AI Scan */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <div className="relative w-32 h-32 mx-auto mb-8">
                        <motion.div
                            className="absolute inset-0 border-4 border-neon-cyan rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                        />
                        <motion.div
                            className="absolute inset-2 border-2 border-neon-purple rounded-full"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                        />
                        <motion.div
                            className="absolute inset-4 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-full blur-lg opacity-50"
                            animate={{
                                scale: [0.8, 1.2, 0.8],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center text-3xl">
                            ⚽
                        </div>
                    </div>
                </motion.div>

                {/* Analyzing Text */}
                <motion.div
                    key={phrase}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                        {phrases[phrase]}
                    </h2>
                </motion.div>

                {/* Floating Particles */}
                <motion.div className="flex justify-center gap-2">
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="w-2 h-2 bg-neon-cyan rounded-full"
                            animate={{
                                y: [0, -20, 0],
                            }}
                            transition={{
                                duration: 0.8,
                                delay: i * 0.15,
                                repeat: Infinity,
                            }}
                        />
                    ))}
                </motion.div>

                {/* Progress Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-16 text-center text-sm text-gray-400"
                >
                    <p>This usually takes about 30 seconds...</p>
                </motion.div>
            </div>
        </div>
    );
}
