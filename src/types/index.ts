export type TReview = {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
};

export type Teacher = {
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
  price_per_hour: number;
  reviews: TReview[];
};

export type TeacherProps = {
  teacher: Teacher;
};

export type TAuthType = {
  user: { name: null | string; email: null | string };
  isLoggedIn: boolean;
  isRefresh: boolean;
  isLoading: boolean;
  error: null;
};

export type TeacherType = {
  items: Teacher[] | any;
  favorites: Teacher[];
  isLoading: boolean;
  isFavorite: boolean;
  isError: null | unknown;
};

export type TeacherFilterType = {
  language: string;
  level: string;
  price: number;
};

export type TFilterType = {
  language: string | null;
  level: string | null;
  price?: number[] | string[] | null;
};

export type TFilterState = {
  filters: TFilterType;
};

export type TInitStateTypes = {
  auth: TAuthType;
  teachers: TeacherType;
};

export type TSigninProps = {
  onLoginSuccess: () => void;
};

export type TSignupProps = {
  onRegisterSuccess: () => void | undefined;
};
