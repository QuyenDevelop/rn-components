import React, { FunctionComponent } from "react";
import { View } from "react-native";
import { Color, ConstantStyles } from "../Themes";
import type { DotProps } from "./types";

export const IDot: FunctionComponent<DotProps> = ({
  size = ConstantStyles.iconSizeSmallSmall,
  color = Color.red6s,
}) => {
  const cornerRadius = size / 2;
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: cornerRadius,
      }}
    />
  );
};
