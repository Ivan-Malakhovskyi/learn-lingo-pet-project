import styled from "styled-components";

export const Hero = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
`;

export const HeroBenefits = styled.div`
  max-width: 720px;
  height: 100%;
  padding: 98px 108px 98px 64px;
  max-height: 530px;
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
