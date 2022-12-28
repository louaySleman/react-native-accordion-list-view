"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const AccordionItem_1 = __importDefault(require("../AccordionItem"));
const AccordionList = ({ data, customTitle, customBody, customIcon = undefined, containerItemStyle = {}, animationDuration = 300, isRTL = false, ...props }) => {
    const renderItem = ({ item }) => (react_1.default.createElement(AccordionItem_1.default, { containerStyle: containerItemStyle, customTitle: () => customTitle(item), customBody: () => customBody(item), customIcon: customIcon, animationDuration: animationDuration, isRTL: isRTL }));
    return react_1.default.createElement(react_native_1.FlatList, { data: data, renderItem: renderItem, keyExtractor: (item, index) => index.toString(), ...props });
};
exports.default = AccordionList;
//# sourceMappingURL=index.js.map