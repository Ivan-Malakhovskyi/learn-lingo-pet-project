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
  Hero,
} from "./Hero.styled";
import girl from "/images/stiker_girl.png";
import mac from "/images/mac.png";
import { Container } from "../layout/SharedLayout.styled";

export const HeroSection = () => {
  return (
    <Hero>
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
          <GirlImg src={girl} alt="girl_stiker" />
          <MacImg src={mac} alt="girl_stiker" />
        </HeroBgImg>
      </HeroWrapper>
    </Hero>
  );
};
