import * as React from "react";
import { ButtonDefault } from "./ButtonDefault";
import { ButtonProps, ButtonVariants } from "./types";
import { ButtonTextLink } from "./ButtonTextLink";
import { IconButton } from "./ButtonIcon";

export const Button: React.FunctionComponent<ButtonProps> = ({
  variant = ButtonVariants.BUTTON,
  ...args
}) => {
  switch (variant) {
    case ButtonVariants.ICON:
      return <IconButton {...args} />;
    case ButtonVariants.TEXT_LINK:
      return <ButtonTextLink {...args} />;
  }

  return <ButtonDefault {...args} />;
};
