import { Nav } from "@/components/molecules/nav/nav";
import type { NavItemProps } from "@/lib/types/nav-item-props";

interface SidebarContentProps {
	navItems: NavItemProps[];
}

export const SidebarContent = ({ navItems }: SidebarContentProps) => {
	return <Nav navItems={navItems} />;
};
