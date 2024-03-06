import { Field, Form, Formik } from "formik";
import { FC, useState } from "react";
import { RadioValue, RadioWrapper } from "./RadioButtonForm.styled";
import {
  FormWrapper,
  FieldForm,
  ErrMessage,
  InputWrapper,
  IconsWrapper,
  BtnSubmit,
} from "../SigninForm.tsx/SigninForm.styled";
import eyeOff from "/icons/eye-off.svg";
import eyeOn from "/icons/eye-off.svg";

const labels = [
  { id: 1, name: "career", value: "Career and business" },
  { id: 2, name: "lesson", value: "Lesson for kids" },
  { id: 3, name: "abroad", value: "Living abroad" },
  { id: 4, name: "exams", value: "Exams and coursework" },
  { id: 5, name: "travel", value: "Culture, travel or hobby" },
];

export const RadioButtonForm: FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handelToggleClick = () => {
    setShowPassword(!showPassword);
  };

  const handleFormSubmit = () => {};

  return (
    <>
      <Formik initialValues={{ picked: "" }} onSubmit={handleFormSubmit}>
        <Form>
          <RadioWrapper>
            {" "}
            {labels.map(({ id, value, name }) => (
              <label key={id}>
                <Field type="radio" name={name} value={value} />
                <RadioValue>{value}</RadioValue>
              </label>
            ))}
          </RadioWrapper>

          <FormWrapper>
            <div>
              {" "}
              <FieldForm type="text" name="fullName" placeholder="Full Name" />
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
          <BtnSubmit>Book</BtnSubmit>
        </Form>
      </Formik>
    </>
  );
};
