import styled from "styled-components";

export const TeacherImg = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 100px;
`;

export const TeacherImageWrapper = styled.div`
  flex-shrink: 0;
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

  @media screen and (max-width: 1339px) {
    flex-wrap: wrap;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;

  @media screen and (max-width: 1339px) {
    flex-wrap: wrap;
  }
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

export const ReadMoreBtn = styled.button`
  display: block;
  margin-bottom: 16px;
  color: ${({ theme: { colors } }) => colors.mainBlack};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  text-decoration: underline;
`;

export const TeachersRating = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1339px) {
    flex-wrap: wrap;
  }
`;

export const HeartIcon = styled.button`
  width: 26px;
  height: 26px;
  margin-left: 64px;

  &:hover,
  &:focus {
    transform: scale(0.9);
  }
  transform: scale(0.7);
  transition: all 250ms ${({ theme: { transitions } }) => transitions.cubic};

  @media screen and (max-width: 1339px) {
    position: absolute;
    top: 24px;
    right: 24px;
  }
`;

export const LessonInfoWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 1339px) {
    flex-wrap: wrap;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1339px) {
    flex-wrap: wrap;
  }
`;

export const ListRating = styled.ul`
  display: flex;
  align-items: center;
  align-self: flex-start;
  gap: 16px;

  @media screen and (max-width: 1339px) {
    flex-wrap: wrap;
  }
`;
