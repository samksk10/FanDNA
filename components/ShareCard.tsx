'use client';

import { motion } from 'framer-motion';
import { Download, Share2 } from 'lucide-react';
import { useRef, useState } from 'react';
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
    const [isDownloading, setIsDownloading] = useState(false);

    const handleShare = async () => {
        const text = `I'm "${identity}" on FanDNA! Discover your unique football identity.`;

        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'FanDNA - My Bundesliga Identity',
                    text: text,
                });
            } catch (error) {
                console.log('Share cancelled or failed');
            }
        } else if (navigator.clipboard && navigator.clipboard.writeText) {
            try {
                await navigator.clipboard.writeText(text);
                alert('Shared! (Text copied to clipboard)');
            } catch (error) {
                console.error('Clipboard copy failed:', error);
                alert('Failed to copy to clipboard');
            }
        } else {
            // Final fallback
            alert(`Share this: ${text}`);
        }
    };

    const handleDownload = async () => {
        if (!cardRef.current || isDownloading) return;

        setIsDownloading(true);

        try {
            const canvas = await html2canvas(cardRef.current, {
                backgroundColor: '#0a0e27',
                scale: 2,
                logging: false,
                allowTaint: true,
                useCORS: true,
            });

            canvas.toBlob((blob) => {
                if (!blob) {
                    throw new Error('Failed to create image blob');
                }

                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = `FanDNA-${username}-${identity}.png`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);

                setIsDownloading(false);
            }, 'image/png', 1);
        } catch (error) {
            console.error('Download failed:', error);
            setIsDownloading(false);
            alert('Failed to download card. Please try again.');
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
                            whileHover={!isDownloading ? { scale: 1.05 } : {}}
                            whileTap={!isDownloading ? { scale: 0.95 } : {}}
                            onClick={handleDownload}
                            disabled={isDownloading}
                            className={`flex items-center gap-2 px-6 py-3 font-bold rounded-lg transition-smooth ${isDownloading
                                ? 'bg-gradient-neon/50 text-black/50 cursor-not-allowed'
                                : 'bg-gradient-neon text-black hover:shadow-glow-cyan'
                                }`}
                        >
                            <Download size={18} />
                            <span className="text-sm font-medium">
                                {isDownloading ? 'Downloading...' : 'Download'}
                            </span>
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
