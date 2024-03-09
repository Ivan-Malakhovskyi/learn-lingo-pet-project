import { FC } from "react";

import { Container } from "../layout/SharedLayout.styled";
import { HeaderStyled, Nav } from "../Navigation/Navigation.styled";
import { Navigation } from "../Navigation/Navigation";

export const Header: FC = () => {
  return (
    <Container>
      <HeaderStyled>
        <Nav>
          <Navigation />
        </Nav>
      </HeaderStyled>
    </Container>
  );
};
