import { boolean, number, text } from "@storybook/addon-knobs";
import React, { FunctionComponent, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { BaseBottomSheet, Button, Themes } from "@quyendev/rn-components";
import { ContainerView } from ".";

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 16,
  },
  content: {
    backgroundColor: Themes.Color.black1s,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});

export const BottomSheetPrimary: FunctionComponent = () => {
  const [show, setShow] = useState(false);
  return (
    <ContainerView>
      <Button
        name="Click me to show Bottom Sheet"
        onPress={() => setShow(true)}
      />
      <BaseBottomSheet
        isVisible={show}
        onCloseModal={() => setShow(false)}
        headerTitle={text("Header Title", "Title viết 1 dòng thôi nhé")}
        headerRightView={<Text>{text("Right Content", "sửa")}</Text>}
        disableBackdrop={boolean("hide when Backdrop", false)}
        height={number("Max of Height", 500)}
        // isSwipeComplete
      >
        <View style={styles.contentContainer}>
          <View style={styles.content}>
            <Text>Swap area</Text>
            <Text>Hãy tạo component vào kéo vào đây thay thế nhé</Text>
          </View>
        </View>
      </BaseBottomSheet>
    </ContainerView>
  );
};
