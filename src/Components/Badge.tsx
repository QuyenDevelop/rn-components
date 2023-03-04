import React, { FunctionComponent } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Color, ConstantStyles, TextStyles } from "../Themes";
import type { BadgeProps } from "./types";

export const IBadge: FunctionComponent<BadgeProps> = ({
  size = ConstantStyles.iconSizeSmall,
  color = Color.red6s,
  content,
  contentStyles,
  fontFamily,
}) => {
  const cornerRadius = size / 2;

  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: cornerRadius,
        ...styles.container,
      }}
    >
      {content && (
        <Text
          style={[
            {
              ...TextStyles.text12,
              color: Color.white6,
              fontFamily: fontFamily,
            },
            contentStyles,
          ]}
          numberOfLines={1}
          adjustsFontSizeToFit
        >
          {Number(content) <= 99 ? content.toString() : "99+"}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
