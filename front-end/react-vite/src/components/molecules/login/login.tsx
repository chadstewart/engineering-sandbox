import { Button } from "@/components/atoms/button/button";
import { useAuth0 } from "@auth0/auth0-react";

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
    <div className="flex justify-between">
      <span>{!isAuthenticated && <Button onClick={handleSignUp}>Sign up</Button>}</span>
      <span>
        {!isAuthenticated && <Button onClick={handleLogin}>Login</Button>}
        {isAuthenticated && (
          <div className="flex gap-2">
            <span>Hello {user?.name}!</span>
            <Button onClick={handleLogout}>Logout</Button>
          </div>
        )}
      </span>
    </div>
  );
};
