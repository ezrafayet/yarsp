export type {IAppPanels};
export type TNotifications = "information" | "warning" | "error" | "success";

interface IAppPanels {
  
  window: {
    
    isWindowVisible: boolean,
    isWindowClosing: boolean,
    windowOptions: {
      type: '',
      data: {},
    },
  },
  
  menuFromBottom: {
    
    isMenuFromBottomVisible: boolean,
    isMenuFromBottomClosing: boolean,
    menuFromBottomOptions: {
      type: '',
      data: {},
    },
  },
  
  cookies: {
    
    isWindowCookiesVisible: boolean,
  },
  
  notifications: {
    
    isWindowNotificationVisible: boolean,
    notificationText: string,
    notificationType: TNotifications,
    notificationTimer: null | any,
  }
}