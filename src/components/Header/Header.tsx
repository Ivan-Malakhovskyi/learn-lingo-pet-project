import { FC, useState } from "react";
import {
  IconWrapper,
  LogoLink,
  Nav,
  StyledNavLink,
  BtnRegister,
  ListBtnAuth,
  BtnSignin,
} from "../Header/Header.styled";
import { HeaderStyled, HomeLink } from "../Header/Header.styled";
import logo from "/icons/ukraine_blue_yellow.svg";
import iconLogin from "/icons/log-in-01.svg";
import { Modal } from "../Global/Modal";
import { SignIn } from "../pages/SignIn/SignIn";
import { SignUp } from "../pages/SignUp.tsx/SignUp";
import { Container } from "../layout/SharedLayout.styled";

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState({
    signIn: false,
    signUp: false,
  });

  const handleToggle = (key) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <Container>
      {" "}
      <HeaderStyled>
        <Nav>
          <li>
            <LogoLink to="/">
              {" "}
              <IconWrapper>
                <img src={logo} width={28} height={28} alt="logo_ukraine" />{" "}
              </IconWrapper>
              Learn Lingo
            </LogoLink>
          </li>
          <li>
            <HomeLink>
              <StyledNavLink to="/">Home</StyledNavLink>
            </HomeLink>
            <StyledNavLink to="/teachers">Teachers</StyledNavLink>
          </li>

          {/* <StyledNavLink to="/favorites">Favorites</StyledNavLink> */}
          <ListBtnAuth>
            <li>
              <BtnSignin onClick={() => handleToggle("signIn")}>
                <IconWrapper>
                  <img
                    src={iconLogin}
                    width={20}
                    height={20}
                    alt="icon_login"
                  />{" "}
                </IconWrapper>
                Log in
              </BtnSignin>

              {isOpen.signIn && (
                <Modal close={() => handleToggle("signIn")}>
                  <SignIn />
                </Modal>
              )}
            </li>

            <li>
              {" "}
              <BtnRegister type="button" onClick={() => handleToggle("signUp")}>
                Registration
              </BtnRegister>
            </li>
            {isOpen.signUp && (
              <Modal close={() => handleToggle("signUp")}>
                <SignUp />
              </Modal>
            )}
          </ListBtnAuth>
        </Nav>
      </HeaderStyled>
    </Container>
  );
};
