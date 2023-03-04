import { text } from "@storybook/addon-knobs";
import React, { FunctionComponent } from "react";
import { BaseSearch } from "@quyenph/rn-components";
import { ContainerView } from ".";

export const SearchBarDefault: FunctionComponent = () => {
  return (
    <ContainerView>
      <BaseSearch
        placeHolder={text("Placeholder", "Placeholder...")}
        value={text("Input value", "Input here...")}
        onChangeText={() => {}}
        onClearInput={() => {}}
      />
    </ContainerView>
  );
};
