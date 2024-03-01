import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { FC, Suspense } from "react";
import { Container } from "./SharedLayout.styled";

export const SharedLayout: FC = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          {/* <Container> */}
          <Outlet />
          {/* </Container> */}
        </main>
      </Suspense>
      <Footer />
    </>
  );
};
