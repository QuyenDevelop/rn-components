import React, { FunctionComponent } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Color, ConstantStyles } from "../Themes";
import { Images } from "../assets";
import type { PlaceHolderProps } from "./types";

export const IPlaceHolder: FunctionComponent<PlaceHolderProps> = ({
  backgroundColor,
  renderIcon,
  holderSize,
}) => {
  const getImageSize =
    holderSize > ConstantStyles.sizeLarge
      ? ConstantStyles.iconSizeLarge
      : ConstantStyles.iconSizeSmall;

  return (
    <View
      style={{
        ...styles.imageContainer,
        width: holderSize,
        maxHeight: holderSize,
        backgroundColor: backgroundColor || Color.black1s,
      }}
    >
      {renderIcon ? (
        renderIcon
      ) : (
        <Image
          source={Images.icHolder}
          style={{
            width: getImageSize,
            height: getImageSize,
          }}
          resizeMode="cover"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
