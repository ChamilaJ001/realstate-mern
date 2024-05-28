import * as yup from "yup";

export const registerSchema = yup
  .object({
    fullName: yup
      .string()
      .required("Full name is required")
      .matches(/^[A-Za-z ]+$/, "Full name can only contain letters and spaces"),
    email: yup
      .string()
      .email("Email must be a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long"),
    confirmPassword: yup
      .string()
      .required("Confirm password is required")
      .oneOf([yup.ref("password")], "Passwords must match"),
  })
  .required();

export const loginSchema = yup
  .object({
    email: yup
      .string()
      .email("Email must be a valid email")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

export const accountSchema = yup
  .object({
    fullName: yup
      .string()
      .required("Full name is required")
      .matches(/^[A-Za-z ]+$/, "Full name can only contain letters and spaces"),
    email: yup
      .string()
      .email("Email must be a valid email")
      .required("Email is required"),
  })
  .required();
