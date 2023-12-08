import { SidebarHeader } from "@/components/molecules/sidebar-header";
import { SidebarContent } from "../../molecules/sidebar-content/sidebar-content";

export const Sidebar = () => {
  return (
    <aside className="hidden lg:flex lg:flex-col p-3 w-96 border-r-2">
      <SidebarHeader />
      <SidebarContent />
    </aside>
  );
};
