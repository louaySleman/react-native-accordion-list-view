import { ViewStyle } from 'react-native';
import * as React from 'react';
import { AccordionPressableProps } from './AccordionPressable';

/**
 * Props for the AccordionItem component.
 * @interface AccordionItemProps
 */
export interface AccordionItemProps {
  /**
   * Function that returns a React element to display as Accordion title.
   * @function
   * @returns {JSX.Element} - The React element for the title.
   */
  customTitle: () => JSX.Element;

  /**
   * Function that returns a React element to display as Accordion body.
   * @function
   * @returns {JSX.Element} - The React element for the body.
   */
  customBody: () => JSX.Element;

  /**
   * An optional function that returns a React element to display as Accordion icon.
   * Default icon is keyboard-arrow-left.
   * @function
   * @returns {JSX.Element} - The React element for the icon.
   */
  customIcon?: () => JSX.Element;

  /**
   * An optional parameter to add custom container style.
   * @type {ViewStyle}
   */
  containerStyle?: ViewStyle;

  /**
   * An optional parameter to control Accordion animation duration.
   * Default value is 300.
   * @type {number}
   */
  animationDuration?: number;

  /**
   * An optional parameter to support RTL layout.
   * Default value is false.
   * @type {boolean}
   */
  isRTL?: boolean;

  /**
   * An optional parameter to make the accordion item already open.
   * Default value is false.
   * @type {boolean}
   */
  isOpen?: boolean;

  /**
   * An optional parameter to call a function when a click happens to the accordion item.
   * Default value is undefined.
   * @param {boolean} isOpen - The current state of the accordion item.
   */
  onPress?: (isOpen: boolean) => void;

  /**
   * Additional props for configuring the Pressable component.
   * @type {AccordionPressableProps}
   */
  pressableProps?: AccordionPressableProps;
}
