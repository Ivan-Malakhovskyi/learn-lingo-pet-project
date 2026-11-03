import { FC } from "react";
import { SignupForm } from "../SignupForm";
import { TSignupProps } from "src/types";

export const SignUpPage: FC<TSignupProps> = ({ onRegisterClose }) => {
  return <SignupForm onRegisterClose={onRegisterClose} />;
};
