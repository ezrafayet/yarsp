export type {IAppProps, IAppSession, IAppNavigation, IAppPanels,};

export type TAppStatuses = 'loading' | 'error' | 'forbidden' | 'loaded';
export type TAppModes = 'local' | 'prototype' | 'demo' | 'production' | 'unknown';
export type TAppUserStatuses = 'unidentified' | 'identified' | 'unknown';

export type TAppLanguages = 'FR' | 'EN';
export type TAppThemes = 'light' | 'dark';

export type TNotifications = "information" | "warning" | "error" | "success";

interface IAppSession {
  
  app: {
    mode: TAppModes;
    appStatus: TAppStatuses;
    userStatus: TAppUserStatuses;
  },
  
  parameters: {
    language: TAppLanguages;
    theme: TAppThemes;
  }
}

interface IAppNavigation {
  
  page: string;
  subPage: string;
  scrolled: boolean,
}

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
    notificationTimer: null,
  }
}

interface IAppProps {
}