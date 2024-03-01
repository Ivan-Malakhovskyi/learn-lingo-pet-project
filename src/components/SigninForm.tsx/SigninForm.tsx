import { ErrorMessage, Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import {
  FieldForm,
  Paragraph,
  Title,
  IconsWrapper,
  FormUser,
  FormWrapper,
  InputWrapper,
} from "./SigninForm.styled";
import eyeOff from "/icons/eye-off.svg";
import eyeOn from "/icons/eye-on.svg";

const initialValuesFields = {
  email: "",
  password: "",
};

const validationSigninSchema = yup.object({
  email: yup
    .string()
    .matches(/^[-?\w.?%?]+@\w+.{1}\w{2,4}$/, "Invalid email")
    .required(),
  password: yup
    .string()
    .min(8, "Too short password")
    .max(48, "Too long password")
    .matches(/[a-zA-Z]/, "Must contain at least one letter")
    .required(),
});

export const SigninForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {};

  const handelToggleClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Title>Login</Title>
      <Paragraph>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </Paragraph>
      <Formik
        initialValues={initialValuesFields}
        validationSchema={validationSigninSchema}
        onSubmit={handleSubmit}
      >
        <FormUser>
          <FormWrapper>
            <FieldForm type="text" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="p" />
            <InputWrapper>
              <FieldForm
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
              />
              {/* <IconsWrapper onClick={handelToggleClick}>
                {showPassword ? (
                  <img src={eyeOn} alt="eye-on-icon" />
                ) : (
                  <img src={eyeOff} alt="eye-off_icon" />
                )}
              </IconsWrapper> */}
              <ErrorMessage name="password" component="p" />
            </InputWrapper>
          </FormWrapper>
        </FormUser>
      </Formik>
    </>
  );
};
