import styled from "styled-components";

export const Topic = styled.h2`
  margin-bottom: 20px;
  color: ${({ theme: { colors } }) => colors.mainBlack};
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
`;

export const Paragraph = styled.p`
  margin-bottom: 20px;
  color: ${({ theme: { colors } }) => colors.mainBlack};
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
`;

export const List = styled.ul`
  display: flex;
  gap: 14px;
  margin-bottom: 40px;
`;

export const TeacherImg = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;

export const Title = styled.h3`
  color: ${({ theme: { colors } }) => colors.mainBlack};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const TopicEnglishInfo = styled.h4`
  margin-bottom: 21px;
  color: ${({ theme: { colors } }) => colors.mainBlack};
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
`;
