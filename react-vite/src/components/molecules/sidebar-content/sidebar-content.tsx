import { Nav } from "@/components/molecules/nav/nav";
import useMainNav from "@/lib/hooks/use-main-nav";

export const SidebarContent = () => {
  const mainNav = useMainNav();

  return (
    <Nav navItems={mainNav} />
  );
};