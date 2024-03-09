import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "../GlobalStyle";
import { SharedLayout } from "./layout/SharedLayout";
import { HomePage } from "./pages/HomePage/HomePage";
import { Teachers } from "./pages/Teachers/Teachers";
import { Favorites } from "./pages/Favorites/Favorites";
import "../App.css";
import { NotFoundPage } from "./NotFoundPage/NotFoundPage";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { setUser } from "./redux/auth/auth-slice";
import { useAuthUser } from "./hooks/useAuthUser";
import { PrivateRoute } from "../PrivateRoute";
import { ERoutes } from "../enums";

const App: FC = () => {
  const dispatch = useDispatch();

  const { isUserRefresh, isUserLoggedIn } = useAuthUser();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({ name: user?.displayName, email: user?.email }));
      }
    });
  }, [dispatch, isUserLoggedIn]);

  return isUserRefresh ? (
    <p>Refreshing...</p>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="teachers" element={<Teachers />} />
          <Route
            path="favorites"
            element={
              <PrivateRoute element={<Favorites />} redirectTo={ERoutes.Root} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};

export default App;
