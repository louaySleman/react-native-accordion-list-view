import {LayoutAnimation} from 'react-native';

export const toggleAnimation = (
  animationDuration = 300,
) => {
  return {
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
