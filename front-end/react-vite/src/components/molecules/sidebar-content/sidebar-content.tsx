import { Nav } from "@/components/molecules/nav/nav";
import { Login } from "../login/login";
import { NavItemProps } from "@/lib/types/nav-item";

interface SidebarContentProps {
  navItems: NavItemProps[];
}

export const SidebarContent = ({ navItems }: SidebarContentProps) => {
  return (
    <>
      <Login />
      <Nav navItems={navItems} />
    </>
  );
};
