import { FC, useState } from "react";
import {
  LoginNavLink,
  IconWrapper,
  LogInNavLinkWrapper,
  LogoLink,
  Nav,
  StyledNavLink,
  RegisterNavLink,
  BtnRegister,
} from "../Header/Header.styled";
import { HeaderStyled, HomeLink } from "../Header/Header.styled";
import logo from "/icons/ukraine.svg";
import iconLogin from "/icons/log-in-01.svg";
import { Modal } from "../Global/Modal";
import { SigninForm } from "../SigninForm.tsx/SigninForm";

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
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
        <li>
          {" "}
          {/* <StyledNavLink to="/favorites">Favorites</StyledNavLink> */}
          <div style={{ display: "flex", alignItems: "center" }}>
            {" "}
            <LogInNavLinkWrapper>
              <LoginNavLink to="/signin">
                {" "}
                <IconWrapper>
                  <img
                    src={iconLogin}
                    width={20}
                    height={20}
                    alt="icon_login"
                  />{" "}
                </IconWrapper>
                Log in
              </LoginNavLink>
            </LogInNavLinkWrapper>
            <RegisterNavLink to="/signup">
              <BtnRegister type="button" onClick={handleToggle}>
                Registration
              </BtnRegister>
              {isOpen && (
                <Modal close={handleToggle}>
                  <SigninForm />
                </Modal>
              )}
            </RegisterNavLink>
          </div>
        </li>
      </Nav>
    </HeaderStyled>
  );
};
