import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "../GlobalStyle";
import { SharedLayout } from "./layout/SharedLayout";
import { FC, lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { getCurrentUser } from "./redux/auth/auth-slice";
import { useAuthUser } from "./hooks/useAuthUser";
import { PrivateRoute } from "../PrivateRoute";
import { ERoutes } from "../enums";
import "../App.css";
import { Loader } from "./Loader/Loader";

const HomePage = lazy(() => import("./pages/HomePage"));
const TeachersPage = lazy(() => import("./pages/TeachersPage"));
const FavoritesPage = lazy(() => import("./pages/Favorites"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const App: FC = () => {
  const dispatch = useDispatch();

  const { isUserRefresh } = useAuthUser();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          getCurrentUser({ name: user?.displayName, email: user?.email })
        );
      }
    });
  }, [dispatch]);

  return isUserRefresh ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="teachers" element={<TeachersPage />} />
          <Route
            path="favorites"
            element={
              <PrivateRoute
                element={<FavoritesPage />}
                redirectTo={ERoutes.Root}
              />
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
