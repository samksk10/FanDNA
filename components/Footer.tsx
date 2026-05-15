'use client';

import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="glass border-t border-neon-cyan/10 mt-20"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-lg font-bold gradient-text mb-4">⚽ FanDNA</h3>
                        <p className="text-sm text-gray-400">
                            Discover your unique Bundesliga identity powered by AI.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-sm font-bold text-neon-cyan uppercase mb-4">
                            Navigate
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="/"
                                    className="text-sm text-gray-400 hover:text-neon-cyan transition-smooth"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/journey"
                                    className="text-sm text-gray-400 hover:text-neon-cyan transition-smooth"
                                >
                                    Start Journey
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-sm font-bold text-neon-cyan uppercase mb-4">
                            Connect
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-gray-400 hover:text-neon-cyan transition-smooth"
                                >
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-gray-400 hover:text-neon-cyan transition-smooth"
                                >
                                    Discord
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent mb-8" />

                {/* Copyright */}
                <div className="text-center">
                    <p className="text-sm text-gray-500">
                        © 2026 Samuel KISENGE. All rights reserved. Football passion, powered by AI.
                    </p>
                </div>
            </div>
        </motion.footer>
    );
}
