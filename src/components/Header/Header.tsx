import { FC } from "react";
import { HeaderStyled, Nav, Wrapper } from "../Navigation/Navigation.styled";
import { Navigation } from "../Navigation/Navigation";

export const Header: FC = () => {
  return (
    <HeaderStyled>
      <Wrapper>
        <Nav>
          <Navigation />
        </Nav>
      </Wrapper>
    </HeaderStyled>
  );
};
