import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import React, { FunctionComponent, useState } from "react";
import { BaseDialog, Button } from "@phamquyen/rn-core-components";
import { ContainerView } from ".";

export const DialogPrimary: FunctionComponent = () => {
  const [show, setShow] = useState(false);
  return (
    <ContainerView>
      <Button name="Click me to show Popup" onPress={() => setShow(true)} />

      <BaseDialog
        isVisible={show}
        onClose={() => setShow(false)}
        title={text(
          "Popup Title",
          "Phần Title, viết tối đa tầm 2 dòng đủ hiểu để đọc thôi nhé"
        )}
        message={text(
          "Popup message",
          "Phần nội dung bạn hãy viết vào đây nhé, viết tối đa tầm 2 dòng đủ hiểu để đọc thôi nhé"
        )}
        buttonCancelName={text("Button Cancel Name", "Từ chối")}
        onPressCancel={action("Handle Cancel", {
          allowFunction: true,
        })}
        buttonAcceptName={text("Button Accept Name", "Đồng ý")}
        onPressAccept={action("Handle Accept", {
          allowFunction: true,
        })}
      />
    </ContainerView>
  );
};
