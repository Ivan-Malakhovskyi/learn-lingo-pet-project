import { useEffect, FC } from "react";
import { fetchTeachers } from "src/redux/teachers/operations";
import { useAppDispatch } from "src/redux/store";
import { TeachersList } from "../TeachersList";
import { Container } from "../SharedLayout/SharedLayout.styled";
import { SectionFormContainer } from "../SharedLayout/SharedLayout.styled";
import { Filters } from "../Filters";

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
