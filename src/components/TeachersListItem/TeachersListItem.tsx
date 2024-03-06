import {
  ActiveImg,
  ContentWrapper,
  Heading,
  HeartIcon,
  InfoWrapper,
  Label,
  LanguageLabel,
  ListItem,
  ListLabels,
  ListRating,
  MainText,
  TeacherImageWrapper,
  TeacherImg,
  ReadMoreBtn,
  UnderlineText,
  LessonInfoWrapper,
} from "./TeachersListItem.styled";
import {
  ListItemRating,
  RatingText,
} from "../TeacherLevelList/TeacherLevelList.styled";
import { useState } from "react";
import { AdditionalInfo } from "../AdditionalInfo/AdditionalInfo";
import { TeacherLevelList } from "../TeacherLevelList/TeacherLevelList";

import activeStatus from "/icons/active_status.svg";
import heart from "/icons/heart.svg";
import book from "/icons/book-open-01.svg";
import star from "/icons/icon_star.svg";
import { BookTrialBtn } from "../AdditionalInfo/AdditonalInfo.styled";

export const TeachersListItem = ({ teacher }) => {
  const [showInfo, setShowInfo] = useState(false);

  const {
    id,
    avatar_url,
    name,
    surname,
    languages,
    lesson_info,
    lessons_done,
    conditions,
    levels,
    experience,
    reviews,
  } = teacher;

  const handleClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <ListItem key={id}>
      <TeacherImageWrapper>
        <TeacherImg src={avatar_url} width={96} height={96} alt={surname} />
        <ActiveImg>
          <img src={activeStatus} alt="" />
        </ActiveImg>
      </TeacherImageWrapper>
      <ContentWrapper>
        <div>
          <InfoWrapper>
            <div>
              <LanguageLabel>Languages</LanguageLabel>
              <Heading>
                {name} {surname}
              </Heading>
            </div>
            <LessonInfoWrapper>
              <ListRating>
                <ListItemRating>
                  <span>
                    {" "}
                    <img src={book} alt="book_icon" />
                  </span>
                  <RatingText>
                    Lessons online <span></span>
                  </RatingText>
                </ListItemRating>
                <ListItemRating>
                  <RatingText>
                    Lessons done: <span>{lessons_done}</span>
                  </RatingText>
                </ListItemRating>
                <ListItemRating>
                  <span>
                    <img src={star} alt="icon_star" />
                  </span>
                  <RatingText>Rating: 4.8</RatingText>
                </ListItemRating>
                <ListItemRating>
                  <RatingText>Price / 1 hour: 30$</RatingText>
                </ListItemRating>{" "}
              </ListRating>
              <HeartIcon>
                <img src={heart} alt="" />
              </HeartIcon>
            </LessonInfoWrapper>
          </InfoWrapper>

          <ListLabels>
            <li>
              {" "}
              <Label>
                Speaks: <UnderlineText>{languages.join(", ")}</UnderlineText>
              </Label>
            </li>
            <li>
              {" "}
              <Label>
                Lesson Info: <MainText>{lesson_info}</MainText>
              </Label>
            </li>
            <li>
              {" "}
              <Label>
                Conditions: <MainText>{conditions}</MainText>
              </Label>
            </li>
          </ListLabels>

          {!showInfo && (
            <ReadMoreBtn onClick={handleClick}>Read more</ReadMoreBtn>
          )}

          {showInfo && (
            <AdditionalInfo experience={experience} reviews={reviews} />
          )}

          <TeacherLevelList levels={levels} />

          {showInfo && (
            <BookTrialBtn type="button">Book trial lesson</BookTrialBtn>
          )}
        </div>
      </ContentWrapper>
    </ListItem>
  );
};
