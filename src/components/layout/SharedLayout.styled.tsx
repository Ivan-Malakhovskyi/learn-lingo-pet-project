import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderStyled = styled.header`
  padding: 20px 0;
`;

export const IconWrapper = styled.span`
  margin-right: 8px;
`;

export const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${({ theme: { colors } }) => colors.mainBlack};
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -2%;
`;

export const HomeLink = styled.span`
  margin-right: 28px;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme: { colors } }) => colors.mainBlack};
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0%;
`;

export const LoginNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${({ theme: { colors } }) => colors.mainGrey};
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
`;

export const RegisterNavLink = styled(NavLink)`
  padding: 14px 39px;
  border-radius: 12px;
  background-color: ${({ theme: { colors } }) => colors.mainGrey};
  color: ${({ theme: { colors } }) => colors.mainWhite};
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
`;

export const LogInNavLinkWrapper = styled.div`
  margin-right: 14px;
`;
