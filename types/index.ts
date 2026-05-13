// Fan Profile Types
export interface FanProfile {
    id: string;
    club: string;
    favoritePlayer: string;
    favoriteMatch: string;
    matchStyle: string;
    winningEmotion: string;
    watchingHabits: string;
    footballEmotion: string;
    createdAt: Date;
}

// AI Generated Identity
export interface FanIdentity {
    title: string;
    description: string;
    personalityTraits: string[];
    emotionalProfile: EmotionalScores;
    tacticalProfile: TacticalScores;
    compatibleClub: string;
    aiNarrative: string;
    percentile: number;
}

// Emotional Scores
export interface EmotionalScores {
    passion: number;
    loyalty: number;
    intensity: number;
    tactical: number;
    creativity: number;
}

// Tactical Scores
export interface TacticalScores {
    possession: number;
    counterAttack: number;
    setPlayProficiency: number;
    highPressure: number;
    directPlay: number;
}

// Wrapped Data
export interface WrappedData {
    totalMatches: number;
    emotionalEnergy: number;
    loyaltyScore: number;
    comebackIntensity: number;
    footballAura: string;
    topPercentile: number;
    stories: WrappedStory[];
}

export interface WrappedStory {
    title: string;
    description: string;
    emotion: string;
    icon: string;
}

// Question Type
export interface Question {
    id: string;
    question: string;
    type: 'radio' | 'select' | 'textarea';
    options: string[];
    category: string;
}
