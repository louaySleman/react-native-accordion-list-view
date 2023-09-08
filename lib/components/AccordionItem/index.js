"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const MaterialIcons_1 = __importDefault(require("react-native-vector-icons/MaterialIcons"));
const toggleAnimation_1 = require("../../animations/toggleAnimation");
const styles_1 = require("./styles");
/**
 * An individual item within an accordion list that can be expanded or collapsed.
 * @param {AccordionItemProps} props - Props for configuring the AccordionItem.
 * @returns {JSX.Element} - The AccordionItem component.
 */
const AccordionItem = ({ customBody, customTitle, customIcon = undefined, containerStyle = {}, animationDuration = 300, isRTL = false, isOpen = false, onPress = undefined, pressableProps = {}, }) => {
    /**
     * Indicates whether the content of the accordion item is currently displayed.
     * @type {boolean}
     */
    const [showContent, setShowContent] = (0, react_1.useState)(isOpen);
    /**
     * A controller for managing the animation of the accordion item.
     * @type {Animated.Value}
     */
    const animationController = (0, react_1.useRef)(new react_native_1.Animated.Value(isOpen ? 1 : 0)).current;
    /**
     * Toggles the visibility of the accordion item's content when the `isOpen` prop changes.
     * This effect is triggered when the `isOpen` prop changes.
     */
    (0, react_1.useEffect)(() => {
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
        react_native_1.Animated.timing(animationController, config).start();
        react_native_1.LayoutAnimation.configureNext((0, toggleAnimation_1.toggleAnimation)(animationDuration));
        if (onPress)
            onPress(!showContent);
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
    return (react_1.default.createElement(react_native_1.View, { style: [styles_1.styles.container, containerStyle] },
        react_1.default.createElement(react_native_1.Pressable, { ...pressableProps, onPress: () => toggleListItem() },
            react_1.default.createElement(react_native_1.View, { style: styles_1.styles.titleContainer },
                (!isRTL || react_native_1.I18nManager.isRTL) && customTitle(),
                react_1.default.createElement(react_native_1.Animated.View, { style: { transform: [{ rotateZ: arrowTransform }] } }, !customIcon ? (react_1.default.createElement(MaterialIcons_1.default, { name: isRTL ? 'keyboard-arrow-left' : 'keyboard-arrow-right', size: 30 })) : (customIcon())),
                isRTL && !react_native_1.I18nManager.isRTL && customTitle())),
        showContent && customBody()));
};
exports.default = AccordionItem;
//# sourceMappingURL=index.js.map