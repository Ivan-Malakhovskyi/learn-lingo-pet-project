import { FC } from "react";
import { LabelList, Label, UnderlineText, MainText } from "./LabelList.styled";
import { LabeListProps } from "./LabelList.types";

export const LabelsList: FC<LabeListProps> = ({
  languages,
  conditions,
  lessonInfo,
}) => {
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
