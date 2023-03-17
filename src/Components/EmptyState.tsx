import React, { FunctionComponent } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Color, ScreenUtils, ConstantStyles, TextStyles } from "../Themes";
import type { EmptyStateProps } from "./types";
import { Images } from "../assets";
import { Button } from "../Button";

/**
  Empty States can be used in:
  - System causes (like Connection error or API error)
  - User haven't used the function yet.
  - User finds no content from Search or Filter.
*/

export const IEmptyState: FunctionComponent<EmptyStateProps> = ({
  imgSource,
  title,
  message,
  buttonTitle,
  fontFamily,
  buttonHandler,
  backgroundColor,
}) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: backgroundColor || Color.white6,
      }}
    >
      <Image
        source={imgSource || Images.empty}
        style={styles.imageStyle}
        resizeMode="cover"
      />
      <View style={styles.emptyContentStyle}>
        {title && (
          <Text
            numberOfLines={2}
            style={{ ...styles.titleStyle, fontFamily: fontFamily }}
          >
            {title}
          </Text>
        )}
        <Text
          numberOfLines={3}
          style={{ ...styles.messageStyle, fontFamily: fontFamily }}
        >
          {message}
        </Text>
      </View>
      {buttonTitle && buttonHandler && (
        <Button
          width={ScreenUtils.scale(248)}
          name={buttonTitle}
          onPress={buttonHandler}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: ConstantStyles.spacing16,
    paddingVertical: ConstantStyles.spacing24,
  },
  imageStyle: {
    width: ScreenUtils.scale(168),
    height: ScreenUtils.scale(168),
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  emptyContentStyle: {
    paddingVertical: ConstantStyles.spacing16,
    alignItems: "center",
    justifyContent: "center",
  },
  titleStyle: {
    ...TextStyles.text16,
    fontWeight: "500",
    marginBottom: ConstantStyles.spacing8,
    textAlign: "center",
    color: Color.black6s,
  },
  messageStyle: {
    ...TextStyles.text14,
    fontWeight: "400",
    textAlign: "center",
    color: Color.black5s,
  },
});
