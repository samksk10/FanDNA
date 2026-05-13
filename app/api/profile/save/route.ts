/**
 * API Route: Save Fan Profile
 * POST /api/profile/save
 * 
 * Saves fan profile and identity to DynamoDB
 */

import { NextRequest, NextResponse } from 'next/server';
import { saveFanProfile } from '@/lib/dynamodb';
import { generateUserId } from '@/lib/utils';

export async function POST(request: NextRequest) {
    try {
        const { profile, identity } = await request.json();

        if (!profile || !identity) {
            return NextResponse.json(
                { error: 'Profile and identity data required' },
                { status: 400 }
            );
        }

        const userId = generateUserId();
        await saveFanProfile(userId, profile, identity);

        return NextResponse.json({
            success: true,
            userId,
            message: 'Profile saved successfully',
        });
    } catch (error) {
        console.error('Error saving profile:', error);
        return NextResponse.json(
            { error: 'Failed to save profile' },
            { status: 500 }
        );
    }
}
