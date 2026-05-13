'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import AnimatedBackground from '@/components/AnimatedBackground';
import QuestionCard from '@/components/QuestionCard';
import ProgressBar from '@/components/ProgressBar';
import { questionnaire } from '@/data/mock';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function JourneyPage() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [isLoading, setIsLoading] = useState(false);

    const handleAnswer = (value: string) => {
        const question = questionnaire[currentStep];
        setAnswers({
            ...answers,
            [question.id]: value,
        });
    };

    const handleNext = async () => {
        if (currentStep < questionnaire.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            // Save answers and redirect to analyzing
            setIsLoading(true);
            sessionStorage.setItem('fanAnswers', JSON.stringify(answers));

            // Simulate processing
            setTimeout(() => {
                router.push('/analyzing');
            }, 500);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const question = questionnaire[currentStep];
    const isAnswered = answers[question.id] !== undefined && answers[question.id] !== '';

    return (
        <div className="min-h-screen bg-dark-bg">
            <AnimatedBackground />
            <Navbar />

            <main className="relative z-10 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto">
                    <ProgressBar current={currentStep + 1} total={questionnaire.length} />

                    <QuestionCard
                        question={question.question}
                        index={currentStep}
                    >
                        {question.type === 'select' && (
                            <div className="space-y-3">
                                {question.options.map((option) => (
                                    <motion.button
                                        key={option}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => handleAnswer(option)}
                                        className={`w-full p-4 glass rounded-lg border-2 transition-smooth text-left font-medium ${answers[question.id] === option
                                                ? 'border-neon-cyan bg-neon-cyan/10 text-neon-cyan'
                                                : 'border-neon-cyan/20 hover:border-neon-cyan/50 text-gray-300'
                                            }`}
                                    >
                                        {option}
                                    </motion.button>
                                ))}
                            </div>
                        )}

                        {question.type === 'radio' && (
                            <div className="space-y-3">
                                {question.options.map((option) => (
                                    <motion.label
                                        key={option}
                                        whileHover={{ scale: 1.02 }}
                                        className="flex items-center p-4 glass rounded-lg border-2 cursor-pointer transition-smooth border-neon-cyan/20 hover:border-neon-cyan/50"
                                    >
                                        <input
                                            type="radio"
                                            name={question.id}
                                            value={option}
                                            checked={answers[question.id] === option}
                                            onChange={(e) => handleAnswer(e.target.value)}
                                            className="w-4 h-4 accent-neon-cyan"
                                        />
                                        <span className="ml-3 text-gray-300 font-medium">{option}</span>
                                    </motion.label>
                                ))}
                            </div>
                        )}

                        {question.type === 'textarea' && (
                            <textarea
                                value={answers[question.id] || ''}
                                onChange={(e) => handleAnswer(e.target.value)}
                                placeholder="Share your thoughts..."
                                className="w-full p-4 glass rounded-lg border border-neon-cyan/20 focus:border-neon-cyan/50 bg-transparent text-white placeholder-gray-500 focus:outline-none focus:ring-0 resize-none"
                                rows={4}
                            />
                        )}
                    </QuestionCard>

                    {/* Navigation Buttons */}
                    <div className="flex gap-4 mt-8">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handlePrevious}
                            disabled={currentStep === 0}
                            className="flex items-center gap-2 px-6 py-3 glass border border-neon-cyan/30 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:border-neon-cyan/60 transition-smooth"
                        >
                            <ChevronLeft size={18} />
                            Previous
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleNext}
                            disabled={!isAnswered || isLoading}
                            className="flex items-center gap-2 px-6 py-3 bg-gradient-neon text-black font-bold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-glow-cyan transition-smooth ml-auto"
                        >
                            {currentStep === questionnaire.length - 1 ? 'Analyze' : 'Next'}
                            <ChevronRight size={18} />
                        </motion.button>
                    </div>
                </div>
            </main>
        </div>
    );
}
