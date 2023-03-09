import React, { FunctionComponent } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { Color, ScreenUtils } from "../Themes";

interface DimProps {
  onPress?: () => void;
}

export const IComponentDIM: FunctionComponent<DimProps> = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container} />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: ScreenUtils.WIDTH_SCREEN,
    height: ScreenUtils.HEIGHT_SCREEN,
    backgroundColor: Color.black6s,
    opacity: 0.8,
  },
});
