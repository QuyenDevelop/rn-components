import { action } from "@storybook/addon-actions";
import { select, text } from "@storybook/addon-knobs";
import React, { FunctionComponent } from "react";
import { IEmptyState, Themes } from "@quyendev/rn-components";

export const SheetEmptyPrimary: FunctionComponent = () => {
  return (
    <IEmptyState
      title={text("Title", "Phần title nhé, viết tối đa 2 dòng thôi nhé")}
      message={text(
        "Message",
        "Phần nội dung message nhé, viết tối đa 3 dòng thôi"
      )}
      backgroundColor={select(
        "Back ground Color",
        Themes.Color,
        Themes.Color.white6
      )}
      buttonTitle={text("Button Name", "Button")}
      buttonHandler={action("Button Click")}
    />
  );
};

export const SheetEmptyChangeImage: FunctionComponent = () => {
  return (
    <IEmptyState
      title={text("Title", "Phần title nhé, viết tối đa 2 dòng thôi nhé")}
      message={text(
        "Message",
        "Phần nội dung message nhé, viết tối đa 3 dòng thôi"
      )}
      backgroundColor={select(
        "Back ground Color",
        Themes.Color,
        Themes.Color.white6
      )}
      imgSource={{
        uri: text(
          "Image Url",
          "https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png"
        ),
      }}
      buttonTitle={text("Button Name", "Button")}
      buttonHandler={action("Button Click")}
    />
  );
};
