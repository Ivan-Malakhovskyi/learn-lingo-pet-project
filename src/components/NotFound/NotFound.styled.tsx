import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NotFoundWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export const Topic = styled.p`
  color: ${({ theme: { colors } }) => colors.mainBlack};
  font-size: 20px;
  font-weight: 500;
  line-height: 48px;
`;

export const HomeLink = styled(NavLink)`
  display: block;
  padding: 16px 48px;
  margin-bottom: 40px;
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
