
// responsiveStyles.js
// This file contains functions or objects that help manage responsive CSS styles throughout the application.
// It ensures that styles adapt correctly to different screen sizes, enhancing the responsiveness of the application.

/**
 * Generates responsive styles for components based on screen size.
 * @param {object} styleRules - An object containing CSS rules for various screen sizes.
 * @returns {object} - The responsive style rules.
 */
const generateResponsiveStyles = (styleRules) => {
  const baseStyle = styleRules.base || {};
  const responsiveStyle = {};

  if (styleRules.small) {
    responsiveStyle['@media (max-width: 600px)'] = styleRules.small;
  }
  if (styleRules.medium) {
    responsiveStyle['@media (min-width: 601px) and (max-width: 1200px)'] = styleRules.medium;
  }
  if (styleRules.large) {
    responsiveStyle['@media (min-width: 1201px)'] = styleRules.large;
  }

  return { ...baseStyle, ...responsiveStyle };
};

export { generateResponsiveStyles };
