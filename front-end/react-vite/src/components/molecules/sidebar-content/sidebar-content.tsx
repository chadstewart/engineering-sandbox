import { Nav } from "@/components/molecules/nav/nav";
import useMainNav from "@/lib/hooks/use-main-nav";
import { Login } from "../login/login";

export const SidebarContent = () => {
  const mainNav = useMainNav();

  return (
    <>
      <Login />
      <Nav navItems={mainNav} />
    </>
  );
};
