import React, { FunctionComponent } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { styles } from "./styles";
import { IconButton } from "../Button";
import { Color, ConstantStyles } from "../Themes";
import Modal from "react-native-modal";
import { Support } from "./FloatingButton";

interface ContentModal {
  ListSupport: Array<Support>;
  isShowContent: boolean;
  onCloseContent: () => void;
  fontFamily?: string;
}

export const ContentModal: FunctionComponent<ContentModal> = ({
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
      backdropColor={Color.black5}
      onModalHide={onCloseContent}
      style={styles.modalContainer}
      isVisible={isShowContent}
      animationOut={"fadeOut"}
      animationIn={"fadeIn"}
      hideModalContentWhileAnimating={true}
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
        <IconButton width={ConstantStyles.sizeLarge} onPress={onCloseContent} />
      </View>
    </Modal>
  );
};
