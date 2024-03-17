import { TeachersList } from "../TeachersList/TeachersList";
import { Container } from "../layout/SharedLayout.styled";
import { SectionFormContainer } from "../layout/SharedLayout.styled";
import { Filters } from "../Filters/Filters";
import { useEffect, FC } from "react";
import { useDispatch } from "react-redux";
import { fetchTeachers } from "../redux/teachers/operations";

const TeachersPage: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  return (
    <>
      <SectionFormContainer>
        <Container>
          <Filters />
        </Container>
        <TeachersList />
      </SectionFormContainer>
    </>
  );
};

export default TeachersPage;
