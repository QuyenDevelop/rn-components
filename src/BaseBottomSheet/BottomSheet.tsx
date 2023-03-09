import React, { forwardRef, ForwardRefRenderFunction, useRef } from "react";
import {
  GestureResponderEvent,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import Modal from "react-native-modal";
import { Images } from "../assets";
import { Color, ConstantStyles, ScreenUtils, TextStyles } from "../Themes";
import { IComponentDIM } from "../Components";

export interface BottomSheetProps {
  isVisible: boolean;
  headerTitle: string;
  containerStyle?: ViewStyle;
  height?: number;
  /** set Font for Text */
  fontFamily?: string;
  children: React.ReactNode | JSX.Element;
  headerLeftView?: React.ReactNode;
  headerRightView?: React.ReactNode;
  disableBackdrop?: boolean;
  disableSwipeComplete?: boolean;
  backdropOpacity?: number;
  onCloseModal?: (() => void) | undefined;
  headerLeftOnPress?: ((event: GestureResponderEvent) => void) | undefined;
  headerRightOnPress?: ((event: GestureResponderEvent) => void) | undefined;
}

export interface BottomSheetRef {}

export const BaseBottomSheetRef: ForwardRefRenderFunction<
  BottomSheetRef,
  BottomSheetProps
> = (props, _ref) => {
  const {
    isVisible,
    onCloseModal,
    containerStyle,
    children,
    headerLeftView,
    headerLeftOnPress,
    headerTitle,
    headerRightView,
    headerRightOnPress,
    disableBackdrop = false,
    disableSwipeComplete = false,
    backdropOpacity,
    height,
    fontFamily,
  } = props;
  const scrollRef = useRef<ScrollView>(null);
  const MAX_HEIGHT =
    height ||
    ScreenUtils.HEIGHT_SCREEN -
      ScreenUtils.getStatusBarHeight() -
      ScreenUtils.scale(24);
  const containerViewStyle = [
    { ...styles.contentContainer, height: height },
    containerStyle,
  ];
  const onBackdropPress = () => {
    disableBackdrop ? undefined : onCloseModal?.();
  };
  const onSwipeComplete = () => {
    disableSwipeComplete ? undefined : onCloseModal?.();
  };
  return (
    <Modal
      useNativeDriver
      useNativeDriverForBackdrop
      statusBarTranslucent
      propagateSwipe={true}
      hardwareAccelerated={false}
      onBackdropPress={onBackdropPress}
      onBackButtonPress={onCloseModal}
      onSwipeComplete={onSwipeComplete}
      customBackdrop={<IComponentDIM onPress={onCloseModal} />}
      onModalHide={onCloseModal}
      swipeDirection="down"
      style={styles.modalContainer}
      isVisible={isVisible}
      backdropOpacity={backdropOpacity || 0.5}
      hideModalContentWhileAnimating={true}
      backdropTransitionOutTiming={0}
      deviceHeight={ScreenUtils.HEIGHT_SCREEN}
    >
      <KeyboardAvoidingView behavior="position" enabled>
        <View style={{ maxHeight: MAX_HEIGHT, height: height }}>
          <View style={containerViewStyle}>
            <View style={styles.headerView}>
              <View>
                <TouchableOpacity
                  style={{
                    ...styles.headerChildStyle,
                    width: ConstantStyles.sizeLarge,
                  }}
                  onPress={headerLeftOnPress || onCloseModal}
                >
                  {headerLeftView ? (
                    headerLeftView
                  ) : (
                    <View style={styles.view24}>
                      <Image
                        source={Images.icClose}
                        style={styles.iconCloseStyle}
                        resizeMode="center"
                      />
                    </View>
                  )}
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  ...styles.headerTitle,
                  fontFamily: fontFamily,
                }}
              >
                {headerTitle}
              </Text>
              <TouchableOpacity
                style={{
                  ...styles.headerChildStyle,
                  width: ConstantStyles.sizeLarge,
                }}
                onPress={headerRightOnPress}
              >
                {headerRightView ? (
                  headerRightView
                ) : (
                  <View style={styles.view24} />
                )}
              </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} ref={scrollRef}>
              {children}
            </ScrollView>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    margin: 0,
    justifyContent: "flex-end",
  },
  contentContainer: {
    borderTopLeftRadius: ConstantStyles.borderRadius16,
    borderTopRightRadius: ConstantStyles.borderRadius16,
    backgroundColor: Color.white6,
    paddingBottom: ConstantStyles.spacing16,
  },
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: ConstantStyles.spacing4,
    paddingHorizontal: ConstantStyles.spacing8,
    borderBottomWidth: 2 * StyleSheet.hairlineWidth,
    borderBottomColor: Color.black1s,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    ...TextStyles.text16,
    fontWeight: "500",
    color: Color.black6s,
  },
  headerChildStyle: {
    height: ConstantStyles.sizeLarge,
    alignItems: "center",
    justifyContent: "center",
  },
  view24: {
    width: ConstantStyles.iconSizeMedium,
    height: ConstantStyles.iconSizeMedium,
    alignItems: "center",
    justifyContent: "center",
  },
  iconCloseStyle: {
    width: ConstantStyles.iconSizeMedium,
    height: ConstantStyles.iconSizeMedium,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const BaseBottomSheet = forwardRef(BaseBottomSheetRef);
