import { LevelList, LevelListItem, LevelText } from "./TeacherLevelList.styled";

export const TeacherLevelList = ({ levels }) => {
  return (
    <>
      {" "}
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
