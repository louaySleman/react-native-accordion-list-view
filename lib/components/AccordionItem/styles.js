"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.styles = void 0;
const react_native_1 = require("react-native");
/**
 * Styles for the AccordionItem component.
 * @constant {object}
 */
exports.styles = react_native_1.StyleSheet.create({
    /**
     * Styles for the container that wraps the entire AccordionItem.
     * @type {object}
     */
    container: {
        width: '100%',
        padding: '2%',
        borderRadius: 12,
        backgroundColor: 'white',
        marginBottom: '2%',
        overflow: 'hidden',
    },
    /**
     * Styles for the title text within the AccordionItem.
     * @type {object}
     */
    title: {
        fontSize: 16,
        color: '#2d2d2d',
        fontWeight: 'bold',
    },
    /**
     * Styles for the body content within the AccordionItem.
     * @type {object}
     */
    body: {
        paddingHorizontal: '2%',
        paddingVertical: '3%',
    },
    /**
     * Styles for the container of the title and optional icon.
     * @type {object}
     */
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
//# sourceMappingURL=styles.js.map