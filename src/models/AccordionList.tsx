import { FlatListProps, ViewStyle } from 'react-native';
import { AccordionPressableProps } from './AccordionPressable';

/**
 * Props for the AccordionList component.
 * Extends FlatListProps from react-native.
 * @interface AccordionListProps
 * @extends FlatListProps<any>
 */
export interface AccordionListProps extends Omit<FlatListProps<any>, 'data' | 'renderItem'> {
  /**
   * An array of data to be displayed in the AccordionList.
   * @type {any[]}
   */
  data: any[];

  /**
   * Function that returns a React element to display as Accordion title.
   * @function
   * @param {any} item - The data item for the Accordion.
   * @returns {JSX.Element} - The React element for the title.
   */
  customTitle: (item: any) => JSX.Element;

  /**
   * Function that returns a React element to display as Accordion body.
   * @function
   * @param {any} item - The data item for the Accordion.
   * @returns {JSX.Element} - The React element for the body.
   */
  customBody: (item: any) => JSX.Element;

  /**
   * An optional function that returns a React element to display as Accordion icon.
   * Default icon is keyboard-arrow-left.
   * @function
   * @returns {JSX.Element} - The React element for the icon.
   */
  customIcon?: () => JSX.Element;

  /**
   * An optional parameter to add custom container item style.
   * @type {ViewStyle}
   */
  containerItemStyle?: ViewStyle;

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
   * Allow more than one section to be expanded.
   * Default value is false.
   * @type {boolean}
   */
  expandMultiple?: boolean;

  /**
   * An array of indices indicating which sections should be expanded by default.
   * @type {number[]}
   */
  defaultOpenIndices?: number[];

  /**
   * Additional props for configuring the Pressable component.
   * @type {AccordionPressableProps}
   */
  pressableProps?: AccordionPressableProps;
}
