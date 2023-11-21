import { SidebarContent } from "./sidebar-content";

export const Sidebar = () => {
  return (
    <aside className="hidden lg:flex w-96 border-r-2">
      <nav>
        <SidebarContent />
      </nav>
    </aside>
  );
};