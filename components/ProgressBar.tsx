'use client';

import { motion } from 'framer-motion';

interface ProgressBarProps {
    current: number;
    total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
    const percentage = (current / total) * 100;

    return (
        <div className="w-full mb-8">
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">
                    Question {current} of {total}
                </span>
                <span className="text-sm font-bold gradient-text">{Math.round(percentage)}%</span>
            </div>
            <div className="w-full h-2 glass rounded-full overflow-hidden border border-neon-cyan/20">
                <motion.div
                    className="h-full bg-gradient-neon"
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                />
            </div>
        </div>
    );
}
