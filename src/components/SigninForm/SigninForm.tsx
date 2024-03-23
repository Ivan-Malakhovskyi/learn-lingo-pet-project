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
import { AuthError, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { setUser } from "../redux/auth/auth-slice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CustomToaster } from "../Global/Toaster/CustomToaster";
import toast from "react-hot-toast";
import { TSigninProps } from "../../types";
import { TOAST_MESSAGES } from "../constants";

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

export const SigninForm: FC<TSigninProps> = ({ onLoginSuccess }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggin = () => {
    onLoginSuccess();
  };

  const { SIGN_IN_SUCCESSFULLY, SIGN_IN_ERROR } = TOAST_MESSAGES;

  const handleSubmit = async (
    values: TSigninFormProps,
    { resetForm }: FormikValues
  ) => {
    try {
      const { email, password } = values;
      const signedIn = await signInWithEmailAndPassword(auth, email, password);

      dispatch(
        setUser({ name: signedIn.user.displayName, email: signedIn.user.email })
      );

      navigate("/teachers");

      isLoggin();

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
      </Formik>
      <CustomToaster />
    </>
  );
};
