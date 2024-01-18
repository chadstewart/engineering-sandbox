import { Button } from "@/components/atoms/button/button";

export const Login = () => {
  return (
    <div className="flex justify-between">
      <span>
        <Button>Sign up</Button>
      </span>
      <span>
        <Button>Login</Button>
      </span>
    </div>
  );
};
