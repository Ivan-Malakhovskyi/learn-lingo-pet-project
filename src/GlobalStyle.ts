import { createGlobalStyle } from "styled-components";

import girl from "/images/stiker_girl.png";
import sage_1 from "/images/sage_1.png";
import sage_2 from "/images/sage_2.png";
import mac_yellow from "/images/mac_yellow_short.png";
import mac_sage from "/images/mac_sage.png";
import mac_blue from "/images/mac_blue.png";
import mac_peach from "/images/mac_peach.png";
import mac_red from "/images/mac_red.png";
import iconLogin from "/icons/log-in-01.svg";
import iconLoginSage from "/icons/login_sage.svg";

export const themeVariants = {
  yellow: {
    primary: "#F4C550",
    secondary: "#FBE9BA",
    primaryImg: girl,
    secondaryImg: mac_yellow,
    addImg: "",
    icon: iconLogin,
  },
  sage: {
    primary: "#9FBAAE",
    secondary: "#CBDED3",
    primaryImg: girl,
    secondaryImg: mac_sage,
    addImg: "",
    icon: iconLogin,
  },
  blue: {
    primary: "#9FB7CE",
    secondary: "#BFD6EA",
    primaryImg: girl,
    secondaryImg: mac_blue,
    addImg: "",
    icon: iconLogin,
  },
  rose: {
    primary: "#E0A39A",
    secondary: "#F2C0BD",
    primaryImg: girl,
    secondaryImg: mac_peach,
    addImg: "",
    icon: iconLogin,
  },
  peach: {
    primary: "#F0AA8D",
    secondary: "#F4C8BA",
    primaryImg: girl,
    secondaryImg: mac_red,
    addImg: "",
    icon: iconLogin,
  },
  gray: {
    primary: "#8A8A89",
    secondary: "#c3c3bc",
    primaryImg: sage_1,
    secondaryImg: sage_2,
    addImg: "",
    image: "",
    icon: iconLoginSage,
  },
};

export const commonColors = {
  primaryBackground: "#EEEEEE",
  secondaryBackground: "#FFFFFF",

  primaryText: "#121417",
  secondaryText: "#121417B3",

  primaryWhite: "#FFFFFF",
  secondaryWhite: "#F7F7FB",

  primaryGrey: "#8A8A89",
  secondaryGrey: "#F8F8F8",
  tertiaryGrey: "#F6F7FB",

  primaryRed: "#EF5050",
  primaryGreen: "#38CD3E",

  blackOverlay: "rgba(0, 0, 0, 0.8)",
  blackTransparent: "rgba(18, 20, 23, 0.1)",
  blackSubtle: "rgba(18, 20, 23, 0.05)",
  transitions: {
    cubic: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
};

export const theme = {
  transitions: {
    cubic: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
};

export const GlobalStyle = createGlobalStyle`

html {
  scroll-behavior: smooth;
}

body {
font-family: 'Roboto', sans-serif;
line-height: 1.5;
 background-color: ${({ theme }) => theme.secondaryBackground};
}

h1,
h2, 
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
li,
ol {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a {
    text-decoration: none;
       cursor: pointer;
}

button {
    font-family: inherit;
    cursor: pointer;
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
    background-color: transparent;
}

`;
