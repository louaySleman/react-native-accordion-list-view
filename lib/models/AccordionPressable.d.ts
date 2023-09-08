import { GestureResponderEvent, Insets, MouseEvent, NativeSyntheticEvent, PressableAndroidRippleConfig, PressableStateCallbackType, StyleProp, TargetedEvent, ViewStyle } from 'react-native';
/**
 * Props for configuring the behavior and styling of the Pressable component within the AccordionItem component.
 * @interface AccordionPressableProps
 */
export interface AccordionPressableProps {
    /**
     * Called when the hover is activated to provide visual feedback.
     * @param {MouseEvent} event - The mouse event when hover is activated.
     */
    onHoverIn?: ((event: MouseEvent) => void) | null | undefined;
    /**
     * Called when the hover is deactivated to undo visual feedback.
     * @param {MouseEvent} event - The mouse event when hover is deactivated.
     */
    onHoverOut?: ((event: MouseEvent) => void) | null | undefined;
    /**
     * Called when a touch is engaged before `onPress`.
     * @param {GestureResponderEvent} event - The gesture responder event when touch is engaged.
     */
    onPressIn?: ((event: GestureResponderEvent) => void) | null | undefined;
    /**
     * Called when a touch is released before `onPress`.
     * @param {GestureResponderEvent} event - The gesture responder event when touch is released.
     */
    onPressOut?: ((event: GestureResponderEvent) => void) | null | undefined;
    /**
     * Called when a long-tap gesture is detected.
     * @param {GestureResponderEvent} event - The gesture responder event when long-tap is detected.
     */
    onLongPress?: ((event: GestureResponderEvent) => void) | null | undefined;
    /**
     * Called after the element loses focus.
     * @platform macos windows
     * @param {NativeSyntheticEvent<TargetedEvent>} event - The native synthetic event.
     */
    onBlur?: ((event: NativeSyntheticEvent<TargetedEvent>) => void) | null | undefined;
    /**
     * Called after the element is focused.
     * @platform macos windows
     * @param {NativeSyntheticEvent<TargetedEvent>} event - The native synthetic event.
     */
    onFocus?: ((event: NativeSyntheticEvent<TargetedEvent>) => void) | null | undefined;
    /**
     * Whether a press gesture can be interrupted by a parent gesture such as a scroll event. Defaults to true.
     * @type {boolean}
     */
    cancelable?: boolean | null | undefined;
    /**
     * Duration to wait after hover in before calling `onHoverIn`.
     * @platform macos windows
     * @type {number}
     */
    delayHoverIn?: number | null | undefined;
    /**
     * Duration to wait after hover out before calling `onHoverOut`.
     * @platform macos windows
     * @type {number}
     */
    delayHoverOut?: number | null | undefined;
    /**
     * Duration (in milliseconds) from `onPressIn` before `onLongPress` is called.
     * @type {number}
     */
    delayLongPress?: number | null | undefined;
    /**
     * Whether the press behavior is disabled.
     * @type {boolean}
     */
    disabled?: boolean | null | undefined;
    /**
     * Additional distance outside of this view in which a press is detected.
     * @type {Insets | number}
     */
    hitSlop?: Insets | number | null | undefined;
    /**
     * Additional distance outside of this view in which a touch is considered a press before `onPressOut` is triggered.
     * @type {Insets | number}
     */
    pressRetentionOffset?: Insets | number | null | undefined;
    /**
     * If true, doesn't play system sound on touch.
     * @type {boolean}
     */
    android_disableSound?: boolean | null | undefined;
    /**
     * Enables the Android ripple effect and configures its color.
     * @type {PressableAndroidRippleConfig}
     */
    android_ripple?: PressableAndroidRippleConfig | null | undefined;
    /**
     * Used only for documentation or testing (e.g. snapshot testing).
     * @type {boolean}
     */
    testOnly_pressed?: boolean | null | undefined;
    /**
     * Duration (in milliseconds) to wait after press down before calling onPressIn.
     * @type {number}
     */
    unstable_pressDelay?: number;
    /**
     * Either view styles or a function that receives a boolean reflecting whether
     * the component is currently pressed and returns view styles.
     * @type {StyleProp<ViewStyle> | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>)}
     */
    style?: StyleProp<ViewStyle> | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>) | undefined;
}
