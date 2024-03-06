export type Review = {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
};

type Teacher = {
  id: string;
  avatar_url: string;
  name: string;
  surname: string;
  languages: string[];
  lesson_info: string;
  lessons_done: number;
  conditions: string[];
  levels: string[];
  experience: string;
  reviews: Review[];
};

export type TeacherProps = {
  teacher: Teacher;
};
