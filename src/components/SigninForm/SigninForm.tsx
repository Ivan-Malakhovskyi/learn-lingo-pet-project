import { Formik, Form, FormikValues } from "formik";
import { FC, useState } from "react";
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
} from "./SigninForm.styled";
import eyeOff from "/icons/eye-off.svg";
import eyeOn from "/icons/eye-on.svg";
import { TSigninFormProps } from "./SigninForm.types";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { signIn } from "../redux/auth/auth-slice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CustomToaster } from "../Global/Toaster/CustomToaster";
import toast from "react-hot-toast";
import { TProps } from "../../types";
import { useAuthUser } from "../hooks/useAuthUser";

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

export const SigninForm: FC<TProps> = ({ onLoginSuccess }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isUserLoggedIn } = useAuthUser();

  const isLoggin = () => {
    if (isUserLoggedIn) {
      onLoginSuccess();
    }
  };

  const handleSubmit = async (
    values: TSigninFormProps,
    { resetForm }: FormikValues
  ) => {
    try {
      const { email, password } = values;

      const signinUser = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const signedUser = signinUser.user;

      dispatch(
        signIn({ name: signedUser.displayName, email: signedUser.email })
      );
      navigate("/teachers");

      toast.success("You are was successfully signed ✅");

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
          <BtnSubmit type="submit" onClick={isLoggin}>
            Log In
          </BtnSubmit>
        </Form>
      </Formik>
      <CustomToaster />
    </>
  );
};
