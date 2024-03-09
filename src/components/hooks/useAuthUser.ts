import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectIsRefresh,
  selectUserName,
} from "../redux/auth/auth-selectors";

export const useAuthUser = () => {
  const isUserLoggedIn = useSelector(selectIsLoggedIn);
  const isUserRefresh = useSelector(selectIsRefresh);
  const userName = useSelector(selectUserName);

  return { isUserLoggedIn, isUserRefresh, userName };
};
