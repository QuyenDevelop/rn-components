import {
  Dimensions,
  PixelRatio,
  Platform,
  PlatformIOSStatic,
  StatusBar,
} from "react-native";

const { width: WIDTH_SCREEN, height: HEIGHT_SCREEN } = Dimensions.get("screen");

const STATUSBAR_DEFAULT_HEIGHT = 20;
const STATUSBAR_X_HEIGHT = 44;
const STATUSBAR_IP12_HEIGHT = 47;
const STATUSBAR_IP12MAX_HEIGHT = 47;
const STATUSBAR_IP14PRO_HEIGHT = 54;

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const IP12_WIDTH = 390;
const IP12_HEIGHT = 844;

const IP12MAX_WIDTH = 428;
const IP12MAX_HEIGHT = 926;

const IP14PRO_WIDTH = 393;
const IP14PRO_HEIGHT = 852;

const IP14PROMAX_WIDTH = 430;
const IP14PROMAX_HEIGHT = 932;

const { height, width } = Dimensions.get("window");

const isIphoneX = () => {
  const dimension = Dimensions.get("window");
  return (
    Platform.OS === "ios" &&
    !Platform.isPad &&
    !Platform.isTV &&
    (dimension.height === 780 ||
      dimension.width === 780 ||
      dimension.height === 812 ||
      dimension.width === 812 ||
      dimension.height === 844 ||
      dimension.width === 844 ||
      dimension.height === 896 ||
      dimension.width === 896 ||
      dimension.height === 926 ||
      dimension.width === 926)
  );
};

const getBarHeight = () => {
  let statusBarHeight = STATUSBAR_DEFAULT_HEIGHT;

  const W_HEIGHT = height > width ? height : width;
  const W_WIDTH = height > width ? width : height;

  if (Platform.OS === "ios" && !Platform.isPad && !Platform.isTV) {
    if (W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT) {
      statusBarHeight = STATUSBAR_X_HEIGHT;
    } else if (W_WIDTH === XSMAX_WIDTH && W_HEIGHT === XSMAX_HEIGHT) {
      statusBarHeight = STATUSBAR_X_HEIGHT;
    } else if (W_WIDTH === IP12_WIDTH && W_HEIGHT === IP12_HEIGHT) {
      statusBarHeight = STATUSBAR_IP12_HEIGHT;
    } else if (W_WIDTH === IP12MAX_WIDTH && W_HEIGHT === IP12MAX_HEIGHT) {
      statusBarHeight = STATUSBAR_IP12MAX_HEIGHT;
    } else if (W_WIDTH === IP14PROMAX_WIDTH && W_HEIGHT === IP14PROMAX_HEIGHT) {
      statusBarHeight = STATUSBAR_IP14PRO_HEIGHT;
    } else if (W_WIDTH === IP14PRO_WIDTH && W_HEIGHT === IP14PRO_HEIGHT) {
      statusBarHeight = STATUSBAR_IP14PRO_HEIGHT;
    }
  }

  return statusBarHeight;
};

export const ScreenUtils = {
  isPad() {
    if (Platform.OS === "ios") {
      const platformIOS = Platform as PlatformIOSStatic;
      return platformIOS.isPad;
    }
    return false;
  },
  // calculatorWidth(width: number) {
  //   return PixelRatio.roundToNearestPixel((WIDTH_SCREEN * width) / 375);
  // },
  // calculatorHeight(height: number) {
  //   return PixelRatio.roundToNearestPixel((HEIGHT_SCREEN * height) / 812);
  // },
  getStatusBarHeight(skipAndroid: boolean = false) {
    return Platform.select({
      ios: getBarHeight(),
      android: skipAndroid ? 0 : StatusBar.currentHeight,
      default: 0,
    });
  },

  WIDTH_SCREEN: WIDTH_SCREEN,
  HEIGHT_SCREEN: HEIGHT_SCREEN,

  scale(value: number) {
    const standardHeight = width > height ? width : height;

    const offset =
      width > height
        ? 0
        : Platform.OS === "ios"
        ? getBarHeight()
        : StatusBar.currentHeight || 0; // iPhone X style SafeAreaView size in portrait

    const deviceHeight =
      isIphoneX() || Platform.OS === "android"
        ? standardHeight - offset
        : standardHeight;

    /**
     * lấy tỷ lệ màn hình chuẩn là Iphone 8
     */
    const heightPercent = value * (deviceHeight / 667);
    return PixelRatio.roundToNearestPixel(heightPercent);
  },
};
