import { createSelector } from "@reduxjs/toolkit";
import { TFilterState } from "../../../types";
import { selectTeachers } from "./teachers-selectors";

export const selectFilters = (state: TFilterState) => state.filters;

export function filterTeachers(teachers, filters) {
  const { language, level, price } = filters;

  return teachers.filter((teacher) => {
    if (language && !teacher.languages.includes(language)) {
      return false;
    }

    if (level && !teacher.levels.includes(level)) {
      return false;
    }

    if (price && teacher.price_per_hour > price) {
      return false;
    }

    return true;
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

      if (filters.price && teacher.price_per_hour === filters.price) {
        return true;
      }

      return false;
    });

    return filteredTeachers;
  }
);
