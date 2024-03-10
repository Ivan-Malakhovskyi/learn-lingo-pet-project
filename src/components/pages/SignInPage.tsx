import { FC } from "react";
import { SigninForm } from "../SigninForm/SigninForm";
import { TSigninProps } from "../../types";

export const SignInPage: FC<TSigninProps> = ({ onLoginSuccess }) => {
  return <SigninForm onLoginSuccess={onLoginSuccess} />;
};
