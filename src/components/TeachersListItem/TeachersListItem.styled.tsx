import styled from "styled-components";

export const TeacherImg = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 100px;
`;

export const TeacherImageWrapper = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid rgb(251, 233, 186);
  border-radius: 100px;
  background: rgb(255, 255, 255);
`;

export const ActiveImg = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  left: 85px;
  right: 23px;
  top: 19px;
  bottom: 89px;
`;

export const ListItem = styled.li`
  display: flex;
  position: relative;
  gap: 48px;
  max-width: 1184px;
  border-radius: 24px;
  background-color: ${({ theme: { colors } }) => colors.mainWhite};
  padding: 24px;
  &:not(:last-child) {
    margin-bottom: 32px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.p`
  color: ${({ theme: { colors } }) => colors.mainGrey};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
`;

export const LanguageLabel = styled.p`
  color: ${({ theme: { colors } }) => colors.mainGrey};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  margin-bottom: 8px;
`;

export const Heading = styled.h3`
  color: ${({ theme: { colors } }) => colors.mainBlack};
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  margin-bottom: 32px;
`;

export const MainText = styled.span`
  color: ${({ theme: { colors } }) => colors.mainBlack};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
`;

export const UnderLineText = styled.span`
  color: ${({ theme: { colors } }) => colors.mainBlack};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  text-decoration: underline;
`;

export const ListLabels = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;

export const TeachersRating = styled.div`
  display: flex;
  justify-content: center;
`;

export const HeartIcon = styled.div`
  width: 26px;
  height: 26px;
  position: absolute;
  top: 24px;
  right: 24px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ListRating = styled.ul`
  display: flex;
  align-items: center;
  align-self: flex-start;
  gap: 16px;
`;

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

export const LevelList = styled.ul`
  display: flex;
  gap: 8px;
  margin-top: 32px;

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
