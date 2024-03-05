import { FC } from "react";
import { Filters } from "../../Filters/Filters";
import { TeachersList } from "../../TeachersList/TeachersList";
import { Test } from "../../Filters/Test";
import { Container } from "../../layout/SharedLayout.styled";
import { SectionFormContainer } from "../../layout/SharedLayout.styled";

export const Teachers: FC = () => {
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
