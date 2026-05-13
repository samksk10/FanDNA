import { Question } from '@/types';

export const questionnaire: Question[] = [
    {
        id: 'club',
        question: 'What is your favorite Bundesliga club?',
        type: 'select',
        category: 'preference',
        options: [
            'Bayern Munich',
            'Borussia Dortmund',
            'RB Leipzig',
            'Bayer Leverkusen',
            'Schalke 04',
            'Eintracht Frankfurt',
            'Werder Bremen',
            'Borussia Mönchengladbach',
            'VfL Wolfsburg',
            'Other',
        ],
    },
    {
        id: 'player',
        question: 'Who is your favorite Bundesliga player?',
        type: 'textarea',
        category: 'preference',
        options: [],
    },
    {
        id: 'moment',
        question: 'What is your favorite football moment?',
        type: 'textarea',
        category: 'memory',
        options: [],
    },
    {
        id: 'style',
        question: 'What is your preferred match style?',
        type: 'radio',
        category: 'preference',
        options: [
            'Attacking & Fast-Paced',
            'Tactical & Strategic',
            'Defensive & Solid',
            'Balanced & Entertaining',
        ],
    },
    {
        id: 'emotion',
        question: 'How do you react after your team wins?',
        type: 'radio',
        category: 'emotion',
        options: [
            'Explosive Celebration',
            'Peaceful Joy',
            'Analytical Satisfaction',
            'Emotional Release',
        ],
    },
    {
        id: 'habits',
        question: 'What are your watching habits?',
        type: 'select',
        category: 'habits',
        options: [
            'Watch every match',
            'Watch most matches',
            'Watch big games only',
            'Watch when I can',
            'Casual viewer',
        ],
    },
    {
        id: 'football-emotion',
        question: 'What football emotion resonates most with you?',
        type: 'radio',
        category: 'emotion',
        options: [
            'Triumph & Glory',
            'Resilience & Comeback',
            'Beauty & Technique',
            'Drama & Intensity',
        ],
    },
];

export const bundesligaClubs = [
    'Bayern Munich',
    'Borussia Dortmund',
    'RB Leipzig',
    'Bayer Leverkusen',
    'Schalke 04',
    'Eintracht Frankfurt',
    'Werder Bremen',
    'Borussia Mönchengladbach',
    'VfL Wolfsburg',
];

export const mockIdentities = [
    {
        title: 'The Emotional Strategist',
        description:
            'You combine tactical brilliance with deep emotional connection. Your football soul burns with passion yet speaks the language of strategy. You are the fan who understands the beautiful game at its deepest level.',
        personalityTraits: ['Analytical', 'Passionate', 'Loyal', 'Tactical Mind'],
        emotionalProfile: {
            passion: 85,
            loyalty: 92,
            intensity: 78,
            tactical: 88,
            creativity: 75,
        },
        tacticalProfile: {
            possession: 82,
            counterAttack: 65,
            setPlayProficiency: 88,
            highPressure: 78,
            directPlay: 55,
        },
        compatibleClub: 'Bayern Munich',
        aiNarrative:
            'Your journey is one of calculated passion. Every match is a symphony of strategic moves and emotional crescendos. You are the architect of victories.',
        percentile: 92,
    },
    {
        title: 'The Fearless Warrior',
        description:
            'Intensity flows through your veins. You are the embodiment of never-say-die spirit. Comebacks are your language, and the roar of the crowd fuels your soul.',
        personalityTraits: ['Courageous', 'Intense', 'Determined', 'Spirited'],
        emotionalProfile: {
            passion: 95,
            loyalty: 88,
            intensity: 98,
            tactical: 65,
            creativity: 82,
        },
        tacticalProfile: {
            possession: 45,
            counterAttack: 92,
            setPlayProficiency: 75,
            highPressure: 95,
            directPlay: 88,
        },
        compatibleClub: 'Borussia Dortmund',
        aiNarrative:
            'Your spirit cannot be broken. Adversity is merely the stage for your greatest moments. You are the comeback king.',
        percentile: 88,
    },
    {
        title: 'The Artistic Observer',
        description:
            'You see football as art. Every pass is a brushstroke, every move a composition. You appreciate the craft, the beauty, and the technical mastery of the game.',
        personalityTraits: ['Artistic', 'Observant', 'Refined', 'Appreciative'],
        emotionalProfile: {
            passion: 72,
            loyalty: 80,
            intensity: 65,
            tactical: 85,
            creativity: 95,
        },
        tacticalProfile: {
            possession: 95,
            counterAttack: 45,
            setPlayProficiency: 82,
            highPressure: 55,
            directPlay: 38,
        },
        compatibleClub: 'Bayer Leverkusen',
        aiNarrative:
            'You understand football as a canvas. Your appreciation runs deep, beyond the scoreline. You are the connoisseur of the beautiful game.',
        percentile: 85,
    },
];

export const wrappedStories = [
    {
        title: 'Your Emotional Intensity',
        description: 'You experienced 347 emotional moments this season',
        emotion: 'passion',
        icon: '🔥',
    },
    {
        title: 'Loyalty Streak',
        description: "You didn't miss a single match this season",
        emotion: 'loyalty',
        icon: '⚽',
    },
    {
        title: 'Comeback Specialist',
        description:
            'You witnessed 23 comebacks and never lost faith once',
        emotion: 'resilience',
        icon: '💪',
    },
    {
        title: 'Your Football Aura',
        description: 'Pure, Intense, Beautiful',
        emotion: 'aura',
        icon: '✨',
    },
    {
        title: 'Top Percentile',
        description: 'You are in the top 5% of Bundesliga fans',
        emotion: 'elite',
        icon: '👑',
    },
];
