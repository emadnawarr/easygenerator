import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getUserDataFromToken, removeTokens } from "../utils/jwtFunctions";
import "./Welcome.css";

const Welcome = () => {
  const navigate = useNavigate();
  const user = getUserDataFromToken();

  const handleLogout = () => {
    removeTokens();
    navigate("/");
  };

  return (
    <div className="welcome-container">
      <Button
        onClick={handleLogout}
        variant="contained"
        color="primary"
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
        }}
      >
        Logout
      </Button>

      <Typography variant="h4" fontWeight={600}>
        Welcome to the application{user ? `, ${user.name}` : ""}!
      </Typography>
    </div>
  );
};

export default Welcome;
