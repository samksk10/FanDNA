'use client';

import { motion } from 'framer-motion';
import { WrappedStory } from '@/types';

interface WrappedSlideProps {
    story: WrappedStory;
    isActive: boolean;
    index: number;
}

export default function WrappedSlide({
    story,
    isActive,
    index,
}: WrappedSlideProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
                isActive
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
            }
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
            className={`${isActive ? 'pointer-events-auto' : 'pointer-events-none'}`}
        >
            <div className="min-h-screen flex flex-col items-center justify-center px-4">
                {/* Icon */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isActive ? { scale: 1, rotate: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-8xl sm:text-9xl mb-8"
                >
                    {story.icon}
                </motion.div>

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isActive ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-black gradient-text text-center mb-4"
                >
                    {story.title}
                </motion.h2>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isActive ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-lg sm:text-2xl text-gray-300 text-center max-w-2xl"
                >
                    {story.description}
                </motion.p>

                {/* Slide Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isActive ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 }}
                    className="mt-12 text-sm text-gray-500"
                >
                    {index + 1}
                </motion.div>
            </div>
        </motion.div>
    );
}
