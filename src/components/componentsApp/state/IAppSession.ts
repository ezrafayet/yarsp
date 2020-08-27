export type {IAppSession};
export type {TAppStatuses, TAppModes, TAppUserStatuses, TAppLanguages, TAppThemes}

type TAppStatuses = 'loading' | 'error' | 'forbidden' | 'loaded';
type TAppModes = 'local' | 'prototype' | 'demo' | 'production' | 'unknown';
type TAppUserStatuses = 'unidentified' | 'identified' | 'unknown';

type TAppLanguages = 'FR' | 'EN';
type TAppThemes = 'light' | 'dark';

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