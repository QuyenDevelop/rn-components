import { Tooltip } from "@rneui/themed";
import React, { FunctionComponent } from "react";
import { StyleSheet, Text } from "react-native";
import { Color, ConstantStyles, ScreenUtils, TextStyles } from "../Themes";

export interface IToolTipProps {
  children?: React.ReactNode;
  isVisible: boolean;
  onCloseTooltip: () => void;
  onOpenTooltip?: () => void;
  message: string;
  /** set Font for Text */
  fontFamily?: string;
  height?: number;
  width?: number;
  duration?: number;
}

export const ITooltip: FunctionComponent<IToolTipProps> = ({
  isVisible,
  onCloseTooltip,
  onOpenTooltip,
  children,
  message,
  fontFamily,
  height = ScreenUtils.scale(44),
  width = ScreenUtils.scale(280),
  duration,
}) => {
  const maxWidth =
    width <= ScreenUtils.scale(280) ? width : ScreenUtils.scale(280);

  const minHeight =
    (height >= ScreenUtils.scale(44) ? height : ScreenUtils.scale(44)) ||
    (height <= ScreenUtils.scale(104) ? height : ScreenUtils.scale(104));

  React.useEffect(() => {
    !!duration && setInterval(onCloseTooltip, duration);
  }, [duration, onCloseTooltip]);

  return (
    <Tooltip
      height={minHeight}
      width={maxWidth}
      visible={isVisible}
      onOpen={onOpenTooltip}
      onClose={onCloseTooltip}
      popover={
        <Text
          style={{ ...styles.messageStyle, fontFamily: fontFamily }}
          numberOfLines={5}
        >
          {message}
        </Text>
      }
      withPointer
      pointerStyle={styles.containerStyle}
      pointerColor={Color.black6s}
      backgroundColor={Color.black6s}
      containerStyle={styles.containerStyle}
      skipAndroidStatusBar
      closeOnlyOnBackdropPress
    >
      {children}
    </Tooltip>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    paddingVertical: ConstantStyles.spacing12,
  },
  messageStyle: {
    ...TextStyles.text14,
    color: Color.white6,
    fontWeight: "400",
    textAlign: "left",
  },
});
