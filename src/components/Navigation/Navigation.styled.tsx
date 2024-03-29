import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 1440px) {
    width: 1216px;
  }
`;

export const HeaderWrapper = styled.ul`
  display: flex;
  width: 100%;
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

  padding: 0 15px;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
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

  &:hover,
  &:focus {
    color: ${({ theme: { colors } }) => colors.mainYellow};
  }
`;

export const LinkWapper = styled.span`
  margin-left: 28px;
`;

export const Btn = styled.button`
  padding: 14px 39px;
  border-radius: 12px;
  background-color: ${({ theme: { colors } }) => colors.mainBlack};
  color: ${({ theme: { colors } }) => colors.mainWhite};
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;

  transition: background-color 250ms
    ${({ theme: { transitions } }) => transitions.cubic};

  &:hover,
  &:focus {
    background-color: ${({ theme: { colors } }) => colors.mainBgBlack};
  }
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
`;

export const Topic = styled.p`
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
`;
