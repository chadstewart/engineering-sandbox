import { Button } from "@/components/atoms/button/button";
import { useAuth0 } from "@auth0/auth0-react";

export const Login = () => {
  const { loginWithRedirect } = useAuth0();

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

  return (
    <div className="flex justify-between">
      <span>
        <Button onClick={handleSignUp}>Sign up</Button>
      </span>
      <span>
        <Button onClick={handleLogin}>Login</Button>
      </span>
    </div>
  );
};
