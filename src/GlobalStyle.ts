import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    rootBodyColor: "rgb(238, 238, 238)",
    addBodyColor: "#ffffff",
    mainBlack: "#121417",
    accentBlack: "rgba(18, 20, 23, 0.1)",
    mainBgBlack: "rgba(0, 0, 0, 0.8)",
    mainWhite: "rgb(255, 255, 255)",
    mainGrey: "#8A8A89",
    accentGrey: "#F8F8F8",
    mainYellow: "#F4C550",
    accentYellow: "#FBE9BA",
    mainRed: "#EF5050",
  },
  transitions: {
    cubic: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
};

export const GlobalStyle = createGlobalStyle`

body {
font-family: 'Roboto', sans-serif;
line-height: 1.5;
 background-color: ${({ theme: { colors } }) => colors.addBodyColor};
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
}

`;
