import { AccordionListProps } from '../../models/AccordionList';
/**
 * A component for rendering an accordion list with expandable items.
 *
 * @param {AccordionListProps} props - Props for configuring the AccordionList.
 * @param {any[]} props.data - The data to render in the accordion list.
 * @param {(item: any) => JSX.Element} props.customTitle - Function that returns a React element for the custom title of each item.
 * @param {(item: any) => JSX.Element} props.customBody - Function that returns a React element for the custom body of each item.
 * @param {() => JSX.Element | undefined} [props.customIcon] - Function that returns a React element for a custom icon, or undefined to use default icons.
 * @param {object} [props.containerItemStyle] - Additional styles for the container of each accordion item.
 * @param {number} [props.animationDuration] - The duration of the animation when expanding/collapsing items.
 * @param {boolean} [props.isRTL] - Whether to use right-to-left layout.
 * @param {boolean} [props.expandMultiple] - Whether to allow multiple items to be expanded at the same time.
 * @param {number[]} [props.defaultOpenIndices] - An array of indices specifying which items should be open by default.
 * @param {object} [props.pressableProps] - Additional props for the Pressable component.
 * @returns {JSX.Element} - The AccordionList component.
 */
declare const AccordionList: ({ data, customTitle, customBody, customIcon, containerItemStyle, animationDuration, isRTL, expandMultiple, defaultOpenIndices, pressableProps, ...props }: AccordionListProps) => JSX.Element;
export default AccordionList;
