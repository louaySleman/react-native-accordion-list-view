import React, { useEffect, useRef, useState } from 'react';
import { View, Animated, LayoutAnimation, I18nManager, Pressable } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { toggleAnimation } from '../../animations/toggleAnimation';
import { AccordionItemProps } from '../../models/AccordionItem';
import { styles } from './styles';

/**
 * An individual item within an accordion list that can be expanded or collapsed.
 * @param {AccordionItemProps} props - Props for configuring the AccordionItem.
 * @returns {JSX.Element} - The AccordionItem component.
 */
const AccordionItem = ({
  customBody,
  customTitle,
  customIcon = undefined,
  containerStyle = {},
  animationDuration = 300,
  isRTL = false,
  isOpen = false,
  onPress = undefined,
  pressableProps = {},
}: AccordionItemProps) => {
  /**
   * Indicates whether the content of the accordion item is currently displayed.
   * @type {boolean}
   */
  const [showContent, setShowContent] = useState(isOpen);
  /**
   * A controller for managing the animation of the accordion item.
   * @type {Animated.Value}
   */
  const animationController = useRef(new Animated.Value(isOpen ? 1 : 0)).current;

  /**
   * Toggles the visibility of the accordion item's content when the `isOpen` prop changes.
   * This effect is triggered when the `isOpen` prop changes.
   */
  useEffect(() => {
    if (isOpen !== showContent) {
      toggleListItem();
    }
  }, [isOpen]);

  /**
   * Toggles the visibility of the accordion item's content.
   */
  const toggleListItem = () => {
    const config = {
      duration: animationDuration,
      toValue: showContent ? 0 : 1,
      useNativeDriver: true,
    };
    Animated.timing(animationController, config).start();
    LayoutAnimation.configureNext(toggleAnimation(animationDuration));
    if (onPress) onPress(!showContent);
    setShowContent(!showContent);
  };

  /**
   * An animated transformation for rotating the arrow icon based on the animation state.
   * @type {Animated.AnimatedInterpolation}
   */
  const arrowTransform = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', isRTL ? '-90deg' : '90deg'],
  });

  return (
    <View style={[styles.container, containerStyle]}>
      <Pressable {...pressableProps} onPress={() => toggleListItem()}>
        <View style={styles.titleContainer}>
          {(!isRTL || I18nManager.isRTL) && customTitle()}
          <Animated.View style={{ transform: [{ rotateZ: arrowTransform }] }}>
            {!customIcon ? (
              <MaterialIcons name={isRTL ? 'keyboard-arrow-left' : 'keyboard-arrow-right'} size={30} />
            ) : (
              customIcon()
            )}
          </Animated.View>
          {isRTL && !I18nManager.isRTL && customTitle()}
        </View>
      </Pressable>
      {showContent && customBody()}
    </View>
  );
};
export default AccordionItem;
