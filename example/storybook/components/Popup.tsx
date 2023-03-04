import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import React, { FunctionComponent, useState } from "react";
import { BasePopup, Button } from "@phamquyen/rn-core-components";
import { ContainerView } from ".";

export const PopupPrimary: FunctionComponent = () => {
  const [show, setShow] = useState(false);
  return (
    <ContainerView>
      <Button name="Click me to show Popup" onPress={() => setShow(true)} />

      <BasePopup
        isVisible={show}
        onClose={() => setShow(false)}
        title={text("Popup Title", "Title hãy viết 1 dòng thôi nhé")}
        message={text(
          "Popup message",
          "Phần nội dung bạn hãy viết vào đây nhé, nhưng đừng viết dài quá nhé, viết tối đa tầm 4 dòng đủ hiểu để đọc thôi nhé"
        )}
        buttonCancelName={text("Button Cancel Name", "Từ chối")}
        onPressCancel={action("Handle Cancel", {
          allowFunction: true,
        })}
        buttonAcceptName={text("Button Accept Name", "Đồng ý")}
        onPressAccept={action("Handle Accept", {
          allowFunction: true,
        })}
        image={{
          uri: text(
            "Image Url",
            "https://janbox.com/blog/wp-content/uploads/2021/10/Tai-app-janbox-nhan-ngay-300-yen-vao-vi-mua-sam-thoa-thich.png"
          ),
        }}
      />
    </ContainerView>
  );
};

export const PopupSecondary: FunctionComponent = () => {
  const [show, setShow] = useState(false);
  return (
    <ContainerView>
      <Button name="Click me to Entertainment" onPress={() => setShow(true)} />
      <BasePopup
        isVisible={show}
        onClose={() => setShow(false)}
        imageBackground={{
          uri: text(
            "Image Url",
            "https://pbs.twimg.com/media/FQYG-fXVQAIslhN.png"
          ),
        }}
        buttonAcceptName={text("Button Accept Name", "Đồng ý")}
        onPressAccept={action("Handle Accept", {
          allowFunction: true,
        })}
      />
    </ContainerView>
  );
};
