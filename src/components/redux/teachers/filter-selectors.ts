import { createSelector } from "@reduxjs/toolkit";
import { TFilterState } from "../../../types";
import { selectTeachers } from "./teachers-selectors";

export const selectFilters = (state: TFilterState) => state.filters;

export function filterTeachers(teachers, filters) {
  // Розпакування фільтрів

  // Фільтрація учителів за обраними параметрами
  const filteredTeachers = teachers.filter((teacher) => {
    // Фільтрація за мовою
    if (filters.language && teacher.languages.includes(filters.language)) {
      return true;
    }

    // Фільтрація за рівнем
    if (filters.level && teacher.levels.includes(filters.level)) {
      return true;
    }

    // Фільтрація за ціною
    if (filters.price && teacher.price === filters.price) {
      return true;
    }

    // Якщо немає збігів за жодним параметром, повертаємо false
    return false;
  });

  return filteredTeachers;
}

export const selectFilteredTeachers = createSelector(
  [selectTeachers, selectFilters],
  (teachers, filters) => {
    const filteredTeachers = teachers.filter((teacher) => {
      if (filters.language && teacher.languages.includes(filters.language)) {
        return true;
      }

      if (filters.level && teacher.levels.includes(filters.level)) {
        return true;
      }

      if (filters.price && teacher.price === filters.price) {
        return true;
      }

      return false;
    });

    return filteredTeachers;
  }
);
