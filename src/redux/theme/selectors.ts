import { TTheme } from "src/types";

export const selectTheme = (state: { theme: TTheme }) =>
  state.theme.currentTheme;
