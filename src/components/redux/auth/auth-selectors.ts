import { TInitStateTypes } from "../../../types";

export const selectIsLoggedIn = (state: TInitStateTypes) =>
  state.auth.isLoggedIn;

export const selectUser = (state: TInitStateTypes) => state.auth.user;

export const selectIsRefresh = (state: TInitStateTypes) => state.auth.isRefresh;
