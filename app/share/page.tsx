'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import AnimatedBackground from '@/components/AnimatedBackground';
import ShareCard from '@/components/ShareCard';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { mockIdentities } from '@/data/mock';

export default function SharePage() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [selectedIdentity] = useState(mockIdentities[0]);

    const handleShare = () => {
        if (!username.trim()) return;

        if (navigator.share) {
            navigator.share({
                title: 'FanDNA - My Bundesliga Identity',
                text: `I'm "${selectedIdentity.title}" on FanDNA! Discover your unique football identity.`,
            });
        }
    };

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
                            Share Your Identity
                        </h1>
                        <p className="text-lg text-gray-300">
                            Let the world know your FanDNA
                        </p>
                    </motion.div>

                    {/* Username Input */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mb-12 max-w-md mx-auto"
                    >
                        <label className="block text-sm font-bold text-neon-cyan uppercase mb-3">
                            Your Football Name
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your fan name..."
                            className="w-full px-4 py-3 glass rounded-lg border border-neon-cyan/20 focus:border-neon-cyan/50 bg-transparent text-white placeholder-gray-500 focus:outline-none focus:ring-0"
                        />
                    </motion.div>

                    {/* Share Card */}
                    <ShareCard
                        username={username || 'Fan'}
                        identity={selectedIdentity.title}
                        trait={selectedIdentity.personalityTraits[0]}
                    />

                    {/* Additional Share Options */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-12 text-center"
                    >
                        <p className="text-sm text-gray-400 mb-6">Share on social media</p>
                        <div className="flex gap-4 justify-center flex-wrap">
                            {[
                                { label: 'Twitter', emoji: '𝕏' },
                                { label: 'Instagram', emoji: '📸' },
                                { label: 'TikTok', emoji: '🎵' },
                                { label: 'Discord', emoji: '💬' },
                            ].map((platform, idx) => (
                                <motion.button
                                    key={idx}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-3 glass border border-neon-cyan/30 rounded-lg hover:border-neon-cyan/60 transition-smooth hover:bg-neon-cyan/10"
                                >
                                    <span className="text-xl mr-2">{platform.emoji}</span>
                                    {platform.label}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Back to Home */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="text-center mt-12"
                    >
                        <button
                            onClick={() => router.push('/')}
                            className="text-sm text-gray-400 hover:text-neon-cyan transition-smooth"
                        >
                            ← Back to Home
                        </button>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
