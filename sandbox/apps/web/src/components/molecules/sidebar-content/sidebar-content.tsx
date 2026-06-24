import { Nav } from "@/components/molecules/nav/nav";
import { Login } from "../login/login";
import { NavItemProps } from "@/lib/types/nav-item";
import { LoginContent } from "../login/login-content";

interface SidebarContentProps {
  navItems: NavItemProps[];
  storybook?: {
    handleLogin: () => Promise<void>;
    handleLogout: () => Promise<void>;
    handleSignUp: () => Promise<void>;
    isAuthenticated: boolean;
    userName: string | undefined;
  };
}

export const SidebarContent = ({ navItems, storybook }: SidebarContentProps) => {
  return (
    <>
      {storybook ? <LoginContent {...storybook} /> : <Login />}
      <Nav navItems={navItems} />
    </>
  );
};
