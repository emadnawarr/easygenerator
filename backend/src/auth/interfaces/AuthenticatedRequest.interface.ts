export interface AuthenticatedRequest extends Request {
  user: {
    userId: string;
    email: string;
    name: string;
  };
}
