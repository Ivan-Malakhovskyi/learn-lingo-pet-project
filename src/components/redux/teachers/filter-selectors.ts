import { RootState } from "../store";
import { TFilterType, Teacher } from "../../../types";

export const selectFilters = (state: RootState): TFilterType => state.filters;

export function filterTeachers(
  teachers: Teacher[],
  filters: TFilterType
): Teacher[] {
  const { language, level, price } = filters;

  return teachers.filter((teacher) => {
    if (language && !teacher.languages.includes(language)) return false;

    if (level && !teacher.levels.includes(level)) return false;

    if (price && teacher.price_per_hour > Number(price)) return false;

    return true;
  });
}
