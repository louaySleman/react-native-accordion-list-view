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
const AccordionItem_1 = __importDefault(require("../AccordionItem"));
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
const AccordionList = ({ data, customTitle, customBody, customIcon = undefined, containerItemStyle = {}, animationDuration = 300, isRTL = false, expandMultiple = false, defaultOpenIndices = [], pressableProps = {}, ...props }) => {
    /**
     * State variable to track the currently open item in the accordion.
     * @type {any}
     */
    const [currentlyOpen, setCurrentlyOpen] = (0, react_1.useState)(null);
    /**
     * State variable to store an array of default open indices in the accordion.
     * @type {number[]}
     */
    const [defaultOpen, setDefaultOpen] = (0, react_1.useState)(defaultOpenIndices);
    /**
     * Checks if an accordion item is open based on its index.
     *
     * @param {any} item - The data item of the accordion.
     * @param {number} index - The index of the accordion item.
     * @returns {boolean} - True if the item is open; otherwise, false.
     */
    const checkIfOpen = (0, react_1.useCallback)((item, index) => {
        return JSON.stringify(currentlyOpen) === JSON.stringify(item) || (defaultOpen?.includes(index) ?? false);
    }, [currentlyOpen, defaultOpen]);
    /**
     * useEffect to initialize the default open indices and show an error if necessary.
     */
    (0, react_1.useEffect)(() => {
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
    const renderItem = ({ item, index }) => (react_1.default.createElement(AccordionItem_1.default, { containerStyle: containerItemStyle, customTitle: () => customTitle(item, index), customBody: () => customBody(item, index), animationDuration: animationDuration, isRTL: isRTL, isOpen: checkIfOpen(item, index), onPress: (status) => {
            if (status && !expandMultiple) {
                setDefaultOpen([]);
                setCurrentlyOpen(item);
            }
        }, pressableProps: pressableProps, customIcon: customIcon ? () => customIcon(index) : undefined }));
    return react_1.default.createElement(react_native_1.FlatList, { data: data, renderItem: renderItem, keyExtractor: (item, index) => index.toString(), ...props });
};
exports.default = AccordionList;
//# sourceMappingURL=index.js.map