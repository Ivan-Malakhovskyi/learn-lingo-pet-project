import styled from "styled-components";

export const StatsBox = styled.div`
  max-width: 100%;
  border: 1.5px dashed ${({ theme: { colors } }) => colors.mainYellow};
  border-radius: 30px;
  padding: 40px 124px;
  margin-bottom: 32px;
`;

export const ListStats = styled.ul`
  display: flex;
  justify-content: space-between;

  align-items: center;

  @media screen and (max-width: 1023px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }
`;

export const ListItemStats = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const StatsNumberWrapper = styled.p`
  display: inline-flex;
  color: ${({ theme: { colors } }) => colors.mainBlack};
  font-size: 28px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -2%;
`;

export const StatsTextWrapper = styled.p`
  color: ${({ theme: { colors } }) => colors.addAccentBlack};
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -2%;
`;
