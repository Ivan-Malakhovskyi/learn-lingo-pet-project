import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { FC, Suspense } from "react";
import { Container } from "./SharedLayout.styled";
import { Loader } from "../Loader/Loader";

export const SharedLayout: FC = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <Suspense fallback={<Loader />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
