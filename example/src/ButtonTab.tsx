import * as React from "react";

import { StyleSheet, Text, View } from "react-native";
import {
  Button,
  ButtonTypes,
  ITooltip,
  Themes,
} from "@phamquyen/rn-core-components";

export default function ButtonTab() {
  const [buttonDisable, setButtonDisable] = React.useState<boolean>(false);
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
      <View style={styles.container}>
        <ITooltip
          onCloseTooltip={() => settoolTip(false)}
          isVisible={toolTip}
          message={
            "con gaf cuc tacs la chanh, e an thitj gaf lai them thitj vit"
          }
        >
          <Button onPress={() => settoolTip(true)} name="T" />
        </ITooltip>
        <Button
          buttonLeftView={<Text>x</Text>}
          name="Modal"
          buttonStyle={ButtonTypes.SECONDARY_ONE}
        />

        <View style={styles.boxButton}>
          <Button
            onPress={() => setButtonDisable(true)}
            isLoading={buttonDisable}
            isDisabled={buttonDisable}
            // buttonSize={"small"}
            buttonStyle={ButtonTypes.SECONDARY_ONE}
            // width={Themes.ScreenUtils.scale(32)}
            name="Test Button"
            buttonLeftView={<Text>x</Text>}
          />
          <View
            style={{
              width: Themes.ConstantStyles.spacing16,
            }}
          />
          <Button
            onPress={() => setButtonDisable(true)}
            isDisabled={true}
            // buttonSize={"small"}
            // width={Themes.ScreenUtils.scale(32)}
            name="Test Button alhncaíoh"
          />
        </View>
      </View>
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
