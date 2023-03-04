import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import React, { FunctionComponent, useState } from "react";
import {
  Button,
  ButtonProps,
  ButtonSizes,
  ButtonTypes,
} from "@quyendev/rn-components";
import { boolean, number, select, text } from "@storybook/addon-knobs";
// import { Text } from "react-native";
import { ContainerView } from "../components";

const ButtonLoading: FunctionComponent<ButtonProps> = (props) => {
  const [isLoading, setLoading] = useState(false);

  const onPress = () => {
    props.onPress || setLoading(true);
  };
  return (
    <Button
      isLoading={isLoading}
      onPress={onPress}
      isDisabled={isLoading}
      {...props}
    />
  );
};

storiesOf("Button", module)
  .addDecorator((getStory) => <ContainerView>{getStory()}</ContainerView>)
  .add("Button", () => {
    return <ButtonLoading name={text("Button Name", "Button")} />;
  })
  .add("Button change style", () => (
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
      buttonSize={select("Button Size", ButtonSizes, ButtonSizes.MEDIUM)}
    />
  ))
  .add("Button change With", () => (
    <Button
      isLoading={boolean("Loading", false)}
      isDisabled={boolean("Disabled", false)}
      buttonStyle={select("Button style", ButtonTypes, ButtonTypes.PRIMARY)}
      width={number("Custom Width", 100)}
      buttonSize={select("Button Size", ButtonSizes, ButtonSizes.MEDIUM)}
      name={text("Button Name", "😀")}
    >
      {/* <Text>{text("Children Content", "👍")}</Text> */}
    </Button>
  ));

// 😀 😎 👍 💯
