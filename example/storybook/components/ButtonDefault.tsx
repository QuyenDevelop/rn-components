import {
  Button,
  ButtonProps,
  ButtonVariants,
} from "@phamquyen/rn-core-components";
import { text } from "@storybook/addon-knobs";
import React, { FunctionComponent } from "react";
import { Text } from "react-native";

interface ButtonDefaultProps extends ButtonProps {
  isShowLeftView?: boolean;
  isShowRightView?: boolean;
}

export const ButtonDefault: FunctionComponent<ButtonDefaultProps> = (props) => {
  const { isShowLeftView, isShowRightView, ...arg } = props;
  return (
    <Button
      {...arg}
      buttonLeftView={
        isShowLeftView ? <Text>{text("icon Left Example", "😎")}</Text> : null
      }
      buttonRightView={
        isShowRightView ? <Text>{text("icon Right Example", "💯")}</Text> : null
      }
    />
  );
};

export const ButtonTextLink: FunctionComponent<ButtonDefaultProps> = (
  props
) => {
  const { isShowLeftView, isShowRightView, ...arg } = props;
  return (
    <Button
      {...arg}
      variant={ButtonVariants.TEXT_LINK}
      buttonLeftView={
        isShowLeftView ? <Text>{text("icon Left Example", "😎")}</Text> : null
      }
      buttonRightView={
        isShowRightView ? <Text>{text("icon Right Example", "💯")}</Text> : null
      }
    />
  );
};
