import {
  ActiveImg,
  ContentWrapper,
  Heading,
  HeartIcon,
  InfoWrapper,
  LanguageLabel,
  ListItem,
  ListRating,
  TeacherImageWrapper,
  TeacherImg,
  ReadMoreBtn,
  LessonInfoWrapper,
} from "./TeachersListItem.styled";

import {
  ListItemRating,
  RatingText,
} from "../TeacherLevelList/TeacherLevelList.styled";

import { FC, useState } from "react";
import { AdditionalInfo } from "../AdditionalInfo/AdditionalInfo";
import { TeacherLevelList } from "../TeacherLevelList/TeacherLevelList";

import { BookTrialBtn } from "../AdditionalInfo/AdditonalInfo.styled";

import toast from "react-hot-toast";

import activeStatus from "/icons/active_status.svg";
import heart from "/icons/heart.svg";
import activeHeart from "/icons/active_icon.svg";
import book from "/icons/book-open-01.svg";
import star from "/icons/icon_star.svg";
import { BookTrial } from "../BookTrial/BookTrial";
import { TeacherProps } from "../../types";
import { Modal } from "../Global/Modal/Modal";

import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteTeachers } from "../redux/teachers/teachers-selectors";
import { addTeacher, deleteTeacher } from "../redux/teachers/teacher-slice";
import { CustomToaster } from "../Global/Toaster/CustomToaster";
import { LabelsList } from "../LabelsList/LabelsList";

export const TeachersListItem: FC<TeacherProps> = ({ teacher }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const favorites = useSelector(selectFavoriteTeachers);

  const handleToggleClick = () => {
    setShowModal(!showModal);
  };

  const itemId = nanoid();

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

  const isFavoriteCar = (id) => favorites.some((teacher) => teacher.id === id);

  const handleToggleAddTeacher = () => {
    if (isFavoriteCar(id)) {
      dispatch(deleteTeacher(teacher.id));
      toast.success("teacher was successfully deleted ✅");
    } else {
      dispatch(addTeacher(teacher));
      toast.success("Teacher was added 🧔");
    }
  };

  return (
    <>
      <ListItem key={itemId}>
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
                <HeartIcon type="button" onClick={handleToggleAddTeacher}>
                  {isFavoriteCar(id) ? (
                    <img
                      src={activeHeart}
                      alt="active_icon"
                      width={26}
                      height={26}
                    />
                  ) : (
                    <img
                      src={heart}
                      alt="default_icon"
                      width={26}
                      height={26}
                    />
                  )}
                </HeartIcon>
              </LessonInfoWrapper>
            </InfoWrapper>

            <LabelsList
              languages={languages}
              lessonInfo={lesson_info}
              conditions={conditions}
            />

            {!showInfo && (
              <ReadMoreBtn onClick={handleClick}>Read more</ReadMoreBtn>
            )}

            {showInfo && (
              <AdditionalInfo experience={experience} reviews={reviews} />
            )}

            <TeacherLevelList levels={levels} />

            {showInfo && (
              <BookTrialBtn type="button" onClick={handleToggleClick}>
                Book trial lesson
              </BookTrialBtn>
            )}

            {showModal && (
              <Modal close={handleToggleClick}>
                <BookTrial teacher={teacher} />
              </Modal>
            )}
          </div>
        </ContentWrapper>
      </ListItem>
      <CustomToaster />
    </>
  );
};
