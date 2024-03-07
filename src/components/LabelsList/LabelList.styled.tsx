import styled from "styled-components";

export const LabelList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;

  @media screen and (max-width: 1339px) {
    flex-wrap: wrap;
  }
`;

export const Label = styled.p`
  color: ${({ theme: { colors } }) => colors.mainGrey};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
`;

export const MainText = styled.span`
  color: ${({ theme: { colors } }) => colors.mainBlack};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
`;

export const UnderlineText = styled.span`
  color: ${({ theme: { colors } }) => colors.mainBlack};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  text-decoration: underline;
`;
