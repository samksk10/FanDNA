/**
 * API Route: Get Fan Profile
 * GET /api/profile/[id]
 * 
 * Retrieves fan profile from DynamoDB
 */

import { NextRequest, NextResponse } from 'next/server';
import { getFanProfile } from '@/lib/dynamodb';

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const userId = params.id;

        if (!userId) {
            return NextResponse.json(
                { error: 'User ID required' },
                { status: 400 }
            );
        }

        const profile = await getFanProfile(userId);

        return NextResponse.json({
            success: true,
            profile,
        });
    } catch (error) {
        console.error('Error retrieving profile:', error);
        return NextResponse.json(
            { error: 'Failed to retrieve profile' },
            { status: 500 }
        );
    }
}
