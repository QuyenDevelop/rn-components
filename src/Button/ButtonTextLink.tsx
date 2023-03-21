import * as React from "react";
import {
  ActivityIndicator,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
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
    <TouchableHighlight
      style={{
        ...styles.enableStyle,
        maxHeight: getSize,
        minWidth: getSize,
        width: defaultWidth,
      }}
      underlayColor={Color.black1}
      onPress={onPress}
      disabled={isDisabled}
    >
      <View style={styles.flexRow}>
        {!isLoading && buttonLeftView && (
          <View
            style={{ ...getIconStyle, marginRight: ConstantStyles.spacing8 }}
          >
            {buttonLeftView}
          </View>
        )}
        {isLoading && (
          <View
            style={{ ...getIconStyle, marginRight: ConstantStyles.spacing8 }}
          >
            {renderLoading || (
              <ActivityIndicator
                color={isDisabled ? Color.black5s : Color.primary6s}
                size={
                  buttonSize === ButtonSizes.SMALL_SPECIAL
                    ? ConstantStyles.iconSizeSmall
                    : ConstantStyles.iconSizeMedium
                }
              />
            )}
          </View>
        )}
        <Text style={{ ...getContentStyle }} numberOfLines={1}>
          {name || "Link"}
        </Text>
        {buttonRightView ? (
          <View
            style={{ ...getIconStyle, marginLeft: ConstantStyles.spacing8 }}
          >
            {buttonRightView}
          </View>
        ) : null}
      </View>
    </TouchableHighlight>
  );
};
