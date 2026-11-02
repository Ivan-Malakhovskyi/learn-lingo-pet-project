import { FC } from "react";
import { Signup } from "../SignupForm/SignupForm";
import { TSignupProps } from "../../types";

export const SignUpPage: FC<TSignupProps> = ({ onRegisterClose }) => {
  return <Signup onRegisterClose={onRegisterClose} />;
};
