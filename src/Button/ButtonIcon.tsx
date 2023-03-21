import * as React from "react";
import { Image, TouchableHighlight } from "react-native";
import { Color, ConstantStyles } from "../Themes";
import { Images } from "../assets/Images";
import { ButtonProps, IconColor } from "./types";
import { styles } from "./styles";

export const IconButton: React.FunctionComponent<ButtonProps> = ({
  children,
  onPress,
  width = ConstantStyles.iconSizeLarge,
}) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={{
        ...styles.overflowHidden,
        width: width,
        height: width,
        borderRadius: width / 2,
        backgroundColor: Color.black3,
      }}
      underlayColor={Color.black1}
      activeOpacity={0.92}
    >
      {children}
    </TouchableHighlight>
  );
};

interface iconClearProps extends ButtonProps {
  size?: number;
  backgroundColor?: string;
  renderIcon?: React.ReactNode;
}

export const IconButtonClear: React.FC<iconClearProps> = ({
  onPress,
  iconColor = IconColor.LIGHT,
  renderIcon,
  backgroundColor = Color.black3,
  size = ConstantStyles.iconSizeSmall,
}) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={{
        ...styles.overflowHidden,
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: backgroundColor,
      }}
      underlayColor={Color.black1}
      activeOpacity={0.92}
    >
      {renderIcon || (
        <Image
          source={
            iconColor === IconColor.LIGHT
              ? Images.icCloseWhite2
              : Images.icCloseDark2
          }
          resizeMode="center"
        />
      )}
    </TouchableHighlight>
  );
};
