import {
  Button,
  ButtonSizes,
  ButtonTypes,
  ButtonVariants,
} from "@phamquyen/rn-core-components";
import { action } from "@storybook/addon-actions";
import { boolean, number, select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Text } from "react-native";
import { CThemes } from "../../global";
import { ButtonDefault, ButtonTextLink, ContainerView } from "../components";

storiesOf("Button", module)
  .addDecorator((getStory) => <ContainerView>{getStory()}</ContainerView>)
  .add("Button", () => {
    return (
      <ButtonDefault
        isLoading={boolean("Loading", false)}
        isDisabled={boolean("Disabled", false)}
        name={text("Button Name", "Customizes")}
        onPress={action("clicked-emoji")}
        buttonStyle={select(
          "Button style",
          ButtonTypes,
          ButtonTypes.SECONDARY_ONE
        )}
        width={number("Button Width", 0)}
        fontFamily={CThemes.fonts.medium}
        buttonSize={select("Button Size", ButtonSizes, ButtonSizes.MEDIUM)}
        isShowLeftView={boolean("Show Left View", true)}
        isShowRightView={boolean("Show Right View", true)}
      />
    );
  })
  .add("Icon Button", () => (
    <Button variant={ButtonVariants.ICON} onPress={action("Icon CLick")}>
      <Text>{text("Icon", "X")}</Text>
    </Button>
  ))
  .add("Text Link Button", () => (
    <ButtonTextLink
      isLoading={boolean("Loading", false)}
      isDisabled={boolean("Disabled", false)}
      name={text("Button Name", "Customizes")}
      onPress={action("clicked")}
      isShowLeftView={boolean("Show Left View", true)}
      isShowRightView={boolean("Show Right View", true)}
    />
  ));
