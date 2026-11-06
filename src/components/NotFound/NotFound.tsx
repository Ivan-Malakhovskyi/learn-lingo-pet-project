import { FC } from "react";
import { HomeLink, NotFoundWrapper, Topic } from "./NotFound.styled";
import notFound from "/icons/404.svg";

export const NotFound: FC = () => {
  return (
    <NotFoundWrapper>
      <img src={notFound} alt="not_found_icon" width={300} />
      <Topic>Such page wasn't found 😢</Topic>
      <HomeLink to="/">Back to home page</HomeLink>
    </NotFoundWrapper>
  );
};
