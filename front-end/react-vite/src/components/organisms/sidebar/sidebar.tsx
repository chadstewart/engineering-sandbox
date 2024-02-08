import { SidebarHeader } from "@/components/molecules/sidebar-header/sidebar-header";
import { SidebarContentWrapper } from "@/components/molecules/sidebar-content/sidebar-content-wrapper";
import { NavItemProps } from "@/lib/types/nav-item";
import { SidebarContent } from "@/components/molecules/sidebar-content/sidebar-content";

interface SidebarProps {
  storybook?: {
    displayLoginContent: {
      handleLogin: () => Promise<void>;
      handleLogout: () => Promise<void>;
      handleSignUp: () => Promise<void>;
      isAuthenticated: boolean;
      userName: string | undefined;
    };
    navItems: NavItemProps[];
  };
}

const Sidebar = ({ storybook }: SidebarProps) => {
  return (
    <aside className="flex flex-col h-screen sticky top-0 p-3 w-96 border-r-2">
      <SidebarHeader />
      {storybook ? (
        <SidebarContent navItems={storybook.navItems} storybook={storybook.displayLoginContent} />
      ) : (
        <SidebarContentWrapper />
      )}
    </aside>
  );
};

export default Sidebar;
