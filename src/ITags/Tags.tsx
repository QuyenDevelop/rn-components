import React, { FunctionComponent } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { Color, ConstantStyles, ScreenUtils, TextStyles } from "../Themes";
import { Images } from "../assets";
import { TouchableOpacity, ViewStyle } from "react-native";

export interface ITagsProps {
  width?: number;
  isSelected?: boolean;
  onSelectedTag?: () => void;
  isShowClose?: boolean;
  leftIcon?: React.ReactNode;
  showLeftIcon?: boolean;
  tagName?: string;
  /** set Font for Text */
  fontFamily?: string;
  onCloseTag?: () => void;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: ScreenUtils.scale(32),
    paddingHorizontal: ConstantStyles.spacing8,
    borderRadius: ConstantStyles.borderRadius16,
    overflow: "hidden",
  },
  leftIconStyle: {
    width: ConstantStyles.iconSizeMedium,
    height: ConstantStyles.iconSizeMedium,
    alignItems: "center",
    justifyContent: "center",
    marginRight: ConstantStyles.spacing4,
  },
  rightIconStyle: {
    width: ConstantStyles.iconSizeMedium,
    height: ConstantStyles.iconSizeMedium,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.black2s,
  },
  tagsNameStyle: {
    ...TextStyles.text14,
    fontWeight: "400",
  },
  overflowHidden: {
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
});

const _ITags: FunctionComponent<ITagsProps> = ({
  isSelected,
  onSelectedTag,
  isShowClose,
  leftIcon,
  showLeftIcon = true,
  tagName,
  fontFamily,
  width,
  onCloseTag,
}) => {
  const selectStyle: ViewStyle = {
    width: width,
    maxWidth: ScreenUtils.WIDTH_SCREEN,
    backgroundColor: isSelected ? Color.black6s : Color.white6,
    borderWidth: isSelected ? 0 : 2 * StyleSheet.hairlineWidth,
    borderColor: Color.black1s,
  };

  return (
    <TouchableHighlight
      style={{ ...styles.container, ...selectStyle }}
      onPress={onSelectedTag}
      underlayColor={Color.black1}
      activeOpacity={0.08}
    >
      <>
        {leftIcon && showLeftIcon && (
          <View style={styles.leftIconStyle}>{leftIcon}</View>
        )}
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
          <TouchableOpacity
            onPress={onCloseTag}
            style={{
              ...styles.overflowHidden,
              width: ConstantStyles.iconSizeSmall,
              height: ConstantStyles.iconSizeSmall,
              borderRadius: ConstantStyles.iconSizeSmall / 2,
              backgroundColor: Color.black2s,
              marginLeft: ConstantStyles.spacing4,
            }}
          >
            <Image source={Images.icCloseDark2} resizeMode="center" />
          </TouchableOpacity>
        )}
      </>
    </TouchableHighlight>
  );
};
export const ITags = React.memo(_ITags);
