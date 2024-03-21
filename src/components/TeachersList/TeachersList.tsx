import { get, query, ref, startAfter } from "firebase/database";
import { db } from "../../firebaseConfig";

import { useEffect, FC, useState } from "react";
import { useSelector } from "react-redux";
import {
  filterTeachers,
  selectFilters,
} from "../redux/teachers/filter-selectors";
import {
  selectIsLoading,
  selectTeachers,
} from "../redux/teachers/teachers-selectors";

import {
  EmptyTopic,
  LoadMoreBtn,
  TeachersListWrapper,
} from "./TeachersList.styled";
import { TeachersListItem } from "../TeachersListItem/TeachersListItem";
import { Loader } from "../Loader/Loader";
import { Teacher } from "src/types";

export const TeachersList: FC = () => {
  const { language, level, price } = useSelector(selectFilters);
  const teachersList = useSelector(selectTeachers);
  const isLoading = useSelector(selectIsLoading);
  const [filteredTeachers, setFilteredTeachers] = useState<Teacher[]>([]);

  useEffect(() => {
    if (language || level || price) {
      const filteredTeachers = filterTeachers(teachersList, {
        language,
        level,
        price,
      });
      setFilteredTeachers(filteredTeachers);
    } else {
      setFilteredTeachers(teachersList);
    }
  }, [language, level, teachersList, price]);

  const handleLoadMore = async () => {
    const teachersRef = query(ref(db, "teachers"), startAfter(4));
    console.log(teachersRef);
    try {
      const data = await get(teachersRef);
      if (data.exists()) {
        // const teachersData = Object.entries(data.val()).map(([id, data]) => ({
        //   id,
        //   ...(data as Teacher[]),
        // }));
        // setTeachers(teachersData);
        // const lastTeacher = teachersData[teachersData.length - 1];
        // setLastVisible(lastTeacher);
      } else {
        console.log("No data");
      }
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return (
    <>
      {isLoading && <Loader />}

      <TeachersListWrapper>
        <ul>
          {filteredTeachers.length > 0 && !isLoading ? (
            filteredTeachers.map((teacher) => (
              <TeachersListItem key={teacher.id} teacher={teacher} />
            ))
          ) : (
            <EmptyTopic>No teachers found, try change filters 😢</EmptyTopic>
          )}
        </ul>
      </TeachersListWrapper>

      {teachersList.length > 0 && filteredTeachers.length > 0 && (
        <LoadMoreBtn type="button" onClick={handleLoadMore}>
          Load More
        </LoadMoreBtn>
      )}
    </>
  );
};
