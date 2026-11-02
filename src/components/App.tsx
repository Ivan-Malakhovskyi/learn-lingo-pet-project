import { SpeedInsights } from "@vercel/speed-insights/react";
import { Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { FC, lazy, useEffect } from "react";
import { GlobalStyle } from "../GlobalStyle";
import { SharedLayout } from "./layout/SharedLayout";
import { getCurrentUser } from "./redux/auth/auth-slice";
import { useAuthUser } from "./hooks/useAuthUser";
import { PrivateRoute } from "../PrivateRoute";
import { ERoutes } from "../enums";
import "../App.css";
import { Loader } from "./Loader/Loader";
import { useAppDispatch } from "./redux/store";
import { useGoogleAuth } from "./hooks/useGoogleAuth";

const HomePage = lazy(() => import("./pages/HomePage"));
const TeachersPage = lazy(() => import("./pages/TeachersPage"));
const FavoritesPage = lazy(() => import("./pages/Favorites"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const App: FC = () => {
  const dispatch = useAppDispatch();

  const { isUserRefresh } = useAuthUser();
  const { auth } = useGoogleAuth();

  //! If use signInWithPopup
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(
          getCurrentUser({
            displayName: user?.displayName,
            email: user?.email,
          }),
        );
      }
    });
  }, [dispatch, auth]);

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
      <SpeedInsights />
    </>
  );
};

export default App;
