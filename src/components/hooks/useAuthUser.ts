import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectIsRefresh,
  selectUser,
} from "../redux/auth/auth-selectors";

export const useAuthUser = () => {
  const isUserLoggedIn = useSelector(selectIsLoggedIn);
  const isUserRefresh = useSelector(selectIsRefresh);
  const userName = useSelector(selectUser);

  return { isUserLoggedIn, isUserRefresh, userName };
};
