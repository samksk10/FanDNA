import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'FanDNA - Your Bundesliga Identity',
    description:
        'Discover your unique football identity with FanDNA. Get your personalized Bundesliga Wrapped experience powered by AI.',
    keywords: [
        'Bundesliga',
        'Football',
        'Fan Identity',
        'Wrapped',
        'AI',
        'Sports',
    ],
    authors: [{ name: 'FanDNA Team' }],
    creator: 'FanDNA',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://fandna.com',
        title: 'FanDNA - Your Bundesliga Identity',
        description:
            'Discover your unique football identity with FanDNA. Get your personalized Bundesliga Wrapped experience powered by AI.',
        siteName: 'FanDNA',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'FanDNA - Your Bundesliga Identity',
        description:
            'Discover your unique football identity with FanDNA. Get your personalized Bundesliga Wrapped experience powered by AI.',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="msapplication-TileColor" content="#0f0f1f" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
            </head>
            <body className="bg-dark-bg text-gray-100">
                <div className="min-h-screen flex flex-col">
                    {children}
                </div>
            </body>
        </html>
    );
}
