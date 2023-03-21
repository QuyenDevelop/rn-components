import * as React from "react";
import {
  Text,
  TouchableHighlight,
  View,
  ActivityIndicator,
} from "react-native";
import { Color, ConstantStyles, TextStyles } from "../Themes";
import { styles } from "./styles";
import { ButtonProps, ButtonSizes, ButtonTypes } from "./types";

export const ButtonDefault: React.FunctionComponent<ButtonProps> = ({
  width = 0,
  isLoading,
  renderLoading,
  isDisabled,
  name,
  children,
  buttonLeftView,
  buttonRightView,
  onPress,
  onBlur,
  onFocus,
  fontFamily,
  buttonStyle = ButtonTypes.PRIMARY,
  buttonSize = ButtonSizes.LARGE,
}) => {
  const defaultWidth = width ? width : undefined;

  /** get Button Height size */
  const getSize =
    buttonSize === ButtonSizes.SMALL_SPECIAL || buttonSize === ButtonSizes.SMALL
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

  /** get Button Loading styles */
  const getIconStyle =
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
  const getContentStyle =
    buttonSize === ButtonSizes.SMALL_SPECIAL
      ? {
          ...styles.textStyle,
          ...TextStyles.text14,
          fontFamily: fontFamily,
          color: isDisabled ? Color.black5s : getButtonRightBGColor,
        }
      : {
          ...styles.textStyle,
          ...TextStyles.text16,
          fontFamily: fontFamily,
          color: isDisabled ? Color.black5s : getButtonRightBGColor,
        };

  return (
    <TouchableHighlight
      style={{
        ...styles.enableStyle,
        maxHeight: getSize,
        minWidth: getSize,
        width: defaultWidth,
        borderRadius: ConstantStyles.borderRadius8,
      }}
      underlayColor={Color.black6s}
      activeOpacity={0.92}
      onPress={onPress}
      disabled={isDisabled}
      onBlur={onBlur}
      onFocus={onFocus}
    >
      <View
        style={{
          ...styles.contentStyle,
          backgroundColor: isDisabled ? Color.black3s : getBackgroundColor,
          paddingHorizontal:
            width > ConstantStyles.sizeMedium
              ? ConstantStyles.spacing8
              : undefined,
        }}
      >
        {children ? (
          <View style={styles.childrenContentStyle}>{children}</View>
        ) : (
          <View
            style={{
              ...styles.contentStyle,
              marginHorizontal: ConstantStyles.spacing4,
            }}
          >
            {!isLoading && buttonLeftView && (
              <View style={{ ...getIconStyle }}>{buttonLeftView}</View>
            )}
            {isLoading && (
              <View style={{ ...getIconStyle }}>
                {renderLoading || (
                  <ActivityIndicator
                    color={isDisabled ? Color.black5s : getButtonRightBGColor}
                    size={
                      buttonSize === ButtonSizes.SMALL_SPECIAL
                        ? ConstantStyles.iconSizeSmall
                        : ConstantStyles.iconSizeMedium
                    }
                  />
                )}
              </View>
            )}
            {name && (
              <Text
                style={{
                  ...getContentStyle,
                  marginHorizontal: ConstantStyles.spacing4,
                }}
                numberOfLines={1}
              >
                {name}
              </Text>
            )}
            {(buttonRightView && buttonLeftView) ||
            (buttonRightView && name) ? (
              <View style={getIconStyle}>{buttonRightView}</View>
            ) : null}
          </View>
        )}
      </View>
    </TouchableHighlight>
  );
};
