import { Field, Form, Formik, FormikValues } from "formik";
import { FC, useState } from "react";
import * as yup from "yup";
import {
  RadioValue,
  RadioWrapper,
  StyledField,
} from "./RadioButtonForm.styled";
import {
  FormWrapper,
  FieldForm,
  ErrMessage,
  InputWrapper,
  IconsWrapper,
  BtnSubmit,
} from "../SigninForm/SigninForm.styled";
import eyeOff from "/icons/eye-off.svg";
import eyeOn from "/icons/eye-off.svg";
import { TOptions } from "./RadioButton.types";

const labels = [
  { id: 1, name: "career", value: "Career and business" },
  { id: 2, name: "lesson", value: "Lesson for kids" },
  { id: 3, name: "abroad", value: "Living abroad" },
  { id: 4, name: "exams", value: "Exams and coursework" },
  { id: 5, name: "travel", value: "Culture, travel or hobby" },
];

const initState = {
  radioGroup: "",
  fullName: "",
  email: "",
  password: "",
};

const validationRecordSchema = yup.object({
  fullName: yup.string().required("Full name is required field"),
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

export const RadioButtonForm: FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handelToggleClick = () => {
    setShowPassword(!showPassword);
  };

  const filteredEnteredData = (values: TOptions): Partial<TOptions> => {
    const enteredData: Partial<TOptions> = {};

    for (const [key, value] of Object.entries(values)) {
      if (value !== "") {
        enteredData[key as keyof TOptions] = value;
      }
    }

    return enteredData;
  };

  const handleFormSubmit = (values: TOptions, { resetForm }: FormikValues) => {
    filteredEnteredData(values);
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initState}
        onSubmit={handleFormSubmit}
        validationSchema={validationRecordSchema}
      >
        <Form>
          <RadioWrapper>
            {" "}
            {labels.map(({ id, value }) => (
              <label key={id}>
                <StyledField type="radio" name="radioGroup" value={value} />
                <RadioValue>{value}</RadioValue>
              </label>
            ))}
          </RadioWrapper>

          <FormWrapper>
            <div>
              {" "}
              <FieldForm type="text" name="fullName" placeholder="Full Name" />
              <ErrMessage name="fullName" component="p" />
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
          <BtnSubmit type="submit">Book</BtnSubmit>
        </Form>
      </Formik>
    </>
  );
};
