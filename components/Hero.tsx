'use client';

import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
        >
            <div className="max-w-4xl mx-auto text-center">
                {/* Main Title */}
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 gradient-text leading-tight"
                >
                    Discover Your
                    <br />
                    Football Soul
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                >
                    FanDNA reveals your unique Bundesliga identity. Powered by AI, fueled
                    by passion. Get your personalized wrapped experience.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <a
                        href="/journey"
                        className="inline-block px-8 py-4 bg-gradient-neon text-black font-bold rounded-lg hover:shadow-glow-cyan transition-smooth transform hover:scale-105"
                    >
                        Start Your FanDNA Journey
                    </a>
                </motion.div>

                {/* Features Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20"
                >
                    {[
                        {
                            icon: '🧬',
                            title: 'AI-Powered Identity',
                            desc: 'Personalized analysis of your fan personality',
                        },
                        {
                            icon: '⚽',
                            title: 'Bundesliga Wrapped',
                            desc: 'Your complete football journey visualized',
                        },
                        {
                            icon: '✨',
                            title: 'Shareable Experience',
                            desc: 'Beautiful cards to share with friends',
                        },
                    ].map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.2 + idx * 0.1 }}
                            className="glass p-6 rounded-lg border border-neon-cyan/20 hover:border-neon-cyan/50 transition-smooth"
                        >
                            <div className="text-4xl mb-3">{feature.icon}</div>
                            <h3 className="text-lg font-bold mb-2 gradient-text">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-gray-400">{feature.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}
