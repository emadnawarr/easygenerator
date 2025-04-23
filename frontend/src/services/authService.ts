import axios from "axios";
import SignupFormData from "../interfaces/SignupFormData";
import { API_URL, AUTH_URL } from "../utils/constants";
import SigninFormData from "../interfaces/SigninFormData";

type RefreshTokenResponse = {
  accessToken: string;
};

export const signup = async (data: SignupFormData) => {
  const response = await axios.post(`${API_URL}/${AUTH_URL}/signup`, data);
  return response.data;
};

export const signin = async (data: SigninFormData) => {
  const response = await axios.post(`${API_URL}/${AUTH_URL}/signin`, data);
  return response.data;
};

export const getAccessTokenFromRefreshToken = async (
  refreshToken: string
): Promise<RefreshTokenResponse> => {
  const response = await axios.post(`${API_URL}/${AUTH_URL}/refreshToken`, {
    refreshToken,
  });
  return response.data;
};
