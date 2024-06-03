
// formatPrice.js
// This utility file contains a function to format price values consistently across the application.
// It takes a number and returns a string formatted as a currency, ensuring that all property prices
// are displayed in a user-friendly format.

/**
 * Formats a number into a currency string.
 * @param {number} price - The price to be formatted.
 * @returns {string} - The formatted price string.
 */
const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};

export default formatPrice;
