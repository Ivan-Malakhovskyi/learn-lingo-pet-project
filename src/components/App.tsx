import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "../GlobalStyle";
import { SharedLayout } from "./layout/SharedLayout";
import { HomePage } from "./pages/HomePage/HomePage";
import { Teachers } from "./pages/Teachers/Teachers";
import { Favorites } from "./pages/Favorites/Favorites";
import { SignIn } from "./pages/SignIn/SignIn";
import { SignUp } from "./pages/SignUp.tsx/SignUp";
import "../App.css";

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};

export default App;
