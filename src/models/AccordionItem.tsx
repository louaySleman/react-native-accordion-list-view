import { ViewStyle } from 'react-native';

export interface AccordionItemProps {
  /**
   * Function that returns a React element to display as Accordion title
   */
  customTitle: () => JSX.Element;
  /**
   * Function that returns a React element to display as Accordion body
   */
  customBody: () => JSX.Element;
  /**
   * An optional Function that returns a React element to display as Accordion icon
   * default icon keyboard-arrow-left
   */
  customIcon?: () => JSX.Element;
  /**
   * An optional param to add custom container style
   */
  containerStyle?: ViewStyle;
  /**
   *  An optional param to control Accordion animation duration
   *  default value is 300
   */
  animationDuration?: number;
  /**
   *  An optional param to support RTL layout
   *  default value is false
   */
  isRTL?: boolean;
}
