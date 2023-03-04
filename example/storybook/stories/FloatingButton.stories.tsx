import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { IFloatingButton } from "rnc-components";
import { ContainerView } from "../components";

const List: Array<any> = [
  {
    key: 1,
    title: "Estimated Price",
    image:
      "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914__340.png",
    onPress: () => {},
  },
  {
    key: 2,
    title: "Messenger",
    image:
      "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914__340.png",
    onPress: () => {},
  },
];

storiesOf("Floating Button", module).add("Primary", () => (
  <ContainerView>
    <IFloatingButton
      ListSupport={List}
      floatingImage={{
        uri: text(
          "Floating button Img",
          "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914__340.png"
        ),
      }}
    />
  </ContainerView>
));
