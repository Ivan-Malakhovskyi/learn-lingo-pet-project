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

import { EmptyTopic, TeachersListWrapper } from "./TeachersList.styled";
import { TeachersListItem } from "../TeachersListItem/TeachersListItem";
import { Loader } from "../Loader/Loader";
import { Teacher } from "src/types";

export const TeachersList: FC = () => {
  const { language, level, price } = useSelector(selectFilters);
  const teachersList = useSelector(selectTeachers);
  const isLoading = useSelector(selectIsLoading);
  const [filteredTeachers, setFilteredTeachers] = useState<Teacher[]>([]);
  const [showModal, setShowModal] = useState(false);

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

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const filterSet = language || level || price;

  return (
    <>
      {isLoading && <Loader />}

      <TeachersListWrapper>
        <ul>
          {filteredTeachers.length > 0 && !isLoading
            ? filteredTeachers.map((teacher) => (
                <TeachersListItem
                  close={toggleModal}
                  key={teacher.id}
                  teacher={teacher}
                />
              ))
            : filterSet && (
                <EmptyTopic>
                  No teachers found, try change filters 😢
                </EmptyTopic>
              )}
        </ul>
      </TeachersListWrapper>
    </>
  );
};
