import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Color, ConstantStyles, TextStyles } from "../Themes";
import { styles } from "./styles";
import { ButtonProps, ButtonSizes } from "./types";

export const ButtonTextLink: React.FunctionComponent<ButtonProps> = ({
  width = 0,
  isLoading,
  renderLoading,
  isDisabled,
  name,
  buttonLeftView,
  buttonRightView,
  onPress,
  fontFamily,
  buttonSize = ButtonSizes.MEDIUM,
}) => {
  const defaultWidth = width ? width : undefined;

  /** get Button Height size */
  const getSize =
    buttonSize === ButtonSizes.SMALL_SPECIAL || buttonSize === ButtonSizes.SMALL
      ? ConstantStyles.sizeSmall
      : ConstantStyles.sizeMedium;

  /** get Button Loading styles */
  const getIconStyle =
    buttonSize === ButtonSizes.SMALL_SPECIAL
      ? {
          ...styles.overflowHidden,
          width: ConstantStyles.iconSizeSmall,
          height: ConstantStyles.iconSizeSmall,
        }
      : {
          ...styles.overflowHidden,
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
          color: isDisabled ? Color.black5s : Color.primary6s,
        }
      : {
          ...styles.textStyle,
          ...TextStyles.text16,
          fontFamily: fontFamily,
          color: isDisabled ? Color.black5s : Color.primary6s,
        };

  return (
    <TouchableOpacity
      style={{
        ...styles.enableStyle,
        maxHeight: getSize,
        minWidth: getSize,
        width: defaultWidth,
        borderRadius: ConstantStyles.borderRadius8,
      }}
      onPress={onPress}
      disabled={isDisabled}
    >
      <View style={styles.flexRow}>
        {(renderLoading || buttonLeftView) && (
          <View
            style={{ ...getIconStyle, marginRight: ConstantStyles.spacing8 }}
          >
            {isLoading ? renderLoading : buttonLeftView}
          </View>
        )}
        {name ? (
          <Text
            style={{
              ...getContentStyle,
              marginHorizontal: ConstantStyles.spacing4,
            }}
            numberOfLines={1}
          >
            {name}
          </Text>
        ) : (
          <Text>Click</Text>
        )}
        {buttonRightView &&
          ((name && (
            <View
              style={{ ...getIconStyle, marginLeft: ConstantStyles.spacing8 }}
            >
              {buttonRightView}
            </View>
          )) ||
            (buttonLeftView && (
              <View
                style={{ ...getIconStyle, marginLeft: ConstantStyles.spacing8 }}
              >
                {buttonRightView}
              </View>
            )))}
      </View>
    </TouchableOpacity>
  );
};
