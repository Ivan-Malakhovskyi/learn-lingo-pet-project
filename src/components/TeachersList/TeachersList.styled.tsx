import styled from "styled-components";

export const TeachersListWrapper = styled.div`
  margin-top: 32px;
`;

export const LoadMoreBtn = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 64px;
  padding: 16px 48px;
  border-radius: 12px;
  color: ${({ theme: { colors } }) => colors.mainBlack};
  background: ${({ theme: { colors } }) => colors.mainYellow};
  transition: background-color 250ms
    ${({ theme: { transitions } }) => transitions.cubic};

  &:hover,
  &:focus {
    background-color: ${({ theme: { colors } }) => colors.accentYellow};
  }

  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0%;
`;

export const EmptyTopic = styled.h3`
  text-align: center;
  color: rgb(18, 20, 23);
  font-family: Roboto;
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
`;
