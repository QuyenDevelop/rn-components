import type React from "react";
import type { TouchableOpacityProps } from "react-native";
import type {
  GestureResponderEvent,
  NativeSyntheticEvent,
  TargetedEvent,
  TextStyle,
  ViewStyle,
} from "react-native";

export declare type ButtonStyle = "PRIMARY" | "SECONDARY_ONE" | "SECONDARY_TWO";
export enum ButtonTypes {
  PRIMARY = "PRIMARY",
  SECONDARY_ONE = "SECONDARY_ONE",
  SECONDARY_TWO = "SECONDARY_TWO",
}
export declare type ButtonSize = "SMALL" | "SMALL_SPECIAL" | "MEDIUM" | "LARGE";
export enum ButtonSizes {
  SMALL = "SMALL",
  SMALL_SPECIAL = "SMALL_SPECIAL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
}
export declare type IconColorType = "LIGHT" | "DARK";
export enum IconColor {
  LIGHT = "LIGHT",
  DARK = "DARK",
}

export interface ButtonProps extends TouchableOpacityProps {
  /** Button Styles ("PRIMARY" | "SECONDARY_ONE" | "SECONDARY_TWO") */
  buttonStyle?: ButtonStyle;
  /** Button Size ("SMALL" | "SMALL_SPECIAL" | "MEDIUM" | "LARGE") */
  buttonSize?: ButtonSize;
  /** Button customize width */
  width?: number;
  /** Button loading */
  isLoading?: boolean;
  /** Button disable */
  isDisabled?: boolean;
  /** Button name */
  name?: string;
  /** Button customize content styles */
  contentStyles?: TextStyle;
  /** Button customize styles */
  containerStyle?: ViewStyle;
  /** Button children */
  children?: React.ReactNode;
  /** Button customize left view */
  buttonLeftView?: React.ReactNode;
  /** Button customize right view */
  buttonRightView?: React.ReactNode;
  /** ButtonIcon icon color ("LIGHT" | "DARK") */
  iconColor?: IconColorType;
  /** Button event when clicked */
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  /** Button event when focus */
  onFocus?: ((e: NativeSyntheticEvent<TargetedEvent>) => void) | undefined;
  /** Button event when blur */
  onBlur?: ((e: NativeSyntheticEvent<TargetedEvent>) => void) | undefined;
}
