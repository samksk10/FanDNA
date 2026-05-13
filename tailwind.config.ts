import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'neon-cyan': '#00D9FF',
                'neon-purple': '#A855F7',
                'dark-bg': '#0F0F1F',
                'dark-card': '#1A1A2E',
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            backgroundImage: {
                'gradient-neon': 'linear-gradient(135deg, #00D9FF, #A855F7)',
                'gradient-dark': 'linear-gradient(135deg, #0F0F1F, #1A1A2E)',
            },
            boxShadow: {
                'glow-cyan': '0 0 20px rgba(0, 217, 255, 0.5)',
                'glow-purple': '0 0 20px rgba(168, 85, 247, 0.5)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
                'spin-slow': 'spin 8s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'pulse-glow': {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)' },
                    '50%': { boxShadow: '0 0 40px rgba(168, 85, 247, 0.8)' },
                },
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};

export default config;
