import { Route, Routes } from "react-router-dom";
import "../App.css";
import { GlobalStyle } from "../GlobalStyle";
import { SharedLayout } from "./layout/SharedLayout";
import { HomePage } from "./pages/HomePage/HomePage";
import { Teachers } from "./pages/Teachers/Teachers";
import { Favorites } from "./pages/Favorites/Favorites";
import { SignIn } from "./pages/SignIn/SignIn";
import { SignUp } from "./pages/SignUp.tsx/SignUp";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="login" element={<SignIn />} />
          <Route path="registration" element={<SignUp />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};

export default App;
