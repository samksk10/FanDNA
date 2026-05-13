'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import AnimatedBackground from '@/components/AnimatedBackground';
import IdentityCard from '@/components/IdentityCard';
import Footer from '@/components/Footer';
import { mockIdentities } from '@/data/mock';
import { useState, useEffect } from 'react';

export default function ResultPage() {
    const router = useRouter();
    const [selectedIdentity, setSelectedIdentity] = useState(0);

    // Get a random identity for variety
    useEffect(() => {
        setSelectedIdentity(Math.floor(Math.random() * mockIdentities.length));
    }, []);

    const identity = mockIdentities[selectedIdentity];

    return (
        <div className="min-h-screen bg-dark-bg">
            <AnimatedBackground />
            <Navbar />

            <main className="relative z-10 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl sm:text-5xl font-black gradient-text mb-4">
                            Your FanDNA Identity
                        </h1>
                        <p className="text-lg text-gray-300">
                            Discover who you are as a Bundesliga fan
                        </p>
                    </motion.div>

                    {/* Identity Card */}
                    <IdentityCard identity={identity} />

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 mt-12 justify-center"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => router.push('/wrapped')}
                            className="px-8 py-4 bg-gradient-neon text-black font-bold rounded-lg hover:shadow-glow-cyan transition-smooth"
                        >
                            View Your Wrapped Experience
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => router.push('/')}
                            className="px-8 py-4 glass border border-neon-cyan/30 rounded-lg hover:border-neon-cyan/60 transition-smooth"
                        >
                            Start Over
                        </motion.button>
                    </motion.div>

                    {/* Interesting Facts */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
                    >
                        {[
                            {
                                label: 'Analysis Depth',
                                value: '847 Data Points',
                            },
                            {
                                label: 'Accuracy',
                                value: '99.2%',
                            },
                            {
                                label: 'Time Taken',
                                value: '2.3 seconds',
                            },
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1.1 + idx * 0.1 }}
                                className="glass p-6 rounded-lg border border-neon-cyan/20 text-center"
                            >
                                <p className="text-sm text-gray-400 mb-2">{stat.label}</p>
                                <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
