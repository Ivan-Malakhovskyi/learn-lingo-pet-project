import { get, limitToFirst, query, ref, startAfter } from "firebase/database";
import { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
import { LoadMoreBtn, TeachersListWrapper } from "./TeachersList.styled";
// import { List } from "./TeachersList.styled";
import { TeachersListItem } from "../TeachersListItem/TeachersListItem";
// import { SectionForm } from "../Filters/Filters.styled";
import { Container } from "../layout/SharedLayout.styled";

export const TeachersList = () => {
  const [teachers, setTeachers] = useState([]);
  const [lastVisible, setLastVisible] = useState(null);

  useEffect(() => {
    const teachersRef = query(ref(db, "teachers"), limitToFirst(4));
    const getAllTeachers = async () => {
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

    getAllTeachers();
  }, []);

  const handleLoadMore = async () => {
    // setLastVisible(null);
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
                <TeachersListItem key={teacher} teacher={teacher} />
              ))
            ) : (
              <div>Loading...</div>
            )}
          </ul>
          {teachers.length > 0 && (
            <LoadMoreBtn type="button" onClick={handleLoadMore}>
              Load More
            </LoadMoreBtn>
          )}
        </Container>
      </TeachersListWrapper>
    </>
  );
};
