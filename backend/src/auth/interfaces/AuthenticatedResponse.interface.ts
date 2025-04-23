import { SanitizedUser } from './SanitizedUser.interface';

export interface AuthResponse {
  message: string;
  user: SanitizedUser;
  accessToken: string;
  refreshToken: string;
}
