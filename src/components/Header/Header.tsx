import { FC } from "react";
import { HeaderStyled, Nav, Wrapper } from "../Navigation/Navigation.styled";
import { Navigation } from "../Navigation/Navigation";

export const Header: FC = () => {
  return (
    <HeaderStyled>
      <Nav>
        <Wrapper>
          <Navigation />
        </Wrapper>
      </Nav>
    </HeaderStyled>
  );
};
