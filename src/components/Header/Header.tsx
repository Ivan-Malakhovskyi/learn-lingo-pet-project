import { FC } from "react";
import { HeaderStyled, Nav } from "../Navigation/Navigation.styled";
import { Navigation } from "../Navigation/Navigation";

export const Header: FC = () => {
  return (
    <HeaderStyled>
      <Nav>
        <Navigation />
      </Nav>
    </HeaderStyled>
  );
};
