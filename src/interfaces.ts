export interface User {
  id: string;
  password: string;
  username: string;
}

export interface IThemeInterface {
  theme: { body: string; text: string };
}

export enum Theme {
  DARK,
  LIGHT,
}
