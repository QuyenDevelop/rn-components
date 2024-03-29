import React, { FunctionComponent } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import { IconButtonClear } from "../Button";
import { Color, ConstantStyles, ScreenUtils } from "../Themes";
import { Support } from "./FloatingButton";
import { styles } from "./styles";
import { IComponentDIM } from "../Components";
import { Images } from "../assets";

interface ContentModal {
  ListSupport: Array<Support>;
  isShowContent: boolean;
  onCloseContent: () => void;
  fontFamily?: string;
}

const _ContentModal: FunctionComponent<ContentModal> = ({
  isShowContent,
  ListSupport,
  onCloseContent,
  fontFamily,
}) => {
  return (
    <Modal
      useNativeDriver
      useNativeDriverForBackdrop
      statusBarTranslucent
      propagateSwipe={true}
      hardwareAccelerated={false}
      onBackButtonPress={onCloseContent}
      customBackdrop={<IComponentDIM onPress={onCloseContent} />}
      onModalHide={onCloseContent}
      style={styles.modalContainer}
      isVisible={isShowContent}
      animationOut={"fadeOut"}
      animationIn={"fadeIn"}
      hideModalContentWhileAnimating={true}
      deviceHeight={ScreenUtils.HEIGHT_SCREEN}
    >
      <View style={styles.overView}>
        {ListSupport.map((item: Support, index: number) => (
          <TouchableOpacity
            style={styles.supportTouch}
            onPress={item.onPress}
            key={index}
          >
            <Text style={{ ...styles.buttonText, fontFamily: fontFamily }}>
              {item.title}
            </Text>
            <Image source={{ uri: item.image }} style={styles.imgStyle} />
          </TouchableOpacity>
        ))}
        <IconButtonClear
          size={ConstantStyles.sizeLarge}
          renderIcon={
            <Image source={Images.icFloatingClose} resizeMode="cover" />
          }
          backgroundColor={Color.primary1s}
          onPress={onCloseContent}
        />
      </View>
    </Modal>
  );
};

export const ContentModal = React.memo(_ContentModal);
