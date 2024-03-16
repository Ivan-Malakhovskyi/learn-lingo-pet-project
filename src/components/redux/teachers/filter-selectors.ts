import { TFilterState } from "../../../types";
import teachersList from "../../teachers.json";

const { teachers } = teachersList;

export const selectFilters = (state: TFilterState) => state.filters;

export function filterTeachers(teachers, filters) {
  // Розпакування фільтрів
  const { language, level, price } = filters;

  // Фільтрація учителів за обраними параметрами
  const filteredTeachers = teachers.filter((teacher) => {
    // Фільтрація за мовою
    if (language && teacher.languages.includes(language)) {
      return true;
    }

    // Фільтрація за рівнем
    if (level && teacher.levels.includes(level)) {
      return true;
    }

    // Фільтрація за ціною
    if (price && teacher.price === price) {
      return true;
    }

    // Якщо немає збігів за жодним параметром, повертаємо false
    return false;
  });

  return filteredTeachers;
}

const filters = {
  language: "Korean",
  level: "Advanced",
  price: 50,
};

console.log(filterTeachers(teachers, filters));
