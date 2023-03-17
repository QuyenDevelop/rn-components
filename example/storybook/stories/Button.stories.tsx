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
// import { Text } from "react-native";
import { ActivityIndicator, Text } from "react-native";
import { CThemes } from "../../global";
import { ContainerView } from "../components";

storiesOf("Button", module)
  .addDecorator((getStory) => <ContainerView>{getStory()}</ContainerView>)
  .add("Button", () => {
    return (
      <Button
        isLoading={boolean("Loading", false)}
        isDisabled={boolean("Disabled", false)}
        name={text("Button Name", "Customizes")}
        onPress={action("clicked-emoji")}
        buttonStyle={select(
          "Button style",
          ButtonTypes,
          ButtonTypes.SECONDARY_ONE
        )}
        renderLoading={<ActivityIndicator />}
        width={number("Button Width", 0)}
        fontFamily={CThemes.fonts.medium}
        buttonSize={select("Button Size", ButtonSizes, ButtonSizes.MEDIUM)}
        buttonLeftView={<Text>{text("icon Left", "😎")}</Text>}
        buttonRightView={<Text>{text("icon Right", "💯")}</Text>}
      />
    );
  })
  .add("Icon Button", () => (
    <Button variant={ButtonVariants.ICON} onPress={action("Icon CLick")}>
      <Text>{text("Icon", "X")}</Text>
    </Button>
  ))
  .add("Text Link Button", () => (
    <Button
      variant={ButtonVariants.TEXT_LINK}
      isLoading={boolean("Loading", false)}
      isDisabled={boolean("Disabled", false)}
      name={text("Button Name", "Customizes")}
      onPress={action("clicked")}
      renderLoading={<ActivityIndicator />}
      buttonLeftView={<Text>{text("icon Left", "😎")}</Text>}
      buttonRightView={<Text>{text("icon Right", "👍")}</Text>}
    />
  ));
