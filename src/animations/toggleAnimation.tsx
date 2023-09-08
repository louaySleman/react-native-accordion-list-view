import { LayoutAnimation, LayoutAnimationConfig } from 'react-native';

/**
 * Generates a layout animation configuration for toggling the visibility of an element.
 *
 * @param {number} animationDuration - The duration of the animation in milliseconds.
 * @returns {LayoutAnimationConfig} - The layout animation configuration object.
 */
export const toggleAnimation = (animationDuration = 300): LayoutAnimationConfig => {
  return {
    duration: animationDuration,
    update: {
      duration: animationDuration,
      property: LayoutAnimation.Properties.scaleXY,
      type: LayoutAnimation.Types.easeInEaseOut,
    },
    delete: {
      duration: animationDuration,
      property: LayoutAnimation.Properties.opacity,
      type: LayoutAnimation.Types.easeInEaseOut,
    },
  };
};
