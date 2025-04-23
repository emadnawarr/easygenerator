import { Box, Button, Typography } from "@mui/material";
import FormCard from "../components/FormCard";
import SignupForm from "../components/SignupForm";
import FormTitle from "../components/FormTitle";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <Box
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ backgroundColor: "#f5f5f5" }}
    >
      <Button
        onClick={() => navigate("/")}
        variant="contained"
        color="primary"
        sx={{
          position: "absolute",
          top: 16,
          left: 16,
        }}
      >
        Back
      </Button>
      <FormCard>
        <FormTitle text="Sign Up" />
        <SignupForm />
        <Typography
          variant="body2"
          align="center"
          sx={{
            mt: 2,
            cursor: "pointer",
            textDecoration: "underline",
            color: "primary.main",
          }}
          onClick={() => navigate("/signin")}
        >
          Already have an account? Sign in
        </Typography>
      </FormCard>
    </Box>
  );
};

export default Signup;
