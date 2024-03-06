// import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "../GlobalStyle";
import { SharedLayout } from "./layout/SharedLayout";
import { HomePage } from "./pages/HomePage/HomePage";
import { Teachers } from "./pages/Teachers/Teachers";
import { Favorites } from "./pages/Favorites/Favorites";
import "../App.css";
import { NotFoundPage } from "./NotFoundPage/NotFoundPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <GlobalStyle />
    </>
  );
};

export default App;
