import { get, limitToFirst, query, ref, startAfter } from "firebase/database";
import { useState, useEffect, FC } from "react";
import { db } from "../../firebaseConfig";
import { LoadMoreBtn, TeachersListWrapper } from "./TeachersList.styled";
// import { List } from "./TeachersList.styled";
import { TeachersListItem } from "../TeachersListItem/TeachersListItem";
// import { SectionForm } from "../Filters/Filters.styled";
import { Container } from "../layout/SharedLayout.styled";

export const TeachersList: FC = () => {
  const [teachers, setTeachers] = useState([]);
  const [lastVisible, setLastVisible] = useState(null);

  useEffect(() => {
    const teachersRef = query(ref(db, "teachers"), limitToFirst(4));
    const getAll = async () => {
      try {
        const data = await get(teachersRef);
        if (data.exists()) {
          const teachersData = Object.entries(data.val()).map(([id, data]) => ({
            id,
            ...data,
          }));
          setTeachers(teachersData);
          const lastTeacher = teachersData[teachersData.length - 1];
          setLastVisible(lastTeacher);
        } else {
          console.log("No data");
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    getAll();
  }, []);

  const handleLoadMore = async () => {
    const teachersRef = query(ref(db, "teachers"), startAfter(lastVisible));

    try {
      const data = await get(teachersRef);
      console.log(data);
      if (data.exists()) {
        const teachersData = Object.entries(data.val()).map(([id, data]) => ({
          id,
          ...data,
        }));
        setTeachers((teachersList) => [...teachersList, ...teachersData]);
        const lastTeacher = teachersData[teachersData.length - 1];
        console.log(lastTeacher);
        setLastVisible(lastTeacher);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {" "}
      <TeachersListWrapper>
        <Container>
          {" "}
          <ul>
            {teachers.length > 0 ? (
              teachers.map((teacher) => (
                <TeachersListItem key={teacher.id} teacher={teacher} />
              ))
            ) : (
              <div>Loading...</div>
            )}
          </ul>
          <LoadMoreBtn type="button" onClick={handleLoadMore}>
            Load More
          </LoadMoreBtn>
        </Container>
      </TeachersListWrapper>
    </>
  );
};
