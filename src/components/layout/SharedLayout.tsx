import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { FC, Suspense } from "react";

export const SharedLayout: FC = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
