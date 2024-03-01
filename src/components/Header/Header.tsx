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
import logo from "/icons/ukraine.svg";
import iconLogin from "/icons/log-in-01.svg";
import { Modal } from "../Global/Modal";
import { SignIn } from "../pages/SignIn/SignIn";
import { SignUp } from "../pages/SignUp.tsx/SignUp";

export const Header: FC = () => {
  const [isOpenSignIn, setIsOpenSignIn] = useState(false);
  const [isOpenSignUp, setIsOpenSignUp] = useState(false);

  const handleToggleSignIn = () => {
    setIsOpenSignIn(!isOpenSignIn);
  };

  const handleToggleSignUp = () => {
    setIsOpenSignUp(!isOpenSignUp);
  };

  return (
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
            <BtnSignin onClick={handleToggleSignIn}>
              <IconWrapper>
                <img src={iconLogin} width={20} height={20} alt="icon_login" />{" "}
              </IconWrapper>
              Log in
            </BtnSignin>

            {isOpenSignIn && (
              <Modal close={handleToggleSignIn}>
                <SignIn />
              </Modal>
            )}
          </li>

          <li>
            {" "}
            <BtnRegister type="button" onClick={handleToggleSignUp}>
              Registration
            </BtnRegister>
          </li>
          {isOpenSignUp && (
            <Modal close={handleToggleSignUp}>
              <SignUp />
            </Modal>
          )}
        </ListBtnAuth>
      </Nav>
    </HeaderStyled>
  );
};
