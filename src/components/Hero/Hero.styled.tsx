import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeroStyled = styled.div`
  margin-bottom: 24px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 1440px) {
    width: 1344px;
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const HeroTitle = styled.h2`
  color: ${({ theme }) => theme.primaryText};
  margin-bottom: 32px;
  font-size: 48px;
  font-weight: 500;
  line-height: 56px;
  letter-spacing: -2%;
`;

export const HeroTitleWrapper = styled.span`
  font-style: italic;
  font-weight: 400;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.secondary};
`;

export const HeroMainText = styled.p`
  color: ${({ theme }) => theme.primaryText};
  max-width: 471px;
  margin-bottom: 64px;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -2%;
`;

export const HeroBtn = styled(NavLink)`
  display: inline-block;
  color: ${({ theme }) => theme.primaryText};
  background-color: ${({ theme }) => theme.primary};
  padding: 16px 88px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0%;

  transition: background-color 250ms
    ${({ theme: { transitions } }) => transitions.cubic};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

export const HeroBenefits = styled.div`
  border-radius: 30px;
  background-color: ${({ theme }) => theme.secondaryGrey};

  padding: 24px 44px 24px 16px;

  @media screen and (min-width: 1200px) {
    padding: 98px 108px 98px 64px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    padding: 48px 98px 48px 32px;
  }
`;

export const HeroBgImg = styled.div`
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  width: 568px;
  height: 530px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.secondary};

  @media screen and (max-width: 1339px) {
    display: none;
  }
`;

export const GirlImg = styled.img`
  position: absolute;
  width: 339px;
  height: 339px;
  left: 114px;
  right: 115px;
  top: 80px;
  bottom: 111px;
`;

export const MacImg = styled.img.attrs(({ theme }) => ({
  src: theme.image,
  alt: "theme banner",
}))`
  position: absolute;
  top: 354px;
  left: 103.64px;
  width: 359.72px;
  height: 175px;

  /* height: 300px; */
`;
