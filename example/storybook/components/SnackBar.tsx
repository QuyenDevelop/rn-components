/* eslint-disable react-native/no-inline-styles */
import { action } from "@storybook/addon-actions";
import { boolean, number, select, text } from "@storybook/addon-knobs";
import React, { FunctionComponent } from "react";
import {
  BaseSnackBar,
  SnackBarTypes,
  Themes,
} from "@phamquyen/rn-core-components";
import { ContainerView } from "./ContainerView";
import { Text } from "react-native";

export const SnackBarPrimary: FunctionComponent = () => {
  return (
    <ContainerView>
      <BaseSnackBar
        snackBarIcon={
          <Text
            style={{
              ...Themes.TextStyles.text14,
              color: Themes.Color.white6,
              fontWeight: "500",
            }}
          >
            {text("Snack Bar Icon", "👍")}
          </Text>
        }
        showIcon={boolean("Show/Hide icon", true)}
        message={text("Nội dung thông báo", "Thông báo")}
        buttonName={text("Button Name", "Button")}
        snackBarAction={action("snackBarAction")}
        type={select("Snack bar type", SnackBarTypes, SnackBarTypes.INFO)}
        duration={number("Timing", 5000)}
      />
    </ContainerView>
  );
};
