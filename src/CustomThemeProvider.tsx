import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { selectTheme } from "./redux/theme/selectors";
import { commonColors, themeVariants } from "./GlobalStyle";

export const CustomThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const currentTheme = useSelector(selectTheme);

  const themes = {
    ...commonColors,
    ...themeVariants[currentTheme],
  };

  return <ThemeProvider theme={themes}>{children}</ThemeProvider>;
};
