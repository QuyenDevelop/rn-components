import React, { FunctionComponent } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IconButtonClear, IconColor } from "../Button";
import { Color, ScreenUtils } from "../Themes";
import { styles } from "./styles";

export interface ITagsProps {
  width?: number;
  isSelected?: boolean;
  onSelectedTag?: () => void;
  isShowClose?: boolean;
  leftIcon?: React.ReactNode;
  tagName?: string;
  /** set Font for Text */
  fontFamily?: string;
  onCloseTag?: () => void;
}

export const ITags: FunctionComponent<ITagsProps> = ({
  isSelected,
  onSelectedTag,
  isShowClose,
  leftIcon,
  tagName,
  fontFamily,
  width,
  onCloseTag,
}) => {
  const selectStyle = {
    width: width,
    maxWidth: ScreenUtils.WIDTH_SCREEN,
    backgroundColor: isSelected ? Color.black6s : Color.white6,
    borderWidth: 2 * StyleSheet.hairlineWidth,
    borderColor: isSelected ? Color.black6s : Color.black3s,
  };

  return (
    <TouchableOpacity
      style={{ ...styles.container, ...selectStyle }}
      onPress={onSelectedTag}
    >
      {leftIcon && <View style={styles.leftIconStyle}>{leftIcon}</View>}
      {tagName && (
        <Text
          style={{
            ...styles.tagsNameStyle,
            maxWidth: width,
            fontFamily: fontFamily,
            color: isSelected ? Color.white6 : Color.black6s,
          }}
          numberOfLines={1}
        >
          {tagName}
        </Text>
      )}
      {isShowClose && onCloseTag && (
        <TouchableOpacity style={styles.rightIconStyle} onPress={onCloseTag}>
          <IconButtonClear onPress={onCloseTag} iconColor={IconColor.DARK} />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};
