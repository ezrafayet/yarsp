import {IAppPanels} from "./IAppPanel";

export {initialPanels};

const initialPanels: IAppPanels = {
  window: {
    isWindowVisible: false,
    isWindowClosing: false,
    windowOptions: {
      type: '',
      data: {},
    },
  },
  menuFromBottom: {
    isMenuFromBottomVisible: false,
    isMenuFromBottomClosing: false,
    menuFromBottomOptions: {
      type: '',
      data: {},
    },
  },
  cookies: {
    isWindowCookiesVisible: false,
  },
  notifications: {
    isWindowNotificationVisible: false,
    notificationText: "",
    notificationType: "information",
    notificationTimer: null,
  }
}