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
            <StatsNumberWrapper>32,000 +</StatsNumberWrapper>{" "}
            <StatsTextWrapper>Experienced tutors</StatsTextWrapper>
          </ListItemStats>
          <ListItemStats>
            <StatsNumberWrapper>32,000 +</StatsNumberWrapper>{" "}
            <StatsTextWrapper>Experienced tutors</StatsTextWrapper>
          </ListItemStats>
          <ListItemStats>
            <StatsNumberWrapper>32,000 +</StatsNumberWrapper>{" "}
            <StatsTextWrapper>Experienced tutors</StatsTextWrapper>
          </ListItemStats>
        </ListStats>
      </StatsBox>
    </>
  );
};
