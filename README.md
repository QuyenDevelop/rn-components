# @phamquyen/rn-core-components

Basic some regular compoents in usually using in proeject

## Installation

```
npm install @phamquyen/rn-core-components
```

hoặc

```
yarn add @phamquyen/rn-core-components
```

## Usage

```js
// ---- using Tab Component ------
import {
  ITabView,
  ITabBarItem,
  ITabItemProps,
  TabModel,
} from "@phamquyen/rn-core-components";

// ...
const App = (second) => {
  const [index, setIndex] = React.useState < number > 0;
  const routes: Array<TabModel> = [];

  const renderTabIcon = (props: ITabItemProps) => {
    return <ITabBarItem {...props} />;
  };

  const renderScene = React.useCallback(({ tab }: { tab: TabModel }) => {
    switch (tab.key) {
      case "Button":
        return <ButtonTab />;
      default:
        return <></>;
    }
  }, []);

  return (
    <ITabView
      onIndexChange={setIndex}
      renderScene={renderScene}
      navigationState={{ index, routes }}
      renderTabIcon={renderTabIcon} // ---- custom ItemTabbar
      // disableSwipe       // ----- disable Swipe tab
      isFixed // ----- styles Fixed tabbar
    />
  );
};
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
