/* eslint-disable react-native/no-inline-styles */
import * as React from "react";

import { StyleSheet, Text, View } from "react-native";
import {
  BaseBottomSheet,
  BaseLabel,
  Button,
  ITags,
  Themes,
} from "@phamquyen/rn-core-components";

export default function BottomSheetTab() {
  const [showModal, setShowModal] = React.useState<boolean>(false);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Button onPress={() => setShowModal(true)} name="Modal" />
      </View>

      <BaseBottomSheet
        isVisible={showModal}
        onCloseModal={() => setShowModal(false)}
        headerTitle={"Title"}
        // headerRightView={<Text>Hai</Text>}
        // disableBackdrop
        // isSwipeComplete
      >
        <View style={styles.contentContainer}>
          {/* <PlaceHolder holderSize={48} /> */}
          {/* <EmptyState
            title={"Title"}
            message={"Message"}
            // buttonTitle={"Button"}
            // buttonHandler={() => setShowModal(false)}
          /> */}
          <View style={styles.content}>
            {/* <Dot /> */}
            {/* <Badge content={99} /> */}
            <BaseLabel content="Content label" />
            <ITags tagName="Tags" isShowClose onCloseTag={() => {}} />

            <Text>Swap area</Text>
            <Text>Hãy tạo component vào kéo vào đây thay thế nhé</Text>
          </View>
        </View>
      </BaseBottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  boxButton: {
    paddingHorizontal: Themes.ConstantStyles.spacing16,
    marginTop: 20,
    flexDirection: "row",
  },
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
