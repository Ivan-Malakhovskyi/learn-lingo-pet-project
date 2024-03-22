import { TeachersList } from "../TeachersList/TeachersList";
import { Container } from "../layout/SharedLayout.styled";
import { SectionFormContainer } from "../layout/SharedLayout.styled";
import { Filters } from "../Filters/Filters";
import { useEffect, FC } from "react";
import { fetchTeachers } from "../redux/teachers/operations";
import { useAppDispatch } from "../redux/store";

const TeachersPage: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  return (
    <>
      <SectionFormContainer>
        <Container containerwidth={1216}>
          <Filters />
          <TeachersList />
        </Container>
      </SectionFormContainer>
    </>
  );
};

export default TeachersPage;
