import { jwtDecode } from "jwt-decode";
import { User } from "../interfaces/UserInterface";

type TokenPayload = {
  exp: number;
};

export function storeTokens(accessToken: string, refreshToken: string): void {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
}

export function getAccessToken() {
  return localStorage.getItem("accessToken");
}

export function getRefreshToken() {
  return localStorage.getItem("refreshToken");
}

export function isTokenExpired(token: string) {
  const decoded = jwtDecode<TokenPayload>(token);
  return decoded.exp * 1000 < Date.now();
}

export function removeTokens() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
}

export function getUserDataFromToken(): User | null {
  const token = getAccessToken();
  if (!token) return null;
  return jwtDecode<User>(token);
}

