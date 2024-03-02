import styled from "styled-components";

export const HeroContainer = styled.div`
  margin-bottom: 24px;
  @media screen and (min-width: 1440px) {
    /* width: 1340px; */
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const HeroTitle = styled.h2`
  color: ${({ theme: { colors } }) => colors.mainBlack};
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
  background-color: ${({ theme: { colors } }) => colors.accentYellow};
`;

export const HeroMainText = styled.p`
  color: ${({ theme: { colors } }) => colors.mainBlack};
  margin-bottom: 64px;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -2%;
`;

export const HeroBtn = styled.button`
  color: ${({ theme: { colors } }) => colors.mainBlack};
  background-color: ${({ theme: { colors } }) => colors.mainYellow};
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
    background-color: ${({ theme: { colors } }) => colors.accentYellow};
  }
`;

export const HeroBenefits = styled.div`
  padding: 98px 108px 98px 64px;
  border-radius: 30px;
  background-color: ${({ theme: { colors } }) => colors.accentGrey};
`;

export const HeroBgImg = styled.div`
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  width: 568px;
  height: 530px;
  border-radius: 30px;
  background-color: ${({ theme: { colors } }) => colors.accentYellow};

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

export const MacImg = styled.img`
  position: absolute;
  top: 354px;
  left: 103.64px;
  width: 359.72px;
  height: 300px;
`;
