import PropTypes from "prop-types";
import React, { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";
import { ContainerViewProps } from "./ContainerView";

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const FlexCenterView: FunctionComponent<ContainerViewProps> = ({
  children,
}) => {
  return <View style={styles.main}>{children}</View>;
};

FlexCenterView.defaultProps = {
  children: null,
};

FlexCenterView.propTypes = {
  children: PropTypes.node,
};
