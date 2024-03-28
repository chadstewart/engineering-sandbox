import { LoginContent } from "./login-content";
import { useAuth } from "@/lib/auth/hooks/use-auth";

export const Login = () => {
  const { isAuthenticated, handleLogin, handleSignUp, handleLogout, user } = useAuth();

  return (
    <LoginContent
      handleLogin={handleLogin}
      handleLogout={handleLogout}
      handleSignUp={handleSignUp}
      isAuthenticated={isAuthenticated}
      userName={user?.name}
    />
  );
};
