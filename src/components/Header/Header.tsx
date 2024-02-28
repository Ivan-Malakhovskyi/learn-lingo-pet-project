import {
  LoginNavLink,
  IconWrapper,
  LogInNavLinkWrapper,
  LogoLink,
  Nav,
  StyledNavLink,
  RegisterNavLink,
} from "../layout/SharedLayout.styled";
import { HeaderStyled, HomeLink } from "../layout/SharedLayout.styled";
import logo from "/icons/ukraine.svg";
import iconLogin from "/icons/log-in-01.svg";

export const Header = () => {
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
        <li
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {" "}
          {/* <StyledNavLink to="/favorites">Favorites</StyledNavLink> */}
          <LogInNavLinkWrapper>
            <LoginNavLink to="/login">
              {" "}
              <IconWrapper>
                <img src={iconLogin} width={20} height={20} alt="icon_login" />{" "}
              </IconWrapper>
              Log in
            </LoginNavLink>
          </LogInNavLinkWrapper>
          <RegisterNavLink to="/registration">Registration</RegisterNavLink>
        </li>
      </Nav>
    </HeaderStyled>
  );
};
