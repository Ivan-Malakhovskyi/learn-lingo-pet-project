import styled from "styled-components";

export const ExperienceText = styled.p`
  color: ${({ theme: { colors } }) => colors.mainBlack};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 32px;
`;

export const ReviewerImg = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;

export const ReviewsList = styled.ul``;

export const ReviewsListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 32px;
  }
`;

export const ReviewsWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`;

export const RatingWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const BookTrialBtn = styled.button`
  display: block;
  color: ${({ theme: { colors } }) => colors.mainBlack};
  background-color: ${({ theme: { colors } }) => colors.mainYellow};
  padding: 16px 48px;
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
