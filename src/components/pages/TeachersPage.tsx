// import { Filters } from "../../Filters/Filters";
import { TeachersList } from "../TeachersList/TeachersList";
import { Test } from "../Filters/Test";
import { Container } from "../layout/SharedLayout.styled";
import { SectionFormContainer } from "../layout/SharedLayout.styled";
import { FC } from "react";

const TeachersPage: FC = () => {
  return (
    <>
      <SectionFormContainer>
        {" "}
        <Container>
          <Test />
        </Container>
        <TeachersList />
      </SectionFormContainer>
    </>
  );
};

export default TeachersPage;
