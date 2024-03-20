import { Form, Formik, FormikValues } from "formik";
import { FC } from "react";
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
  BtnSubmit,
} from "../SigninForm/SigninForm.styled";
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
  phoneNumber: "",
};

const emailRegex = /^[-?\w.?%?]+@\w+.{1}\w{2,4}$/;
const phoneNumberRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

const validationRecordSchema = yup.object({
  fullName: yup.string().required("Full name is required field"),
  email: yup
    .string()
    .matches(emailRegex, "Invalid email")
    .required("Email can't be is empty"),
  phoneNumber: yup
    .string()
    .min(6, "Too short phone number")
    .max(10, "Too long phone number")
    .matches(phoneNumberRegex, "Invalid format")
    .required("Phone number can't be is empty"),
});

export const RadioButtonForm: FC = () => {
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
                type="tel"
                name="phoneNumber"
                placeholder="Phone number"
              />

              <ErrMessage name="phoneNumber" component="p" />
            </InputWrapper>
          </FormWrapper>
          <BtnSubmit type="submit">Book</BtnSubmit>
        </Form>
      </Formik>
    </>
  );
};
