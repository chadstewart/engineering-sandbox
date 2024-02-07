import { Button } from "@/components/atoms/button/button";

interface LoginProps {
  handleLogin: () => Promise<void>;
  handleLogout: () => Promise<void>;
  handleSignUp: () => Promise<void>;
  isAuthenticated: boolean;
  userName: string | undefined;
}

export const LoginContent = ({ handleLogin, handleLogout, handleSignUp, isAuthenticated, userName }: LoginProps) => {
  return (
    <div className="flex justify-between">
      <span>{!isAuthenticated && <Button onClick={handleSignUp}>Sign up</Button>}</span>
      <span>
        {!isAuthenticated && <Button onClick={handleLogin}>Login</Button>}
        {isAuthenticated && (
          <div className="flex gap-2">
            <span>Hello {userName}!</span>
            <Button onClick={handleLogout}>Logout</Button>
          </div>
        )}
      </span>
    </div>
  );
};
