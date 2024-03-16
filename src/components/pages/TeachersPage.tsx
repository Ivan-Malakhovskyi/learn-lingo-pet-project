// import { Filters } from "../../Filters/Filters";
import { TeachersList } from "../TeachersList/TeachersList";
// import { Test } from "../Filters/Test";
import { Container } from "../layout/SharedLayout.styled";
import { SectionFormContainer } from "../layout/SharedLayout.styled";
import { FC } from "react";
import { Filters } from "../Filters/Filters";

const TeachersPage: FC = () => {
  return (
    <>
      <SectionFormContainer>
        <Container>
          <Filters />
          {/* <Test /> */}
        </Container>
        <TeachersList />
      </SectionFormContainer>
    </>
  );
};

export default TeachersPage;
