'use client';

import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import AnimatedBackground from '@/components/AnimatedBackground';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <div className="min-h-screen bg-dark-bg">
            <AnimatedBackground />
            <Navbar />
            <Hero />

            {/* Features Section */}
            <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl sm:text-5xl font-black gradient-text mb-4">
                            Why Choose FanDNA?
                        </h2>
                        <p className="text-lg text-gray-300">
                            Experience the future of fan identity
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: 'AI-Powered Analysis',
                                description:
                                    'Our advanced AI algorithms analyze 847 data points to reveal your true football personality.',
                                icon: '🤖',
                            },
                            {
                                title: 'Personalized Journey',
                                description:
                                    'Answer meaningful questions about your Bundesliga passion and receive a unique identity.',
                                icon: '🧭',
                            },
                            {
                                title: 'Beautiful Visuals',
                                description:
                                    'Immersive, cinematic design inspired by Spotify Wrapped and modern web experiences.',
                                icon: '✨',
                            },
                            {
                                title: 'Shareable Cards',
                                description:
                                    'Create stunning identity cards to share with friends on social media.',
                                icon: '📱',
                            },
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="glass p-8 rounded-2xl border border-neon-cyan/20 hover:border-neon-cyan/50 transition-smooth"
                            >
                                <div className="text-5xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold mb-3 gradient-text">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl sm:text-5xl font-black gradient-text mb-4">
                            How FanDNA Works
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { step: 1, title: 'Answer', desc: 'Share your football preferences' },
                            { step: 2, title: 'Analyze', desc: 'AI processes your football soul' },
                            { step: 3, title: 'Discover', desc: 'Reveal your unique identity' },
                            { step: 4, title: 'Share', desc: 'Show the world your FanDNA' },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                {idx < 3 && (
                                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-1 bg-gradient-neon" />
                                )}
                                <div className="glass p-6 rounded-xl border border-neon-cyan/20 text-center">
                                    <div className="text-4xl font-black gradient-text mb-3">
                                        {item.step}
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-400">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-4xl sm:text-5xl font-black gradient-text mb-6">
                        Ready to Discover Your FanDNA?
                    </h2>
                    <p className="text-lg text-gray-300 mb-8">
                        Join thousands of Bundesliga fans who have already discovered their unique identity.
                    </p>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/journey"
                        className="inline-block px-10 py-4 bg-gradient-neon text-black font-bold text-lg rounded-lg hover:shadow-glow-cyan transition-smooth"
                    >
                        Start Your Journey
                    </motion.a>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
}
