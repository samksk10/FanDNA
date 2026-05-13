'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedBackground from '@/components/AnimatedBackground';
import WrappedSlide from '@/components/WrappedSlide';
import { wrappedStories } from '@/data/mock';
import { ChevronUp, ChevronDown } from 'lucide-react';

export default function WrappedPage() {
    const router = useRouter();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showControls, setShowControls] = useState(true);

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'ArrowDown' || e.key === ' ') {
                handleNextSlide();
            } else if (e.key === 'ArrowUp') {
                handlePrevSlide();
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [currentSlide]);

    const handleNextSlide = () => {
        if (currentSlide < wrappedStories.length - 1) {
            setCurrentSlide(currentSlide + 1);
        } else {
            router.push('/share');
        }
    };

    const handlePrevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    return (
        <div className="min-h-screen bg-dark-bg overflow-hidden">
            <AnimatedBackground />

            <main className="relative z-10">
                {/* Slides Container */}
                <div className="min-h-screen">
                    <AnimatePresence mode="wait">
                        {wrappedStories.map((story, idx) => (
                            <div
                                key={idx}
                                className={currentSlide === idx ? 'block' : 'hidden'}
                            >
                                <WrappedSlide
                                    story={story}
                                    isActive={currentSlide === idx}
                                    index={idx}
                                />
                            </div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Navigation Controls */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: showControls ? 1 : 0 }}
                    onMouseEnter={() => setShowControls(true)}
                    onMouseLeave={() => setShowControls(false)}
                    className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 z-20"
                >
                    {currentSlide > 0 && (
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handlePrevSlide}
                            className="p-3 glass rounded-full border border-neon-cyan/30 hover:border-neon-cyan/60 transition-smooth hover:bg-neon-cyan/10"
                        >
                            <ChevronUp size={24} className="text-neon-cyan" />
                        </motion.button>
                    )}

                    {/* Slide Indicators */}
                    <div className="flex gap-2">
                        {wrappedStories.map((_, idx) => (
                            <motion.button
                                key={idx}
                                onClick={() => setCurrentSlide(idx)}
                                className={`w-2 h-2 rounded-full transition-smooth ${idx === currentSlide
                                        ? 'bg-neon-cyan w-6'
                                        : 'bg-gray-600 hover:bg-gray-400'
                                    }`}
                            />
                        ))}
                    </div>

                    {currentSlide < wrappedStories.length - 1 && (
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleNextSlide}
                            className="p-3 glass rounded-full border border-neon-cyan/30 hover:border-neon-cyan/60 transition-smooth hover:bg-neon-cyan/10"
                        >
                            <ChevronDown size={24} className="text-neon-cyan" />
                        </motion.button>
                    )}

                    {currentSlide === wrappedStories.length - 1 && (
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => router.push('/share')}
                            className="px-6 py-3 bg-gradient-neon text-black font-bold rounded-lg hover:shadow-glow-cyan transition-smooth"
                        >
                            Share Your FanDNA
                        </motion.button>
                    )}
                </motion.div>

                {/* Progress Text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="fixed top-8 right-8 text-sm text-gray-400 z-20"
                >
                    {currentSlide + 1} / {wrappedStories.length}
                </motion.div>

                {/* Skip Button */}
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    onClick={() => router.push('/share')}
                    className="fixed top-8 left-8 text-sm text-gray-400 hover:text-neon-cyan transition-smooth z-20"
                >
                    Skip to Share
                </motion.button>
            </main>
        </div>
    );
}
