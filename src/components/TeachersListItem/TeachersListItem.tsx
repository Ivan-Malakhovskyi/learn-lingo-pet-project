import {
  ActiveImg,
  ContentWrapper,
  HeartIcon,
  ListItem,
  ListItemRating,
  ListRating,
  RatingText,
  TeacherImageWrapper,
  TeacherImg,
  TeacherInfoWrapper,
  TeachersRating,
} from "./TeachersListItem.styled";
import activeStatus from "/icons/active_status.svg";
import heart from "/icons/heart.svg";
import book from "/icons/book-open-01.svg";

export const TeachersListItem = ({ teacher }) => {
  const { id, avatar_url, name, surname } = teacher;

  return (
    <ListItem key={id}>
      <TeacherImageWrapper>
        <TeacherImg src={avatar_url} width={96} height={96} alt={surname} />
        <ActiveImg src={activeStatus} />
      </TeacherImageWrapper>
      <ContentWrapper>
        <TeacherInfoWrapper>
          <p>Languages</p>
          <p>
            {name} {surname}
          </p>
        </TeacherInfoWrapper>
        <TeachersRating>
          {" "}
          <div>
            {" "}
            <img src={book} alt="book_icon" />
          </div>
          <ListRating>
            <ListItemRating>
              {" "}
              <RatingText> Lessons online</RatingText>
            </ListItemRating>
            <ListItemRating>
              {" "}
              <RatingText>Lessons done: 1098</RatingText>
            </ListItemRating>
            <ListItemRating>
              {" "}
              <RatingText>Rating: 4.8</RatingText>
            </ListItemRating>
            <ListItemRating>
              <span>Price / 1 hour: 30$</span>
            </ListItemRating>
          </ListRating>
          <HeartIcon src={heart} />
        </TeachersRating>
      </ContentWrapper>
    </ListItem>
  );
};
