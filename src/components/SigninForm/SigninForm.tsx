import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthError, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { Formik, Form, FormikValues } from "formik";
import toast from "react-hot-toast";
import * as yup from "yup";
import {
  FieldForm,
  Paragraph,
  Title,
  IconsWrapper,
  FormWrapper,
  InputWrapper,
  BtnSubmit,
  ErrMessage,
  StyledText,
  StyledGoogleBtn,
  GoogleWrapper,
} from "./SigninForm.styled";
import { auth } from "src/firebaseConfig";
import { setLoading, setUser } from "../redux/auth/auth-slice";
import { CustomToaster } from "../Global/Toaster/CustomToaster";

import { TOAST_MESSAGES } from "../constants";
import { TSigninProps } from "src/types";
import { TSigninFormProps } from "./SigninForm.types";
import { useGoogleAuth } from "../hooks/useGoogleAuth";
import eyeOff from "/icons/eye-off.svg";
import eyeOn from "/icons/eye-on.svg";
import google from "/icons/google.svg";

const initialValuesFields = {
  email: "",
  password: "",
};

const validationSigninSchema = yup.object({
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

const { SIGN_IN_SUCCESSFULLY, SIGN_IN_ERROR } = TOAST_MESSAGES;

export const SigninForm: FC<TSigninProps> = ({ onLoginClose }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signinWithGoogle } = useGoogleAuth();

  const handleSubmit = async (
    values: TSigninFormProps,
    { resetForm }: FormikValues,
  ) => {
    try {
      const { email, password } = values;
      setLoading(true);
      const signedIn = await signInWithEmailAndPassword(auth, email, password);

      dispatch(
        setUser({
          displayName: signedIn.user.displayName,
          email: signedIn.user.email,
        }),
      );
      setLoading(false);
      navigate("/teachers");

      onLoginClose();

      toast.success(SIGN_IN_SUCCESSFULLY);

      resetForm();
    } catch (error) {
      const errMessage = (error as AuthError).code;

      if (errMessage === "auth/invalid-credential") {
        toast.error(SIGN_IN_ERROR);
        return;
      }
    }
  };

  const handelToggleClick = () => {
    setShowPassword(!showPassword);
  };

  const loginWithGoogle = async () => {
    try {
      setLoading(true);
      await signinWithGoogle();

      onLoginClose();
      setLoading(false);

      toast.success(SIGN_IN_SUCCESSFULLY);
    } catch (error) {
      console.log(error);
    }
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
        <Form>
          <FormWrapper>
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
      </Formik>{" "}
      <GoogleWrapper>
        {" "}
        <StyledText>Увійти з Google</StyledText>{" "}
        <StyledGoogleBtn type="button" onClick={loginWithGoogle}>
          <img src={google} alt="google_icon" /> Google
        </StyledGoogleBtn>
      </GoogleWrapper>
      <CustomToaster />
    </>
  );
};
