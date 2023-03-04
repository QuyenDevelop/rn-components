import { action } from "@storybook/addon-actions";
import { boolean, number, text } from "@storybook/addon-knobs";
import React, { FunctionComponent, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  BaseBottomSheet,
  BaseTextInput,
  BaseTextArea,
  Themes,
} from "@phamquyen/rn-core-components";
import { FlexCenterView } from "./FlexCenterView";

export const TextInputDefault: FunctionComponent = () => {
  return (
    <BaseTextInput
      editable={boolean("Editable", true)}
      isHideClear={boolean("Hide Icon button clear Text", false)}
      label={text("Label", "Text Input")}
      value={text("Input Value", "Nhập nội dung ở đây")}
      onChangeText={() => {}}
      onClearInput={action("Clear Text")}
      errorMessage={text("Error when input wrong value", "")}
      placeholder={text("Hint Text", "Placeholder...")}
      noteMessage={text("Note description", "")}
    />
  );
};

export const TextAreaDefault: FunctionComponent = () => {
  return (
    <BaseTextArea
      editable={boolean("Editable", true)}
      label={text("Label", "Text Area")}
      value={text("Input Value", "Nhập nội dung ở đây")}
      onChangeText={() => {}}
      errorMessage={text("Error when input wrong value", "")}
      placeholder={text("Hint Text", "Placeholder...")}
      noteMessage={text("Note description", "")}
      limited={number("Length Limited", 40)}
    />
  );
};

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
  touchRight: { marginLeft: 8 },
});

export const TextDropdown: FunctionComponent = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <FlexCenterView>
      <BaseTextInput
        editable={boolean("Editable", true)}
        label={text("Label", "Text Dropdown List")}
        value={text("Input Value", "Nhập nội dung ở đây")}
        onChangeText={() => {}}
        onClearInput={action("Clear Text")}
        errorMessage={text("Error when input wrong value", "")}
        placeholder={text("Hint Text", "Placeholder...")}
        noteMessage={text("Note description", "")}
        textRightComponent={
          <TouchableOpacity
            style={styles.touchRight}
            onPress={() => setShow(true)}
          >
            <Text>List</Text>
          </TouchableOpacity>
        }
      />
      <BaseBottomSheet
        isVisible={show}
        onCloseModal={() => setShow(false)}
        headerTitle={"Header Title"}
        disableSwipeComplete
      >
        <View style={styles.contentContainer}>
          <View style={styles.content}>
            <Text>Swap area</Text>
            <Text>item 1: Nội dung danh sách item select</Text>
            <Text>item 2: Nội dung danh sách item select</Text>
            <Text>item 3: Nội dung danh sách item select</Text>
            <Text>item 4: Nội dung danh sách item select</Text>
            <Text>item 5: Nội dung danh sách item select</Text>
            <Text>item 6: Nội dung danh sách item select</Text>
          </View>
        </View>
      </BaseBottomSheet>
    </FlexCenterView>
  );
};
