import { SidebarHeader } from "@/components/molecules/sidebar-header/sidebar-header";
import { SidebarContent } from "../../molecules/sidebar-content/sidebar-content";

const Sidebar = () => {
  return (
    <aside className="flex flex-col p-3 w-96 border-r-2">
      <SidebarHeader />
      <SidebarContent />
    </aside>
  );
};

export default Sidebar;
