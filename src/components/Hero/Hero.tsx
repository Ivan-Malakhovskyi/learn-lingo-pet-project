import { FC } from "react";
import {
  GirlImg,
  HeroWrapper,
  HeroBenefits,
  HeroBgImg,
  MacImg,
  HeroTitle,
  HeroTitleWrapper,
  HeroMainText,
  HeroBtn,
  HeroStyled,
} from "./Hero.styled";

export const Hero: FC = () => {
  return (
    <HeroStyled>
      <HeroWrapper>
        <HeroBenefits>
          <HeroTitle>
            Unlock your potential with the best{" "}
            <HeroTitleWrapper>language</HeroTitleWrapper> tutors
          </HeroTitle>
          <HeroMainText>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </HeroMainText>
          <HeroBtn to="/teachers">Get started</HeroBtn>
        </HeroBenefits>
        <HeroBgImg>
          <GirlImg />
          <MacImg />
        </HeroBgImg>
      </HeroWrapper>
    </HeroStyled>
  );
};
