import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    headers: async () => [
        {
            source: '/:path*',
            headers: [
                {
                    key: 'X-DNS-Prefetch-Control',
                    value: 'on',
                },
                {
                    key: 'X-Frame-Options',
                    value: 'SAMEORIGIN',
                },
            ],
        },
    ],
};

export default nextConfig;
