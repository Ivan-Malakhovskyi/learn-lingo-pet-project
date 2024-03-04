import { FC } from "react";
import { Filters } from "../../Filters/Filters";
import { TeachersList } from "../../TeachersList/TeachersList";
import { Test } from "../../Filters/Test";
import { Container, SectionForm } from "../../Filters/Filters.styled";

export const Teachers: FC = () => {
  return (
    <SectionForm>
      {" "}
      <Container>
        <Test />
        <TeachersList />
      </Container>
    </SectionForm>
  );
};
