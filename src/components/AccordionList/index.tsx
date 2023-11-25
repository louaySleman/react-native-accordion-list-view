import React, { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import AccordionItem from '../AccordionItem';
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
const AccordionList = ({
  data,
  customTitle,
  customBody,
  customIcon = undefined,
  containerItemStyle = {},
  animationDuration = 300,
  isRTL = false,
  expandMultiple = false,
  defaultOpenIndices = [],
  pressableProps = {},
  ...props
}: AccordionListProps): JSX.Element => {
  /**
   * State variable to track the currently open item in the accordion.
   * @type {any}
   */
  const [currentlyOpen, setCurrentlyOpen] = useState<any>(null);
  /**
   * State variable to store an array of default open indices in the accordion.
   * @type {number[]}
   */
  const [defaultOpen, setDefaultOpen] = useState<number[]>(defaultOpenIndices);

  /**
   * Checks if an accordion item is open based on its index.
   *
   * @param {any} item - The data item of the accordion.
   * @param {number} index - The index of the accordion item.
   * @returns {boolean} - True if the item is open; otherwise, false.
   */
  const checkIfOpen = useCallback(
    (item: any, index: number): boolean => {
      return JSON.stringify(currentlyOpen) === JSON.stringify(item) || (defaultOpen?.includes(index) ?? false);
    },
    [currentlyOpen, defaultOpen],
  );

  /**
   * useEffect to initialize the default open indices and show an error if necessary.
   */
  useEffect(() => {
    setDefaultOpen(defaultOpenIndices || []);
    if (defaultOpenIndices?.length > 1 && !expandMultiple) {
      console.error('Error: You have multiple items opened by default, but expandMultiple is disabled.');
    }
  }, [defaultOpenIndices, expandMultiple]);

  /**
   * Renders an individual item within the accordion.
   *
   * @param {{ item: any; index: number }} - The item and its index.
   * @returns {JSX.Element} - The rendered AccordionItem component.
   */
  const renderItem = ({ item, index }: { item: any; index: number }): JSX.Element => (
    <AccordionItem
      containerStyle={containerItemStyle}
      customTitle={() => customTitle(item, index)}
      customBody={() => customBody(item, index)}
      animationDuration={animationDuration}
      isRTL={isRTL}
      isOpen={checkIfOpen(item, index)}
      onPress={(status) => {
        if (status && !expandMultiple) {
          setDefaultOpen([]);
          setCurrentlyOpen(item);
        }
      }}
      pressableProps={pressableProps}
      customIcon={customIcon ? () => customIcon(index) : undefined}
    />
  );
  return <FlatList data={data} renderItem={renderItem} keyExtractor={(item, index) => index.toString()} {...props} />;
};

export default AccordionList;
