import React, { FunctionComponent } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Color, ConstantStyles, TextStyles } from "../Themes";
import type { BadgeProps } from "./types";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

const _IBadge: FunctionComponent<BadgeProps> = ({
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
        height: size,
        minWidth: size,
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
          {Number(content) <= 99 ? content.toString() : "+99"}
        </Text>
      )}
    </View>
  );
};

export const IBadge = React.memo(_IBadge);
