/**
 * API Route: Analyze Fan Profile
 * POST /api/analyze
 * 
 * Analyzes fan questionnaire answers and generates:
 * - Football identity
 * - Emotional profile
 * - Tactical profile
 * - Compatible Bundesliga club
 * - AI-generated narrative
 */

import { NextRequest, NextResponse } from 'next/server';
import { analyzeFanPersonality, generateFanNarrative } from '@/lib/bedrock';

export async function POST(request: NextRequest) {
    try {
        const { answers } = await request.json();

        if (!answers || Object.keys(answers).length === 0) {
            return NextResponse.json(
                { error: 'No answers provided' },
                { status: 400 }
            );
        }

        // Analyze personality using Bedrock (or mock data)
        const analysis = await analyzeFanPersonality(answers);

        // Generate narrative
        const narrative = await generateFanNarrative({
            club: answers.club || 'Bayern Munich',
            player: answers.player || 'Unknown',
            emotion: answers.emotion || 'Passionate',
            style: answers.style || 'Balanced',
        });

        return NextResponse.json({
            success: true,
            identity: {
                ...analysis,
                aiNarrative: narrative,
                percentile: Math.floor(Math.random() * 30) + 70,
            },
        });
    } catch (error) {
        console.error('Error analyzing profile:', error);
        return NextResponse.json(
            { error: 'Failed to analyze profile' },
            { status: 500 }
        );
    }
}
