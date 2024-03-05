import { FC } from "react";
import { NavLink } from "react-router-dom";

export const NotFoundPage: FC = () => {
  return (
    <div>
      <p>Such page wasn't found 😢</p>
      <NavLink to="/">Back to home page</NavLink>
    </div>
  );
};
