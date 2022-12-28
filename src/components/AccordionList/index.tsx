import React from 'react';
import { FlatList } from 'react-native';
import AccordionItem from '../AccordionItem';
import { AccordionListProps } from '../../models/AccordionList';

const AccordionList = ({
  data,
  customTitle,
  customBody,
  customIcon = undefined,
  containerItemStyle = {},
  animationDuration = 300,
  isRTL = false,
  ...props
}: AccordionListProps) => {
  const renderItem = ({ item }: { item: any }) => (
    <AccordionItem
      containerStyle={containerItemStyle}
      customTitle={() => customTitle(item)}
      customBody={() => customBody(item)}
      customIcon={customIcon}
      animationDuration={animationDuration}
      isRTL={isRTL}
    />
  );
  return <FlatList data={data} renderItem={renderItem} keyExtractor={(item, index) => index.toString()} {...props} />;
};

export default AccordionList;
