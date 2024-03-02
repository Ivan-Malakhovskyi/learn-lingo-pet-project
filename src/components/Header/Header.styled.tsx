import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 15px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 30px;
  }
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
  transition: color 250ms ${({ theme: { transitions } }) => transitions.cubic};

  &.active {
    color: ${({ theme: { colors } }) => colors.mainYellow};
  }
`;

export const BtnRegister = styled.button`
  padding: 14px 39px;
  border-radius: 12px;
  border: none;
  background-color: ${({ theme: { colors } }) => colors.mainBlack};
  color: ${({ theme: { colors } }) => colors.mainWhite};
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
`;

export const ListBtnAuth = styled.ul`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-right: 14px;
`;

export const BtnSignin = styled.button`
  display: flex;
  color: ${({ theme: { colors } }) => colors.mainBlack};
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  border: none;
  background-color: transparent;
  outline: none;
  padding: 0;
  margin: 0;
`;
