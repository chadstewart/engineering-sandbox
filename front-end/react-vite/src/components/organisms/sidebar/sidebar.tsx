import { SidebarHeader } from "@/components/molecules/sidebar-header/sidebar-header";
import { SidebarContentWrapper } from "@/components/molecules/sidebar-content/sidebar-content-wrapper";

const Sidebar = () => {
  return (
    <aside className="flex flex-col h-screen sticky top-0 p-3 w-96 border-r-2">
      <SidebarHeader />
      <SidebarContentWrapper />
    </aside>
  );
};

export default Sidebar;
