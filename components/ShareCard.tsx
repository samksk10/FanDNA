'use client';

import { motion } from 'framer-motion';
import { Download, Share2 } from 'lucide-react';
import { useRef } from 'react';
import html2canvas from 'html2canvas';

interface ShareCardProps {
    username: string;
    identity: string;
    trait: string;
}

export default function ShareCard({
    username,
    identity,
    trait,
}: ShareCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'FanDNA - My Bundesliga Identity',
                    text: `I'm "${identity}" on FanDNA! Discover your unique football identity.`,
                });
            } catch (error) {
                console.log('Share cancelled or failed');
            }
        } else {
            // Fallback: copy to clipboard
            const text = `I'm "${identity}" on FanDNA! Discover your unique football identity.`;
            navigator.clipboard.writeText(text);
            alert('Shared! (Text copied to clipboard)');
        }
    };

    const handleDownload = async () => {
        if (!cardRef.current) return;

        try {
            const canvas = await html2canvas(cardRef.current, {
                backgroundColor: '#0a0e27',
                scale: 2,
                logging: false,
            });
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = `FanDNA-${username}-${identity}.png`;
            link.click();
        } catch (error) {
            console.error('Download failed:', error);
            alert('Failed to download card');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-md mx-auto"
        >
            {/* Card */}
            <div
                ref={cardRef}
                className="glass border-2 border-neon-cyan/40 rounded-3xl p-8 text-center neon-glow-cyan relative overflow-hidden"
            >
                {/* Background Blur */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 via-transparent to-neon-purple/5" />

                <div className="relative z-10">
                    {/* Avatar */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-neon flex items-center justify-center text-4xl font-bold"
                    >
                        {username.charAt(0).toUpperCase()}
                    </motion.div>

                    {/* Username */}
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl font-bold mb-2"
                    >
                        {username}
                    </motion.h2>

                    {/* Identity Title */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl gradient-text font-bold mb-4"
                    >
                        {identity}
                    </motion.p>

                    {/* Trait Badge */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="inline-block px-6 py-2 glass border border-neon-cyan/30 rounded-full text-sm mb-6"
                    >
                        {trait}
                    </motion.div>

                    {/* Divider */}
                    <div className="w-16 h-1 bg-gradient-neon mx-auto mb-6 rounded" />

                    {/* FanDNA Logo */}
                    <p className="text-sm text-gray-400 mb-8">Powered by FanDNA</p>

                    {/* Action Buttons */}
                    <div className="flex gap-4 justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleShare}
                            className="flex items-center gap-2 px-6 py-3 glass border border-neon-cyan/30 rounded-lg hover:border-neon-cyan/60 transition-smooth"
                        >
                            <Share2 size={18} />
                            <span className="text-sm font-medium">Share</span>
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleDownload}
                            className="flex items-center gap-2 px-6 py-3 bg-gradient-neon text-black font-bold rounded-lg hover:shadow-glow-cyan transition-smooth"
                        >
                            <Download size={18} />
                            <span className="text-sm font-medium">Download</span>
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
