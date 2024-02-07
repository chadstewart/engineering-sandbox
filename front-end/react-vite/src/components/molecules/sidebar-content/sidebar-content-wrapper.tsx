import useMainNav from "@/lib/hooks/use-main-nav";
import { SidebarContent } from "./sidebar-content";

export const SidebarContentWrapper = () => {
  const mainNav = useMainNav();
  return <SidebarContent navItems={mainNav} />;
};
