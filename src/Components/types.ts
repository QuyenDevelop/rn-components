import type {
  GestureResponderEvent,
  ImageSourcePropType,
  ViewProps,
  TextStyle,
} from "react-native";

export declare interface EmptyStateProps {
  backgroundColor?: string;
  imgSource?: ImageSourcePropType;
  /** set Font for Text */
  fontFamily?: string;
  title?: string;
  message: string;
  buttonTitle?: string;
  buttonHandler?: ((event: GestureResponderEvent) => void) | undefined;
}

export declare interface PlaceHolderProps {
  holderSize: number;
  renderIcon?: React.ReactNode | JSX.Element | null | undefined;
  backgroundColor?: string;
}

export declare interface DotProps {
  size?: number;
  color?: string;
}

export declare interface BadgeProps extends DotProps, ViewProps {
  content?: number;
  /** set Font for Text */
  fontFamily?: string;
  contentStyles?: TextStyle;
}
