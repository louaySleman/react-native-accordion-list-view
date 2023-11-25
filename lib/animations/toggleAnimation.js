"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleAnimation = void 0;
const react_native_1 = require("react-native");
/**
 * Generates a layout animation configuration for toggling the visibility of an element.
 *
 * @param {number} animationDuration - The duration of the animation in milliseconds.
 * @returns {LayoutAnimationConfig} - The layout animation configuration object.
 */
const toggleAnimation = (animationDuration = 300) => {
    return {
        duration: animationDuration,
        update: {
            duration: animationDuration,
            property: react_native_1.LayoutAnimation.Properties.scaleXY,
            type: react_native_1.LayoutAnimation.Types.easeInEaseOut,
        },
        delete: {
            duration: animationDuration,
            property: react_native_1.LayoutAnimation.Properties.opacity,
            type: react_native_1.LayoutAnimation.Types.easeInEaseOut,
        },
    };
};
exports.toggleAnimation = toggleAnimation;
//# sourceMappingURL=toggleAnimation.js.map