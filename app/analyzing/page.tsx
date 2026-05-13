'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AnimatedBackground from '@/components/AnimatedBackground';
import AIAnalyzer from '@/components/AIAnalyzer';

export default function AnalyzingPage() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/result');
        }, 4000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className="min-h-screen bg-dark-bg overflow-hidden">
            <AnimatedBackground />
            <main className="relative z-10">
                <AIAnalyzer />
            </main>
        </div>
    );
}
