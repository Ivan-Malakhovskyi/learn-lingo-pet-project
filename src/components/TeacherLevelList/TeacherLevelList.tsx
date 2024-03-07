import { FC } from "react";
import { LevelList, LevelListItem, LevelText } from "./TeacherLevelList.styled";
import { TeacherLevelListProps } from "./TeachersLevelList.types";

export const TeacherLevelList: FC<TeacherLevelListProps> = ({ levels }) => {
  return (
    <>
      <LevelList>
        {levels.map((level, idx) => (
          <LevelListItem key={idx}>
            <LevelText>#{level}</LevelText>
          </LevelListItem>
        ))}
      </LevelList>
    </>
  );
};
