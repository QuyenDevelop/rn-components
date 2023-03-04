import * as React from "react";

import { StyleSheet, View } from "react-native";
import { IEmptyState, BaseSnackBar } from "rnc-components";

export default function EmptyStateTab() {
  const [message, setMessage] = React.useState<string>("showSnackBar");
  return (
    <View style={styles.container}>
      <IEmptyState
        title={"Title"}
        message={"Message"}
        buttonTitle={"Button"}
        buttonHandler={() => setMessage(message + "r")}
      />
      <BaseSnackBar message={message} buttonName="Button" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
