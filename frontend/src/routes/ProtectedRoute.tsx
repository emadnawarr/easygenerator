import { JSX, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getAccessTokenFromRefreshToken } from "../services/authService";
import {
  getAccessToken,
  getRefreshToken,
  isTokenExpired,
  removeTokens,
} from "../utils/jwtFunctions";

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const checkToken = async () => {
    const token = getAccessToken();
    if (!token) {
      setIsValid(false);
      return;
    }

    try {
      const isExpired = isTokenExpired(token);

      if (!isExpired) {
        setIsValid(true);
        return;
      }

      const refreshToken = getRefreshToken();
      if (!refreshToken) {
        setIsValid(false);
        return;
      }

      const result = await getAccessTokenFromRefreshToken(refreshToken);

      const newAccessToken = result.accessToken;
      localStorage.setItem("accessToken", newAccessToken);
      setIsValid(true);
    } catch (err) {
      removeTokens();
      setIsValid(false);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  if (isValid === null) return null;
  if (!isValid) return <Navigate to="/signin" replace />;
  return children;
};

export default ProtectedRoute;
