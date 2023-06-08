import "@emotion/react";

declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme {
    colors: {
      primary100: string;
      primary300: string;
      primary500: string;
      backgroundColor: string;
    };
  }
}
