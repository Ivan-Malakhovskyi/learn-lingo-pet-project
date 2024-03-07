import { FC } from "react";
import {
  ExperienceText,
  RatingWrapper,
  ReviewerImg,
  ReviewsListItem,
  ReviewsWrapper,
} from "./AdditonalInfo.styled";

import { Label, MainText } from "../LabelsList/LabelList.styled";

import { AdditionalInfoProps } from "./AdditionalInfo.types";
import user from "/icons/profile-male.svg";
import star from "/icons/icon_star.svg";

export const AdditionalInfo: FC<AdditionalInfoProps> = ({
  experience,
  reviews,
}) => {
  return (
    <>
      <ExperienceText>{experience}</ExperienceText>
      <ul>
        {reviews.map(({ reviewer_name, reviewer_rating, comment }, idx) => (
          <ReviewsListItem key={idx}>
            <ReviewsWrapper>
              <div>
                <ReviewerImg src={user} alt={reviewer_name} />
              </div>
              <div>
                <Label>{reviewer_name}</Label>

                <RatingWrapper>
                  <img src={star} alt="icon_star" width={16} height={16} />{" "}
                  <span>{reviewer_rating}.0</span>
                </RatingWrapper>
              </div>
            </ReviewsWrapper>
            <MainText>{comment}</MainText>
          </ReviewsListItem>
        ))}
      </ul>
    </>
  );
};
