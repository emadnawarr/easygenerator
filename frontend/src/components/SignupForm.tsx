import { TextField, Button, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../validations/signupValidation";
import SignupFormData from "../interfaces/SignupFormData";
import { signup } from "../services/authService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { storeTokens } from "../utils/jwtFunctions";

const SignupForm = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    try {
      const result = await signup(data); //TODO: interface lel result
      storeTokens(result.accessToken, result.refreshToken);
      navigate("/app");
    } catch (err: any) {
      const message = err?.response?.data?.message || "Signup failed";
      setError(message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        {error && (
          <p style={{ color: "red", textAlign: "center", margin: 0 }}>
            {error}
          </p>
        )}
        <TextField
          label="Email"
          fullWidth
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          label="Name"
          fullWidth
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Button type="submit" variant="contained" fullWidth>
          Create Account
        </Button>
      </Stack>
    </form>
  );
};

export default SignupForm;
