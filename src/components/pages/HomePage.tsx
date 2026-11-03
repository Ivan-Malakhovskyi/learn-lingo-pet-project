import { FC } from "react";
import { Hero } from "../Hero";
import { Stats } from "../Stats";
import { Container } from "../layout/SharedLayout.styled";

const HomePage: FC = () => {
  return (
    <Container containerwidth={1344}>
      <Hero />
      <Stats />
    </Container>
  );
};

export default HomePage;
