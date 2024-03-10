import { FC } from "react";
import { HeroSection } from "../Hero/Hero";
import { Stats } from "../Stats/Stats";
import { Container } from "../layout/SharedLayout.styled";

const HomePage: FC = () => {
  return (
    <Container>
      <HeroSection />
      <Stats />
    </Container>
  );
};

export default HomePage;
