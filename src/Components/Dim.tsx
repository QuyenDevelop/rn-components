import * as React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { Color, ScreenUtils } from "../Themes";

interface DimProps {
  onPress?: () => void;
}

const styles = StyleSheet.create({
  container: {
    width: ScreenUtils.WIDTH_SCREEN,
    height: ScreenUtils.HEIGHT_SCREEN,
    backgroundColor: Color.black6s,
    opacity: 0.8,
  },
});

const _IComponentDIM: React.FC<DimProps> = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container} />
    </TouchableWithoutFeedback>
  );
};

export const IComponentDIM = React.memo(_IComponentDIM);
