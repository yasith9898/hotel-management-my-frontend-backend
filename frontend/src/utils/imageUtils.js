/**
 * Utility functions for handling image URLs
 */

/**
 * Converts Google Drive sharing URL to direct image URL
 * @param {string} url - Google Drive sharing URL
 * @returns {string} - Direct image URL
 */
export const convertGoogleDriveUrl = (url) => {
    if (!url) return '';

    // Check if it's already a direct Google Drive URL
    if (url.includes('drive.google.com/uc?')) {
        return url;
    }

    // Extract file ID from sharing URL
    // Format: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
    const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/);

    if (fileIdMatch && fileIdMatch[1]) {
        const fileId = fileIdMatch[1];
        return `https://drive.google.com/uc?export=view&id=${fileId}`;
    }

    // If it's not a Google Drive URL, return as is
    return url;
};

/**
 * Processes an array of image URLs and converts Google Drive URLs
 * @param {Array<string>} urls - Array of image URLs
 * @returns {Array<string>} - Array of processed URLs
 */
export const processImageUrls = (urls) => {
    if (!Array.isArray(urls)) return [];

    return urls.map(url => convertGoogleDriveUrl(url)).filter(url => url);
};

/**
 * Formats price in Sri Lankan Rupees
 * @param {number} price - Price amount
 * @param {boolean} includeSymbol - Whether to include LKR symbol
 * @returns {string} - Formatted price string
 */
export const formatLKR = (price, includeSymbol = true) => {
    if (!price && price !== 0) return includeSymbol ? 'LKR 0' : '0';

    const formattedNumber = Number(price).toLocaleString('en-US');

    return includeSymbol ? `LKR ${formattedNumber}` : formattedNumber;
};

/**
 * Validates if a URL is accessible
 * @param {string} url - Image URL to validate
 * @returns {Promise<boolean>} - True if URL is accessible
 */
export const validateImageUrl = (url) => {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = url;
    });
};

/**
 * Gets a placeholder image URL
 * @returns {string} - Placeholder image URL
 */
export const getPlaceholderImage = () => {
    return 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ddd" width="400" height="300"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif" font-size="24"%3ENo Image%3C/text%3E%3C/svg%3E';
};

export default {
    convertGoogleDriveUrl,
    processImageUrls,
    formatLKR,
    validateImageUrl,
    getPlaceholderImage
};
