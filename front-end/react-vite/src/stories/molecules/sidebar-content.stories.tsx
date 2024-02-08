import { SidebarContent } from "@/components/molecules/sidebar-content/sidebar-content";
import { NavItemProps } from "@/lib/types/nav-item";
import { PiTestTubeFill } from "react-icons/pi";

const storyConfig = {
  title: "Design System/molecules/Sidebar Content"
};

const navItems: NavItemProps[] = [
  {
    text: "test",
    icon: PiTestTubeFill,
    iconAlt: "test"
  },
  {
    text: "test",
    icon: PiTestTubeFill,
    iconAlt: "test"
  }
];

const userName = "test";
const emptyFunc = async () => {};

const storybook = {
  handleLogin: emptyFunc,
  handleLogout: emptyFunc,
  handleSignUp: emptyFunc,
  isAuthenticated: false,
  userName
};

export default storyConfig;

export const SidebarContentStory = () => <SidebarContent navItems={navItems} storybook={storybook} />;
