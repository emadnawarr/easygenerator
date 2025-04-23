import { Stack, TextField, Button } from "@mui/material";
import SigninFormData from "../interfaces/SigninFormData";
import { storeTokens } from "../utils/jwtFunctions";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signinSchema } from "../validations/signinValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { signin } from "../services/authService";

const SigninForm = () => {
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormData>({
    resolver: yupResolver(signinSchema),
  });

  const onSubmit = async (data: SigninFormData) => {
    try {
      const result = await signin(data); //TODO: interface lel result
      storeTokens(result.accessToken, result.refreshToken);
      navigate("/app");
    } catch (err: any) {
      const message = err?.response?.data?.message || "Login failed";
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
          label="Password"
          type="password"
          fullWidth
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Button type="submit" variant="contained" fullWidth>
          Login
        </Button>
      </Stack>
    </form>
  );
};
export default SigninForm;
