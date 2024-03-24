import styled from "styled-components";

export const StatsBox = styled.div`
  border: 1.5px dashed ${({ theme: { colors } }) => colors.mainYellow};
  border-radius: 30px;
  padding: 40px 124px;
  margin-bottom: 32px;

  @media (width >= 1440px) {
    max-width: 1300px;
  }
`;

export const ListStats = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (width <= 1339px) {
    flex-wrap: wrap;

    gap: 10px;
  }

  @media (width <= 767px) {
    justify-content: center;
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
