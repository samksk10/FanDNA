/**
 * Utility functions for FanDNA application
 */

/**
 * Generate a unique user ID
 */
export function generateUserId(): string {
    return `fan_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Generate a random identity from mock data
 */
export function getRandomIdentity() {
    const identities = [
        'The Emotional Strategist',
        'The Fearless Warrior',
        'The Artistic Observer',
        'The Tactical Genius',
        'The Passionate Loyalist',
    ];
    return identities[Math.floor(Math.random() * identities.length)];
}

/**
 * Format date to readable string
 */
export function formatDate(date: Date | number): string {
    const d = new Date(date);
    return d.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

/**
 * Validate email
 */
export function validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/**
 * Get browser fingerprint for analytics
 */
export function getBrowserFingerprint(): string {
    if (typeof window === 'undefined') return '';
    return `${navigator.userAgent}_${navigator.language}`;
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    return function executedFunction(...args: Parameters<T>) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function
 */
export function throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number
): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    return function executedFunction(...args: Parameters<T>) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

export default {
    generateUserId,
    getRandomIdentity,
    formatDate,
    validateEmail,
    getBrowserFingerprint,
    debounce,
    throttle,
};
