import { LoginContent } from "@/components/molecules/login/login-content";

const storyConfig = {
  title: "Design System/Molecules/Login"
};

const userName = "test";
const emptyFunc = async () => {};

export default storyConfig;

export const LogoStory = () => (
  <LoginContent
    userName={userName}
    handleLogin={emptyFunc}
    handleLogout={emptyFunc}
    handleSignUp={emptyFunc}
    isAuthenticated={false}
  />
);
