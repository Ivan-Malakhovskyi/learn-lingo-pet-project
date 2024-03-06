import { FC } from "react";
import { TeacherProps } from "../../types";
import {
  List,
  Paragraph,
  TeacherImg,
  Title,
  Topic,
  TopicEnglishInfo,
} from "./BookTrial.styled";
import { Label } from "../TeachersListItem/TeachersListItem.styled";
import { RadioButtonForm } from "../RadioBurronForm/RadioButtonForm";

export const BookTrial: FC<TeacherProps> = ({ teacher }) => {
  const { name, surname, avatar_url } = teacher;

  return (
    <>
      <Topic>Book trial lesson</Topic>
      <Paragraph>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </Paragraph>

      <List>
        <li>
          <TeacherImg src={avatar_url} alt={name} />
        </li>
        <li>
          <Label>Your teacher</Label>
          <Title>
            {name} {surname}
          </Title>
        </li>
      </List>
      <TopicEnglishInfo>
        What is your main reason for learning English?
      </TopicEnglishInfo>

      <RadioButtonForm />
    </>
  );
};
