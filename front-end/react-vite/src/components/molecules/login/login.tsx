import { useAuth0 } from "@auth0/auth0-react";
import { LoginContent } from "./login-content";

export const Login = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/profile"
      },
      authorizationParams: {
        prompt: "login"
      }
    });
  };

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/profile"
      },
      authorizationParams: {
        prompt: "login",
        screen_hint: "signup"
      }
    });
  };

  const handleLogout = async () => {
    {
      logout({
        logoutParams: {
          returnTo: window.location.origin
        }
      });
    }
  };

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
