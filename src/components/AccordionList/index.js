import React from 'react';
import {FlatList} from 'react-native';
import AccordionItem from '../AccordionItem';
import PropTypes from 'prop-types';

const AccordionList = ({
  data,
  customTitle,
  customBody,
  customIcon,
  containerItemStyle,
  animationDuration,
  isRTL,
  ...props
}) => {
  const renderItem = ({item}) => (
    <AccordionItem
      containerStyle={containerItemStyle}
      customTitle={() => customTitle(item)}
      customBody={() => customBody(item)}
      customIcon={customIcon}
      animationDuration={animationDuration}
      isRTL={isRTL}
    />
  );
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      {...props}
    />
  );
};

AccordionList.propTypes = {
  data: PropTypes.array.isRequired,
  customTitle: PropTypes.func.isRequired,
  customBody: PropTypes.func.isRequired,
  customIcon: PropTypes.func,
  containerItemStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  animationDuration: PropTypes.number,
  isRTL: PropTypes.bool,
};

AccordionList.defaultProps = {
  customIcon: null,
  containerStyle: null,
  animationDuration: 300,
  isRTL: false,
};

export default AccordionList;
