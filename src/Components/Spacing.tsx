import React, { FunctionComponent } from "react";
import { View, StyleSheet } from "react-native";
import { Color, ConstantStyles } from "../Themes";
import type { DotProps } from "./types";

export const ISpacingVertical: FunctionComponent<DotProps> = ({
  size = ConstantStyles.spacing4,
  color = Color.black3s,
}) => {
  return (
    <View
      style={{
        ...styles.horizontalSpacing,
        height: size,
        backgroundColor: color,
      }}
    />
  );
};

export const ISpacingHorizontal: FunctionComponent<DotProps> = ({
  size = ConstantStyles.spacing4,
  color,
}) => {
  return (
    <View
      style={{
        ...styles.verticalSpacing,
        width: size,
        backgroundColor: color,
      }}
    />
  );
};

const styles = StyleSheet.create({
  verticalSpacing: {
    height: "100%",
  },
  horizontalSpacing: {
    width: "100%",
  },
});
