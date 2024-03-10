import { FC } from "react";
import { useSelector } from "react-redux";

import { selectFavoriteTeachers } from "../../redux/teachers/teachers-selectors";
import { TeachersListWrapper } from "../../TeachersList/TeachersList.styled";
import {
  Container,
  SectionFormContainer,
} from "../../layout/SharedLayout.styled";
import { TeachersListItem } from "../../TeachersListItem/TeachersListItem";
import {
  Paragraph,
  StyledLink,
  TextWrapper,
} from "../../Favorites/Favorites.styed";

import empty from "/icons/no-data.svg";

import { Teacher } from "../../../types";

const Favorites: FC = () => {
  const favoriteTeachers = useSelector(selectFavoriteTeachers);

  return (
    <>
      <TeachersListWrapper>
        <SectionFormContainer>
          <Container>
            <ul>
              {favoriteTeachers.length > 0 ? (
                favoriteTeachers.map((teacher: Teacher) => (
                  <TeachersListItem key={teacher.id} teacher={teacher} />
                ))
              ) : (
                <TextWrapper>
                  {" "}
                  <Paragraph>
                    You don`t have any favorites teachers yet 😢
                  </Paragraph>
                  <p>
                    {" "}
                    <StyledLink to="/teachers">Go to teachers</StyledLink>
                  </p>
                  <div>
                    <img src={empty} alt="empty_icons" width={300} />
                  </div>
                </TextWrapper>
              )}
            </ul>
          </Container>
        </SectionFormContainer>
      </TeachersListWrapper>
    </>
  );
};

export default Favorites;
