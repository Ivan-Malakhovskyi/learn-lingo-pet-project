import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { FC, Suspense } from "react";
import { Container } from "./SharedLayout.styled";

export const SharedLayout: FC = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
