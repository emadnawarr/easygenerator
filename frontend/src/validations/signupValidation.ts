import * as yup from "yup";

export const signupSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-zA-Z]/, "Must include at least one letter")
    .matches(/\d/, "Must include at least one number")
    .matches(/[@$!%*?&]/, "Must include at least one special character")
    .required("Password is required"),
});
