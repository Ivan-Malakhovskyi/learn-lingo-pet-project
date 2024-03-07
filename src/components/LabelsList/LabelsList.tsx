import { LabelList, Label, UnderlineText, MainText } from "./LabelList.styled";

export const LabelsList = ({ languages, conditions, lessonInfo }) => {
  return (
    <LabelList>
      <li>
        {" "}
        <Label>
          Speaks: <UnderlineText>{languages.join(", ")}</UnderlineText>
        </Label>
      </li>
      <li>
        {" "}
        <Label>
          Lesson Info: <MainText>{lessonInfo}</MainText>
        </Label>
      </li>
      <li>
        {" "}
        <Label>
          Conditions: <MainText>{conditions}</MainText>
        </Label>
      </li>
    </LabelList>
  );
};
