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

export const ActiveImg = styled.img`
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
`;

export const TeachersRating = styled.div`
  display: flex;
  justify-content: center;
  /* justify-content: ; */
`;

export const HeartIcon = styled.img`
  width: 26px;
  height: 26px;
  position: absolute;
  top: 24px;
  right: 24px;
`;

export const TeacherInfoWrapper = styled.div`
  margin-right: 150px;
`;

export const ListRating = styled.ul`
  display: flex;
  align-items: flex-start;
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

export const RatingText = styled.p``;
