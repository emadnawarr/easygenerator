import { Box, Button, Typography } from "@mui/material";
import FormCard from "../components/FormCard";
import FormTitle from "../components/FormTitle";
import SigninForm from "../components/SigninForm";
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
        <FormTitle text="Sign In" />
        <SigninForm />
        <Typography
          variant="body2"
          align="center"
          sx={{
            mt: 2,
            cursor: "pointer",
            textDecoration: "underline",
            color: "primary.main",
          }}
          onClick={() => navigate("/signup")}
        >
          Don't have an account? Sign up
        </Typography>
      </FormCard>
    </Box>
  );
};

export default Signup;
