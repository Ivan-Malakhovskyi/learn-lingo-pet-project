import { get, query, ref, startAfter } from "firebase/database";
import { useEffect, FC } from "react";
import { db } from "../../firebaseConfig";
import { LoadMoreBtn, TeachersListWrapper } from "./TeachersList.styled";
// import { List } from "./TeachersList.styled";
import { TeachersListItem } from "../TeachersListItem/TeachersListItem";
// import { SectionForm } from "../Filters/Filters.styled";
// import { Container } from "../layout/SharedLayout.styled";

import { Loader } from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  filterTeachers,
  selectFilters,
} from "../redux/teachers/filter-selectors";
import { selectTeachers } from "../redux/teachers/teachers-selectors";
import { setFilters } from "../redux/teachers/filter-slice";
import { fetchTeachers } from "../redux/teachers/operations";
import { useSearchParams } from "react-router-dom";

export const TeachersList: FC = () => {
  const dispatch = useDispatch();
  const { language, level, price } = useSelector(selectFilters);
  const teachersList = useSelector(selectTeachers);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  useEffect(() => {
    const filters = {};

    searchParams.forEach((value, key) => (filters[key] = value));
    const filteredTeachers = filterTeachers(teachersList, { filters });

    dispatch(setFilters({ filteredTeachers }));
  }, [dispatch, language, teachersList]);

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
      {" "}
      <TeachersListWrapper>
        <ul>
          {teachersList.length > 0 ? (
            teachersList.map((teacher) => (
              <TeachersListItem key={teacher.id} teacher={teacher} />
            ))
          ) : (
            <Loader />
          )}
        </ul>
      </TeachersListWrapper>
      {teachersList.length > 0 && (
        <LoadMoreBtn type="button" onClick={handleLoadMore}>
          Load More
        </LoadMoreBtn>
      )}
    </>
  );
};
