import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Suspense } from "react";

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <div>
            <Outlet />
          </div>
        </main>
      </Suspense>
      <Footer />
    </>
  );
};
