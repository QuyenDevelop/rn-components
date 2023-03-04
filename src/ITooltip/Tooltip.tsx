import { Tooltip } from "@rneui/themed";
import React, { FunctionComponent } from "react";
import { StyleSheet, Text } from "react-native";
import { Color, ScreenUtils, TextStyles } from "../Themes";

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
}) => {
  const minHeight =
    height >= ScreenUtils.scale(44) ? height : ScreenUtils.scale(44);

  return (
    <Tooltip
      height={minHeight}
      width={width}
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
      pointerStyle={styles.containerStyle}
      backgroundColor={Color.black6s}
      containerStyle={styles.containerStyle}
    >
      {children}
    </Tooltip>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    maxWidth: ScreenUtils.scale(280),
  },
  messageStyle: {
    ...TextStyles.text14,
    color: Color.white6,
    fontWeight: "400",
  },
});
