import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
  LayoutAnimation,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {toggleAnimation} from '../../animations/toggleAnimation';
import PropTypes from 'prop-types';

const AccordionItem = ({
  customBody,
  customTitle,
  customIcon,
  containerStyle,
  animationDuration,
  isRTL,
}) => {
  const [showContent, setShowContent] = useState(false);
  const animationController = useRef(new Animated.Value(0)).current;

  const toggleListItem = () => {
    const config = {
      duration: animationDuration,
      toValue: showContent ? 0 : 1,
      useNativeDriver: true,
    };
    Animated.timing(animationController, config).start();
    LayoutAnimation.configureNext(toggleAnimation(animationDuration));
    setShowContent(!showContent);
  };
  const arrowTransform = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', isRTL ? '-90deg' : '90deg'],
  });
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity onPress={() => toggleListItem()}>
        <View style={styles.titleContainer}>
          {customTitle()}
          <Animated.View style={{transform: [{rotateZ: arrowTransform}]}}>
            {!customIcon ? (
              <MaterialIcons
                name={isRTL ? 'keyboard-arrow-left' : 'keyboard-arrow-right'}
                size={30}
              />
            ) : (
              customIcon()
            )}
          </Animated.View>
        </View>
      </TouchableOpacity>
      {showContent && customBody()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: '2%',
    borderRadius: 12,
    backgroundColor: 'white',
    marginBottom: '2%',
    overflow: 'hidden',
  },
  title: {
    fontSize: 16,
    color: '#2d2d2d',
    fontWeight: 'bold',
  },
  body: {
    paddingHorizontal: '2%',
    paddingVertical: '3%',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

AccordionItem.propTypes = {
  customBody: PropTypes.func,
  customTitle: PropTypes.func,
  customIcon: PropTypes.func,
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  animationDuration: PropTypes.number,
  isRTL: PropTypes.bool,
};

AccordionItem.defaultProps = {
  customBody: null,
  customTitle: null,
  customIcon: null,
  containerStyle: null,
  animationDuration: 300,
  isRTL: false,
};

export default AccordionItem;
