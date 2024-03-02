import { FC } from "react";
import { Hero } from "../../Hero/Hero";
import { Stats } from "../../Stats/Stats";

export const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <Stats />
    </>
  );
};
