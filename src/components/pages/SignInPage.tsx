import { FC } from "react";
import { SigninForm } from "../SigninForm";
import { TSigninProps } from "src/types";

export const SignInPage: FC<TSigninProps> = ({ onLoginClose }) => (
  <SigninForm onLoginClose={onLoginClose} />
);
