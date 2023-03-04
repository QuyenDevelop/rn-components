/* eslint-disable react-native/no-inline-styles */
import React, { FunctionComponent } from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, ViewProps, SafeAreaView } from "react-native";

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 40,
    justifyContent: "center",
  },
});

export interface ContainerViewProps extends ViewProps {}

export const ContainerView: FunctionComponent<ContainerViewProps> = ({
  children,
}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.main}>{children}</View>
    </SafeAreaView>
  );
};

ContainerView.defaultProps = {
  children: null,
};

ContainerView.propTypes = {
  children: PropTypes.node,
};
