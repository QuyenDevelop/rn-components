import * as React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Color, ConstantStyles, TextStyles } from "../Themes";
import { Images } from "../assets/Images";
import { styles } from "./styles";
import { ButtonProps, ButtonSizes, ButtonTypes } from "./types";

export const Button: React.FunctionComponent<ButtonProps> = ({
  width,
  isLoading,
  isDisabled,
  name,
  contentStyles,
  containerStyle,
  children,
  buttonLeftView,
  buttonRightView,
  onPress,
  onBlur,
  onFocus,
  buttonStyle = ButtonTypes.PRIMARY,
  buttonSize = ButtonSizes.LARGE,
}) => {
  /** get Button Height size */
  const getSize =
    buttonSize === ButtonSizes.SMALL_SPECIAL ||
    buttonSize === ButtonSizes.SMALL ||
    width === ConstantStyles.sizeSmall
      ? ConstantStyles.sizeSmall
      : buttonSize === ButtonSizes.MEDIUM
      ? ConstantStyles.sizeMedium
      : ConstantStyles.sizeLarge;

  /** get Button background color */
  const getBackgroundColor =
    buttonStyle === ButtonTypes.SECONDARY_ONE
      ? Color.primary1s
      : buttonStyle === ButtonTypes.SECONDARY_TWO
      ? Color.red1s
      : Color.primary6s;

  /** get Button icon background color */
  const getButtonRightBGColor =
    buttonStyle === ButtonTypes.SECONDARY_ONE
      ? Color.primary6s
      : buttonStyle === ButtonTypes.SECONDARY_TWO
      ? Color.red6s
      : Color.white6;

  /** get Button icon styles */
  const getButtonRightStyle =
    buttonSize === ButtonSizes.SMALL_SPECIAL
      ? {
          ...styles.ButtonLeftStyles,
          backgroundColor: isDisabled ? Color.black5s : getButtonRightBGColor,
          borderRadius: ConstantStyles.borderRadius4,
          width: ConstantStyles.iconSizeSmall,
          height: ConstantStyles.iconSizeSmall,
        }
      : {
          ...styles.ButtonLeftStyles,
          backgroundColor: isDisabled ? Color.black5s : getButtonRightBGColor,
          borderRadius: ConstantStyles.borderRadius8,
          width: ConstantStyles.iconSizeMedium,
          height: ConstantStyles.iconSizeMedium,
        };

  /** get Button Loading styles */
  const getButtonLoadingStyle =
    buttonSize === ButtonSizes.SMALL_SPECIAL
      ? {
          ...styles.ButtonLeftStyles,
          width: ConstantStyles.iconSizeSmall,
          height: ConstantStyles.iconSizeSmall,
        }
      : {
          ...styles.ButtonLeftStyles,
          width: ConstantStyles.iconSizeMedium,
          height: ConstantStyles.iconSizeMedium,
        };

  /** get Button Content Text styles */
  const getButtonContentStyle =
    buttonSize === ButtonSizes.SMALL_SPECIAL
      ? {
          ...styles.textStyle,
          ...TextStyles.text14,
          color: isDisabled ? Color.black5s : getButtonRightBGColor,
        }
      : {
          ...styles.textStyle,
          ...TextStyles.text16,
          color: isDisabled ? Color.black5s : getButtonRightBGColor,
        };

  return (
    <TouchableOpacity
      style={
        isDisabled
          ? {
              ...styles.disableStyle,
              maxHeight: getSize,
              height: getSize,
              minHeight: getSize,
              minWidth: getSize,
              maxWidth: width,
              paddingHorizontal:
                width && width > 0 ? undefined : ConstantStyles.spacing12,
            }
          : {
              ...styles.enableStyle,
              maxHeight: getSize,
              height: getSize,
              minHeight: getSize,
              backgroundColor: getBackgroundColor,
              minWidth: getSize,
              maxWidth: width,
              paddingHorizontal:
                width && width > 0 ? undefined : ConstantStyles.spacing12,
            }
      }
      onPress={onPress}
      disabled={isDisabled}
      onBlur={onBlur}
      onFocus={onFocus}
    >
      <View style={[styles.contentStyle, containerStyle]}>
        {buttonLeftView && !isLoading && (
          <View style={getButtonRightStyle}>{buttonLeftView}</View>
        )}
        {isLoading && (
          <Image
            source={Images.loading}
            style={getButtonLoadingStyle}
            resizeMode="cover"
          />
        )}
        {children
          ? children
          : name && (
              <Text
                style={[getButtonContentStyle, contentStyles]}
                numberOfLines={1}
              >
                {name}
              </Text>
            )}
        {buttonRightView && (
          <View style={getButtonRightStyle}>{buttonRightView}</View>
        )}
      </View>
    </TouchableOpacity>
  );
};
