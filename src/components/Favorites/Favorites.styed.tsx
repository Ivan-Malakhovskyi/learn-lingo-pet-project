import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`;

export const Paragraph = styled.p`
  color: ${({ theme: { colors } }) => colors.mainBlack};
  font-size: 24px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
`;

export const StyledLink = styled(NavLink)`
  color: ${({ theme: { colors } }) => colors.mainBlack};
  background-color: ${({ theme: { colors } }) => colors.mainYellow};
  padding: 16px 40px;
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
