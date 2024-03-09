import { FC } from "react";
import { SigninForm } from "../../SigninForm/SigninForm";
import { TProps } from "../../../types";

export const SignIn: FC<TProps> = ({ onLoginSuccess }) => {
  return <SigninForm onLoginSuccess={onLoginSuccess} />;
};
