import { FC } from "react";
import {
  GirlImg,
  Hero,
  HeroBenefits,
  HeroBgImg,
  MacImg,
} from "./HomePage.styled";
import girl from "/public/images/stiker_girl.png";
import mac from "/public/images/mac.png";

export const HomePage: FC = () => {
  return (
    <Hero>
      <HeroBenefits>
        <h2>Unlock your potential with the best language tutors</h2>
        <p>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>
        <button type="button">Get started</button>
      </HeroBenefits>
      <HeroBgImg>
        <GirlImg src={girl} alt="girl_stiker" />
        <MacImg src={mac} alt="girl_stiker" />
      </HeroBgImg>
    </Hero>
  );
};
