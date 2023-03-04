import * as React from "react";

import { StyleSheet, Text, View } from "react-native";
import {
  BaseBottomSheet,
  BaseHeaderBar,
  BaseLabel,
  BasePopup,
  BaseSearch,
  Button,
  IFloatingButton,
  ILineSkeleton,
  ISquareSkeleton,
  ITags,
  ITooltip,
  Themes,
} from "@quyenph/rn-components";

export default function App() {
  const [buttonDisable, setButtonDisable] = React.useState<boolean>(false);
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>("Typing here ...");
  const [showDialog, setShowDialog] = React.useState<boolean>(false);
  // const [showSnackBar, setShowSnackBar] = React.useState<string>("abc");
  // const [isChecked, setisChecked] = React.useState<boolean>(true);
  const [toolTip, settoolTip] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (buttonDisable) {
      setTimeout(() => {
        setButtonDisable(false);
      }, 3000);
    }
  }, [buttonDisable]);

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ flex: 1 }}>
      <BaseHeaderBar title={"Title tối đa 1 dòng nhiều"} />
      <BaseSearch
        placeHolder="Hint text"
        value={value}
        onChangeText={setValue}
        onClearInput={() => setValue("")}
      />

      <View style={styles.container}>
        <ITooltip
          onCloseTooltip={() => settoolTip(false)}
          isVisible={toolTip}
          message={
            "con gaf cuc tacs la chanh, e an thitj gaf lai them thitj vit"
          }
        >
          <Button onPress={() => settoolTip(true)} name="Modal" />
        </ITooltip>
        <View style={{}}>
          <ISquareSkeleton size={100} />
          <ILineSkeleton height={8} width={100} />
        </View>
        <View style={styles.boxButton}>
          <Button
            onPress={() => setButtonDisable(true)}
            isLoading={buttonDisable}
            isDisabled={buttonDisable}
            // buttonSize={"small"}
            // buttonStyle="ButtonTypes.SECONDARY_ONE"
            // width={Themes.ScreenUtils.scale(32)}
            name="Test Button"
            buttonLeftView={<Text>x</Text>}
          />
          <View
            style={{
              width: Themes.ConstantStyles.spacing16,
            }}
          />

          {/* <Button onPress={() => setShowSnackBar("xyzzcz")} name="SnackBar" /> */}
          <Button onPress={() => setShowModal(true)} name="Modal" />
        </View>
        {/* <CheckBox
          content="Điền nội dung"
          isChecked={isChecked}
          isDisabled
          handleCheck={() => setisChecked(!isChecked)}
        /> */}
        {/* <RadioCheckBox
          content="Điền nội dung"
          isChecked={!isChecked}
          isDisabled
          handleCheck={() => setisChecked(!isChecked)}
        /> */}
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
            {/* <BaseTextInput
              // editable={false}
              label="Label"
              value={value}
              onChangeText={setValue}
              onClearInput={() => setValue("")}
              errorMessage="error Message baksbkabvasbviaubvkxzjbviaujkzbciaubcias baucbiasbicba"
              placeholder="Placeholder ..."
              // noteMessage="note Message"
              // height={100}
            /> */}
            {/* <Textarea
              // editable={false}
              label="Label"
              value={value}
              onChangeText={setValue}
              onClearInput={() => setValue("")}
              // errorMessage="error Message baksbkabvasbviaubvkxzjbviaujkzbciaubcias baucbiasbicba"
              placeholder="Placeholder ..."
              // isFocus
              noteMessage="note Message"
              height={100}
            /> */}
          </View>
        </View>
      </BaseBottomSheet>
      <BasePopup
        isVisible={showDialog}
        onClose={() => setShowDialog(false)}
        title={"Title hãy viết 1 dòng thôi nhé"}
        message={
          "Phần nội dung bạn hãy viết vào đây nhé, nhưng đừng viết dài quá nhé, viết tối đa tầm 4 dòng đủ hiểu để đọc thôi nhé"
        }
        // buttonCancelName={"Từ chối"}
        // onPressCancel={() => setShowDialog(false)}
        buttonAcceptName={"Đồng ý"}
        onPressAccept={() => console.log("Đồng ý")}
        image={{
          uri: "https://bedental.vn/wp-content/uploads/2022/11/nguoi-mau-Shin-Jae-Eun.jpg",
        }}
      />
      {/* <BaseDialog
        isVisible={showDialog}
        onClose={() => setShowDialog(false)}
        title={"Đây là title nhé, tối đa 2 dòng"}
        message={"Đây là description nhé,  tối đa 2 dòng thôi nhé"}
        buttonCancelName={"Từ chối"}
        // onPressCancel={() => setShowDialog(false)}
        buttonAcceptName={"Đồng ý"}
        onPressAccept={() => console.log("Đồng ý")}
      /> */}
      {/* <SnackBar message={showSnackBar} buttonName="Button" /> */}
      <IFloatingButton
        ListSupport={[
          {
            key: 1,
            title: "Estimated Price",
            image:
              "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914__340.png",
            onPress: () => {},
          },
          {
            key: 2,
            title: "Messenger",
            image:
              "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914__340.png",
            onPress: () => {},
          },
        ]}
        floatingImage={{
          uri: "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914__340.png",
        }}
      />
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
