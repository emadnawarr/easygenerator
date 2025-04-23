import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Landing.css"; // we'll define styles separately

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="landing-actions">
        <Button
          variant="outlined"
          color="primary"
          onClick={() => navigate("/signin")}
        >
          Sign In
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </Button>
      </div>

      <div className="landing-center">
        <img
          src="/easygenerator-logo.svg"
          alt="Welcome"
          className="landing-svg"
        />
      </div>
    </div>
  );
};

export default Landing;
