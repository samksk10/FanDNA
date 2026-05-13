'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface QuestionCardProps {
    question: string;
    children: ReactNode;
    index: number;
}

export default function QuestionCard({
    question,
    children,
    index,
}: QuestionCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="glass p-8 rounded-lg border border-neon-cyan/20 mb-6"
        >
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-2xl sm:text-3xl font-bold gradient-text mb-6"
            >
                {question}
            </motion.h2>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
}
