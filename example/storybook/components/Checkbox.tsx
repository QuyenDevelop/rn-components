import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import React, { FunctionComponent } from "react";
import { ICheckBox, IRadioCheckBox } from "rn-core-components";
import { ContainerView } from ".";

export const CheckboxDefault: FunctionComponent = () => {
  return (
    <ContainerView>
      <ICheckBox
        content={text("Content", "Check Box")}
        isChecked={boolean("is Checked", false)}
        isDisabled={boolean("is Disabled", false)}
        handleCheck={action("Checked")}
      />
    </ContainerView>
  );
};

export const RadioCheckDefault: FunctionComponent = () => {
  return (
    <ContainerView>
      <IRadioCheckBox
        content={text("Content", "Radio Check Box")}
        isChecked={boolean("is Checked", false)}
        isDisabled={boolean("is Disabled", false)}
        handleCheck={action("Checked")}
      />
    </ContainerView>
  );
};
