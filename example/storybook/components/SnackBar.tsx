import { action } from "@storybook/addon-actions";
import { number, select, text } from "@storybook/addon-knobs";
import React, { FunctionComponent } from "react";
import { BaseSnackBar, SnackBarTypes } from "rn-core-components";
import { ContainerView } from ".";

export const SnackBarPrimary: FunctionComponent = () => {
  return (
    <ContainerView>
      <BaseSnackBar
        message={text("Nội dung thông báo", "Thông báo")}
        buttonName={text("Button Name", "Button")}
        snackBarAction={action("snackBarAction")}
        type={select("Snack bar type", SnackBarTypes, SnackBarTypes.INFO)}
        duration={number("Timing", 5000)}
      />
    </ContainerView>
  );
};
