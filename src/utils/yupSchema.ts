import * as yup from "yup";

export const loginSchema = yup
  .object({
    email: yup.string().email().required("Please enter your Email Address"),
    password: yup.string().required("Please enter your Password"),
  })
  .required();
