import {
  ActiveImg,
  ContentWrapper,
  Heading,
  HeartIcon,
  InfoWrapper,
  Label,
  LanguageLabel,
  LevelList,
  LevelListItem,
  LevelText,
  ListItem,
  ListItemRating,
  ListLabels,
  ListRating,
  MainText,
  RatingText,
  TeacherImageWrapper,
  TeacherImg,
  TeachersRating,
  UnderLineText,
} from "./TeachersListItem.styled";
import activeStatus from "/icons/active_status.svg";
import heart from "/icons/heart.svg";
import book from "/icons/book-open-01.svg";
import star from "/icons/icon_star.svg";
import { FC } from "react";

export const TeachersListItem: FC = ({ teacher }) => {
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
  } = teacher;

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
            <div>
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
                </ListItemRating>
              </ListRating>
            </div>
          </InfoWrapper>

          <ListLabels>
            <li>
              {" "}
              <Label>
                Speaks: <UnderLineText>{languages.join(", ")}</UnderLineText>
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
          <UnderLineText>Read more</UnderLineText>

          <LevelList>
            {levels.map((level) => (
              <LevelListItem>
                <LevelText>#{level}</LevelText>
              </LevelListItem>
            ))}
          </LevelList>
        </div>
        <TeachersRating>
          <HeartIcon>
            <img src={heart} alt="" />
          </HeartIcon>
        </TeachersRating>
      </ContentWrapper>
    </ListItem>
  );
};
