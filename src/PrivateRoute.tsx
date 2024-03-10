// import { FC, ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { FC, ReactNode } from "react";
import { useAuthUser } from "./components/hooks/useAuthUser";

import { ERoutes } from "./enums";

type TProps = {
  element: ReactNode;
  redirectTo: string;
};

export const PrivateRoute: FC<TProps> = ({ element }) => {
  const { isUserLoggedIn } = useAuthUser();

  const shouldRedirectUser = !isUserLoggedIn;

  return <>{shouldRedirectUser ? <Navigate to={ERoutes.Root} /> : element}</>;
};
