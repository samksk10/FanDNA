'use client';

import { motion } from 'framer-motion';
import { FanIdentity } from '@/types';

interface IdentityCardProps {
    identity: FanIdentity;
}

export default function IdentityCard({ identity }: IdentityCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass border-2 border-neon-cyan/30 rounded-2xl p-8 hover:border-neon-cyan/60 transition-smooth neon-glow-cyan"
        >
            {/* Title */}
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl font-black gradient-text mb-4"
            >
                {identity.title}
            </motion.h2>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-300 mb-6 leading-relaxed"
            >
                {identity.description}
            </motion.p>

            {/* Personality Traits */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mb-6"
            >
                <h3 className="text-sm font-bold text-neon-cyan uppercase mb-3">
                    Personality Traits
                </h3>
                <div className="flex flex-wrap gap-2">
                    {identity.personalityTraits.map((trait, idx) => (
                        <motion.span
                            key={idx}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3 + idx * 0.1 }}
                            className="px-4 py-2 glass border border-neon-cyan/30 rounded-full text-sm font-medium text-neon-cyan"
                        >
                            {trait}
                        </motion.span>
                    ))}
                </div>
            </motion.div>

            {/* Emotional Profile */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mb-6"
            >
                <h3 className="text-sm font-bold text-neon-purple uppercase mb-3">
                    Emotional Profile
                </h3>
                <div className="space-y-2">
                    {Object.entries(identity.emotionalProfile).map(([key, value], idx) => (
                        <motion.div
                            key={key}
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ delay: 0.4 + idx * 0.1, duration: 0.8 }}
                            className="flex items-center justify-between"
                        >
                            <span className="text-sm capitalize text-gray-400">{key}</span>
                            <div className="w-32 h-2 glass rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-neon"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${value}%` }}
                                    transition={{ delay: 0.5 + idx * 0.1, duration: 1 }}
                                />
                            </div>
                            <span className="text-sm font-bold text-neon-cyan w-12 text-right">
                                {value}%
                            </span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Compatible Club */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mb-6 p-4 glass border border-neon-cyan/20 rounded-lg"
            >
                <p className="text-sm text-gray-400 mb-1">Your Compatible Club</p>
                <p className="text-2xl font-bold gradient-text">{identity.compatibleClub}</p>
            </motion.div>

            {/* AI Narrative */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mb-6"
            >
                <h3 className="text-sm font-bold text-neon-cyan uppercase mb-2">
                    Your Story
                </h3>
                <p className="text-gray-300 italic leading-relaxed">
                    "{identity.aiNarrative}"
                </p>
            </motion.div>

            {/* Percentile */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="text-center p-4 rounded-lg bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 border border-neon-cyan/20"
            >
                <p className="text-sm text-gray-400 mb-1">Fan Percentile</p>
                <p className="text-4xl font-black gradient-text">{identity.percentile}%</p>
            </motion.div>
        </motion.div>
    );
}
