import { AccordionItemProps } from '../../models/AccordionItem';
/**
 * An individual item within an accordion list that can be expanded or collapsed.
 * @param {AccordionItemProps} props - Props for configuring the AccordionItem.
 * @returns {JSX.Element} - The AccordionItem component.
 */
declare const AccordionItem: ({ customBody, customTitle, customIcon, containerStyle, animationDuration, isRTL, isOpen, onPress, pressableProps, }: AccordionItemProps) => JSX.Element;
export default AccordionItem;
