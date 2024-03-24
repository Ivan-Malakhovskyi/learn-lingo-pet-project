import { FC } from "react";
import {
  ListItemStats,
  ListStats,
  StatsBox,
  StatsNumberWrapper,
  StatsTextWrapper,
} from "./Stats.styled";

export const Stats: FC = () => {
  return (
    <>
      <StatsBox>
        <ListStats>
          <ListItemStats>
            <StatsNumberWrapper>32,000 +</StatsNumberWrapper>{" "}
            <StatsTextWrapper>Experienced tutors</StatsTextWrapper>
          </ListItemStats>
          <ListItemStats>
            <StatsNumberWrapper>300,000 +</StatsNumberWrapper>{" "}
            <StatsTextWrapper>5-star tutor reviews</StatsTextWrapper>
          </ListItemStats>
          <ListItemStats>
            <StatsNumberWrapper>120 +</StatsNumberWrapper>{" "}
            <StatsTextWrapper>Subjects taught</StatsTextWrapper>
          </ListItemStats>
          <ListItemStats>
            <StatsNumberWrapper>200 +</StatsNumberWrapper>{" "}
            <StatsTextWrapper>Tutor nationalities</StatsTextWrapper>
          </ListItemStats>
        </ListStats>
      </StatsBox>
    </>
  );
};
