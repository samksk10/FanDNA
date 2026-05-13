'use client';

import { motion } from 'framer-motion';

interface NavbarProps {
    showLogo?: boolean;
}

export default function Navbar({ showLogo = true }: NavbarProps) {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 glass border-b border-neon-cyan/10"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                {showLogo && (
                    <div className="flex items-center gap-2">
                        <div className="text-2xl font-bold gradient-text">⚽ FanDNA</div>
                    </div>
                )}
                <div className="flex gap-4">
                    <a
                        href="/"
                        className="text-sm hover:text-neon-cyan transition-smooth"
                    >
                        Home
                    </a>
                    <a
                        href="/journey"
                        className="text-sm hover:text-neon-cyan transition-smooth"
                    >
                        Start
                    </a>
                </div>
            </div>
        </motion.nav>
    );
}
