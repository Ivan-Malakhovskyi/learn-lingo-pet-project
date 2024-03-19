import styled from "styled-components";

export const ListItemRating = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child)::after {
    content: "";
    width: 1px;
    height: 16px;
    background-color: ${({ theme: { colors } }) => colors.mainGrey};
    margin-left: 16px;
  }
`;

export const RatingText = styled.p`
  margin-left: 4px;
`;

export const Price = styled.span`
  color: ${({ theme: { colors } }) => colors.mainGreen};
`;

export const LevelList = styled.ul`
  display: flex;
  gap: 8px;
  margin: 32px 0;

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

export const LevelListItem = styled.li`
  padding: 8px 12px;
  border-radius: 35px;
  &:first-child {
    background-color: ${({ theme: { colors } }) => colors.mainYellow};
    border: none;
  }
  border: 1px solid ${({ theme: { colors } }) => colors.accentBlack};
  background-color: transparent;

  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0%;
`;

export const LevelText = styled.p`
  color: ${({ theme: { colors } }) => colors.mainBlack};
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
`;
