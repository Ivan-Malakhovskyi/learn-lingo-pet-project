import {
  // ErrorMessage,
  Form,
  Formik,
  FormikValues,
} from "formik";
import { useState } from "react";
import * as yup from "yup";
import {
  FieldForm,
  Paragraph,
  Title,
  IconsWrapper,
  FormWrapper,
  InputWrapper,
  BtnSubmit,
  // FormUser,
  ErrMessage,
} from "../SigninForm/SigninForm.styled";

import eyeOff from "/icons/eye-off.svg";
import eyeOn from "/icons/eye-on.svg";
import { TSignUpPageProps } from "./SignUp.types";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const initialValuesFields = {
  name: "",
  email: "",
  password: "",
};

const validationSignupSchema = yup.object({
  name: yup.string().required("Name is required field"),
  email: yup
    .string()
    .matches(/^[-?\w.?%?]+@\w+.{1}\w{2,4}$/, "Invalid email")
    .required("Email can't be is empty"),
  password: yup
    .string()
    .min(8, "Too short password")
    .max(48, "Too long password")
    .matches(/[a-zA-Z]/, "Must contain at least one letter")
    .required("Password can't be is empty"),
});

export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (
    values: TSignUpPageProps,
    { resetForm }: FormikValues
  ) => {
    try {
      const { name, email, password } = values;

      const createUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = updateProfile(createUser.user, { displayName: name });
      console.log(user);

      resetForm();
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const handelToggleClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Title>Registration</Title>
      <Paragraph>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </Paragraph>
      <Formik
        initialValues={initialValuesFields}
        validationSchema={validationSignupSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormWrapper>
            <div>
              {" "}
              <FieldForm type="text" name="name" placeholder="Name" />
              <ErrMessage name="name" component="p" />
            </div>
            <div>
              {" "}
              <FieldForm type="email" name="email" placeholder="Email" />
              <ErrMessage name="email" component="p" />
            </div>
            <InputWrapper>
              <FieldForm
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
              />
              <IconsWrapper onClick={handelToggleClick}>
                {showPassword ? (
                  <img src={eyeOn} alt="eye-on-icon" width={20} height={20} />
                ) : (
                  <img src={eyeOff} alt="eye-off_icon" width={20} height={20} />
                )}
              </IconsWrapper>
              <ErrMessage name="password" component="p" />
            </InputWrapper>
          </FormWrapper>
          <BtnSubmit type="submit">Log In</BtnSubmit>
        </Form>
      </Formik>
    </>
  );
};
