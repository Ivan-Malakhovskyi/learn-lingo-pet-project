import { get, limitToFirst, query, ref } from "firebase/database";
import { useState, useEffect, FC } from "react";
import { db } from "../../firebaseConfig";
import { LoadMoreBtn, TeachersListWrapper } from "./TeachersList.styled";
// import { List } from "./TeachersList.styled";
import { TeachersListItem } from "../TeachersListItem/TeachersListItem";
// import { SectionForm } from "../Filters/Filters.styled";
import { Container } from "../layout/SharedLayout.styled";
import { Teacher } from "../../types";

export const TeachersList: FC = () => {
  const [teachers, setTeachers] = useState([]);
  // const [lastVisible, setLastVisible] = useState(null);
  // const [page, setPage] = useState(1);
  // const [perPage, setPerPage] = useState(4);

  useEffect(() => {
    // const urlParams = new URLSearchParams(window.location.search);

    // const pageParam = urlParams.get("page");
    // const pagePerParam = urlParams.get("per_page");

    // setPage(pageParam ? parseInt(pageParam, 4) : 1);
    // setPerPage(pagePerParam ? parseInt(pagePerParam, 4) : 1);
    const teachersRef = query(ref(db, "teachers"), limitToFirst(4));
    const getAllTeachers = async () => {
      try {
        const data = await get(teachersRef);
        if (data.exists()) {
          const teachersData = Object.entries(data.val()).map(([id, data]) => ({
            id,
            ...(data as Teacher[]),
          }));
          setTeachers(teachersData as []);
          console.log(teachersData);
          // const lastTeacher = teachersData[teachersData.length - 1];
          // setLastVisible(lastTeacher);
        } else {
          console.log("No data");
        }
      } catch (error) {
        console.log((error as Error).message);
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
