import * as React from "react";
import { Image, TouchableOpacity } from "react-native";
import { Color, ConstantStyles } from "../Themes";
import { Images } from "../assets/Images";
import { ButtonProps, IconColor } from "./types";

export const IconButton: React.FunctionComponent<ButtonProps> = ({
  children,
  onPress,
  width = ConstantStyles.iconSizeLarge,
  iconColor = IconColor.LIGHT,
}) => {
  // const iconSize =
  //   width > ConstantStyles.iconSizeLarge
  //     ? ConstantStyles.iconSizeMedium
  //     : ConstantStyles.iconSizeSmall;

  return (
    <TouchableOpacity
      onPress={onPress}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        width: width,
        height: width,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: width / 2,
        backgroundColor: Color.black3,
        overflow: "hidden",
      }}
    >
      {children || (
        <Image
          source={
            iconColor === IconColor.LIGHT ? Images.icCloseWhite : Images.icClose
          }
          resizeMode="center"
        />
      )}
    </TouchableOpacity>
  );
};

export const IconButtonClear: React.FunctionComponent<ButtonProps> = ({
  onPress,
  iconColor = IconColor.LIGHT,
}) => {
  return (
    <IconButton width={ConstantStyles.iconSizeSmall} onPress={onPress}>
      <Image
        source={
          iconColor === IconColor.LIGHT
            ? Images.icCloseWhite2
            : Images.icCloseDark2
        }
        resizeMode="center"
      />
    </IconButton>
  );
};
